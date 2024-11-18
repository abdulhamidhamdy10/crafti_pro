import React from 'react'

export default function Gallery() {
    return (
        <div>
            <section className="gallery">
                <ul className="gallery-list">
                    <li>
                        <div
                            className="gallery-card has-bg-image has-after"
                            style={{ backgroundImage: "url('/images/gallery-1.jpg')" }}
                        >
                            <div className="card-content">
                                <h3 className="h3 card-title">Vases & Plant Pots</h3>
                                <button className="btn-link">
                                    <span className="span">View Gallery</span>
                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div
                            className="gallery-card has-bg-image has-after"
                            style={{ backgroundImage: "url('/images/gallery-2.jpg')" }}
                        >
                            <div className="card-content">
                                <h3 className="h3 card-title">Clay Craft</h3>
                                <button  className="btn-link">
                                    <span className="span">View Gallery</span>
                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div
                            className="gallery-card has-bg-image has-after"
                            style={{ backgroundImage: "url('/images/gallery-3.jpg')" }}
                        >
                            <div className="card-content">
                                <h3 className="h3 card-title">Sculpturing</h3>
                                <button className="btn-link">
                                    <span className="span">View Gallery</span>
                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div
                            className="gallery-card has-bg-image has-after"
                            style={{ backgroundImage: "url('/images/gallery-4.jpg')" }}
                        >
                            <div className="card-content">
                                <h3 className="h3 card-title">Accessories</h3>
                                <button className="btn-link">
                                    <span className="span">View Gallery</span>
                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

        </div>
    )
}
