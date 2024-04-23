import { useEffect, useState } from "react";
import PreviousCampCard from "./PreviousCampCard";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { BiRightTopArrowCircle } from "react-icons/bi";


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
            <div className="divider mt-20 bg-sl2 h-1"></div>
            <h2 data-aos="fade-right" data-aos-duration="1500" className="text-4xl text-center font-bold mt-8">Our Previous Camp</h2>
            <p data-aos="fade-left" data-aos-duration="1500" className="text-xl text-center italic my-2">Click on the details button to see details about our efficient works!</p>
            {/* <div className="divider"></div> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
                {
                    camps.map(camp => <PreviousCampCard key={camp._id} camp={camp}></PreviousCampCard>)
                }
            </div>
            <div data-aos="zoom-in" className="flex justify-end my-8">
                <Link to='/availableCamp'><button className="btn bg-sl2 border-2 text-txt2 hover:bg-sl1 font-bold"><BiRightTopArrowCircle className="text-2xl" />Available Camps</button></Link>
            </div>
        </div>
    );
};
export default PreviousCamp;