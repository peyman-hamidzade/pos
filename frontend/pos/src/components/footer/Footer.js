import enamad_logo from '../../assets/images/enamad_logo.png'
import samandehi_logo from '../../assets/images/samandehi_logo.png'
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <>
        <footer class="p-10 bg-stone-800 text-white">
        <div class="container mx-auto max-w-screen-xl">
            <div class="grid grid-cols-12 gap-4 leading-8">
                <div class="col-span-12 lg:col-span-5">
                    <img class="mb-4" src="" alt="logo" />
                    <p>
                                    ما یک تیم متخصص در زمینه فروش، ثبت و تعمیر کارتخوان های امانی و تجاری هستیم. با سال‌ها تجربه در این حوزه، به عنوان یکی از پیشگامان در ارائه خدمات مرتبط با کارتخوان، به رسالت خود برای ارائه خدماتی بی‌نظیر و با کیفیت به مشتریان پایبندیم.
                                    <br />
                    </p>
                </div>
                <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 text-right md:text-center">
                    <h3 class="font-IRANSansWeb_Bold text-white mb-4 text-base">دسترسی سریع</h3>
                    <ul>
                        <li><Link to={'/'}>صفحه اصلی</Link></li>
                        <li><Link to={'/about'}>درباره ما</Link></li>
                        <li><Link to={'/contact'}>تماس با ما</Link></li>
                        <li><Link to={'/cart'}>سبد خرید</Link></li>
                        <li><Link to={'/shop'}>فروشگاه</Link></li>
                    </ul>
                </div>
                <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 text-right md:text-center">
                    <h3 class="font-IRANSansWeb_Bold text-white mb-4 text-base">خدمات شرکت</h3>
                    <ul>
                        <li><Link to={'/track-order'}>پیگیری خرید</Link></li>
                        <li><Link to={'/services'}>خدمات</Link></li>
                        <li><Link to={'/register'}>ثبت نام</Link></li>
                        <li><Link to={'/login'}>ورود</Link></li>
                        <li><Link to={'/faq'}>سوالات متداول</Link></li>
                    </ul>
                </div>
                <div class="col-span-12 md:col-span-4 lg:col-span-3">
                    <h3 class="font-IRANSansWeb_Bold text-white mb-4 text-base">عضویت در خبرنامه</h3>
                    <div class="flex items-center">
                      <img src={enamad_logo} alt="e-namad" />
                      <img src={samandehi_logo} alt="samandehi" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  
    <footer class="footer footer-center p-4 bg-stone-700 text-white">
    <div>
        <p>Copyright © 2024 - تمامی حقوق برای شرکت ارتباط پاسارگاد محفوظ می باشد</p>
    </div>
    </footer>
        </>
    );
}

export default Footer;