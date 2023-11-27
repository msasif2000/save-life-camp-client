import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCamp = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    //tanstack query
    const { refetch, data: camps = [] } = useQuery({
        queryKey: ['camps', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/camp`);
            return res.data;
        }
    })
    return [camps, refetch];
};

export default useCamp;