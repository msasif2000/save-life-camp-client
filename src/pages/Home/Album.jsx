import i1 from "../../assets/album/i1.jpg";
import i2 from "../../assets/album/i2.jpg";
import i3 from "../../assets/album/i3.jpg";
import i4 from "../../assets/album/i4.jpg";

const Album = () => {
    return (
        <div className="md:px-2 xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto lg:px-0 px-2">
            <div className="divider mt-20 bg-sl2 h-1"></div>
            <div className="flex gap-12 items-center justify-between mx-auto pt-16">
                <div className="w-1/4 flex flex-col text-left">
                    <h2 data-aos="fade-down" data-aos-duration="1500" className="text-4xl font-bold mt-8">Album</h2>
                    <p data-aos="fade-up" data-aos-duration="1500" className="text-xl italic my-2">Lead your life as a healthy person!</p>
                </div>
                <div className=" w-3/4 flex justify-end xl:pl-28">
                    <div className="columns-3xs">
                        <img data-aos="fade-right" data-aos-duration="2000" src={i1} className="w-full aspect-video p-2 rounded-lg " />
                        <img data-aos="fade-up" data-aos-duration="2000" src={i3} className="w-full aspect-square p-2 rounded-lg " />
                        <img data-aos="fade-down" data-aos-duration="2000" src={i2} className="w-full aspect-square p-2 rounded-lg " />
                        <img data-aos="fade-left" data-aos-duration="2000" src={i4} className="w-full aspect-video p-2 rounded-lg " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Album;