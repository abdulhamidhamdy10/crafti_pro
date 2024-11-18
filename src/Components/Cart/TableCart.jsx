import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CartProvider, useCart } from "react-use-cart";
// import './Cart.css'; // تأكد من استيراد ملف CSS

function Cart() {
    const {
        emptyCart,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        totalItems,
        cartTotal,
    } = useCart();

    if (isEmpty) return <h1 className='empty-cart text-center mb-5'>Your cart is empty!</h1>;

    return (
        <div className='alltable'>
            <h1 className="text-center">Cart ({totalUniqueItems})
                <button className="btn-deleteall" onClick={emptyCart}> Delete </button>
            </h1>

            <Container className='tablecart'>
                <Row className='rowone'>
                    <Col md="12" className='colone col-sm-12 table-responsive'>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th><h2>Item</h2></th>
                                    <th><h2>Name</h2></th>
                                    <th><h2>Price</h2></th>
                                    <th><h2>Quantity</h2></th>
                                    <th><h2>Operation</h2></th>
                                    <th><h2>Total</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} alt={item.name} className="item-image" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price} $</td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td className='operation'>
                                            <button className='btn-operates' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className='btn-operates' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn-operates' onClick={() => removeItem(item.id)}>&times;</button>
                                        </td>
                                        <td>{(item.price * item.quantity).toFixed(2)} $</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                    <Col md="6" className='coltwo text-center'>
                        <h2>Total items: {totalItems}</h2>
                    </Col>
                    <Col md="6" className='colthree text-center'>
                        <h2>Total price: {cartTotal.toFixed(2)} $</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

function TableCart() {
    return (
        <CartProvider>
            <Cart />
        </CartProvider>
    )
}

export default TableCart;
