import { Link } from "react-router-dom";

function HomeContact () {
    return (
        <>
            <section className="px-4 sm:px-0 mb-32">

                <div className="relative pt-20">
                    <div aria-hidden="true" className="hidden sm:block">
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-stone-900 rounded-r-3xl">
                        </div>
                        <svg className="absolute top-8 left-1/2 -ml-8" width="404" height="392" fill="none" viewBox="0 0 404 392">
                            <defs>
                                <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20"
                                    patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                                </pattern>
                            </defs>
                            <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"></rect>
                        </svg>
                    </div>
                    <div className="mx-auto px-4 lg:px-0 max-w-md sm:max-w-3xl lg:max-w-7xl">
                        <div className="relative rounded-3xl px-6 py-10 bg-stone-800 overflow-hidden shadow-xl sm:px-12 sm:py-16">
                            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"><svg
                                    className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                                    <path className="text-stone-700 text-opacity-40" fill="currentColor"
                                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path>
                                    <path className="text-stone-900 text-opacity-40" fill="currentColor"
                                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path>
                                </svg>
                            </div>
                            <div className="relative flex flex-col">
                                <div className="sm:text-center">
                                    <h2 className="font-YekanBakh-ExtraBlack text-4xl text-white">با مشـــاوران مـــا در ارتبـــاط باشیــــد...</h2>
                                    <p className="mt-6 mx-auto max-w-2xl text-base text-gray-100"> هرگونه نظر , انتقاد , پیشنهاد خودرا با ما درمیان بگذارید.</p>
                                </div>
                                <Link to={'/contact'} className="w-auto inline-block mt-5 mx-auto py-2 px-7 rounded-full bg-orange-200 hover:duration-300 font-YekanBakh-SemiBold">ارتباط با کارشناسان</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </>
    );
}

export default HomeContact;