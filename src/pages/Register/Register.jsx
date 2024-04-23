import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import sgup from "../../assets/signup.png";


const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createUser, googleLogin, updateUserProfile, userLogout } = useAuth();
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
                        axiosPublic.post('/users', userInfo).then((res) => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    title: 'Account Created!',
                                    text: 'You are Logged in',
                                    icon: 'success',
                                    confirmButtonText: 'Ok',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        reset();
                                        navigate(
                                            location.state?.from ? location.state.from : '/dashboard'
                                        );
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
                        navigate(location.state?.from ? location.state.from : '/login');
                    }
                });
            });
    }; // Closing parenthesis for onSubmit function

    const [selectedRole, setSelectedRole] = useState(null);

    const handleRoleSelection = async () => {
        const { value: role } = await Swal.fire({
            title: 'Select Your Role',
            input: 'select',
            inputOptions: {
                'admin': 'Admin',
                'user': 'User',
                'professional': 'Professional',
            },
            inputPlaceholder: 'Select your role',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Role cannot be empty';
                }
            },
        });

        if (role) {
            setSelectedRole(role.toLowerCase());
        }
    };

    const handleGoogleLogin = async () => {
        // Prompt the user to select a role
        await handleRoleSelection();

        if (selectedRole) {
            // Continue with Google login
            googleLogin()
                .then((result) => {
                    const { displayName, email, photoURL } = result.user;
                    // Check if the user with the provided email and role exists in the database
                    axiosPublic.get(`/usersLogin?email=${email}&role=${selectedRole}`)
                        .then(res => {
                            if (res.data) {
                                // User with matching email and role found, proceed with login
                                const userInfo = { name: displayName, email, photoURL, role: selectedRole };
                                axiosPublic.post('/users', userInfo).then((res) => {
                                    if (res.data.insertedId) {
                                        Swal.fire({
                                            title: 'Login  Successful!',
                                            text: 'You are Logged in',
                                            icon: 'success',
                                            confirmButtonText: 'Ok',
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                navigate(
                                                    location.state?.from ? location.state.from : '/dashboard'
                                                );
                                            }
                                        });
                                    }
                                });

                                navigate(location.state?.from ? location.state.from : '/dashboard');
                            } else {
                                const userInfo = { name: displayName, email, photoURL, role: 'user' };
                                axiosPublic.post('/users', userInfo)
                                    .then((res) => {
                                        console.log(
                                            res.data
                                        );
                                        if (res.data.insertedId) {
                                            Swal.fire({
                                                title: 'Account Created!',
                                                text: 'You are Logged in',
                                                icon: 'success',
                                                confirmButtonText: 'Ok',
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    navigate(
                                                        location.state?.from ? location.state.from : '/dashboard'
                                                    );
                                                }
                                            });
                                        }
                                        else {
                                            userLogout();
                                            // User with matching email and role not found, display error
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Error!',
                                                text: 'User with the provided email and role not found!',
                                                confirmButtonText: 'Ok',
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    navigate(location.state?.from ? location.state.from : '/login');
                                                }
                                            });
                                        }
                                    })
                            }
                        })
                        .catch(() => {
                            // Handle database error
                            const userInfo = { name: displayName, email, photoURL, role: selectedRole };
                            axiosPublic.post('/users', userInfo)
                                .then((res) => {
                                    if (res.data.insertedId) {
                                        Swal.fire({
                                            title: 'Account Created!',
                                            text: 'You are Logged in',
                                            icon: 'success',
                                            confirmButtonText: 'Ok',
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                navigate(
                                                    location.state?.from ? location.state.from : '/dashboard'
                                                );
                                            }
                                        });
                                    }
                                });

                            navigate(location.state?.from ? location.state.from : '/dashboard');
                        });
                })
                .catch((error) => {
                    // Handle Google login error
                    console.log(error.message);
                    Swal.fire({
                        title: 'Error!',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'Ok',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate(location.state?.from ? location.state.from : '/login');
                        }
                    });
                });
        } else {
            // Handle if the user cancels the role selection
            console.log('Role selection canceled');
        }
    };



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
                        <div className="card flex-shrink-2 w-full max-w-sm border-8 border-double border-x-y-transparent border-sl2">
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
                                    <input type="text" {...register("photoURL")} placeholder="Photo URL" className="input input-bordered text-black" />
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
                                    <button className="py-2 rounded-xl font-bold bg-sl2">Sign Up</button>
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