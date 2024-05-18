import React, { useContext, useEffect, useState } from "react";
import "./Awesome.css";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../config/config";
const Awesome = () => {
  const {  addToBasket } = useContext(MainContext);
const [inpVal, setInpVal] = useState("")
const [filter, setFilter] = useState([])

useEffect(()=>{
axios.get(BASE_URL).then(res=>{
  if (inpVal.trim()!="") {
    setFilter([...res.data.filter((item)=>item.title.toLowerCase().includes(inpVal.trim().toLowerCase()))])




  }else{
    setFilter([...res.data])
  }
})
},[inpVal])

function setByPrice(value){
if (value=="high") {
  setFilter([...filter.sort((a,b)=>b.price-a.brice)])
  
} else if(value=="low"){
  setFilter([...filter.sort((a,b)=>a.price-b.brice)])
  
}else{
  axios.get(BASE_URL).then(res=>[
    setFilter([...res.data])
  ])
} }

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

              <select  onChange={(e)=>{
                setByPrice(e.target.value)
              }}  id="price">
                <option value="def">defaul</option>
                <option value="low">Low To High</option>

                <option value="high">High To Low</option>

              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cards row">
            {filter.map((item, index) => (
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
