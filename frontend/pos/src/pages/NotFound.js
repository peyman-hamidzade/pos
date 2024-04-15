import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/404.png'
import { Helmet } from 'react-helmet';

function NotFound () {
    return (
        <>
        <Helmet>
        <title> صفحه مورد نظر پیدانشد</title>
        </Helmet>

    <body class="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
    <section class="px-4 mb-24">
    <div class="container mx-auto max-w-screen-xl">
        <nav class="flex mb-5 border-y border-orange-200 py-3" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2">
                <li class="inline-flex items-center">
                    <Link to={'/'} class="inline-flex items-center">
                    خانه
                    </Link>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        
                        <Link to={''} class="mr-1 text-sm font-medium">404</Link>
                    </div>
                </li>
            </ol>
        </nav>  
        <div class="container mx-auto max-w-screen-md text-center leading-10">
            <img class="w-3/4 mb-8 mx-auto" src={image} alt="NotFound" />
            <p class="text-xl mb-4">صفحه مورد نظر شما یافت نشد!!</p>
            <Link class="bg-stone-800 text-white hover:bg-orange-200 hover:text-stone-900 duration-300 py-2.5 px-6 rounded-full" to={'/'}>بازگشت به صفحه اصلی</Link>
        </div>
    </div>
    </section>
    </body>
</>
)
};


export default NotFound;
