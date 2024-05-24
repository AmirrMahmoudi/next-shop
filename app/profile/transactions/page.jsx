import { Suspense } from "react";

import Loading from "@/components/profile/orders/Loading";
import Table from "@/components/profile/transactions/Table";

const OrderPage = ({ searchParams }) => {
  const params = new URLSearchParams(searchParams);

  return (
    <Suspense key={params.toString()} fallback={<Loading />}>
      <Table params={params.toString()} />
    </Suspense>
  );
};

export default OrderPage;
