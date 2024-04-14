import { FcPodiumWithAudience } from "react-icons/fc";
import { MdTopic } from "react-icons/md";
// import { BsFilePerson } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const CampCard = ({ camp }) => {
    const { user } = useAuth();
    const { _id, campName, image, date, campFee, venue, services, audience, participants } = camp;

    //console.log(_id);
    const [currentUser] = useUser();
    const role = currentUser?.role;
    const today = new Date();

    return (
        <div className="flex relative flex-col shadow-lg  transition-all hover:-translate-y-1 hover:scale-105 bg-slate-100 hover:bg-slate-300 duration-300 rounded-br-3xl rounded-tl-3xl">
            <img src={image} alt="" className="h-56 w-full rounded-tl-3xl" />
            <p className="bg-third text-second absolute  px-2 mr-4 rounded-tl-3xl">Joined {participants} Peoples</p>
            <div className="flex items-center justify-between py-1">
                <p className="font-bold lg:text-3xl text-2xl  py-1 pl-2">{campName}</p>
                <p className="bg-second p-1 rounded text-white font-bold mr-1 flex">{campFee} <span>tk</span></p>
            </div>
            <div className="flex flex-col px-4">
                {services?.map((serv, index) => (<p className="flex items-center gap-1" key={index}><MdTopic /> {serv}</p>))}
            </div>

            {/* <div className="flex flex-col text-xl bg-sky-300 px-4 h-32">
                    <span className="font-bold text-xl text-center">Guests</span>
                    {professionals?.map((person, index) => (<p className="flex items-center flex-wrap gap-1" key={index}> <BsFilePerson /> {person}</p>))}
                </div> */}

            <p className="flex items-center gap-1  px-2 text-center"><span><FcPodiumWithAudience className="text-2xl" /></span> <span className="font-bold">{audience}</span></p>

            <div className="mb-8 mx-2">
                <p className="flex gap-2 items-center pr-4"><BiTimeFive className="text-2xl" /><span className="">{date.split('T')[0]},
                    {date.split('T')[1].split('.')[0]}</span></p>
                <p className="flex gap-2 text-right justify-end"><span className=" bold">{venue}</span><ImLocation className="text-2xl" /></p>
            </div>

            <div className="absolute -bottom-4 left-0 right-0">
                <div className="flex justify-between">
                    {
                        user && role === 'admin' ? (
                            <Link to={`/detailsCamp/${_id}`}><button className="p-2 border-l-4 border-second rounded-br-lg rounded-tl-lg bg-prime text-white font-bold">See Details</button></Link>
                        ) : (
                            <>
                                <Link to={`/detailsCamp/${_id}`}><button className="p-2 border-l-4 border-second rounded-br-lg rounded-tl-lg bg-prime text-white font-bold">See Details</button></Link>
                                {
                                    today > new Date(date) ? null : (
                                        <Link to={`/joinCamp/${_id}`}><button className="p-2 border-r-4 border-prime rounded-br-lg rounded-tl-lg bg-third font-bold mr-5">Join Camp</button></Link>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default CampCard;
