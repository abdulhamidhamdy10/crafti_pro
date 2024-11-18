import React from 'react'

export default function Design() {


    return (
        <div>
            <section className="section about" aria-label="about">
                <div className="container">

                    <div className="wrapper">
                        <figure className="about-banner about-banner-1 img-holder animate__animated animate__fadeInDown" style={{ '--width': 600, '--height': 480 }}>
                            <img src="/images/about-1.jpg" width="600" height="480" loading="lazy" alt="craftman in workshop" className="img-cover" />
                        </figure>

                        <h2 className="h2 section-title">Make Handicrafts Since 1992</h2>
                    </div>

                    <figure className="about-banner about-banner-2 img-holder animate__animated animate__fadeInUp" style={{ '--width': 500, '--height': 700 }}>
                        <img src="/images/about-2.jpg" width="500" height="700" loading="lazy" alt="interior view of a leather shop selling belts brac" className="img-cover" />
                    </figure>

                    <div className="about-content">

                        <h3 className="h2 section-title">Innovative Design is Our Passion</h3>

                        <p className="section-text">
                            Curabitur interdum malesuada lectus ut pharetra. Sed tellus ante, aliquet a sem id, ultricies varius dolor. Nam volutpat hendrerit massa. Cras posuere ornare elementum.
                        </p>

                        <a href="#" className="btn">
                            <span className="span">Read More</span>
                            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                        </a>

                        <figure className="about-banner about-banner-3 img-holder" style={{ '--width': 850, '--height': 420 }}>
                            <img src="/images/about-3.jpg" width="850" height="420" loading="lazy" alt="concentrated artisans in workshop" className="img-cover" />
                        </figure>

                    </div>
                </div>
            </section>
        </div>
    )
}
