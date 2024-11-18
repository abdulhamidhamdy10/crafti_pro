import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">

                    <div className="section footer-top">

                        <div className="footer-brand">

                            <a href="#" className="logo">Crafti</a>

                            <p className="footer-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non porttitor augue, in convallis risus.
                                Sed efficitur nulla quis luctus pulvinar. Cras nec pulvinar condimentum lacus.
                            </p>

                            <ul className="social-list">
                                <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                                <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                                <li><a href="#" className="social-link"><ion-icon name="logo-youtube"></ion-icon></a></li>
                            </ul>

                        </div>

                        <ul className="footer-list">
                            <li><p className="footer-list-title">Explore Us</p></li>
                            <li><a href="#" className="footer-link">About Us</a></li>
                            <li><a href="#" className="footer-link">Collection</a></li>
                            <li><a href="#" className="footer-link">Features</a></li>
                            <li><a href="#" className="footer-link">Blog & News</a></li>
                        </ul>

                        <ul className="footer-list">
                            <li><p className="footer-list-title">Support</p></li>
                            <li><a href="#" className="footer-link">Account</a></li>
                            <li><a href="#" className="footer-link">Feedback</a></li>
                            <li><a href="#" className="footer-link">Support Center</a></li>
                            <li><a href="#" className="footer-link">Our Stores</a></li>
                        </ul>

                        <div className="footer-list">
                            <p className="footer-list-title">Get in Touch</p>
                            <p className="footer-text">
                                Question or feedback? We’d love to hear from you.
                            </p>
                            <a href="#" className="btn">
                                <span className="span">Contact Us</span>
                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a>
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
