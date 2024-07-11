import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance/axiosInstance';

function normalizePhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return '0' + cleaned;
    } else if (cleaned.length === 12 && cleaned.startsWith('989')) {
        return '0' + cleaned.slice(2);
    } else if (cleaned.length === 11 && cleaned.startsWith('09')) {
        return cleaned;
    }
    return cleaned;
}

function CheckoutComponent() {
    const location = useLocation();
    const navigate = useNavigate();

    const { cart, total, discount, coupon } = location.state || { cart: [], total: 0, discount: 0, coupon: '' };

    useEffect(() => {
        if (!location.state || !location.state.cart || location.state.cart.length === 0) {
            navigate('/cart');
        }
    }, [location.state, navigate]);

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
        coupon: coupon,
    });

    const handleOrderChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const normalizedPhoneNumber = normalizePhoneNumber(order.phone_number);
        try {
            const response = await axiosInstance.post('orders/create/', {
                first_name: order.first_name,
                last_name: order.last_name,
                email: order.email,
                phone_number: normalizedPhoneNumber,
                address: order.address,
                postal_code: order.postal_code,
                city: order.city,
                discount: order.discount,
                total: order.total,
                coupon: order.coupon,
                order_items: cart.map(item => ({
                    id: item.id,
                    quantity: item.quantity,
                    price: item.price
                }))
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
                            
                            <Link to={''} className="mr-1 text-sm font-medium">صورتحساب </Link>
                        </div>
                    </li>
                </ol>
            </nav>  
            <div className="flex justify-center relative my-16">
                <h2 className="font-YekanBakh-ExtraBlack text-3xl">صــورتــحــســاب</h2>
                <div className="absolute -top-6">
                    <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">checkout</span>

                </div>
                <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

            </div> 
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
                            <button type="submit" className='checkout-button' >تسویه حساب</button>
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
                            <li> تخفیف <span>{discount} %</span></li>
                            <li>مجموع <span>{total} ریال</span></li>
                        </ul>
                    </div>
                </div>

                </div>
        </section>
        </>
    );
}

export default CheckoutComponent;
