import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance/axiosInstance';


function HomeServices () {

    const [ services, setServices ] = useState([]);

    useEffect(() => {
        async function fetchServices() {
        try {
          const response = await axiosInstance.get('services/');
          const lastFourSerives = response.data.slice(-4);
          if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }
          setServices(lastFourSerives);
        } catch (error) {
          console.error('Error:',error)
        }
    };

    fetchServices();

    }, []);

    const truncateText = (text, numWords) => {
        const words = text.split(' ');
        if (words.length > numWords) {
          return words.slice(0, numWords).join(' ') + '...';
        }
        return text;
    };

    return (
        <>
            <section className="px-4 py-14 bg-gradient-to-t from-orange-100">
                    <div className="container mx-auto max-w-screen-xl">
                        <div className="flex justify-center relative mb-14">
                            <h2 className="font-YekanBakh-ExtraBlack text-3xl">خـــــدمــــات مــــا</h2>
                            <div className="absolute -top-6">
                                <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">services</span>

                            </div>
                            <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            
                            {services.map((service) => (
                                
                            
                            <div key={service.id} className="bg-white p-6 rounded-3xl leading-8 transform hover:-translate-y-1 duration-300 transition-transform cursor-pointer">
                                <div className="w-16 mb-4">
                                    <img src={service.image} alt={service.title} />  
                                </div>
                                
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M13.98 5.31999L10.77 8.52999L8.79999 10.49C7.96999 11.32 7.96999 12.67 8.79999 13.5L13.98 18.68C14.66 19.36 15.82 18.87 15.82 17.92V12.31V6.07999C15.82 5.11999 14.66 4.63999 13.98 5.31999Z" fill="#b9a158"/>
                                    </svg>
                                    <Link to={'/services'} > <h2 className="font-YekanBakh-ExtraBold text-base mr-1">{service.title}</h2></Link>
                                </div>
                                <div>
                                <div dangerouslySetInnerHTML={{ __html: truncateText(service.text, 16) }} />
                                </div>
                            </div>

                            ))};
                        </div>
                    </div>
            </section>
        </>
    );
}

export default HomeServices;