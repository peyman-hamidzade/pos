import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../axiosInstance/axiosInstance';

function CheckoutComponent() {
    const location = useLocation();
    const { cart, total, discount } = location.state;

    const [order, setOrder] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        postal_code: '',
        city: '',
        discount: discount,
        total: total,
    });

    const handleOrderChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('orders/create/', {
                order,
                order_items: cart,
            });
            console.log('Order created:', response.data);
            // check the response and redirect user to payment gateway and clear the cart
            // show the status of orders
        } catch (error) {
            console.error('There was an error creating the order!', error);
        }
    };

    return (
        <>
            <div className="checkout-container">
                <div className="billing-address">
                    <h2>آدرس صورتحساب</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="checkout-form-group">
                            <label htmlFor="first_name">نام</label>
                            <input 
                                type="text" 
                                id="first_name" 
                                name="first_name"
                                placeholder="نام" 
                                value={order.first_name}
                                onChange={handleOrderChange} 
                            />
                        </div>

                        <div className="checkout-form-group">
                            <label htmlFor="last_name">نام خانوادگی</label>
                            <input 
                                type="text" 
                                id="last_name" 
                                name="last_name"
                                placeholder="نام خانوادگی" 
                                value={order.last_name}
                                onChange={handleOrderChange} 
                            />
                        </div>
    
                        <div className="checkout-form-group">
                            <label htmlFor="email">ایمیل</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                placeholder="ایمیل"
                                value={order.email}
                                onChange={handleOrderChange} 
                            />
                        </div>

                        <div className="checkout-form-group">
                            <label htmlFor="phone_number">شماره موبایل</label>
                            <input 
                                type="tel" 
                                id="phone_number" 
                                name="phone_number"
                                placeholder="09123456789"
                                value={order.phone_number}
                                onChange={handleOrderChange} 
                            />
                        </div>

                        <div className="checkout-form-group">
                            <label htmlFor="address">آدرس</label>
                            <input 
                                type="text" 
                                id="address" 
                                name="address"
                                placeholder="تهران خیابان انقلاب ..."
                                value={order.address}
                                onChange={handleOrderChange} 
                            />
                        </div>

                        <div className="checkout-form-group">
                            <label htmlFor="city">شهر</label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city"
                                placeholder="تهران"
                                value={order.city}
                                onChange={handleOrderChange} 
                            />
                        </div>

                        <div className="checkout-form-group">
                            <label htmlFor="postal_code">کد پستی</label>
                            <input 
                                type="text" 
                                id="postal_code" 
                                name="postal_code"
                                placeholder="123"
                                value={order.postal_code}
                                onChange={handleOrderChange} 
                            />
                        </div>

                        <button type="submit">تسویه حساب</button>
                    </form>
                </div>
                <div className="order-summary">
                    <h2>مجموع سفارش</h2>
                    <ul>
                        <li>محصولات</li>
                        {cart.map((item) => (
                            <div key={item.id}>
                                <li>{item.name} - تعداد {item.quantity} <span>{item.price}</span></li>
                            </div>
                        ))}
                        <li>هزینه ارسال <span>رایگان</span></li>
                        <li>مجموع <span>{total} ریال</span></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CheckoutComponent;
