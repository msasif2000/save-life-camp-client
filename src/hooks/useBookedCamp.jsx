import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBookedCamp = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    //tanstack query
    const { refetch, data: bookings =[] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/joinedCamp?email=${user.email}`);
            return res.data;
        }
    })
    return [bookings, refetch];
};

export default useBookedCamp;