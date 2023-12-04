import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePaidCamp = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    //console.log(user?.email);
    //tanstack query
    const { refetch, data: paidCamps =[] } = useQuery({
        queryKey: ['paidCamps', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paidCamp/${user.email}`);
            return res.data;
        }
    })
    return [paidCamps, refetch];
};

export default usePaidCamp;