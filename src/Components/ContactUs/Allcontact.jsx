import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Contact from './Contact'
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

export default function Allcontact() {
    return (
        <CartProvider>
            <Navbar/>
            <Contact/>
            <Footer/>
            <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "var(--camel)"}}
        />
        </CartProvider>
    )
}
