import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BASE_URL } from "./config/config";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("false");
  const [data, setdata] = useState([]);
  const [basket, setBasket] = useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[]);

  const router = createBrowserRouter(ROUTES);

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setdata([...res.data]);
    });
  }, []);
  useEffect(() => {
   localStorage.setItem("basket",JSON.stringify(basket))
  }, [basket]);
  const contextData = { data, setdata, loading, setLoading, error, setError,basket ,addToBasket,deleteFromBasket}

  function addToBasket(id) {
let basketItem=basket.find(x=>x._id==id)
   if (basketItem) {
    basketItem.count++,
    basketItem.totalPrice+=basketItem.price
    setBasket([...basket])
   } else {
    let target =data.find(x=>x._id==id)
    let newItem={
        ...target,
        count:1,
        totalPrice:target.price
    }

    setBasket([...basket,newItem])
   } 
  }

  function deleteFromBasket(id) {
    let target= basket.find(x=>x._id==id)
   if (target.count>1) {
    target.count--
    target.totalPrice-=target.price
    setBasket([...basket])
   } else {
    let indexOfTarget=basket.indexOf(target)
    basket.splice(indexOfTarget,1)
    setBasket([...basket])
   }
  }
  return (
    <>
      <MainContext.Provider
        value={contextData}
      >
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
