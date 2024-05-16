import Link from "next/link";
import Product from "./Product";

const ProductsTab = ({ tabList, tabPanel }) => {
  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>منو محصولات</h2>
        </div>

        <ul className="filters_menu">
          {tabList.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>

        <div className="filters-content">
          {tabPanel.map((panel, index) => (
            <div key={index} className="row grid">
              {panel.map((product) => (
                <div key={product.id} className="col-sm-6 col-lg-4">
                  <Product product={product} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="btn-box">
          <Link href="/menu">مشاهده بیشتر</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsTab;
