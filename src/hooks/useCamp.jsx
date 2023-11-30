
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCamp = () => {
    const axiosSecure = useAxiosSecure();

    //tanstack query
    const { refetch, data: camps = [] } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosSecure.get('/camp');
            return res.data;
        }
    })
    return [camps, refetch];
};

export default useCamp;