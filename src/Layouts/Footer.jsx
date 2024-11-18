import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">

                    <div className="section footer-top">

                        <div className="footer-brand">

                            <button href="#" className="logo">Crafti</button>

                            <p className="footer-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non porttitor augue, in convallis risus.
                                Sed efficitur nulla quis luctus pulvinar. Cras nec pulvinar condimentum lacus.
                            </p>

                            <ul className="social-list">
                                <li><button style={{ color :'white' }}  className="social-link"><ion-icon name="logo-facebook"></ion-icon></button></li>
                                <li><button style={{ color :'white' }}  className="social-link"><ion-icon name="logo-twitter"></ion-icon></button></li>
                                <li><button style={{ color :'white' }}  className="social-link"><ion-icon name="logo-instagram"></ion-icon></button></li>
                                <li><button style={{ color :'white' }}  className="social-link"><ion-icon name="logo-youtube"></ion-icon></button></li>
                            </ul>

                        </div>

                        <ul className="footer-list">
                            <li><p className="footer-list-title">Explore Us</p></li>
                            <li><button style={{ color :'white' }}  className="footer-link">About Us</button></li>
                            <li><button style={{ color :'white' }}  className="footer-link">Collection</button></li>
                            <li><button style={{ color :'white' }}  className="footer-link">Features</button></li>
                            <li><button style={{ color :'white' }}  className="footer-link">Blog & News</button></li>
                        </ul>

                        <ul className="footer-list">
                            <li><p className="footer-list-title">Support</p></li>
                            <li><button style={{ color :'white' }} className="footer-link">Account</button></li>
                            <li><button style={{ color :'white' }}  className="footer-link">Feedback</button></li>
                            <li><button style={{ color :'white' }}  className="footer-link">Support Center</button></li>
                            <li><button style={{ color :'white' }}  className="footer-link">Our Stores</button></li>
                        </ul>

                        <div className="footer-list">
                            <p className="footer-list-title">Get in Touch</p>
                            <p className="footer-text">
                                Question or feedback? We’d love to hear from you.
                            </p>
                            <button  className="btn">
                                <span className="span">Contact Us</span>
                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </button>
                        </div>

                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">
                            Copyright 2024 Abdelhamed. All Right Reserved
                        </p>
                    </div>

                </div>
            </footer>
        </div>
    )
}
