import { FcHome } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";


const InfoGraph = () => {
    return (
        <div className="mt-16 flex justify-between">
            <div data-aos="fade-right" className="flex items-center gap-2 pl-1 border-l-8 border-b-8 rounded-lg border-grn">
                <FcBusinessman className="text-7xl" />
                <div className="flex flex-col">
                    <span className="text-xl font-bold">Qualified Professionals</span>
                    <span className="text-sm">We have professional trainers</span>
                </div>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-2 pl-2 border-l-8 border-b-8 rounded-lg border-grn">
                <FcHome className="text-7xl" />
                <div className="flex flex-col">
                    <span className="text-xl font-bold">50+ Camps</span>
                    <span className="text-sm">Already arranged 50+ camps</span>
                </div>
            </div>
            <div data-aos="fade-left" className="flex items-center gap-2 pl-1 border-l-8 border-b-8 rounded-lg border-grn">
                <FcInspection className="text-7xl" />
                <div className="flex flex-col">
                    <span className="text-xl font-bold">Doctor`s follow up</span>
                    <span className="text-sm">Doctor`s facilities</span>
                </div>
            </div>
        </div>
    );
};

export default InfoGraph;