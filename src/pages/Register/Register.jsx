import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import sgup from "../../assets/signup.png";


const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createUser, googleLogin, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                if (result.user) {
                    updateUserProfile(data.name, data.photoURL).then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL,
                        };
                        // console.log(userInfo);
                        axiosPublic.post('/users', userInfo)
                            .then((res) => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        title: 'Account Created!',
                                        icon: 'success',
                                        confirmButtonText: 'Ok',
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            reset();

                                        }
                                    });
                                }
                            });
                    });
                }
            })
            .catch((error) => {
                console.log(error.message);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                }).then((result) => {
                    if (result.isConfirmed) {
                        reset();
                        navigate(location.state?.from ? location.state.from : '/register');
                    }
                });
            });
    }; // Closing parenthesis for onSubmit function


    const checkRole = (email) => {
        axiosPublic.get(`/checkRole/${email}`)
            .then((res) => {
                const userRole = res.data.role;
                if (userRole) {
                    navigate(location.state?.from ? location.state.from : '/');
                } else {
                    navigate("/signUp/role");
                }
            })
            .catch((error) => {
                console.error("Error checking user role:", error);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin().then((res) => {
            const userInfo = {
                name: res.user.displayName,
                email: res.user.email,
                photoURL: res.user.photoURL,
            };

            axiosPublic.post('/users', userInfo)
                .then(() => {
                    checkRole(userInfo.email);
                });

            navigate('/')
        })
    }


    return (
        <div>
            <Helmet>
                <title>SAVE LIFE | SIGN UP</title>
            </Helmet>
            <div className="flex ">
                <div className="hero lg:w-4/5 md:w-5/6 mx-auto">
                    <div className="hero-content flex-col lg:flex-row-reverse items-center mx-auto w-full gap-6">
                        <div className="text-center p-4">
                            <h1 className="text-5xl font-bold">Sign up!</h1>
                            <img src={sgup} alt="" />
                        </div>
                        <div className="card flex-shrink-2 w-full max-w-sm border-4 border-x-y-transparent border-sl2 bg-ic1">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Your Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered border-bs3 text-black" />
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL")} placeholder="Photo URL" className="input input-bordered border-bs3 text-black" />
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered border-bs3 text-black" />
                                    {errors.email && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, maxLength: 20 })} placeholder="password" className="input input-bordered border-bs3 text-black" />
                                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be at least 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be at most 20 characters</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must contain at least one special character, one uppercase letter and at least one number</span>}

                                </div>
                                <div className="form-control mt-6">
                                    <button className="py-2 rounded-xl font-bold bg-sl2 hover:bg-sl1">Sign Up</button>
                                </div>
                            </form>
                            <div className="flex justify-center">
                                <label className="label ">
                                    <p>Already have an Account? <Link to="/login" className="underline text-txt1 font-bold">Sign in</Link></p>
                                </label>
                            </div>
                            <div className="text-center">
                                <p>--or--</p>
                                <p>continue with</p>
                                <div onClick={handleGoogleLogin} className="flex justify-center mx-auto mb-2 rounded-lg my-1">
                                    <p className="flex gap-2 p-2 bg-sl2 rounded-lg font-bold"><FcGoogle className="text-2xl "></FcGoogle> Google</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;