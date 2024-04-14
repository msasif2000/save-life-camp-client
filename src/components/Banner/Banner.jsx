import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import b1 from '../../assets/banner/b1.jpg'
import b2 from '../../assets/banner/b2.jpg';
import b3 from '../../assets/banner/b3.jpg';
import b4 from '../../assets/banner/b4.jpg';
import b5 from '../../assets/banner/b5.jpg';

const Banner = () => {
    return (
        <Carousel autoPlay={true} axis={"vertical"} dynamicHeight={400} showThumbs={false} infiniteLoop={true} interval={3000} className="w-full mt-4 text-center mx-auto rounded-lg md:rounded-none">
            <div>
                <img src={b1} className="w-full 2xl:h-[600px] xl:h-[500px] md:h-[450px] h-[280px]"/>
            </div>
            <div>
                <img src={b2} className="w-full 2xl:h-[600px] xl:h-[500px] md:h-[450px] h-[280px]"/>
            </div>
            <div>
                <img src={b3} className="w-full 2xl:h-[600px] xl:h-[500px] md:h-[450px] h-[280px]"/>
            </div>
            <div>
                <img src={b4} className="w-full 2xl:h-[600px] xl:h-[500px] md:h-[450px] h-[280px]"/>
            </div>
            <div>
                <img src={b5} className="w-full 2xl:h-[600px] xl:h-[500px] md:h-[450px] h-[280px]"/>
            </div>
        </Carousel>
    );
};

export default Banner;