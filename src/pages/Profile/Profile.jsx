import useAuth from "../../hooks/useAuth";


const Profile = () => {
    const {user } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center gap-6 pt-20 border-red-600 border-4 h-full w-full">
            <img src={user.photoURL} alt="" />
            <p>{user.email}</p>
            <p>{user.displayName}</p>
        </div>
    );
};

export default Profile;