import { BiTimeFive } from "react-icons/bi";
import { BsFilePerson } from "react-icons/bs";
import { MdTopic } from "react-icons/md";
import { Link } from "react-router-dom";


const PreviousCampCard = ({ camp }) => {
    const { _id, campName, image, date, services, audience,professionals, participants } = camp;
    return (
        <div className="flex flex-col shadow-2xl shadow-red-600 transition-all hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300">
            <img src={image} alt="" className="h-56 w-full" />
            <p className="bg-red-600 text-white absolute  px-2 mr-4 ">Participated {participants} Peoples</p>
            <div >
                <div className="">
                    <p className="font-bold text-3xl py-1 text-center">{campName}</p>
                </div>
                <div className="flex flex-col text-xl bg-sky-300 p-4 h-32">
                    <span className="font-bold text-xl text-center">Session Topic</span>
                    {services?.map((serv, index) => (<p className="flex items-center gap-1" key={index}><MdTopic /> {serv}</p>))}
                </div>
                <div className=" flex flex-col text-white  bg-red-600 p-4 h-28">
                    <span className="font-bold text-xl text-center">Guests</span>
                    {professionals?.map((person, index) => (<p className="flex items-center flex-wrap gap-1" key={index}> <BsFilePerson /> {person}</p>))}
                </div>
                <p className="bg-sky-300 flex justify-center gap-1 text-black p-2"><span>Target Audience: </span> <span className="font-bold">{audience}</span></p>

                <div className=" px-4 py-2 flex justify-between">
                    <p className="flex gap-2 items-center"><BiTimeFive className="text-red-600 text-2xl" /><span className="text-red-600 bold">{date.split('T')[0]}</span></p>
                    <Link to={`/detailsCamp/${_id}`}><button className="btn border-red-600 bg-sky-300">See Details</button></Link>
                </div>

                <div className=" ">
                                
                </div>
            </div>
        </div>
    );
};

export default PreviousCampCard;