import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CampDetails = () => {
    const camp = useLoaderData().data;

    const { _id, campName, venue, audience, services, image, date, campFee, participants, professionals, details } = camp;
    const today = new Date();
    const axiosPublic = useAxiosPublic()
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/reviews/${_id}`)
        .then(res => {
            setReviews(res.data);
        });
    }, [axiosPublic, _id])

    return (
        <div className="container p-6 mt-4 xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto lg:px-0 px-2">
            <Helmet>
                <title>SL| CAMP DETAILS</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <img src={image} alt={campName} className="w-full h-auto rounded" />
                </div>
                <div className="bg-sky-200 p-4 text-xl">
                    <h1 className="text-3xl font-bold mb-4">{campName}</h1>
                    <p className="text-gray-600 mb-2">
                        Date: <span className="font-bold">{date}</span>
                    </p>
                    <p className="text-gray-600 mb-2">
                        Venue: <span className="font-bold">{venue}</span>
                    </p>
                    <p className="text-gray-600 mb-2">
                        Audience: <span className="font-bold">{audience}</span>
                    </p>
                    <p className="text-gray-600 mb-2">
                        Services: <span className="font-bold">{services.join(", ")}</span>
                    </p>
                    <p className="text-gray-600 mb-2">
                        Professionals: <span className="font-bold">{professionals.join(", ")}</span>
                    </p>
                    <p className="text-gray-600 mb-2">
                        Camp Fee: <span className="font-bold">{campFee}</span>
                    </p>
                    <p className="text-gray-600 mb-2">
                        Participants: <span className="font-bold">{participants}</span>
                    </p>
                    <div className="flex justify-end pb-0">
                        {
                            today < new Date(date) ?

                                <Link to={`/joinCamp/${_id}`}><button className="btn border-red-600 bg-sky-300">Join Camp</button></Link>

                                :
                                ''
                        }
                    </div>
                </div>

            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Camp Details</h2>
                <p className="text-gray-800">{details}</p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                {reviews?.map(review => (
                    <div key={review?._id} className="border p-4 mb-4 rounded">
                        <p>{review?.feedback}</p>
                        <div className="flex gap-4">
                            <p className="font-bold">Reviewer:</p>
                            <div>
                                <img src={review?.userImg} alt="" className="h-16 rounded-full" />
                                <p className="text-gray-600 mt-2">Name: {review?.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampDetails;
