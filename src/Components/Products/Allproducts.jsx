import React from 'react'
import Product from './Product'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

export default function Allproducts() {
  return (
    <CartProvider>
        <Navbar/>
        <Product/>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "var(--camel)"}}
        />
    </CartProvider>
  )
}
