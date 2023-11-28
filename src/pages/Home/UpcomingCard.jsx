import { MdTopic } from "react-icons/md";

const UpcomingCard = ({ camp }) => {
    return (
        <div>
            <div className="card">
                <div className="card-body bg-sky-200 p-4">
                    <img src={camp.image} alt="" className="h-60 w-full" />
                    <h2 className="text-2xl font-bold">{camp.campName}</h2>
                    <div className="flex flex-col text-white bg-red-600 p-1 h-28">
                        <span className="font-bold  text-center">Session Topic</span>
                        {camp.services?.map((serv, index) => (<p className="flex items-center gap-1" key={index}><MdTopic /> {serv}</p>))}
                    </div>
                    <p>Possible Date: <span className="italic font-bold ">{camp.date}</span></p>
                    <p>Venue: <span className="italic font-bold ">{camp.venue}</span></p>
                    <p>Target Audience: <span className="italic font-bold ">{camp.audience}</span></p>
                    <p>Fee: <span className="italic font-bold text-red-600">{camp.campFee} tk</span></p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;