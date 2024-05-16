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
  const contextData = { data, setdata, loading, setLoading, error, setError ,addToBasket}

  function addToBasket(id) {
let basketItem=basket.finst(x=>x._id==id)
   if (basketItem) {
    basketItem.count++,
    basketItem.totalPrice+=basketItem.price
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
