import { Link } from "react-router-dom";

const OrderTable = ({ orders }) => {
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
              orders.map((order, i) => (
                <tr>
                  <th className="py-4 align-middle">{'# ' + i + 1}</th>
                  <td className="py-4 align-middle">{order.createdAt.substring(0, 10)}</td>
                  <td className="py-4 align-middle">{order.subtotal + ' Rs'}</td>
                  {/* <td className="py-4 align-middle">
                <span className="p-2 badge rounded-none bg-[#0dcaf0]">
                  BEING PREPARED
                </span>
              </td> */}
                  <td className="py-4 align-middle">
                    <Link to={`/orders/${order._id}`} state={order} className="">
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
            {/* <tr>
              <th className="py-4 align-middle"># 1734</th>
              <td className="py-4 align-middle">7/5/2017</td>
              <td className="py-4 align-middle">$150.00</td>
              <td className="py-4 align-middle">
                <span className="p-2 badge rounded-none text-dark bg-[#ffc107]">
                  ACTION NEEDED
                </span>
              </td>
              <td className="py-4 align-middle">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm rounded-none"
                >
                  View
                </button>
              </td>
            </tr>
            <tr>
              <th className="py-4 align-middle"># 1730</th>
              <td className="py-4 align-middle">30/9/2016</td>
              <td className="py-4 align-middle">$150.00</td>
              <td className="py-4 align-middle">
                <span className="p-2 badge rounded-none bg-[#35b653]">
                  RECEIVED
                </span>
              </td>
              <td className="py-4 align-middle">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm rounded-none"
                >
                  View
                </button>
              </td>
            </tr>
            <tr>
              <th className="py-4 align-middle"># 1705</th>
              <td className="py-4 align-middle">22/6/2016</td>
              <td className="py-4 align-middle">$150.00</td>
              <td className="py-4 align-middle">
                <span className="p-2 badge rounded-none bg-[#dc3545]">
                  CANCELLED
                </span>
              </td>
              <td className="py-4 align-middle">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm rounded-none"
                >
                  View
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
