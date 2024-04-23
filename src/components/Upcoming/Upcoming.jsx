import { useEffect, useState } from "react";
import UpcomingCard from "../../pages/Home/UpcomingCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/upcomingCamp')
        .then(res => {
            setUpcoming(res.data);
        })
    }, [axiosPublic])
    return (
        <div>
            <div className="divider mt-20 bg-grn h-1"></div>
            <h2 data-aos="fade-right" data-aos-duration="1500" className="text-4xl text-center font-bold">Upcoming Camp</h2>
            <p data-aos="fade-left" data-aos-duration="1000" className="text-xl text-center italic my-2">Wait for amazing sessions please!</p>
            {/* <div className="divider"></div> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
                {
                    upcoming.map(camp => <UpcomingCard key={camp._id} camp={camp}></UpcomingCard>)
                }
            </div>
        </div>
    );
};

export default Upcoming;