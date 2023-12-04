
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCamp = () => {
    const axiosSecure = useAxiosSecure();

    //tanstack query
    const { refetch, data: camps = [] } = useQuery({
        queryKey: ['manageCamp'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manageCamp');
            return res.data;
        }
    })
    return [camps, refetch];
};

export default useCamp;