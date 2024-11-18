import React from 'react'

export default function Article() {
    return (
        <div>
            <section className="section testi" aria-label="testimonials">
                <div className="container">
                    <div className="testi-card">
                        <p className="card-text">
                            Etiam ultricies eros ut malesuada condimentum. Cras in nisl sit amet dui molestie tristique ut vitae
                            libero nec laoreet purus.
                        </p>
                        <p className="client-name">Edward Fransisco</p>
                        <p className="client-title">Founder Crafti</p>
                        <img src="/images/quote.svg" width="50" height="50" loading="lazy" className="icon" alt="quote" />
                    </div>
                </div>
            </section>

        </div>
    )
}
