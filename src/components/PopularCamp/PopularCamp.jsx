
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CampCard from "../../pages/AvailableCamps/CampCard";
import { Link } from "react-router-dom";


const PopularCamp = () => {
    const axiosSecure = useAxiosSecure();

    const [camps, setCamps] = useState([]);
    axiosSecure.get('/popularCamp')
        .then(res => {
            setCamps(res.data);
        })


    //console.log(camps);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-12">Our Popular Camp</h2>
            <p className="text-xl text-center italic my-2">Register your desired camp now!</p>
            <div className="divider bg-red-600"></div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                {
                    camps.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                }
            </div>
            <div className="flex justify-center my-4">
                <Link to='/availableCamp'><button className="btn btn-sm bg-slate-200 text-red-600 border-2 border-red-600">See Available Camps</button></Link>
            </div>
        </div>
    );
};

export default PopularCamp;