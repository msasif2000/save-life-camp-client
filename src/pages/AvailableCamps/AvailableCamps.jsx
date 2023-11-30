import CampCard from "./CampCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";


const AvailableCamps = () => {


    const axiosSecure = useAxiosSecure();
    const { data: camps = [], refetch } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosSecure.get('/camp');
            return res.data;
        }
    })
    refetch();
    
    return (
        <div className="lg:px-0 md:px-2 px-1">
            <Helmet>
                <title>SAVE LIFE | CAMPS</title>
            </Helmet>
            <h2 className="text-3xl mt-4 text-center">These are our scheduled campaign</h2>
            <p className="mt-4 text-center">You must register and pay to join with us. </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-12">
                {
                    camps.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                }
            </div>
        </div>
    );
};

export default AvailableCamps;