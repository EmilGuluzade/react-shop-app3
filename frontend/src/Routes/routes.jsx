
import AdminRoot from "../pages/admin/AdminRoot"
import Add from "../pages/admin/Add/Add"
import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/home/home"
import Basket from "../pages/site/Basket/Basket"
import Detail from "../pages/site/Detail/Detail"
import Products from "../pages/admin/Products/Products"

const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },{
                path:"/detail/:id",
                element: <Detail/>

            }
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:"",
                element: <Products/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
    ,    {
        path:"*",
        element:<Error/>,
        
    },
]
export default ROUTES;