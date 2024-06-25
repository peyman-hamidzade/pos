import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../components/axiosInstance/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [resetCode, setResetCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [step, setStep] = useState(1)

    const handleSendCode = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('send-reset-code/', {
                phone_number: phoneNumber,
            });
            toast.success(response.data.message)
            setStep(2)
        } catch (error) {
            if (error.response && error.response.data) {
            const errorMessage = error.response.data.error || 'خطایی رخ داد لطفا مجددا تلاش کنید .';
            toast.error(errorMessage);
        } else {
            toast.error('خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
        }
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('reset-password/', {
                phone_number: phoneNumber,
                reset_code: resetCode,
                new_password: newPassword,
                confirm_password: confirmPassword,
            });
            toast.success(response.data.message)
        } catch (error) {
            if (error.response && error.response.data) {
            const errorMessage = error.response.data.error || 'خطایی رخ داد لطفا مجددا تلاش کنید .';
            toast.error(errorMessage);
        } else {
            toast.error('خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
        }
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-sm sm:mx-auto">
            <div
                className="absolute inset-0 bg-stone-900 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-gradient-to-t from-orange-100 to-[#f5f1e4] sm:rounded-3xl sm:p-14">
        
                <div className="max-w-md mx-auto">
                <div>
                    <h1 className="text-xl text-center font-YekanBakh-Bold">بازیابی رمز عبور</h1>
                </div>
            {step === 1 && (

                <form onSubmit={handleSendCode}>
                <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <input type="text" 
                        name="phone_number" 
                        placeholder="شماره موبایل :"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="input w-full rounded-full focus:outline-none placeholder:text-sm"/>

                        <button type='submit' className="btn bg-stone-800 w-full hover:bg-stone-900 text-white rounded-full text-sm">ورود</button>
                        <p className="mt-6 text-xs text-gray-600 text-center leading-8">
                            اگر اکانت ندارید
                            <Link to={'/register'} className="border-b border-gray-500 border-dotted">
                                ثبت نام کنید
                            </Link>
                        </p>
                    </div>
                </div>
                </form>
            )};

            {step === 2 && (
                <form onSubmit={handleResetPassword}>
                <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <input type="text" 
                        name="phone_number" 
                        placeholder="شماره موبایل :"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="input w-full rounded-full focus:outline-none placeholder:text-sm"/>

                        <input type="text" 
                        name="reset_code" 
                        placeholder= "کد تایید :"
                        value={resetCode}
                        onChange={(e) => setResetCode(e.target.value)}
                        className="input w-full rounded-full focus:outline-none placeholder:text-sm"/>

                        <input type="text" 
                        name="new_password" 
                        placeholder="رمز عبور جدید :"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="input w-full rounded-full focus:outline-none placeholder:text-sm"/>

                        <input type="text" 
                        name="confirm_password" 
                        placeholder="تایید رمز عبور :"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input w-full rounded-full focus:outline-none placeholder:text-sm"/>

                        <button type='submit' className="btn bg-stone-800 w-full hover:bg-stone-900 text-white rounded-full text-sm">ورود</button>
                    </div>
                </div>
                </form>
            )}
                </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default ForgotPassword;
