import React,{useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axiosInstance from '../components/axiosInstance/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            toast.error("لطفاً تمامی فیلدها را پر کنید.");
            return;
        }

        try {
            const response = await axiosInstance.post('login/', {
                username: username,
                password: password,
            });
            localStorage.setItem('authTokens', JSON.stringify(response.data));
            toast.success("با موفقیت وارد شدید.")
            navigate(from, { replace: true });
        } catch (error) {
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.detail || 'نام کاربری یا رمز عبور نادرست است .';
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
                    <h1 className="text-xl text-center font-YekanBakh-Bold">ورود</h1>
                </div>
                <form onSubmit={handleLogin}>
                <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <input type="text" 
                        name="username" 
                        placeholder="نام کاربری :"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input w-full rounded-full focus:outline-none placeholder:text-sm"/>

                        <input type="password" 
                        name="password" 
                        placeholder="رمز عبور:" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input w-full rounded-full focus:outline-none placeholder:text-sm" />

                        <button type='submit' className="btn bg-stone-800 w-full hover:bg-stone-900 text-white rounded-full text-sm">ورود</button>
                        <p className="mt-6 text-xs text-gray-600 text-center leading-8">
                            رمز عبور خود را فراموش کرده اید؟ 
                            <Link to={'/forgot-password'} className="border-b border-gray-500 border-dotted">
                                کلیک کنید.
                            </Link>
                            <br />
                            اگر اکانت ندارید
                            <Link to={'/register'} className="border-b border-gray-500 border-dotted">
                                ثبت نام کنید
                            </Link>
                        </p>
                    </div>
                </div>
                </form>
                </div>

            </div>
            </div>
            </div>
        </>
    )
}

export default Login;
