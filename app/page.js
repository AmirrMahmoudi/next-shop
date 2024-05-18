import About from "@/components/About";
import Features from "@/components/Features";
import ProductsTab from "@/components/products/productsTab";
import { getFetch } from "@/utils/fetch";

const Home = async () => {
  const productsTab = await getFetch("/products/products-tabs");
  return (
    <>
      <Features />
      <ProductsTab
        tabList={productsTab.tabList}
        tabPanel={productsTab.tabPanel}
      />
      <About />
    </>
  );
};

export default Home;
