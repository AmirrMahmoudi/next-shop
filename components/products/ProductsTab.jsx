const ProductsTab = ({ tabList, tabPanel }) => {
  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>منو محصولات</h2>
        </div>

        <ul className="filters_menu">
          <li className="active">برگر</li>
          <li>پیتزا</li>
          <li>پیش غذا و سالاد</li>
        </ul>

        <div className="filters-content">
          <div className="row grid">
            <div className="col-sm-6 col-lg-4">
              <div className="box">
                <div>
                  <div className="img-box">
                    <img className="img-fluid" src="./images/b1.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>لورم ایپسوم متن</h5>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </p>
                    <div className="options">
                      <h6>
                        <del>45,000</del>
                        34,000
                        <span>تومان</span>
                      </h6>
                      <a href="">
                        <i className="bi bi-cart-fill text-white fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href=""> مشاهده بیشتر </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsTab;
