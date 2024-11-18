import React from 'react'
import { IonIcon } from '@ionic/react';

export default function Header() {
    return (
        <div>
            <section class="section hero" aria-label="home">
                <div class="container">

                    <div class="hero-content">

                        <h1 class="h1 hero-title">
                            We Make Top Quality
                            <span class="span">Handmade Products</span>
                        </h1>

                        <p class="section-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.
                        </p>

                        <button className="btn">
                            <span className="span"> View Collection</span>
                            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                        </button>

                    </div>

                    <div class="wrapper">
                        <div class="hero-banner-1 img-holder animate__animated animate__fadeInDown" style={{ width: "400", height: "550" }}>
                            <img src="images/hero-banner-1.jpg" width="400" height="550"
                                alt="view of assortment of decor for interior shop" class="img-cover" />
                        </div>

                        <div class="hero-banner-2 img-holder animate__animated animate__fadeInUp" style={{ width: "500", height: "850" }} >
                            <img src="images/hero-banner-2.jpg" width="500" height="850" alt="ceramic craft ware"
                                class="img-cover" />
                        </div>

                        <img src="images/hero-shape.png" width="570" height="676" alt="laves" class="shape" />
                    </div>

                </div>
            </section>
        </div>
    )
}
