import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const ManageBooking = () => {
    const axiosSecure = useAxiosSecure();

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookings');
            return res.data;
        }
    })

    const handleAcceptPayment = id => {
        axiosSecure.patch(`/payment/${id}`)
            .then(() => {
                    Swal.fire(
                        "Updated!",
                        "Payment has been accepted.",
                        "success"
                    )
                    refetch();

            })
    }

    return (
        <div>
            <Helmet>
                <title>SAVE LIFE | BOOKINGS</title>
            </Helmet>
            <h1 className="text-3xl text-center my-4">Total Camp Bookings : {bookings.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table min-w-full divide-y divide-gray-200">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    PARTICIPANT ID
                                </th>
                                <th>PARTICIPANT NAME</th>
                                <th>EMAIL</th>
                                <th>CAMP NAME</th>
                                <th>CAMP FEE</th>
                                <th>PAYMENT STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking) => <tr key={booking._id}>
                                    <th>
                                        {booking._id}
                                    </th>

                                    <td>
                                        <span className="">{booking.name}</span>
                                    </td>
                                    <td>{booking.email}</td>
                                    <td>{booking.campName}</td>
                                    <td>{booking.price}</td>
                                    <td>
                                        {
                                            booking.status === 'pending' ?                                                                                 
                                                <button onClick={() => handleAcceptPayment(booking._id)} className="btn btn-sm bg-red-600 text-white">
                                                    {booking.status}
                                                </button>
                                                :
                                                <button className="btn btn-sm bg-green-600 text-white">{booking.status}</button>
                                        }
                                       
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;