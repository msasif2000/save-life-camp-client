import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import usePaidCamp from "../../hooks/usePaidCamp";
import useAdmin from "../../hooks/useAdmin";



const Profile = () => {
    const [isAdmin] = useAdmin();
    const { user } = useAuth();
    const [paidCamps] = usePaidCamp();
    //console.log(user);
    const axiosSecure = useAxiosSecure();
    const [currentUser, setCurrentUser] = useState();
    axiosSecure.get(`/users/${user?.email}`)
        .then(res => {
            //console.log(res.data);
            if (res.data) {
                setCurrentUser(res.data);
            }
        })
    //console.log(currentUser);


    return (
        <div className="flex flex-col items-center justify-center gap-6  h-full w-full pb-6">
            {
                isAdmin ?
                    <h1 className="text-3xl text-center font-bold">Admin Profile</h1>
                    :
                    <h2 className="mt-4 text-2xl">  WELCOME <span className="text-blue-600">{currentUser?.name}</span> to your PROFILE</h2>
            }
            <img src={currentUser?.photoURL} alt="" className="h-40 w-40 border-2 shadow-red-400 shadow-xl" />
            <p>Email: <span className="text-blue-700">{currentUser?.email}</span></p>
            <p>Name: <span>{currentUser?.name}</span></p>
            <div className="md:flex gap-6">
                <div className="space-y-2 text-xl">
                    <p>Mobile: <span className="italic">{currentUser?.mobile}</span></p>
                    <p>Address: <span className="italic">{currentUser?.address}</span></p>
                    <p>Date of Birth: <span className="italic">{currentUser?.dob}</span></p>
                    {
                        isAdmin ?
                            ''
                            :
                            <div className="mb-4">
                                <Link to='updateProfile'><button className="btn btn-sm bg-sky-600 text-white">Update Profile</button></Link>
                            </div>
                    }
                </div>
                {
                    isAdmin ?
                        <>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </>
                        :
                        <div className="bg-sky-200 p-8 rounded">
                            <div>
                                <h2>Total sessions I have participated</h2>
                                <p>{paidCamps.length}</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Profile;