import { useLoaderData } from "react-router-dom";


const DoctorsViewProfile = () => {
    const doctor = useLoaderData().data;
    const { name, designation, qualification, workingPlace, specialization, experiences, reg_No, chamber_time, education, researchTopic, mobile_No, email,room_No, image } = doctor;
    //console.log(doctor);
    return (
        <div className="mt-8 space-y-4 xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto lg:px-4 px-2">
            <img src={image} alt="" className="h-80 w-92 rounded-xl mx-auto " />
            <h1 className="text-center text-2xl font-bold">{name}</h1>
            <h1 className="text-center text-blue-800 text-xl italic font-bold">{designation}</h1>
            <div className="md:flex w-full justify-center gap-12 mb-8">
                <div className="bg-ic3 rounded  p-2 w-full flex flex-col justify-center">
                    <h2 className="text-xl font-bold">Education: </h2>
                    <h1>{education}</h1>

                    <h1><span className="font-bold">Registration No: </span>{reg_No}</h1>
                </div>
                <div className="bg-ic3 rounded  p-2 w-full">
                    <h2 className="text-xl font-bold">Chamber:</h2>
                    <h1 className="text-blue-800 font-bold">{workingPlace}</h1>

                    <h1><span className="font-bold">Time:  </span>{chamber_time}</h1>
                    <h1><span className="font-bold">Room No: </span>{room_No}</h1>
                    <h1><span className="font-bold">Contact No:  </span>{mobile_No}</h1>
                    <h1><span className="font-bold">Email: </span>{email}</h1>
                </div>
            </div>
            <div className="bg-ic3 rounded p-2 items-center flex flex-col">
                <h2 className="text-xl font-bold">Qualification: </h2>
                <h1>{qualification}</h1>
                <h1><span className="font-bold">Specialized on  {specialization}</span></h1>
                <h1><span className="font-bold">Experiences:  </span>{experiences}</h1>
                <h1><span className="font-bold">Research Topic:  </span>{researchTopic}</h1>
            </div>


        </div>
    );
};

export default DoctorsViewProfile;