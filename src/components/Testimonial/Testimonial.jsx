import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/reviews')
        .then(res => {
            setReviews(res.data);

        })
    }, [axiosPublic])
    //console.log(reviews);
    return (
        <div>
            <div className="divider mt-20 bg-grn h-1"></div>
            <h2 data-aos="fade-right" className="text-4xl text-center font-bold">Testimonials </h2>
            <p data-aos="fade-left" className="text-xl text-center italic my-2">What our beautiful participants saying about SAVE LIFE MEDICAL CAMP!</p>
            {/* <div className="divider"></div> */}
            <div className="bg-prime mt-16 p-16 rounded-lg">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id} >
                            <div className="text-center flex flex-col justify-center items-center gap-6">
                                <div>
                                    <p>Camp Name: <span className="font-bold">{review.campName}</span></p>
                                    <p>Venue: <span className="font-bold">{review.venue}</span></p>
                                    <p>Date: <span className="font-bold">{review.date.split('T')[0]}</span></p>
                                </div>
                                <p className="lg:mx-20 md:mx-12 mx-2 text-xl font-bold">{review.feedback}</p>
                                <p className=" flex items-center gap-2 text-xl font-semibold">
                                    <img src={review.userImg} alt="" className="h-16 rounded-full" />
                                    <span>Name: </span><span className="text-grn text-2xl">{review.name}</span></p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;