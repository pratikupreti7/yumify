import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './Home/Home';
import './index.css';
import App from './App';               
import About from './Routers/About';
import Error from './Routers/Error';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout';
import ResMenu from './ResMenu/ResMenu';
import Contact from './Routers/Contact';
import Cart from './Routers/Cart';
import ShimmerUI from './ShimmerUI/ShimmerUI';
const Instamart=lazy(()=>import("./Routers/Fav"))
const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[ 
        {
            path:"/",
            element:<App/>
          },
        {
            path:"/about",
            element:<About/>
          },

          {
            path:"/contact",
            element:<Contact/>
          },
          {
            path:"/fav",
            element:<Suspense fallback={<ShimmerUI/>}><Instamart/></Suspense>
          },

          {
            path:"/resturant/cart",
            element:<Cart/>
          },
          
        {
            path:"/resturant/:id",
            element:<ResMenu/>,
            errorElement:<Error/>,
          },
      ]
    },
   
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={appRouter}/>
);

