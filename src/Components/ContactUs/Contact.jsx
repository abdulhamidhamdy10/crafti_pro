import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Contact() {
    return (
        <div>
            <section className="section contact">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="tittle">
                                <h1>We’re here to answer your questions and inquiries.</h1>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="8">
                            <img src='/images/WhatsApp Image 2024-10-28 at 12.40.20 PM.jpeg' alt='img'></img>
                        </Col>
                        <Col md="4">
                            <div className="icons">
                                <div className="info ">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="text">
                                        <h4 className='one'>Cairo,Egypt</h4>
                                        <h4 className='two'>Rosemead, CA 91770</h4>
                                    </div>
                                </div>
                                <div className="info ">
                                    <i className="fa-solid fa-phone"></i>
                                    <div className="text">
                                        <h4 className='one'>+ 123-456-789</h4>
                                        <h4 className='two'>Mon to Fri 9am to 6pm</h4>
                                    </div>
                                </div>
                                <div className="info ">
                                    <i className="fa-solid fa-envelope"></i>
                                    <div className="text">
                                        <h4 className='one'>support@colorlib.com</h4>
                                        <h4 className='two'>Send us your query anytime!</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col md="8">
                            <form className="form-contact"  >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control w-100" placeholder=" Enter Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button className="btn">Send</button>
                                </div>
                            </form>
                        </Col>

                        <Col md="4">
                            <iframe
                                title="Contact Us Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.665391256282!2d31.340407345899077!3d30.056609498675776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e5d94c66301%3A0xddddf100de42206c!2z2YXYr9mK2YbZhyDZhti12LHYjCDYp9mE2YXZhti32YLYqSDYp9mE2KPZiNmE2YnYjCDZhdiv2YrZhtipINmG2LXYsdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArCA0NDUwMTEz!5e1!3m2!1sar!2seg!4v1730096847675!5m2!1sar!2seg"

                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
