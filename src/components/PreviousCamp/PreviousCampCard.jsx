import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const PreviousCampCard = ({ camp }) => {
    const { _id, campName, image, participants } = camp;
    return (
        <div className="flex flex-col shadow-2xl shadow-bs3 transition-all hover:-translate-y-1 hover:scale-105  duration-300 rounded-lg bg-txt1">
            <img src={image} alt="" className="h-56 w-full rounded-lg" />
            <p className="bg-bs3 text-white absolute  px-2 mr-4 rounded-tl-lg">Participated {participants} Peoples</p>
            <div >
                <div className="">
                    <p className="font-bold text-3xl py-1 text-center text-white">{campName}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className=" px-4 py-2 flex justify-end">
                    <Link to={`/detailsCamp/${_id}`}><button className="btn border-bs3 bg-sl2 hover:bg-sl2 hover:text-black text-white"><BsFillArrowUpRightCircleFill className="text-2xl" /> Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PreviousCampCard;