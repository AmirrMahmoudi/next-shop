// "uce server";
import { cookies } from "next/headers";
import { getFetch } from "@/utils/fetch";
import { numberFormat } from "@/utils/helper";
import Paginate from "./Paginate";

const Table = async ({ params }) => {
  const token = cookies().get("token");
  const data = await getFetch(`/profile/transactions?${params}`, {
    Authorization: `Bearer ${token.value}`,
  });

  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>شماره پیگیری</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <th>{transaction.order_id}</th>
                <td>{numberFormat(transaction.amount)} تومان</td>
                <td>
                  <span
                    className={
                      transaction.status == "موفق"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {transaction.status}
                  </span>
                </td>
                <td>{transaction.trans_id}</td>
                <td>{transaction.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Paginate links={data.meta.links} />
    </>
  );
};
export default Table;
