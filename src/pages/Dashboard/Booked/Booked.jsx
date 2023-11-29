import { GrStatusGood } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import useBookedCamp from "../../../hooks/useBookedCamp";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Booked = () => {
    const [bookings, refetch] = useBookedCamp();
    const axiosSecure = useAxiosSecure();
    const handleDeleteRegistration = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You could not participate in this session!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/joinedCamp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire(
                                "Deleted!",
                                "Your registered camp has been deleted.",
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
            <div className="flex justify-evenly items-center mt-4">
                <h2 className="text-3xl">
                    Total Session I have participated: {bookings.length}
                </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Camp Fee (tk)</th>
                            <th>Date </th>
                            <th>Venue</th>
                            <th>Email</th>
                            <th>PAYMENT</th>
                            <th>PAYMENT STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <span className="">{item.campName}</span>
                                </td>
                                <td>{item.campFee}</td>
                                <td>{item.date}</td>
                                <td>{item.venue}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link to={`/dashboard/payment/${item._id}`}><button className="btn btn-sm bg-sky-600 text-white">Pay</button></Link>
                                </td>
                                <td>
                                    <button className="btn btn-sm bg-green-600 px-1"><GrStatusGood className="text-2xl text-white" /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteRegistration(item._id)} className="btn btn-sm bg-red-600 px-1"><MdDelete className="text-2xl text-white" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booked;
