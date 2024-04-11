import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance/axiosInstance";

function ContactComponent () {

    const [ ticket, setTicket ] = useState({
        title : '',
        email : '',
        message : ''
    });


    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const latitude = 1;
    const longitude = 1;
    const location = "";

    const src = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodeURIComponent(location)}&ie=UTF8&t=&z=16&iwloc=B&output=embed&ll=${latitude},${longitude}`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicket({
            ...ticket,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axiosInstance.post('ticket/', ticket)
            setSuccessMessage('پیام شما با موفقیت ارسال شد.');
            setErrorMessage('');
            setTicket({
              title: '',
              email: '',
              message:'',
            });
        }catch (error){
            setErrorMessage('خطا در ارسال پیام لطفا دوباره تلاش کنید.');
            setSuccessMessage('');      
        }
    };
    
    const iframeStyles = {
        filter: 'grayscale(1) contrast(1.2)',
        opacity: 0.4,
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
                                    
                                    <Link to={''} className="mr-1 text-sm font-medium">تماس با ما</Link>
                                </div>
                            </li>
                        </ol>
                    </nav>  
                    <div className="flex justify-center relative my-16">
                        <h2 className="font-YekanBakh-ExtraBlack text-3xl">تمــــــاس بــــا مــــا</h2>
                        <div className="absolute -top-6">
                            <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">contact</span>

                        </div>
                        <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

                    </div> 

                    <div className="relative">
                        <div className="px-5 mx-auto flex sm:flex-nowrap flex-wrap">
                            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full mt-8 md:mt-0 mb-8 md:mb-0">
                                <div className="mr-2">
                                    <p className="font-YekanBakh-Bold text-base mb-2">پیغــام خــود را بـــا مـــا در میـــان بگذاریــــد...</p>
                                    <p className="mb-4 text-xs leading-6">جهت ارتباط با ما و ارسال نظرات و پیشنهادات خود می توانید از فرم زیر استفاده نمایید.</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                <div className="form-control w-full flex flex-col gap-y-5">

                                    <input type="text" placeholder="موضوع پیام"
                                     name="title" 
                                     value={ticket.title}
                                     onChange={handleChange}
                                     className="input w-full rounded-full focus:outline-none placeholder:text-sm" />

                                    <input type="email" placeholder="پست الکترونیکی:" 
                                    name="email" 
                                    value={ticket.email}
                                     onChange={handleChange}
                                    className="input w-full rounded-full focus:outline-none placeholder:text-sm" />

                                    <textarea name="message" 
                                    value={ticket.message}
                                    onChange={handleChange}
                                    className="textarea w-full h-32 rounded-3xl focus:outline-none placeholder:text-sm" 
                                    placeholder="متن پیام را بنویسید..."></textarea>

                                    <button type="submit" className="btn bg-stone-800 w-32 hover:bg-stone-900 text-white rounded-full text-sm">ارسال پیام</button>  
                                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                </div>
                                </form>
                                
                            </div>
                            <div className="lg:w-2/3 md:w-1/2 rounded-3xl overflow-hidden sm:mr-10 p-10 hidden md:flex items-end justify-start relative">
                                <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0"
                                    marginwidth="0" scrolling="no"
                                    src={src}
                                    style={iframeStyles}></iframe>
                                <div className="bg-white relative flex flex-wrap py-6 rounded-2xl mx-8">
                                    <div className="lg:w-1/2 px-6">
                                        <p className="font-YekanBakh-Bold text-base mb-2">مکـــان:</p>
                                        <p className="mb-4 text-xs leading-6">جهت ارتباط با ما و ارسال نظرات و پیشنهادات خود می توانید از فرم زیر استفاده نمایید.</p>
                                    </div>
                                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                        <p className="font-YekanBakh-Bold text-base mb-2">ایمیــل:</p>
                                        <a className="text-orange-500 leading-relaxed">test@gmail.com</a>
                                        <p className="font-YekanBakh-Bold text-base mb-2">تمـاس:</p>
                                        <p className="leading-relaxed">09052263270</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactComponent;