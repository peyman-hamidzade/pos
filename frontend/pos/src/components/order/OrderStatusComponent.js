import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance/axiosInstance';
import { useNavigate, Link } from 'react-router-dom';


const OrderStatusList = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axiosInstance.get('order-status/');
                if (response.status === 200) {
                    if (response.data.length === 0) {
                        setMessage('شما هیچ سفارشی ندارید.');
                    } else {
                        setOrders(response.data);
                    }
                } else {
                    setMessage('عدم موفقیت در دریافت سفارش‌ها.');
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                } else {
                    setMessage('خطا در دریافت سفارش‌ها.');
                }
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('products/');
                if (response.status === 200) {
                    setProducts(response.data);
                } else {
                    setMessage('عدم موفقیت در دریافت محصولات.');
                }
            } catch (error) {
                setMessage('خطا در دریافت محصولات.');
            }
        };

        fetchOrders();
        fetchProducts();
    }, [navigate]);

    const getOrderStatusIndex = (status) => {
        const statuses = ['pending', 'registering_pos', 'shipped', 'delivered'];
        return statuses.indexOf(status);
    };

    const statusIcons = {
        pending: '🔄', 
        registering_pos: '📝', 
        shipped: '🚚', 
        delivered: '🏠' 
    };

    const getProductById = (id) => {
        const product = products.find(product => product.id === id);
        return product ? product.name : 'نامشخص';
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
                                
                                <Link to={''} className="mr-1 text-sm font-medium">پیگیری خرید</Link>
                            </div>
                        </li>
                    </ol>
                </nav>  
                <div className="flex justify-center relative my-16">
                    <h2 className="font-YekanBakh-ExtraBlack text-3xl">پـیـگـیـری خــریــد</h2>
                    <div className="absolute -top-6">
                        <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">order</span>

                    </div>
                    <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

                </div> 

            <div>
                {message && <p>{message}</p>}
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            <div className="order-tracking">
                                <div className="order-header">
                                    <p>محصولات سفارش شده: 
                                        {order.items.map(item => (
                                            <span key={item.id}> {getProductById(item.product)}</span>
                                        ))}
                                    </p>
                                    <p>مجموع قیمت سفارش: <span>{order.total}</span></p>
                                    <p>سفارش دهنده: <span>{order.first_name} {order.last_name}</span></p>
                                </div>
                                <div className="order-progress">
                                    {['pending', 'registering_pos', 'shipped', 'delivered'].map((step, index, array) => (
                                        <div key={step} className={`step ${getOrderStatusIndex(order.status) >= index ? 'completed' : ''}`}>
                                            <div className="circle">
                                                {getOrderStatusIndex(order.status) >= index && <span className="checkmark">✓</span>}
                                            </div>
                                            <p>{statusIcons[step]}</p>
                                            <p>{step === 'pending' ? 'منتظر پرداخت' :
                                                step === 'registering_pos' ? 'درحال ثبت کارتخوان' :
                                                step === 'shipped' ? 'ارسال شده' : 'تحویل داده شده'}
                                            </p>
                                            <div className="line completed"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
        </section>
        </>
    );
};

export default OrderStatusList;
