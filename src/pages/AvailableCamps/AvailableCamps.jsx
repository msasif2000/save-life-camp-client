import { useState } from "react";

import CampCard from "./CampCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AvailableCamps = () => {

    const [camps, setCamps] = useState([]);

    const axiosSecure = useAxiosSecure();
    axiosSecure.get('/camp')
        .then(res => {
            //console.log(res.data);
            setCamps(res.data);
        })
        .catch(() => {
         //   console.log(err);
        })
//console.log(camps);
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-16">
            {
                camps.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
            }
        </div>
    );
};

export default AvailableCamps;