import { MdTopic } from "react-icons/md";
import { BsFilePerson } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const CampCard = ({ camp }) => {
    const { user } = useAuth();
    const { _id, campName, image, date, campFee, venue, services, professionals, audience,  participants } = camp;

    //console.log(_id);
    //const today = new Date();

    return (
        <div className="flex flex-col shadow-md shadow-red-600 p-4 transition-all hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300">
            <img src={image} alt="" className="h-56 w-full" />
            <p className="bg-red-600 text-white absolute  px-2 mr-4 ">Joined {participants} Peoples</p>
            <div >
                <div className="flex items-center justify-between">
                    <p className="font-bold text-3xl py-1">{campName}</p>
                    <p className="bg-green-400 p-1 rounded text-red-800 font-bold">{campFee} tk</p>
                </div>
                <div className="flex flex-col text-white bg-red-600 p-1 h-28">
                    <span className="font-bold text-xl text-center">Session Topic</span>
                    {services?.map((serv, index) => (<p className="flex items-center gap-1" key={index}><MdTopic /> {serv}</p>))}
                </div>

                <div className="flex flex-col text-xl bg-sky-300 p-1 h-32">
                    <span className="font-bold text-xl text-center">Guests</span>
                    {professionals?.map((person, index) => (<p className="flex items-center flex-wrap gap-1" key={index}> <BsFilePerson /> {person}</p>))}
                </div>

                <p className="bg-red-600 flex gap-1 text-white p-2"><span>Target Audience: </span> <span className="font-bold">{audience}</span></p>

                <div className=" my-2">
                    <p className="flex gap-2 items-center"><BiTimeFive className="text-red-600 text-2xl" /><span className="text-red-600 bold">{ date.split('T')[0]} <br />
                                    {date.split('T')[1].split('.')[0]}</span></p>
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
                    {/* {
                        user ?
                            <>
                                <Link to={`/detailsCamp/${_id}`}><button className="btn bg-red-600 text-white">See Details</button></Link>
                                {
                                    today > new Date(date) ?
                                        ''
                                        :
                                        <Link to={`/joinCamp/${_id}`}><button className="btn border-red-600 bg-sky-300">Join Camp</button></Link>
                                }
                            </>
                            :
                            <>
                                <Link to='/login'><button className="btn bg-red-600 text-white">See Details</button></Link>
                                <Link to='/login'><button className="btn border-red-600 bg-sky-300">Join Camp</button></Link>
                            </>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default CampCard;
