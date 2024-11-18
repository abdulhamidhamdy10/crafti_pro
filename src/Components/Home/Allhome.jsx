import React from 'react'

import Navbar from '../../Layouts/Navbar'
import Header from './Header'
import Design from './Design'
import Blogs from './Blogs'
import Footer from '../../Layouts/Footer'
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

export default function Allhome() {
  return (
    <CartProvider>
        <Navbar/>
        <Header/>
        <Design/>
        <Blogs/>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "var(--camel)"}}
        />
    </CartProvider>
  )
}
