import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../components/axiosInstance/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

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

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!username || !password || !confirmPassword || !phoneNumber) {
            toast.error("لطفاً تمامی فیلدها را پر کنید.");
            return;
        }

        const usernameRegex = /^[a-zA-Z0-9]+$/;
        if (!usernameRegex.test(username)) {
            toast.error("نام کاربری باید فقط شامل حروف انگلیسی و بدون فاصله باشد.");
            return;
        }

        const phoneNumberRegex = /^[0-9]+$/;
        if (!phoneNumberRegex.test(phoneNumber)) {
            toast.error("شماره تلفن باید فقط شامل اعداد باشد.");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("رمز عبور باهم مطابقت ندارد.");
            return;
        }

        const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);

        try {
            const response = await axiosInstance.post('register/', {
                username,
                password,
                confirm_password: confirmPassword,
                phone_number: normalizedPhoneNumber,
            });
            toast.success(response.data.message)
            setStep(2);
        } catch (error) {
            toast.error("خطا در ثبت نام. لطفاً دوباره تلاش کنید.");
        }
    };

    const handleVerifyPhone = async (e) => {
        e.preventDefault();
        const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
        try {
            const response = await axiosInstance.post('verify-phone/', {
                phone_number: normalizedPhoneNumber,
                verification_code: verificationCode,
            });
            toast.success(response.data.message)
            navigate('/login')
        } catch (error) {
            console.error(error);
            toast.error("خطا در تایید شماره موبایل. لطفاً دوباره تلاش کنید.");
        }
    };

    return (
        <>
            <Helmet>
                <title>
                    ثبت نام
                </title>
            </Helmet>
            <ToastContainer />
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-sm sm:mx-auto">
                    <div className="absolute inset-0 bg-stone-900 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-gradient-to-t from-orange-100 to-[#f5f1e4] sm:rounded-3xl sm:p-14">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-xl text-center font-YekanBakh-Bold">ثبت نام</h1>
                            </div>
                            {step === 1 && (
                                <form onSubmit={handleRegister}>
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="نام کاربری :"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                className="input w-full rounded-full focus:outline-none placeholder:text-sm"
                                            />
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="رمز عبور:"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="input w-full rounded-full focus:outline-none placeholder:text-sm"
                                            />
                                            <input
                                                type="password"
                                                name="password2"
                                                placeholder=" تکرار رمز عبور:"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="input w-full rounded-full focus:outline-none placeholder:text-sm"
                                            />
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                placeholder=" شماره موبایل:"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                className="input w-full rounded-full focus:outline-none placeholder:text-sm"
                                            />
                                            <button type="submit" className="btn bg-stone-800 w-full hover:bg-stone-900 text-white rounded-full text-sm">
                                                ثبت نام
                                            </button>
                                            <p className="mt-6 text-xs text-gray-600 text-center leading-8">
                                                قبلا حساب کاربری ساخته اید؟
                                                <Link to={'/login'} className="border-b border-gray-500 border-dotted">
                                                    وارد شوید.
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            )}

                            {step === 2 && (
                                <form onSubmit={handleVerifyPhone}>
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <input
                                                type="text"
                                                name="verificationCode"
                                                placeholder=" کد تایید :"
                                                value={verificationCode}
                                                onChange={(e) => setVerificationCode(e.target.value)}
                                                className="input w-full rounded-full focus:outline-none placeholder:text-sm"
                                            />
                                            <button type="submit" className="btn bg-stone-800 w-full hover:bg-stone-900 text-white rounded-full text-sm">
                                                ارسال کد
                                            </button>
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

export default Register;
