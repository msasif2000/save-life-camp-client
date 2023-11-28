import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UpcomingCard from "../../pages/Home/UpcomingCard";


const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([]);
    const axiosSecure = useAxiosSecure();

    axiosSecure.get('/upcomingCamp')
        .then(res => {
            setUpcoming(res.data);
        })
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-12">Upcoming Camp</h2>
            <p className="text-xl text-center italic my-2">Wait for amazing sessions please!</p>
            <div className="divider bg-red-600"></div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-4">
                {
                    upcoming.map(camp => <UpcomingCard key={camp._id} camp={camp}></UpcomingCard>)
                }
            </div>
        </div>
    );
};

export default Upcoming;