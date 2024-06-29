import React, { useState } from 'react';
import axiosInstance from '../axiosInstance/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Coupon =({total, setTotal, setDiscount}) => {

    const [coupon, setCoupon] = useState('');

    const applyCoupon = async () => {
        try {
            const response = await axiosInstance.post('validate/', { code: coupon })
            const { discount } = response.data;
            const newTotal = total - (total * discount / 100);
            setTotal(newTotal)
            setDiscount(discount);
            toast.success('تخفیف اعمال شد.');
            setCoupon('')
        }catch(error) {
            toast.error('کد تخفیف نادرست است.');
        }
    }

    return (
        <>  
            <div className="coupon">
                <input type="text" 
                placeholder="کد تخفیف" 
                value={coupon} 
                onChange={(e) => setCoupon(e.target.value)}/>
                <button type='button' onClick={applyCoupon} >اعمال کد</button>
                <ToastContainer />
            </div>
        </>
    )
};

export default Coupon;