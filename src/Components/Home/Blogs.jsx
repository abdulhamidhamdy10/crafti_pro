import React from 'react'

export default function Blogs() {

    const blogPosts = [
        {
            imgSrc: "/images/blog-1.jpg",
            imgAlt: "The Detail Process Of Decorating The Clay Vase At Pottery Studio",
            title: "The Detail Process Of Decorating The Clay Vase At Pottery Studio",
            date: "October 12, 2022",
            category: "Tips & Trick"
        },
        {
            imgSrc: "/images/blog-2.jpg",
            imgAlt: "Skills And Techniques To Make A Genuine Leather Wallet",
            title: "Skills And Techniques To Make A Genuine Leather Wallet",
            date: "October 12, 2022",
            category: "Tips & Trick"
        },
        {
            imgSrc: "/images/blog-3.jpg",
            imgAlt: "5 Latest And Trending Handmade Crafts For Adults And Kids",
            title: "5 Latest And Trending Handmade Crafts For Adults And Kids",
            date: "October 12, 2022",
            category: "Tips & Trick"
        },
        {
            imgSrc: "/images/blog-4.jpg",
            imgAlt: "Homemade Business That Now Makes Hundreds Of Millions",
            title: "Homemade Business That Now Makes Hundreds Of Millions",
            date: "October 12, 2022",
            category: "Tips & Trick"
        }
    ];
    return (
        <div>
            <section className="section blog" aria-labelledby="blog-label">
                <div className="container">

                    <h2 className="h2 section-title text-center" id="blog-label">Blog & News</h2>

                    <p className="section-text text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie ligula dignissim.
                    </p>

                    <ul className="grid-list">

                        {blogPosts.map((item, index) => (
                            <li key={index}>
                                <div className="blog-card">

                                    <figure className="card-banner img-holder" style={{ '--width': 1024, '--height': 683 }}>
                                        <img src={item.imgSrc} width="1024" height="683" loading="lazy"
                                            alt={item.imgAlt} className="img-cover" />
                                    </figure>

                                    <div className="card-content">

                                        <h3 className="h4">
                                            <button className="card-title">
                                                {item.title}
                                            </button>
                                        </h3>

                                        <div className="card-meta">

                                            <button className="card-meta-wrapper">
                                                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                                                <span className="span">admin</span>
                                            </button>

                                            <time className="card-meta-wrapper" dateTime="2022-10-12">
                                                <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>
                                                <span className="span">{item.date}</span>
                                            </time>

                                            <button className="card-meta-wrapper">
                                                <ion-icon name="folder-open-outline" aria-hidden="true"></ion-icon>
                                                <span className="span">{item.category}</span>
                                            </button>

                                        </div>

                                    </div>

                                </div>
                            </li>
                        ))}

                    </ul>

                    <button className="btn">
                        <span className="span">Read More</span>
                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </button>

                </div>
            </section>
        </div>
    )
}
