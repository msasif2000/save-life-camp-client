import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManageBooking = () => {
    const axiosSecure = useAxiosSecure();

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookings');
            return res.data;
        }
    })


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire(
                                "Deleted!",
                                "Participants information has been deleted.",
                                "success"
                            )
                            refetch();
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
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
                                <th>PAYMENT</th>
                                <th>ACTION</th>
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
                                    <td>{booking.campFee}</td>
                                    <td>PAID</td>
                                    <td className="flex gap-1">
                                        <button onClick={() => handleDelete(booking._id)} className="btn btn-sm bg-red-600 px-1 text-white"><MdDelete className="text-2xl"></MdDelete> </button>
                                    </td>

                                </tr>)
                            }
                            {/* row 1 */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;