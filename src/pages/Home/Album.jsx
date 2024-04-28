import i1 from "../../assets/album/i1.jpg";
import i2 from "../../assets/album/i2.jpg";
import i3 from "../../assets/album/i3.jpg";
import i4 from "../../assets/album/i4.jpg";

const Album = () => {
    return (
        <div>
            <div className="divider mt-20 bg-sl2 h-1"></div>
            <div className="flex gap-12 items-center">
                <div className="w-1/4 flex flex-col text-left">
                    <h2 data-aos="fade-down" data-aos-duration="1500" className="text-4xl font-bold mt-8">Album</h2>
                    <p data-aos="fade-up" data-aos-duration="1500" className="text-xl italic my-2">Lead your life as a healthy person!</p>
                </div>
                <div className="columns-3xs w-3/4 ">
                    <img data-aos="fade-right" data-aos-duration="1500" className="w-full aspect-video p-2 rounded-lg " src={i1} />
                    <img data-aos="fade-up" data-aos-duration="1500" className="w-full aspect-square p-2 rounded-lg " src={i3} />
                    <img data-aos="fade-down" data-aos-duration="1500" className="w-full aspect-square p-2 rounded-lg " src={i2} />
                    <img data-aos="fade-left" data-aos-duration="1500" className="w-full aspect-video p-2 rounded-lg " src={i4} />
                </div>
            </div>
        </div>
    );
};

export default Album;