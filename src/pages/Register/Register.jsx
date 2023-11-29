import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form';
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, googleLogin, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();

    const onSubmit = (data) => {
        //console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                //console.log(result.user)
                if (result.user) {
                    updateUserProfile(data.name, data.photoURL)
                        .then(() => {
                            const userInfo = { name: data.name, email: data.email, photoURL: data.photoURL };
                            axiosSecure.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {

                                        toast.success("Registration Successful & You're Logged in!", {
                                            position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                                        });
                                        setTimeout(() => {
                                            navigate(location.state?.from ? location.state.from : '/');
                                        }, 2000);
                                        reset();
                                    }
                                })
                        })
                }
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Email already registered! Please Login now", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                });


                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/login');
                }, 2000);
            })
    };



    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                //console.log(result.user)
                const { displayName, email, photoURL } = result.user;
                const userInfo = { name: displayName, email: email, photoURL: photoURL };
                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success("You're Logged in!", {
                                position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                            });
                        }

                    })

                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/');
                }, 2000);
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Google sign in error!", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                });

                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/login');
                }, 2000);
            })
    }


    return (
        <div>
            <div className="flex ">
                <div className="hero min-h-screen mt-4 lg:w-4/5 md:w-5/6 mx-auto">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Sign up!</h1>
                        </div>
                        <div className="card flex-shrink-2 w-full max-w-sm border-8 border-double border-y-transparent shadow-2xl shadow-red-600 border-red-600 ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Your Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered text-black" />
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered text-black" />
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered text-black" />
                                    {errors.email && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, maxLength: 20 })} placeholder="password" className="input input-bordered text-black" />
                                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be at least 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be at most 20 characters</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must contain at least one special character, one uppercase letter and at least one number</span>}

                                </div>
                                <div className="form-control mt-6">
                                    <button className="text-white py-2 rounded-xl font-bold bg-red-600">Sign Up</button>
                                </div>


                            </form>
                            <div className="flex justify-center">
                                <label className="label ">
                                    <p>Already have an Account? <Link to="/login" className="underline text-red-600 font-bold">Sign in</Link></p>
                                </label>
                            </div>
                            <div className="text-center">
                                <p>--or--</p>
                                <p>continue with</p>
                                <div onClick={handleGoogleLogin} className="flex justify-center mx-10 border-2 rounded-lg border-red-600 my-1">
                                    <p className="flex gap-2 p-2  bg-white"><FcGoogle className="text-2xl "></FcGoogle> Google</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;