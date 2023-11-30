
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";


const UpdateProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();

const [currentUser, refetch] = useUser();
    //console.log(user);
    const axiosSecure = useAxiosSecure();


    const handleUpdateProfile = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const image = form.image.value;
        const dob = form.dob.value;
        const mobile = form.mobile.value;

        const updatedUser = { name, email, address, photoURL: image, dob, mobile };
        
        axiosSecure.patch(`/users/${currentUser._id}`, updatedUser)
            .then(res => {
                if (res.data) {
                    toast.success("Profile Updated Successfully!", {
                        position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                    });
                    refetch();
                    setTimeout(() => {
                        navigate(location.state?.from ? location.state.from : '/dashboard');
                    }, 2000);
                }
            })

    }
    return (
        <div>
            <div className="md-container mx-auto">
                <div className="lg:p-12 md:p-6 p-4 space-y-6">
                    <h2 className="font-rancho text-4xl text-center">Update My Profile</h2>
                    <form onSubmit={handleUpdateProfile} className="font-raleway ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <label className="">
                                <input  type="text" name="name" defaultValue={currentUser?.name} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <label className="">
                                <input  type="email" name="email" defaultValue={currentUser?.email} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Address</span>
                            </label>
                            <label className="">
                                <input type="text" name="address" defaultValue={currentUser?.address} placeholder="Enter Your Address" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Image link</span>
                            </label>
                            <label className="">
                                <input  type="photoURL" name="image" defaultValue={currentUser?.photoURL} className="input input-bordered w-full " />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Date of Birth</span>
                            </label>
                            <label className="">
                                <input  type="date" name="dob" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Mobile no</span>
                            </label>
                            <label className="">
                                <input type="text" name="mobile" defaultValue={currentUser?.mobile} placeholder="+880" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <input type="submit" value="Update Profile" className="w-full mt-6 bg-sky-300  border-black border-double border-4 text-center p-2 text-2xl" />
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;