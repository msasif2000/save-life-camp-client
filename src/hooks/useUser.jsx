import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
   

    const { refetch, data: currentUser = [] } = useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        }
    })
    return [currentUser, refetch];
};

export default useUser;