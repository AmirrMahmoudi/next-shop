import { Suspense } from "react";

import Table from "@/components/profile/orders/Table";
import Loading from "@/components/profile/orders/Loading";

const OrderPage = ({ searchParams }) => {
  const params = new URLSearchParams(searchParams);

  return (
    <Suspense key={params.toString()} fallback={<Loading />}>
      <Table params={params.toString()} />
    </Suspense>
  );
};

export default OrderPage;
