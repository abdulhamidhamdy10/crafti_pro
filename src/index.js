
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider

  // Link,
} from "react-router-dom";
import { CartProvider } from "react-use-cart"; // استيراد CartProvider

import App from "./App";
import Allexplore from "./Components/Explore/Allexplore";
import Allproducts from "./Components/Products/Allproducts";
import Allcarts from "./Components/Cart/Allcarts";
import Allcontact from "./Components/ContactUs/Allcontact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/explore",
    element: <Allexplore/>,
  },
  {
    path: "/our_products",
    element: <Allproducts/>,
  },
  {
    path: "/cart",
    element: <Allcarts/>,
  },
  {
    path: "/contact",
    element: <Allcontact/>,
  },
  

]);

createRoot(document.getElementById("root")).render(
  <CartProvider> {/* إضافة CartProvider هنا */}
  <RouterProvider router={router} />
</CartProvider>);








