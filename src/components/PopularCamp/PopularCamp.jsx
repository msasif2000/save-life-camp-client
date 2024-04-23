import { BiRightTopArrowCircle } from "react-icons/bi"; 

import { useEffect, useState } from "react";
import CampCard from "../../pages/AvailableCamps/CampCard";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const PopularCamp = () => {
    const axiosPublic = useAxiosPublic();

    const [camps, setCamps] = useState([]);

    useEffect(() => {
        axiosPublic.get('/popularCamp')
        .then(res => {
            setCamps(res.data);
        })
    }, [axiosPublic])


    //console.log(camps);
    return (
        <div>
            <div className="divider mt-20 bg-grn h-1"></div>
            <h2 data-aos="fade-right" data-aos-duration="1500" className="text-4xl text-center font-bold">Our Popular Camp</h2>
            <p data-aos="fade-left" data-aos-duration="1000" className="text-xl text-center italic my-2">Register your desired camp now!</p>

            {/* <div className="divider"></div> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
                {
                    camps.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                }
            </div>
            <div data-aos="zoom-in" className="flex justify-end my-8">
                <Link to='/availableCamp'><button className="btn bg-grn border-2 text-white hover:bg-second"><BiRightTopArrowCircle  className="text-2xl"/>Available Camps</button></Link>
            </div>
        </div>
    );
};

export default PopularCamp;