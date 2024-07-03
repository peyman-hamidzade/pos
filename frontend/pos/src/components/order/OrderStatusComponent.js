import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance/axiosInstance';
const OrderStatusList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axiosInstance.get('order-status/');
                if (response.status === 200) {
                    setOrders(response.data);
                } else {
                    console.error('Failed to fetch orders. Status code:', response.status);
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            {orders ? (
                <>
                <h1>order status</h1>
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
                                        <p>product id: {item.product}</p>
                                        <p>Price: {item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                </>
            ): (
                <>
                    <p>there is no order</p>
                </>
            )}
        </div>
    );
};

export default OrderStatusList;
