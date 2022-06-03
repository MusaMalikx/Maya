import { Link } from "react-router-dom";

const ViewOrderDetails = ({ orders }) => {
    // console.log(orders)
    return (
        <div>
            <div className="table-responsive ">
                <table className="table table-responsive-md table-borderless table-hover">
                    <thead className="bg-[#f8f9fa] text-dark">
                        <tr>
                            <th className="py-4 text-sm">ORDER #</th>
                            <th className="py-4 text-sm">DATE</th>
                            <th className="py-4 text-sm">TOTAL</th>
                            {/* <th className="py-4 text-sm">STATUS</th> */}
                            <th className="py-4 text-sm">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => (
                                <tr key={i}>
                                    <th className="py-4 align-middle">{'# ' + i + 1}</th>
                                    <td className="py-4 align-middle">{order.createdAt.substring(0, 10)}</td>
                                    <td className="py-4 align-middle">{order.subtotal + ' Rs'}</td>
                                    {/* <td className="py-4 align-middle">
                <span className="p-2 badge rounded-none bg-[#0dcaf0]">
                  BEING PREPARED
                </span>
              </td> */}
                                    <td className="py-4 align-middle">
                                        <Link to={`/admin/view/orders/${order._id}`} state={order} className="">
                                            <button
                                                type="button"
                                                className="btn btn-outline-dark btn-sm rounded-none"
                                            >
                                                View
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewOrderDetails;
