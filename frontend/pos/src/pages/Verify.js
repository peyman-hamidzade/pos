import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../components/axiosInstance/axiosInstance';

const Verify = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [isPhoneSubmitted, setIsPhoneSubmitted] = useState(false);
    const navigate = useNavigate();

    const handlePhoneSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axiosInstance.post('send-code/', {
                phone_number: phoneNumber,
            });

            console.log(response.data);
            setIsPhoneSubmitted(true);
        } catch (error) {
            console.error('There was an error sending the data!', error);
        }
    };

    const handleCodeSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axiosInstance.post('verify-code/', {
                phone_number: phoneNumber,
                code: code,
            });

            console.log(response.data);
            navigate('/signup');
        } catch (error) {
            console.error('There was an error verifying the code!', error);
        }
    };

    return (
        <>
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-sm sm:mx-auto">
                    <div className="absolute inset-0 bg-stone-900 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-gradient-to-t from-orange-100 to-[#f5f1e4] sm:rounded-3xl sm:p-14">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-xl text-center font-YekanBakh-Bold">ثبت نام</h1>
                            </div>
                            <form onSubmit={isPhoneSubmitted ? handleCodeSubmit : handlePhoneSubmit}>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        {!isPhoneSubmitted && (
                                            <input
                                                type="text"
                                                name="phone_number"
                                                placeholder=" شماره تلفن :"
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                value={phoneNumber}
                                                className="input w-full rounded-full focus:outline-none placeholder:text-sm"
                                            />
                                        )}

                                        {isPhoneSubmitted && (
                                            <input
                                                type="password"
                                                name="code"
                                                placeholder=" کد تایید:"
                                                onChange={(e) => setCode(e.target.value)}
                                                value={code}
                                                className="input w-full rounded-full focus:outline-none placeholder:text-sm"
                                            />
                                        )}

                                        <button type="submit" className="btn bg-stone-800 w-full hover:bg-stone-900 text-white rounded-full text-sm">
                                            {isPhoneSubmitted ? 'ارسال کد' : 'ثبت نام'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Verify;
