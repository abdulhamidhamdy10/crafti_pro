import React from 'react'

export default function Header() {
    return (
        <div>
            <section className="section collection text-center" aria-labelledby="collection-label">
                <div className="container">
                    <h2 className="h2 section-title" id="collection-label">
                        Unique Handicrafts Collection
                    </h2>

                    <p className="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie ligula dignissim.
                    </p>

                    <ul className="grid-list">
                        <li>
                            <div className="collection-card">
                                <figure className="card-banner img-holder animate__animated animate__fadeInDown" style={{ "--width": "500", "--height": "550" }}>
                                    <img src="/images/collection-1.jpg" width="500" height="550" loading="lazy" alt="Pottery & Ceramics" className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <h3 className="h3 card-title">Pottery & Ceramics</h3>
                                    <p className="card-text">
                                        Cras fermentum augue ac purus pharetra man aliquam fringilla ornare quam.
                                    </p>
                                    <button style={{ color :'white' }} className="btn">
                                        <span className="span">View Gallery</span>
                                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="collection-card">
                                <figure className="card-banner img-holder animate__animated animate__fadeInUp" style={{ "--width": "500", "--height": "550" }}>
                                    <img src="/images/collection-2.jpg" width="500" height="550" loading="lazy" alt="Leather Craft" className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <h3 className="h3 card-title">Leather Craft</h3>
                                    <p className="card-text">
                                        Cras fermentum augue ac purus pharetra man aliquam fringilla ornare quam.
                                    </p>
                                    <button style={{ color :'white' }} className="btn">
                                        <span className="span">View Gallery</span>
                                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="collection-card">
                                <figure className="card-banner img-holder animate__animated animate__fadeInDown" style={{ "--width": "500", "--height": "550" }}>
                                    <img src="/images/collection-3.jpg" width="500" height="550" loading="lazy" alt="Home Decoration" className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <h3 className="h3 card-title">Home Decoration</h3>
                                    <p className="card-text">
                                        Cras fermentum augue ac purus pharetra man aliquam fringilla ornare quam.
                                    </p>
                                    <button style={{ color :'white' }}  className="btn">
                                        <span className="span">View Gallery</span>
                                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}
