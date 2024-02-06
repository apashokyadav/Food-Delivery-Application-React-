import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
//import About from "./src/components/About";
import Error from "./src/components/Error";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import RestaurentMenu from "./src/components/RestaurentMenu";
import Offer from "./src/components/Offer";
import Signin from "./src/components/Signin";
import UserClass from "./src/components/UserClass";
import UserContext from "./src/utills/UserContext";
import { Provider } from "react-redux";
import store from "./src/utills/store";
import Cart from "./src/components/Cart";


const About = lazy(()=> import("./src/components/About"));
    

const App=()=>{
    const [user,setUser]=useState({
        name:"vishnu",
        email:"jangid",
        signin:false,
    });

     return (
        <div>
            <Provider store={store}>
         <UserContext.Provider
            value={{
                user:user,
                setUser:setUser
            }

            }
         >
                <Header/>
                <Outlet/>
                <Footer/>
        </UserContext.Provider>  
        </Provider> 
        </div>  
        
    );
};
const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/about",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                             <About/> 
                         </Suspense> 
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path:"/offer",
                element:<Offer/>

            },
            {
                path:"/signin",
                element:<Signin/>

            },
            {
                path:"/cart",
                element:<Cart/>

            },
            {
                path: "/restaurent/:resid",
                element:< RestaurentMenu/>
            }
        ],
        errorElement:<Error/>
    },
        
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);