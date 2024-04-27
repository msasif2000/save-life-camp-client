import usr from "../../assets/users/usr.png"
import vol from "../../assets/users/vol.png"
import prf from "../../assets/users/prf.png"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Role = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const navigate = useNavigate();
    const handlRoleSet = (role) => {
        axiosPublic.put(`/roleSet/${user?.email}`, { role: role })
            .then((res) => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: 'Account Created!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
                        .then((res) => {
                            if (res.isConfirmed) {
                                navigate('/');
                            }
                        })
                }
            });
    }
    return (
        <div className="bg-ic1 rounded-lg p-8">
            <div className="xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto lg:px-4 px-2 text-txt2">
                <p className="text-center mb-12 mt-20 text-3xl font-bold">How would you like to use our website?</p>
                <div className="flex justify-center gap-8 mb-12">
                    <div onClick={() => handlRoleSet("user")} className="flex flex-col gap-2 bg-ic2 p-4 rounded-lg">
                        <img src={usr} alt="" className="h-40 w-40" />
                        <p className="btn bg-ic1">I am a General User</p>
                    </div>
                    <div onClick={() => handlRoleSet("professional")} className="flex flex-col gap-2 bg-ic2 p-4 rounded-lg">
                        <img src={prf} alt="" className="h-40 w-40" />
                        <p className="btn bg-ic1">I am a Professional</p>
                    </div>
                    <div onClick={() => handlRoleSet("volunteer")} className="flex flex-col gap-2 bg-ic2 p-4 rounded-lg">
                        <img src={vol} alt="" className="h-40 w-40" />
                        <p className="btn bg-ic1">I am a Volunteer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Role;