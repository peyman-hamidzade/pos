import React, { useState } from 'react';
import axiosInstance from '../axiosInstance/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Coupon = ({ total, setTotal, setDiscount, setCoupon }) => {
    const [couponCode, setCouponCode] = useState('');

    const applyCoupon = async () => {
        try {
            const response = await axiosInstance.post('validate/', { code: couponCode });
            const { discount } = response.data;
            const newTotal = total - (total * discount / 100);
            setTotal(newTotal);
            setDiscount(discount);
            setCoupon(couponCode);
            toast.success('تخفیف اعمال شد.');
            setCouponCode('');
        } catch (error) {
            toast.error('کد تخفیف نادرست است.');
        }
    };

    return (
        <>
            <div className="coupon">
                <input
                    type="text"
                    placeholder="کد تخفیف"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />
                <button type="button" onClick={applyCoupon}>اعمال کد</button>
                <ToastContainer />
            </div>
        </>
    );
};

export default Coupon;
