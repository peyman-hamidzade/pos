import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <section className="px-4 static">
            <div className="container mx-auto max-w-screen-xl">
                <div className="flex justify-between items-center py-6">
                <div className="lg:hidden leading-none z-10">
                    <div className="drawer">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer-4" className="swap swap-rotate drawer-button">

                            <input type="checkbox" />
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-black swap-off fill-current">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-black swap-on fill-current">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                
                            </label> 
                        </div> 
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            <div className="drawer-content text-left">
                                <label htmlFor="my-drawer-4" className="swap swap-rotate drawer-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </label> 
                                </div> 
                                <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/'}>صفحه اصلی</Link></li>
                                <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/shop'}>فروشگاه</Link></li>
                                <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/'}>ثبت کارتخوان</Link></li>
                                <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/faq'}>سوالات متداول</Link></li>
                                <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/about'}>درباره ما</Link></li>
                                <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/contact'}>تماس با ما</Link></li>
                                <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/cart'}>سبد خرید</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <div>
                        <Link to={'/'}><img  alt="logo" style={{ maxWidth: '6rem' }} /></Link>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex menu lg:menu-horizontal">
                            <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/'}>صفحه اصلی</Link></li>
                            <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/shop'}>فروشگاه</Link></li>
                            <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/'}>ثبت کارتخوان</Link></li>
                            <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/faq'}>سوالات متداول</Link></li>
                            <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/about'}>درباره ما</Link></li>
                            <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/contact'}>تماس با ما</Link></li>
                            <li><Link className="hover:border-b hover:border-orange-200 pb-1 duration-300" to={'/cart'}>سبد خرید</Link></li>
                        </ul>
                    </div>
                </div>
                    <div className="border bg-stone-900 text-orange-200 hover:bg-orange-200 hover:text-stone-900 duration-300 rounded-full">
                        <Link to={'/register'} className="flex py-2.5 px-7 rounded-full font-YekanBakh-Regular">ورود | ثبت نام</Link>
                    </div>
            
                </div>
            </div>
            </section>
        </>
    );
}

export default Navbar;