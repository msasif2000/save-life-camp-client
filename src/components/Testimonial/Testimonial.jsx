import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const axiosSecure = useAxiosSecure();

    axiosSecure.get('/reviews')
        .then(res => {
            setReviews(res.data);

        })
    //console.log(reviews);
    return (
        <div>
            <div className="divider mt-12 shadow-xl shadow-red-600 "></div>
            <h2 className="text-4xl text-center font-bold">Testimonials </h2>
            <p className="text-xl text-center italic my-2">What our beautiful participants saying about SAVE LIFE MEDICAL CAMP!</p>
            <div className="divider"></div>
            <div className="bg-sky-200 mt-8 p-12">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true}>
                    {
                        reviews.map(review => <SwiperSlide key={review._id} >
                            <div className="text-center flex flex-col justify-center items-center gap-6">
                                <div>
                                    <p>Camp Name: <span className="font-bold">{review.campName}</span></p>
                                    <p>Venue: <span className="font-bold">{review.venue}</span></p>
                                    <p>Date: <span className="font-bold">{review.date.split('T')[0]}</span></p>
                                </div>
                                <p className="lg:mx-20 md:mx-12 mx-4 text-xl font-bold">{review.feedback}</p>
                                <p className=" flex items-center gap-2 text-xl font-semibold">
                                    <img src={review.userImg} alt="" className="h-16 rounded-full" />
                                    <span>Name: </span><span className="text-red-500 text-4xl">{review.name}</span></p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;