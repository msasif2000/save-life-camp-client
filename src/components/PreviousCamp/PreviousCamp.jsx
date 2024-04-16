import { useEffect, useState } from "react";
import PreviousCampCard from "./PreviousCampCard";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const PreviousCamp = () => {
    const axiosPublic = useAxiosPublic()

    const [camps, setCamps] = useState([]);
    useEffect(() => {
        axiosPublic.get('/previousCamp')
        .then(res => {
            setCamps(res.data);
        })
    }, [axiosPublic])


    //console.log(camps);
    return (
        <div>
             <div className="divider mt-12 shadow-xl shadow-red-600 "></div>
            <h2 className="text-4xl text-center font-bold">Our Previous Camp</h2>
            <p className="text-xl text-center italic my-2">Click on the details button to see details about our efficient works!</p>
            <div className="divider"></div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                {
                    camps.map(camp => <PreviousCampCard key={camp._id} camp={camp}></PreviousCampCard>)
                }
            </div>
            <div className="flex justify-center my-4">
                <Link to='/availableCamp'><button className="btn btn-sm bg-slate-200 text-red-600 border-2 border-red-600">See Available Camps</button></Link>
            </div>
        </div>
    );
};
export default PreviousCamp;