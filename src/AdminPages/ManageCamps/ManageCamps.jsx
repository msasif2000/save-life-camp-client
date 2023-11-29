import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import useCamp from "../../hooks/useCamp";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ManageCamps = () => {
    const [camps, refetch] = useCamp();

    const axiosSecure = useAxiosSecure();
    const handleDelete = (id) => {
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
                    .then(() => {
                        // console.log(res.data);
                    })
                axiosSecure.delete(`/camp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire(
                                "Deleted!",
                                "Your camp information has been deleted.",
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
                <h2 className="text-3xl">Number of total organized camps:  {camps.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table min-w-full divide-y divide-gray-200">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>CAMP NAME</th>
                                <th>DATE</th>
                                <th>VENUE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                camps.map((camp, index) => <tr key={camp._id}>
                                    <th>
                                        {index + 1}
                                    </th>

                                    <td>
                                        <span className="">{camp.campName}</span>
                                    </td>
                                    <td>
                                        {camp.date.split('T')[0]}
                                        <br />
                                        {camp.date.split('T')[1].split('.')[0]}
                                    </td>
                                    <td>{camp.venue}</td>
                                    <td className="flex gap-1">
                                        <Link to={`/dashboard/updateCamp/${camp._id}`}><button className="btn btn-sm bg-green-500 px-1 text-white"><AiFillEdit className="text-2xl" /></button></Link>
                                        <button onClick={() => handleDelete(camp._id)} className="btn btn-sm bg-red-600 px-1 text-white"><MdDelete className="text-2xl"></MdDelete> </button>
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

export default ManageCamps;