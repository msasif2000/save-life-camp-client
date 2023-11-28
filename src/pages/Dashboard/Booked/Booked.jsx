import useBookedCamp from "../../../hooks/useBookedCamp";

const Booked = () => {
    const [bookings] = useBookedCamp();

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booked;
