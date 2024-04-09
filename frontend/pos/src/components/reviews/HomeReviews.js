import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom'
import avatar1 from '../../assets/images/avatar-1.jpg'
import avatar2 from '../../assets/images/avatar-2.jpg'
import avatar3 from '../../assets/images/avatar-3.jpg'
import avatar4 from '../../assets/images/avatar-4.jpg'

function HomeReviews() {
    
    return (
        <section className="px-4 py-20 mb-16 bg-gradient-to-t from-orange-100">
        <div className="container mx-auto max-w-screen-xl">
            <div className="flex justify-center relative mb-14">
                <h2 className="font-YekanBakh-ExtraBlack text-3xl">نظــــــرات مشتریــــــان</h2>
                <div className="absolute -top-6">
                    <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">customer</span>

                </div>
                <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

            </div>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-5 relative">
                    <div className="leading-8">
                        <h2 className="font-YekanBakh-ExtraBlack text-3xl my-4">از زبان مشتریان ما بشنوید...</h2>
                         <p className="mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                        <div className="flex justify-end">
                            <Link to={'/login'} className="mt-4 py-1 px-7 rounded-full bg-orange-200 hover:duration-300 font-YekanBakh-SemiBold">بیشتر بخوانید...</Link>

                        </div>                
                    </div>
                    <div className="absolute bottom-5 right-5 rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="68" viewBox="0 0 109 78" fill="none">
                            <path d="M36.0266 66.768C40.3387 75.6038 51.9952 81.3138 60.8919 75.5938C67.5514 71.2493 70.4477 62.336 68.0942 54.8302C65.2375 46.0433 56.4003 40.4115 47.4782 39.5612C44.3548 39.2999 41.2098 39.53 38.1576 40.243L38.2775 39.8231C38.6511 38.4786 39.1418 36.8393 39.6446 35.5246C40.6743 32.6897 41.9597 29.9547 43.4849 27.3534C50.7521 14.6662 63.6009 5.64893 78.0733 3.41599C87.7236 1.80126 97.6351 3.0113 106.616 6.90071C106.898 7.02838 107.219 7.03886 107.508 6.92976C107.797 6.82066 108.031 6.60095 108.159 6.31899C108.286 6.03703 108.297 5.71589 108.188 5.42623C108.079 5.13658 107.859 4.90212 107.577 4.77445C102.919 2.66878 97.9808 1.24812 92.9165 0.556455C91.0181 0.30588 89.108 0.155134 87.1939 0.10487C76.3232 -0.231216 65.3439 2.82574 56.2945 8.90015C45.21 16.4576 37.1356 28.3169 34.1714 41.4154C30.8272 42.6224 27.6508 44.2519 24.719 46.2645C17.2668 51.3381 11.5767 58.3123 6.25754 65.3874L4.32513 55.5442C4.21348 54.9687 4.04118 54.5036 3.58733 54.1174C3.1603 53.7631 2.61237 53.589 2.0595 53.632C1.03476 53.7667 -0.0751006 54.7492 0.152237 55.9018L3.4667 72.7802C3.59858 73.4554 3.83724 73.9674 4.42905 74.3496C4.93432 74.6769 5.70826 74.866 6.28082 74.5693C8.28406 73.5306 10.3861 72.6951 12.5555 72.0754C13.0841 71.9248 13.616 71.7895 14.1505 71.6618C14.16 71.6602 14.1697 71.6594 14.1795 71.6593L14.1949 71.658L14.6197 71.5689C14.8744 71.5178 15.1293 71.4687 15.3866 71.4252C16.5252 71.2236 17.6736 71.0816 18.8271 70.9997C19.9208 70.9196 20.8808 69.8485 20.7345 68.7318C20.6774 68.1816 20.4094 67.6749 19.9868 67.3183C19.5643 66.9617 19.0202 66.783 18.4689 66.8197C16.059 66.9973 13.6732 67.418 11.3479 68.0755C17.3553 59.8941 24.1387 51.7672 33.1518 47.4745C32.4431 54.0238 32.9999 60.8392 36.0266 66.768ZM37.0777 45.8938C38.14 45.5436 39.2203 45.2505 40.3139 45.0158C44.7557 44.091 49.3392 44.3652 53.5171 46.1349C57.5542 47.7841 61.2045 50.8297 63.0637 54.7952C66.8271 62.3421 61.7607 73.8441 52.6583 73.6178C48.3381 73.5745 44.0947 71.0869 41.3971 67.7257C39.2731 65.0564 37.9645 61.7653 37.2881 58.4181C36.4777 54.3256 36.5125 50.0496 37.0777 45.8938Z" fill="#1E1E1E"/>
                          </svg>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 ">
            
                    <div className="swiper customer">
                        <div className="swiper-wrapper">
                            <Swiper
                            spaceBetween={15}
                            slidesPerView={1}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 2500,
                              }}
                            >

                        <SwiperSlide>
                          <div className="swiper-slide">
                            <div className="bg-white p-6 leading-8 rounded-3xl">
                                <div className="flex items-center mb-4">
                                    <div className="avatar ml-4">
                                        <div className="w-20 rounded-full">
                                            <img src={avatar2} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-YekanBakh-Bold text-slate-800 text-sm">سهیلا صادقی</h3>
                                        <p>طراح گرافیک</p>
                                    </div>
        
                                </div>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="swiper-slide">
                            <div className="bg-white p-6 leading-8 rounded-3xl">
                                <div className="flex items-center mb-4">
                                    <div className="avatar ml-4">
                                        <div className="w-20 rounded-full">
                                            <img src={avatar4} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-YekanBakh-Bold text-slate-800 text-sm">فرهاد یاسری</h3>
                                        <p>طراح گرافیک</p>
                                    </div>
        
                                </div>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="swiper-slide">
                            <div className="bg-white p-6 leading-8 rounded-3xl">
                                <div className="flex items-center mb-4">
                                    <div className="avatar ml-4">
                                        <div className="w-20 rounded-full">
                                            <img src={avatar1} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-YekanBakh-Bold text-slate-800 text-sm">نوید محمودی</h3>
                                        <p>طراح گرافیک</p>
                                    </div>
        
                                </div>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="swiper-slide">
                            <div className="bg-white p-6 leading-8 rounded-3xl">
                                <div className="flex items-center mb-4">
                                    <div className="avatar ml-4">
                                        <div className="w-20 rounded-full">
                                            <img src={avatar3} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-YekanBakh-Bold text-slate-800 text-sm">سارا توحیدی</h3>
                                        <p>طراح گرافیک</p>
                                    </div>
        
                                </div>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            </div>
                          </div>
                        </SwiperSlide>
                            
                        </Swiper>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HomeReviews;