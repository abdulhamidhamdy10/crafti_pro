import React, { useState } from 'react';

import { CartProvider, useCart } from "react-use-cart";
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';

function Page() {
    const { addItem } = useCart();
    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleModal = (product) => {
        setSelectedProduct(product);
        setModal(!modal);
    };

    const products = [
        {
            id: 1,
            name: "Classic Ceramic Vase",
            price: 250,
            discount: 10,
            description: "A beautifully crafted ceramic vase with traditional patterns.",
            image: "/images/products/1.png",
            manufactureDate: "2023-01-10",
            type: "Ceramics"
        },
        {
            id: 2,
            name: "Rustic Clay Pot",
            price: 180,
            discount: 15,
            description: "A rustic clay pot perfect for adding a natural look to your space.",
            image: "/images/products/2.png",
            manufactureDate: "2022-10-15",
            type: "Pottery"
        },
        {
            id: 3,
            name: "Modern Sculpted Bowl",
            price: 300,
            discount: 20,
            description: "A sleek, modern bowl with a unique sculpted design.",
            image: "/images/products/10.png",
            manufactureDate: "2023-05-12",
            type: "Bowl"
        },
        {
            id: 4,
            name: "Hand-Painted Jar",
            price: 220,
            discount: 5,
            description: "A decorative jar with intricate hand-painted details.",
            image: "/images/products/4.png",
            manufactureDate: "2021-09-20",
            type: "Jar"
        },
        {
            id: 5,
            name: "Minimalist Plant Pot",
            price: 150,
            discount: 0,
            description: "A simple, elegant pot for plants with a minimalist design.",
            image: "/images/products/5.png",
            manufactureDate: "2023-07-01",
            type: "Pot"
        },
        {
            id: 6,
            name: "Antique-style Vase",
            price: 270,
            discount: 12,
            description: "Vase with an antique finish to complement vintage decor.",
            image: "/images/products/6.png",
            manufactureDate: "2022-11-15",
            type: "Antique"
        },
        {
            id: 7,
            name: "Textured Clay Bowl",
            price: 190,
            discount: 8,
            description: "A bowl with a textured clay finish that adds warmth to any setting.",
            image: "/images/products/7.png",
            manufactureDate: "2023-08-10",
            type: "Bowl"
        },
        {
            id: 8,
            name: "Floral Embellished Jug",
            price: 230,
            discount: 10,
            description: "A large jug with delicate floral embellishments.",
            image: "/images/products/8.png",
            manufactureDate: "2021-12-25",
            type: "Jug"
        },
        {
            id: 9,
            name: "Contemporary Vase",
            price: 260,
            discount: 15,
            description: "A contemporary styled vase that blends with modern decor.",
            image: "/images/products/9.png",
            manufactureDate: "2022-03-11",
            type: "Vase"
        },
        {
            id: 10,
            name: "Traditional Clay Mug",
            price: 80,
            discount: 5,
            description: "A traditional clay mug for hot beverages.",
            image: "/images/products/10.png",
            manufactureDate: "2023-02-05",
            type: "Mug"
        },
        {
            id: 11,
            name: "Decorative Plate",
            price: 140,
            discount: 10,
            description: "A decorative plate with hand-painted motifs.",
            image: "/images/products/11.png",
            manufactureDate: "2023-04-18",
            type: "Plate"
        },
        {
            id: 12,
            name: "Artistic Bowl",
            price: 200,
            discount: 10,
            description: "An artistic bowl that brings color and creativity to your table.",
            image: "/images/products/12.png",
            manufactureDate: "2022-10-05",
            type: "Bowl"
        },
        {
            id: 13,
            name: "Heritage Flower Vase",
            price: 320,
            discount: 18,
            description: "A flower vase inspired by heritage designs.",
            image: "/images/products/13.png",
            manufactureDate: "2023-03-22",
            type: "Vase"
        },
        {
            id: 14,
            name: "Miniature Clay Pots Set",
            price: 120,
            discount: 7,
            description: "A set of small clay pots for decoration.",
            image: "/images/products/14.png",
            manufactureDate: "2023-01-30",
            type: "Pottery Set"
        },
        {
            id: 15,
            name: "Classic Wine Jug",
            price: 280,
            discount: 12,
            description: "A classic-style wine jug for your elegant collection.",
            image: "/images/products/15.png",
            manufactureDate: "2023-06-14",
            type: "Jug"
        },
        {
            id: 16,
            name: "Abstract Sculpture Pot",
            price: 340,
            discount: 20,
            description: "An abstractly designed pot for modern art lovers.",
            image: "/images/products/2.png",
            manufactureDate: "2022-09-01",
            type: "Sculpture"
        },
        {
            id: 17,
            name: "Mediterranean Jar",
            price: 260,
            discount: 8,
            description: "A Mediterranean-style jar with decorative engravings.",
            image: "/images/products/6.png",
            manufactureDate: "2021-07-17",
            type: "Jar"
        },
        {
            id: 18,
            name: "Vintage Clay Pot",
            price: 190,
            discount: 10,
            description: "A vintage-inspired clay pot for collectors.",
            image: "/images/products/9.png",
            manufactureDate: "2023-09-19",
            type: "Pot"
        }
    ];

    return (
        <div className="products">
            <Container>
                <Row>
                    {products.map((product) => (
                        <Col md="4" key={product.id} className="mb-4">
                            <div className="product-card">
                                <div className="img_cover">
                                    <img src={product.image} alt={product.name} className="product-image img-fluid" />
                                </div>
                                <div className="product-details">
                                    <h5 className="product-name">{product.name}</h5>
                                    <p className="product-description">{product.description}</p>
                                    <div className="price-section">
                                        <span className="product-price">EGP {product.price}</span>
                                        {product.discount > 0 && (
                                            <span className="product-discount">-{product.discount}%</span>
                                        )}
                                    </div>

                                    <div className="button-oper">
                                        <button color="primary" className="add-to-cart" onClick={() => addItem(product)}>
                                            Add To Cart
                                        </button>
                                        <button className="details-btn" onClick={() => toggleModal(product)}>
                                            Details
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            {selectedProduct && (
                <Modal isOpen={modal} toggle={() => toggleModal(null)} centered>
                    <ModalHeader toggle={() => toggleModal(null)}>{selectedProduct.name}</ModalHeader>
                    <ModalBody className="modal-body">
                            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image img-fluid" />
                            <p><strong>Price:</strong> EGP {selectedProduct.price}</p>
                            <p><strong>Discount:</strong> {selectedProduct.discount}%</p>
                            <p><strong>Description:</strong> {selectedProduct.description}</p>
                            <p><strong>Type:</strong> {selectedProduct.type}</p>
                            <p><strong>Manufacture Date:</strong> {selectedProduct.manufactureDate}</p>

                    </ModalBody>
                </Modal>
            )}
        </div>
    );
}



function Product() {
    return (
        <CartProvider>
            <Page />
        </CartProvider>
    );
}
export default Product;