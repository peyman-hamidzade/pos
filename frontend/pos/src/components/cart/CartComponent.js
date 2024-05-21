import React, { useState, useEffect } from "react";

const CartComponent = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const removeProduct = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            )
        );
    };

    return (
        <div className="cart-container">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>محصولات</th>
                        <th>قیمت</th>
                        <th>تعداد</th>
                        <th>جمع</th>
                        <th>حذف</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td className="cart-product-image">
                                <img src={`https://epasargad.liara.run/${item.image}`} alt={item.name} />
                                <p>{item.name}</p>
                            </td>
                            <td>{item.price} ریال</td>
                            <td>
                                <button className="qty-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                                <input type="text" value={item.quantity} readOnly className="qty-input" />
                                <button className="qty-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                            </td>
                            <td>{item.price * item.quantity} ریال</td>
                            <td><button className="remove-btn" onClick={() => removeProduct(item.id)}>x</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cart-summary">
                <div className="coupon">
                    <input type="text" placeholder="کد تخفیف" disabled />
                    <button disabled>اعمال کد</button>
                </div>
                <div className="summary">
                    <p>هزینه ارسال <span>رایگان</span></p>
                    <p>جمع کل <span>{cart.reduce((total, item) => total + item.price * item.quantity, 0)} ریال</span></p>
                    <button>ادامه جهت تسویه حساب</button>
                </div>
            </div>
        </div>
    );
};

export default CartComponent;
