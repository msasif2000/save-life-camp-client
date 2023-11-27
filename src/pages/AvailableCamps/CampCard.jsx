import { MdTopic } from "react-icons/md";
import { BsFilePerson } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const CampCard = ({ camp }) => {
    const { user } = useAuth();
    const { _id, campName, image, date, venue, services, professionals, audience, details } = camp;

    return (
        <div className="flex flex-col border-2 border-dotted border-red-600 p-4 transition-all hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-500">
            <img src={image} alt="" className="h-56 w-full object-cover" />

            <p className="font-bold text-3xl py-1">{campName}</p>
            <div className="flex flex-col flex-grow text-white bg-red-600 p-1">
                <span className="font-bold text-xl text-center">Session Topic</span>
                {services?.map((serv, index) => (
                    <p className="flex items-center gap-1" key={index}>
                        <MdTopic /> {serv}
                    </p>
                ))}
            </div>

            <div className="flex flex-col flex-grow text-xl bg-sky-300 p-1">
                <span className="font-bold text-xl text-center">Guests</span>
                {professionals?.map((person, index) => (
                    <p className="flex items-center flex-wrap gap-1" key={index}>
                        <BsFilePerson /> {person}
                    </p>
                ))}
            </div>

            <p className="bg-red-600 flex text-white p-2"><span>Target Audience: </span> <span className="font-bold">{audience}</span></p>
            <p className="bg-sky-300 p-2 flex-grow">{details}</p>

            <div className="my-2">
                <p className="flex gap-2 "><BiTimeFive className="text-red-600 text-2xl" /><span className="text-red-600 bold">{date}</span></p>
                <p className="flex gap-2 text-right justify-end"><span className="text-red-600 bold">{venue}</span><ImLocation className="text-red-600 text-2xl" /></p>
            </div>

            <div className="flex justify-between mt-auto">
                {
                    user ?
                        <>
                            <Link to={`/detailsCamp/${_id}`}><button className="btn bg-red-600 text-white">See Details</button></Link>
                            <Link to={`/joinCamp/${_id}`}><button className="btn border-red-600 bg-sky-300">Join Camp</button></Link>
                        </>
                        :
                        <>
                            <Link to='/login'><button className="btn bg-red-600 text-white">See Details</button></Link>
                            <Link to='/login'><button className="btn border-red-600 bg-sky-300">Join Camp</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default CampCard;
