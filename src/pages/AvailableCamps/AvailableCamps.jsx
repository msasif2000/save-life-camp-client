import { useState } from "react";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import CampCard from "./CampCard";


const AvailableCamps = () => {

    const [camps, setCamps] = useState([]);

    axiosSecure('/camp')
        .then(res => {
            //console.log(res.data);
            setCamps(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
            {
                camps.map(camp => <CampCard key={camps._id} camp={camp}></CampCard>)
            }
        </div>
    );
};

export default AvailableCamps;