import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance/axiosInstance";

function FaqComponent() {

    const [ faqs, setFaqs ] = useState([]);

    useEffect(() => {
      async function fetchFaq() {
        try {
          const response = await axiosInstance.get('faq/');
          if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }
          setFaqs(response.data);
        } catch (error) {
          console.error('Error',error)
        }
      }
  
      fetchFaq();
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
                              
                            <Link to={''} className="mr-1 text-sm font-medium">سوالات متداول</Link>
                        </div>
                    </li>
                </ol>
            </nav>  
            <div className="flex justify-center relative my-16">
                <h2 className="font-YekanBakh-ExtraBlack text-3xl">ســــــــوالات مــــتـــــداول</h2>
                <div className="absolute -top-6">
                    <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">questions</span>

                </div>
                <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

            </div> 

            <div className="max-w-4xl mx-auto">
              {faqs.map((faq) => (

                  <div key={faq.id} className="collapse collapse-plus bg-white rounded-3xl my-4">
                    <input type="radio" name="my-accordion-3" checked="checked" /> 
                    <div className="collapse-title text-base font-YekanBakh-Bold">
                      {faq.question}
                    </div>
                    <div className="collapse-content leading-8"> 
                    <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
    )
};


export default FaqComponent;