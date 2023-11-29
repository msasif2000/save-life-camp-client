import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useForm } from 'react-hook-form';
import { BiTimeFive } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const CampRegistration = () => {
    const { register, handleSubmit, reset,  formState: { errors }, } = useForm();
    const axiosSecure = useAxiosSecure();
    const camp = useLoaderData().data;
    const { _id, campName, image, campFee, date, venue } = camp;
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    // console.log(user.email);
    //const { displayName, email, photoURL } = user?.user;

    const onSubmit = (data) => {
        if (user && user.email) {
            const participant = { campId: _id, ...data,campName: campName, campImg: image, campFee: campFee, date, venue };
            //console.log(participant);
            axiosSecure.post('/participants', participant)
                .then(res => {
                    ///console.log(res);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${campName} Registration Successful!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        reset();

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
    };

    return (
        <div>
            <div className="flex ">
                <div className="hero min-h-screen mt-4 lg:w-4/5 md:w-5/6 mx-auto">
                    <div className="hero-content  w-full">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold my-6">Registration for <span className="text-red-600">{campName}</span> Camp</h1>
                            <img src={image} alt="" className="h-[350px] w-full shadow-red-600 shadow-2xl" />
                            <p className="text-xl my-4 font-bold">Camp Fee: <span className="text-red-600">{campFee} tk</span> only</p>
                            <p className="flex gap-1 justify-center"><BiTimeFive className="text-red-600 text-2xl" /> {date}</p>
                            <p className="flex gap-1 justify-center"><ImLocation className="text-red-600 text-2xl" /> {venue}</p>
                            <p></p>
                        </div>
                        <div className="card flex-shrink-2 w-full max-w-sm border-8 border-double  shadow-2xl shadow-red-600 border-red-600 ">
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
                                        <span className="label-text font-bold">Gender</span>
                                    </label>
                                    <div className="flex items-center gap-4 ml-2">
                                        <label>
                                            <input  type="radio"  {...register("gender", { required: true })} value="male"  className="mr-2" />
                                            Male
                                        </label>
                                        <label>
                                            <input    type="radio" {...register("gender", { required: true })} value="female" className="mr-2"/>
                                            Female
                                        </label>
                                        <label>
                                            <input type="radio" {...register("gender", { required: true })} value="child"  className="mr-2"/>
                                            Child
                                        </label>
                                    </div>
                                    {errors.gender && <span className="text-red-600">Please select a gender</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered text-black" />
                                    {errors.email && <span className="text-red-600">This field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Contact Cell</span>
                                    </label>
                                    <input type="text"  {...register("mobile", { required: true })} placeholder="Your mobile no" className="input input-bordered text-black" />
                                    {errors.mobile && <span className="text-red-600">This field is required</span>}
                                </div>

                                <div className="form-control mt-6">
                                    <input className={`btn btn-sm text-white py-2 rounded-xl font-bold bg-red-600 `} type="submit" value="Register Camp" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampRegistration;