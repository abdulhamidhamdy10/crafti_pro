import React from 'react'
import { CartProvider } from "react-use-cart";

import Navbar from '../../Layouts/Navbar'
import Header from './Header'
import Designer from './Designer'
import Article from './Article'
import Gallery from './Gallery'
import Footer from '../../Layouts/Footer'
import ScrollToTop from "react-scroll-to-top";

export default function Allexplore() {
  return (
    <CartProvider >
        <Navbar/>
        <Header/>
        <Designer/>
        <Article/>
        <Gallery/>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "var(--camel)"}}
        />
    </CartProvider>
  )
}
