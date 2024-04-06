import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance/axiosInstance";
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import productimage from '../../assets/images/product1.jpg'



function ProductDetail () {

    const [product, setProduct] = useState([]);
    const {slug} = useParams();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axiosInstance.get(`product/${slug}/`);
                if (response.status === 200) {
                    setProduct(response.data);
                } else {
                    console.error('Failed to fetch products. Status code:', response.status);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProduct();
    
    }, []);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const addToCart = () => {
        console.log(`Added ${quantity} product(s) to cart.`);
    };
    
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    

    return (
        <>

        <section className="px-4">
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
                                
                                <Link to={'/shop'} className="mr-1 text-sm font-medium">فروشگاه</Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                                
                                <Link to={''} className="mr-1 text-sm font-medium">{product.name}</Link>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="item-page-container">

                    <div className="item-info-container">
                        <div className="item-image">
                            <div id="" className="" data-ride="">
                                <div className="">
                                    <div className="">
                                        <img className="product-img" src={product.image} alt={product.name} />
                                    </div>
                                </div>
                                <a className="" data-slide="prev">
                                    <i className=""></i>
                                </a>
                                <a className="" data-slide="next">
                                    <i className=""></i>
                                </a>
                            </div>
                        </div>

                        <div className="item-info">
                            <h1 className="">{product.name}</h1>

                            <h3 className="">{product.price}ریال</h3>
                            <p className="item-information">{product.description}</p>
                            <div className="item-color">
                                <p className="">رنگ ها :</p>
                                <form className="item-color-form">
                                    <div className="item-color-div">
                                        <input type="radio" className="item-color-input" id="color-1" name="color" />
                                        <label className="item-color-label" for="color-1">Black</label>
                                    </div>
                                    <div className="item-color-div">
                                        <input type="radio" className="item-color-input" id="color-2" name="color" />
                                        <label className="item-color-label" for="color-2">White</label>
                                    </div>
                                    <div className="item-color-div">
                                        <input type="radio" className="item-color-input" id="color-3" name="color" />
                                        <label className="item-color-label" for="color-3">Red</label>
                                    </div>
                                    <div className="item-color-div">
                                        <input type="radio" className="item-color-input" id="color-4" name="color" />
                                        <label className="item-color-label" for="color-4">Blue</label>
                                    </div>
                                    <div className="item-color-div">
                                        <input type="radio" className="item-color-input" id="color-5" name="color" />
                                        <label className="item-color-label" for="color-5">Green</label>
                                    </div>
                                </form>
                            </div>
                            <div className="add-to-cart-container">
                                <div className="quantity-controls" style={{ width: '130px' }}>
                                    <div className="quantity-button-div">
                                        <button className="quantity-button" onClick={decreaseQuantity}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                    </div>
                                    <input type="text" className="quantity-input" value={quantity} readOnly />
                                    <div className="quantity-button-div">
                                        <button className="quantity-button" onClick={increaseQuantity}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </div>
                                <button className="add-to-cart-button" onClick={addToCart}>
                                    <FontAwesomeIcon icon={faCartPlus} /> افزودن به سبد خرید
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="product-tabs-container">
                        <div className="product-tabs">
                            <a className={`product-tab ${activeTab === 'description' ? 'active' : ''}`} onClick={() => handleTabChange('description')}>
                                توضیحات
                            </a>
                            <a className={`product-tab ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => handleTabChange('reviews')}>
                                نظرات (0)
                            </a>
                        </div>
                        <div className="tab-content">
                            <div className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`} id="tab-pane-description">
                                <h4 className="tab-title">توضیحات محصول</h4>
                                <p>{product.description}</p>
                                <p>{product.description}</p>
                            </div>
                            <div className={`tab-pane ${activeTab === 'reviews' ? 'active' : ''}`} id="tab-pane-reviews">
                                <div className="review-div">
                                    <div className="review-item">
                                    <h4 className="tab-title">Reviews for "Colorful Stylish Shirt"</h4>
                                        <div className="review-info">
                                            <img src={productimage} alt="Image" className="review-avatar" style={{ width: '45px' }} />
                                            <div className="review-details">
                                                <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leave-review">
                                        <h4 className="tab-title">Leave a review</h4>
                                        <small>Your email address will not be published. Required fields are marked *</small>
                                        <form className="review-form">
                                            <div className="form-group">
                                                <label htmlFor="message">Your Review *</label>
                                                <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Your Name *</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Your Email *</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Leave Your Review" className="review-btn" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>

        <section className="px-4 py-14 bg-gradient-to-t from-orange-100">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="flex justify-center relative mb-14">
                        <h2 className="font-YekanBakh-ExtraBlack text-3xl"> مــحــصــولــات مـشـابـه</h2>
                        <div className="absolute -top-6">
                            <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">similar products</span>

                        </div>
                        <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

                    </div>
                    
                    <div className='product-container'>

                        <div className='product-div'>
                            <Link to={'/'}>
                                <div className='product-image-div'>
                                    <img src={productimage} alt='product' />
                                </div>
                                <div className='product-title-div'>
                                    <h6>{}</h6>
                                    <h6>{} ریال</h6>
                                </div>
                            </Link>

                                <div className='product-cart-div'>
                                    <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                    <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                </div>
                        </div>
                    </div>

                </div>
        </section>
        </>
    )
};

export default ProductDetail;