import About from "@/components/About";
import Contact from "@/components/contact/Contact";
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
      <Contact />
    </>
  );
};

export default Home;
