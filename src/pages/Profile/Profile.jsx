import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";



const Profile = () => {
    const {user} = useAuth();

    //console.log(user);
    const axiosSecure = useAxiosSecure();
    const [currentUser, setCurrentUser] = useState();
    axiosSecure.get(`/users/${user?.email}`)
    .then(res => {
        //console.log(res.data);
        if(res.data){
            setCurrentUser(res.data);
        }
    })
    //console.log(currentUser);


    return (
        <div className="flex flex-col items-center justify-center gap-6 pt-8 border-red-600 border-4 h-full w-full">
            <img src={currentUser?.photoURL} alt="" className="h-40 w-40"/>
            <p>Email: <span className="text-blue-700">{currentUser?.email}</span></p>
            <p>Name: <span className="italic">{currentUser?.name}</span></p>
            <p>Mobile: <span className="italic">{currentUser?.mobile}</span></p>
            <p>Address: <span className="italic">{currentUser?.address}</span></p>
            <p>Date of Birth: <span className="italic">{currentUser?.dob}</span></p>
            <div className="mb-4">
                <Link to='updateProfile'><button className="btn btn-sm bg-sky-600 text-white">Update Profile</button></Link>
            </div>
        </div>
    );
};

export default Profile;