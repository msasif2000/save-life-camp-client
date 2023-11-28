import { FaUsers } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire(
                                "Deleted!",
                                "User has been deleted.",
                                "success"
                            )
                            refetch();
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = id => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire(
                        "Updated!",
                        "User has been updated.",
                        "success"
                    )
                    refetch();
                }
            })
    }
    return (
        <div>
            <h1>Total Users : {users.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #ID
                                </th>
                                <th>NAME</th>
                                <th>Email</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => <tr key={user._id}>
                                    <th>
                                        {user._id}
                                    </th>
                                    <td>
                                        <span className="">{user.name}</span>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ?
                                                <span className="text-green-500">Admin</span>
                                                :
                                                <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-sm bg-sky-300 px-1 text-red-600">
                                                    <FaUsers className="text-2xl" />
                                                </button>
                                        }
                                    </td>
                                    <td className="flex gap-1">
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-sm bg-red-600 px-1 text-white"><MdDelete className="text-2xl"></MdDelete> </button>
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

export default AllUsers;