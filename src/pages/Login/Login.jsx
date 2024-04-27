import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
import login from "../../assets/login.png"

const Login = () => {
    const { googleLogin, userLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();
    // const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password);
        Swal.fire({
            title: 'Login Successful!',
            icon: 'success',
        })
        setTimeout(() => {
            navigate(location.state?.from ? location.state.from : '/');
        }, 2000);
    }

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
                name: res.user?.displayName,
                email: res.user?.email,
                photoURL: res.user?.photoURL,
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
                <title>SAVE LIFE | LOGIN</title>
            </Helmet>
            <div className="">
                <div className="hero lg:w-4/5 md:w-5/6 mx-auto">
                    <div className="hero-content flex-col lg:flex-row-reverse items-center mx-auto w-full gap-6">
                        <div className="text-center p-4">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <img src={login} alt="" className="" />
                        </div>
                        <div className="card flex-shrink-2 w-full max-w-sm border-4 border-x-y-transparent border-sl2 pb-4 bg-ic1">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered border-bs3" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered border-bs3" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className={`btn btn-sm py-2 rounded-xl font-bold bg-sl2 hover:bg-sl1`} type="submit" value="Sign in" />
                                </div>
                            </form>
                            <div className="flex justify-center">
                                <label className="label">
                                    <p>Don`t have an Account? <Link to="/register" className="underline text-txt1 font-bold">Sign Up</Link></p>
                                </label>
                            </div>
                            <div className="text-center">
                                <p>--or--</p>
                                <p>continue with</p>
                            </div>
                            <div onClick={handleGoogleLogin} className="flex justify-center mx-auto mb-2 border-2 rounded-lg border-sl2 my-1">
                                <p className="flex gap-2 p-2  bg-white"><FcGoogle className="text-2xl "></FcGoogle> Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;