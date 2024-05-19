import CategoriesList from "@/components/menu/CategoriesList";
import { getFetch } from "@/utils/fetch";
import ProductsList from "./ProductsList";
import { Suspense } from "react";
import Loading from "./Loading";
import Search from "./Search";
import Sort from "./Sort";

export default async function MenuPage({ searchParams }) {
  const categories = await getFetch("/categories");
  const params = new URLSearchParams(searchParams);

  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <Search />
            <hr />
            <CategoriesList categories={categories} />

            <hr />

            <Sort />
          </div>
          <div className="col-sm-12 col-lg-9">
            <Suspense key={params.toString()} fallback={<Loading />}>
              <ProductsList params={params.toString()} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
