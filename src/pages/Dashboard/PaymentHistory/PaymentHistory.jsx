import usePaidCamp from "../../../hooks/usePaidCamp";


const PaymentHistory = () => {
    const [paidCamps] = usePaidCamp();
     return (
        <div>
            <div className="flex justify-evenly items-center mt-4">
                <div>
                    <h2 className="text-3xl text-center py-8">
                        Payment History of <span className="text-blue-700">{paidCamps[0]?.email}</span>
                    </h2>

                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th>PAYMENT ID</th>
                            <th>Camp Name</th>
                            <th>Camp Fee (tk)</th>
                            <th>PAYMENT TIME</th>
                            <th>TRANSACTION ID</th>
                            <th>PAYMENT STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paidCamps.map((item) => (
                            <tr key={item._id}>
                                <th>{item._id}</th>
                                <td>{item.campName}</td>
                                <td>{item.price}</td>
                                <td>
                                    {item.date.split('T')[0]} <br />
                                    {item.date.split('T')[1].split('.')[0]}
                                </td>
                                <td>{item.transactionId}</td>
                                <td>
                                   {
                                    item?.status === 'pending' ?
                                        <button className="btn btn-sm text-white bg-red-600">{item?.status}</button>
                                        :
                                        <button className="btn btn-sm text-white bg-green-600">{item?.status}</button>
                                   }
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;