import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const Doctors = () => {
    const axiosPublic = useAxiosPublic();

    const [doctors, setDoctors] = useState([]);
    axiosPublic.get('/doctors')
        .then(res => {
            setDoctors(res.data);
        });

    return (
        <div>
            <div className="divider mt-12 shadow-xl shadow-red-600 "></div>
            <h2 className="text-4xl text-center font-bold ">Meet Our Doctors</h2>
            <p className="text-xl text-center italic my-2">They are highly qualified to train your physical and mental health!</p>
            <div className="divider"></div>

            <Swiper
                slidesPerView={1}   // Default for mobile
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper max-w-7xl mx-auto"
                breakpoints={{
                    640: { slidesPerView: 2 },   
                    768: { slidesPerView: 2 },   
                    1024: { slidesPerView: 4 }, 
                }}
            >
                {doctors.map(doctor => (
                    <SwiperSlide key={doctor._id}>

                        <div className="text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-lg py-8 px-4 h-[400px]">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="mx-auto h-40 w-40 object-cover rounded-2xl mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                            <p className=" text-slate-800 text-xl font-bold">{doctor.designation}</p>
                            <p className="text-sm">{doctor.workingPlace}</p>
                            <Link to={`/doctorsProfile/${doctor._id}`}><button className="btn btn-sm bg-red-200 mt-2">See details</button></Link>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Doctors;
