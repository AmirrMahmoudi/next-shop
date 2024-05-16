import Features from "@/components/layout/Features";
import ProductsTab from "@/components/products/productsTab";
import { getFetch } from "@/utils/fetch";

const Home = async () => {
  const productsTab = await getFetch("/products/products-tabs");
  //   console.log(productsTab);
  return (
    <>
      <Features />
      <ProductsTab
        tabList={productsTab.tabList}
        tabPanel={productsTab.tabPanel}
      />
    </>
  );
};

export default Home;
