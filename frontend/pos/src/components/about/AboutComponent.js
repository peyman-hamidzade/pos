import business_woman from '../../assets/images/business-woman.png'
import { Link } from 'react-router-dom';

function AboutComponent () {
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
                                    
                                    <Link to={''} className="mr-1 text-sm font-medium">درباره ما</Link>
                                </div>
                            </li>
                        </ol>
                    </nav>  
                    <div className="flex justify-center relative my-16">
                        <h2 className="font-YekanBakh-ExtraBlack text-3xl">دربـــــاره مـــــا</h2>
                        <div className="absolute -top-6">
                            <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">about</span>

                        </div>
                        <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

                    </div> 

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <div className="max-w-xl mx-auto p-8">
                        <div className="flow-root">
                        <ul className="-mb-8">
                    
                    
                            <li>
                            <div className="relative pb-8">
                                <span className="absolute top-5 right-5 -ml-px h-full w-0.5 bg-stone-200" aria-hidden="true"></span>
                                <div className="relative flex items-start space-x-3">
                                <div>
                                    <div className="relative px-1">
                                    <div className="h-8 w-8 bg-stone-800 rounded-full ring-8 ring-white flex items-center justify-center">
                                        <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1 py-0">
                                    <div className="text-md text-gray-500">
                                    <div>
                                        <span className="font-medium text-gray-900 mr-2"> ثبت شرکت  </span>
                    
                                        <span className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-2 text-xs">
                                        
                                        <div className="text-gray-900">3 اردیبهشت 1382</div>
                                        </span>
                                    </div>
                                    </div>
                                    <div className="mt-2 text-gray-700">
                                    <p className="leading-8 text-justify">
                                        صفحه درباره ما
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </li>
                    
                        </ul>
                        </div>
                    </div>
                    <div className="relative py-3 sm:max-w-sm sm:mx-auto">
                        <div
                        className="absolute inset-0 bg-stone-900 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative bg-gradient-to-t from-orange-100 to-[#f5f1e4] sm:rounded-3xl">
                    
                        <div className="max-w-md mx-auto">
                            <img src={business_woman} alt="business_woman" />
                        </div>
                    
                        
                        </div>
                    </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutComponent;