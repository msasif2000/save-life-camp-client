import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useState } from "react";


const usePaidCamp = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const [currentUser, setCurrentUser] = useState();

   axiosSecure.get(`/users/${user.email}`)
        .then(res => {
            //console.log(res.data);
            if (res.data) {
                setCurrentUser(res.data);
            }
        })

        const id = currentUser?._id;
    //tanstack query
    const { refetch, data: paidCamps =[] } = useQuery({
        queryKey: ['paidCamps', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paidCamp/${id}`);
            return res.data;
        }
    })
    return [paidCamps, refetch];
};

export default usePaidCamp;