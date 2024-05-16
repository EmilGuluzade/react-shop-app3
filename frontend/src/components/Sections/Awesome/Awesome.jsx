import React, { useContext } from "react";
import "./Awesome.css";
import MainContext from "../../../context/context";
const Awesome = () => {
  const { data, addToBasket } = useContext(MainContext);
  return (
    <section className="awesome">
      <div className="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="section_tittle ">
              <h2>
                Awesome <input type="text" placeholder="Search " />
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cards row">
            {data.map((item, index) => (
              <div class="col-lg-3 col-sm-6 p-3">
                <div class="single_product_item d-flex flex-column align-items-center ">
                  <img className="img-fluid" style={{height:"250px"}} src={item.image} alt="" />
                  <div class="single_product_text mt-3 ">
                    <h4>{item.title}</h4>
                    <h3>${item.price}</h3>
                    <a onClick={()=>{
                        addToBasket(item._id)
                    }} class="add_cart justify-content-between d-flex ">
                      + add to cart<i class="fa fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awesome;
