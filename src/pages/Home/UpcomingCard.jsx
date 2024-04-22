import { BiTimeFive } from "react-icons/bi";
import { FcPodiumWithAudience } from "react-icons/fc";
import { ImLocation } from "react-icons/im";
import { MdTopic } from "react-icons/md";

const UpcomingCard = ({ camp }) => {
    return (
        <div>
            <div className="bg-prime rounded-b-xl text-grn">
                <img data-aos="fade-right" src={camp.image} alt="" className="h-60 w-full" />
                <div data-aos="fade-left" className="h-full flex flex-col transition-all hover:-translate-y-1 hover:scale-105 duration-300">
                    <h2 className="text-2xl 2xl:text-3xl font-bold pl-2">{camp.campName}</h2>
                    <div className="py-1 px-4">
                        {camp.services?.map((serv, index) => (<p className="flex items-center gap-1" key={index}><MdTopic /> {serv}</p>))}
                    </div>
                    <p className="flex gap-2 pl-2 items-center"><BiTimeFive className="text-2xl"/><span className="italic font-bold ">{camp.date.split('T')[0]},
                        {camp.date.split('T')[1].split('.')[0]}</span></p>
                    <p className="pl-2 flex items-center gap-2"><FcPodiumWithAudience className="text-2xl"/><span className="italic font-bold ">{camp.audience}</span></p>
                    <div className="bg-grn border-t rounded-b-xl p-2 text-white text-sm">
                        <p className="flex items-center gap-2"><ImLocation className="text-2xl"/><span className="italic font-bold ">{camp.venue}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;