import React from 'react'
import TableCart from './TableCart'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

export default function Allcarts() {
  return (
    <CartProvider>
        <Navbar/>
        <TableCart/>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
                style={{backgroundColor: "var(--camel)"}}

        />
    </CartProvider>
  )
}
