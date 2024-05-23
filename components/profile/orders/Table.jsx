// "uce server";
import { cookies } from "next/headers";
import { getFetch } from "@/utils/fetch";
import { numberFormat } from "@/utils/helper";

const Table = async () => {
  const token = cookies().get("token");
  const data = await getFetch("/profile/orders", {
    Authorization: `Bearer ${token.value}`,
  });

  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>آدرس</th>
              <th>وضعیت</th>
              <th>وضعیت پرداخت</th>
              <th>قیمت کل</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((order) => (
              <tr key={order.id}>
                <th>{order.id}</th>
                <td>{order.address_title}</td>
                <td>{order.status}</td>
                <td>
                  <span
                    className={
                      order.payment_status == "موفق"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {order.payment_status}
                  </span>
                </td>
                <td>{numberFormat(order.paying_amount)} تومان</td>
                <td>{order.created_at}</td>
                <td>

                    
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="d-flex justify-content-center mt-5">
        <ul className="pagination">
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Table;
