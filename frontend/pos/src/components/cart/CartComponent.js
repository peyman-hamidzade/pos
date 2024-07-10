import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Coupon from '../coupon/Coupon';

const CartComponent = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [coupon, setCoupon] = useState('');
    const navigate = useNavigate();

    // Fetch cart from localStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
            const initialTotal = storedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotal(initialTotal);
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
            const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotal(newTotal);
        } else {
            localStorage.removeItem('cart');
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

    const handleCheckout = () => {
        navigate('/orders', { state: { cart, total, discount, coupon } });
    };

    return (
        <>
        <section className="px-4 mb-24">
        <div className="container mx-auto max-w-screen-xl">
            <nav className="flex mb-5 border-y border-orange-200 py-3" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
                    <li className="inline-flex items-center">
                        <Link to={'/'} className="inline-flex items-center">
                        خانه
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            
                            <Link to={''} className="mr-1 text-sm font-medium">سبد خرید</Link>
                        </div>
                    </li>
                </ol>
            </nav>  
            <div className="flex justify-center relative my-16">
                <h2 className="font-YekanBakh-ExtraBlack text-3xl">ســبــد خــریــد</h2>
                <div className="absolute -top-6">
                    <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">cart</span>

                </div>
                <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

            </div> 
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
                <Coupon total={total} setTotal={setTotal} setDiscount={setDiscount} setCoupon={setCoupon} />
                <div className="summary">
                    <p>هزینه ارسال <span>رایگان</span></p>
                    <p>جمع کل <span>{total} ریال</span></p>
                    <button onClick={handleCheckout}>ادامه جهت تسویه حساب</button>
                </div>
            </div>
        </div>
        </div>
        </section>
        </>
    );
};

export default CartComponent;
