import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddReview = () => {
    const { id } = useParams();
    //console.log(id);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { data: camps = [], refetch } = useQuery({
        queryKey: ['camps', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/joinCamp/${id}`);
            return res.data;
        }
    })

    //console.log(camps);

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = e => {

        if (user && user.email) {
            const review = {
                campId: id,
                ...e,
                userImg: user.photoURL,
                email: camps.email,
                campName: camps.campName,
                image: camps.image,
                venue: camps.venue,
                date: camps.date,
            }
           // console.log(review);
            axiosSecure.post('/reviews', review)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Review Added Successfully!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //console.log(res.data);
                        reset();
                        refetch();
                        navigate('/dashboard/joinedCamp');
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });

        }
    }
    return (
        <div className="flex justify-center md:mt-20">

            <div className="card flex-shrink-2 w-full max-w-sm border-8 border-double  shadow-2xl shadow-red-600 border-red-600 ">
                <h2 className="text-center text-2xl "><span>Camp Name: </span><span className="font-bold">{camps.campName}</span></h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered text-black" />
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Write Your Feedback here</span>
                        </label>
                        <input type="text"  {...register("feedback", { required: true })} placeholder="Feedback" className="input input-bordered text-black" />
                        {errors.feedback && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="form-control mt-6">
                        <input className={`btn btn-sm text-white py-2 rounded-xl font-bold bg-red-600 `} type="submit" value="Submit Feedback" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;