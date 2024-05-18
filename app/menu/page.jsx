import CategoriesList from "@/components/menu/CategoriesList";
import { getFetch } from "@/utils/fetch";
import ProductsList from "./ProductsList";

export default async function MenuPage() {
  const categories = await getFetch("/categories");
  console.log(categories);
  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <div>
              <label className="form-label">جستجو</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="نام محصول ..."
                />
                <a href="#" className="input-group-text">
                  <i className="bi bi-search"></i>
                </a>
              </div>
            </div>
            <hr />
            <CategoriesList categories={categories} />

            <hr />
            <div>
              <label className="form-label">مرتب سازی</label>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  بیشترین قیمت
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  کمترین قیمت
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  پرفروش ترین
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  با تخفیف
                </label>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-9">
            <ProductsList />
          </div>
        </div>
      </div>
    </section>
  );
}
