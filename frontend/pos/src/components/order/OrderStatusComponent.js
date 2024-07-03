import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance/axiosInstance';
import { useNavigate } from 'react-router-dom';

const OrderStatusList = () => {
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axiosInstance.get('order-status/');
                if (response.status === 200) {
                    if (response.data.length === 0) {
                        setMessage('You do not have any orders.');
                    } else {
                        setOrders(response.data);
                    }
                } else {
                    setMessage('Failed to fetch orders.');
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                } else {
                    setMessage('Error fetching orders.');
                }
            }
        };

        fetchOrders();
    }, [navigate]);

    return (
        <div>
            <h1>Order Status</h1>
            {message && <p>{message}</p>}
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <p>First Name: {order.first_name}</p>
                        <p>Last Name: {order.last_name}</p>
                        <p>Status: {order.status}</p>
                        <p>Total: {order.total}</p>
                        <h4>Items:</h4>
                        <ul>
                            {order.items.map(item => (
                                <li key={item.id}>
                                    <p>Product ID: {item.product}</p>
                                    <p>Price: {item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderStatusList;
