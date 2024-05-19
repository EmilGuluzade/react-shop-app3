import React, { useContext, useEffect, useState } from "react";
import "./Awesome.css";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";

const Awesome = () => {
  const {  data,addToBasket } = useContext(MainContext);
const [inpVal, setInpVal] = useState("")
const [sortBy, setSortBy] = useState(null)


  return (
    <section className="awesome">
      <div className="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="section_tittle d-flex align-items-center  ">
              <h2>Awesome</h2>
              <input value={inpVal}  onChange={(e)=>{
                setInpVal(e.target.value)
              }} type="text" placeholder="Search " />
              <button onClick={()=>setSortBy({field:"title",asc:true})} className="btn btn-primary mx-3  ">A-Z</button>
              <button onClick={()=>setSortBy({field:"title",asc:false})} className="btn btn-primary mx-3 ">Z-A</button>
              <button onClick={()=>setSortBy({field:"price",asc:false})} className="btn btn-primary v">Low To High</button>
              <button onClick={()=>setSortBy({field:"price",asc:true})} className="btn btn-primary mx-3 ">High To Low</button>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="cards row">
            {data
            .filter(x=>x.title.toLowerCase().includes(inpVal.toLowerCase()))
            .sort((a,b)=>{
              if(!sortBy){
                  return 0
              }else if(sortBy.asc==true){
                  return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
              }
              else if(sortBy.asc==false){
                return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
                  
            }
            })
            .map((item, index) => (
              <div key={index} class="col-lg-3 col-sm-6 p-3">
                <div class="single_product_item d-flex w-100  flex-column align-items-center ">
                  <img
                    className="img-fluid"
                    style={{ height: "250px" }}
                    src={item.image}
                    alt=""
                  />
                  <div class="single_product_text mt-3 ">
                    <h4>{item.title}</h4>
                    <h3>${item.price}</h3>
                    <a
                      style={{ cursor: "pointer", alignItems: "center" }}
                      onClick={() => {
                        addToBasket(item._id);
                      }}
                      class="add_cart justify-content-between d-flex "
                    >
                      + add to cart<i class="fa fa-heart"></i>{" "}
                      <Link to={`/detail/${item._id}`}>
                        <i class="fa fa-expand"></i>
                      </Link>
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
