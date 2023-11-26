import { MdTopic } from "react-icons/md";
import { BsFilePerson } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";


const CampCard = ({ camp }) => {
    const { campName, image, date, venue, services, professionals, audience, details } = camp;
    return (
        <div className="border-2 border-dotted border-red-600 p-4 transition-all  hover:-translate-y-1 hover:scale-110 hover:bg-slate-50 duration-500 ">
            <img src={image} alt="" className="h-56 w-full" />

            <p className="font-bold text-2xl py-1">{campName}</p>
            <p className="flex flex-col text-white bg-red-600  p-1">
                <span className="text-bold text-xl text-center">Session Topic</span>
                {
                    services?.map((serv, index) => <p className="flex items-center gap-1" key={index}><MdTopic /> {serv}</p>)
                }
            </p>

            <p className="flex flex-col text-xl bg-sky-300  p-1 my-2 rounded">
                <span className="text-bold text-xl text-center">Guests</span>
                {
                    professionals?.map((person, index) => <p className="flex items-center gap-1" key={index}><BsFilePerson />  {person}</p>)
                }
            </p>

            <p className="bg-red-600 my-2 text-white p-2">Target Audience: <span className="font-bold">{audience}</span></p>
            <p className="bg-sky-300 rounded p-2 h-[220px]">{details}</p>
            <div className="my-2">
                <p className="flex gap-2 "><BiTimeFive className="text-red-600 text-2xl" /><span className="text-red-600 bold">{date}</span></p>
                <p className="flex gap-2 text-right justify-end"><span className="text-red-600 bold">{venue}</span><ImLocation className="text-red-600 text-2xl" /></p>
            </div>
            <div className="flex justify-between">
                <button className="btn bg-red-600 text-white">See Details</button>
                <button className="btn border-red-600 ">Join Camp</button>
            </div>
        </div>
    );
};

export default CampCard;