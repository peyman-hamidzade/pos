import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance/axiosInstance";

function ServiceComponent() {

    const [ services, setServices ] = useState([]);

    useEffect(() => {
        async function fetchServices() {
        try {
          const response = await axiosInstance.get('services/');
          if (response.status !== 200) {
          }
          setServices(response.data);
        } catch (error) {
          console.error('Error:', error)
        }
    };

    fetchServices();

    }, []);


    return (
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
                              
                            <Link to={'/services'} className="mr-1 text-sm font-medium">خدمات</Link>
                        </div>
                    </li>
                </ol>
            </nav>  
            <div className="flex justify-center relative my-16">
                <h2 className="font-YekanBakh-ExtraBlack text-3xl">خــــــــدمــــــــات مــــــا</h2>
                <div className="absolute -top-6">
                    <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">services</span>

                </div>
                <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

            </div> 

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">

                {services.map((service) => (

                <div key={service.id} className="space-y-4">

                    <div className="bg-white p-6 rounded-3xl leading-8 transform hover:-translate-y-1 duration-300 transition-transform cursor-pointer">
                        <div className="w-16 mb-4">
                            <img src={service.image} alt={service.title} />  
                        </div>
                        
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13.98 5.31999L10.77 8.52999L8.79999 10.49C7.96999 11.32 7.96999 12.67 8.79999 13.5L13.98 18.68C14.66 19.36 15.82 18.87 15.82 17.92V12.31V6.07999C15.82 5.11999 14.66 4.63999 13.98 5.31999Z" fill="#b9a158"/>
                              </svg>
                              <h2 className="font-YekanBakh-ExtraBold text-base mr-1">{service.title}</h2>
                        </div>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: service.text }} />
                            
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </section>
    )
};


export default ServiceComponent;