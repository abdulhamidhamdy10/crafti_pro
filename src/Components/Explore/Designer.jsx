import React from 'react'

export default function Designer() {
    return (
        <div>
            <section className="feature" aria-label="features">
                <div className="feature-banner has-bg-image has-after" style={{ backgroundImage: "url('/images/feature-banner.jpg')" }}>
                    <button className="play-btn" aria-label="play video: man making handmade belt">
                        <img src="/images/play.svg" width="60" height="60" loading="lazy" alt="play icon" />
                    </button>
                </div>

                <div className="section feature-content">
                    <div className="container">
                        <h2 className="h2 section-title">
                            Passionate About Elegance and Beauty Design
                        </h2>

                        <p className="section-text">
                            Curabitur porttitor nulla vitae purus eleifend feugiat. Quisque faucibus sapien, ut porttitor lorem.
                        </p>

                        <ul className="feature-list">
                            <li>
                                <div className="feature-list-card">
                                    <div className="card-icon">
                                        <img src="/images/feature-icon-1.svg" width="45" height="45" loading="lazy" alt="review icon" />
                                    </div>
                                    <div>
                                        <h3 className="h4 card-title">100% Guarantee</h3>
                                        <p className="card-text">
                                            Vestibulum in eros at lectus commodo
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="feature-list-card">
                                    <div className="card-icon">
                                        <img src="/images/feature-icon-2.svg" width="45" height="45" loading="lazy" alt="badge icon" />
                                    </div>
                                    <div>
                                        <h3 className="h4 card-title">Professional Staffs</h3>
                                        <p className="card-text">
                                            Vestibulum in eros at lectus commodo
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="feature-list-card">
                                    <div className="card-icon">
                                        <img src="/images/feature-icon-3.svg" width="45" height="45" loading="lazy" alt="money bag icon" />
                                    </div>
                                    <div>
                                        <h3 className="h4 card-title">Affordable Price</h3>
                                        <p className="card-text">
                                            Vestibulum in eros at lectus commodo
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <p>
                            Nunc cursus ante libero, et convallis eros tristique nec. Fusce consequat lectus dui, nec laoreet purus venenatis id.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}
