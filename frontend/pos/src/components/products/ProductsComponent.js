import { Link } from "react-router-dom";
import image from '../../assets/images/product1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';


function ProductsComponent() {
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
                                
                                <Link to={''} className="mr-1 text-sm font-medium">فروشگاه</Link>
                            </div>
                        </li>
                    </ol>
                </nav>  
                <div className="flex justify-center relative my-16">
                    <h2 className="font-YekanBakh-ExtraBlack text-3xl">فـــروشــــگـــاه</h2>
                    <div className="absolute -top-6">
                        <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">shop</span>

                    </div>
                    <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

                </div> 

                <div className="shop-div">

                    <div className="filter-products-div">

                        <div className="filter-items">
                            <div className="">
                                <h5>فیلتر براساس قیمت</h5>
                                <form>
                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>

                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>

                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>

                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>

                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>

                                </form>
                            </div>
                        </div>

                        <div className="filter-items">

                            <div className="">
                                <h5>فیلتر براساس رنگ</h5>
                                <form>
                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>

                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>

                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>

                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>

                                <div className="filter-item">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="custom-label"
                                    />
                                    <label className="control-label" htmlFor="custom-label">
                                        همه قیمت ها
                                    </label>
                                </div>
                                </form>
                            </div>

                        </div>

                    </div>

                    <div className="list-products-div">

                        <div className="products-search">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="serach-input" placeholder="جستجوی نام محصول ..."
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <FontAwesomeIcon icon={faSearch} style={{ color: '#D19C97' }} />
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="list-products">
                            <div className='product-container'>
                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>

                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>

                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>

                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>

                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>

                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>

                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>

                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>

                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>

                                    <div className='product-div'>

                                        <Link to={'/'}>
                                            <div className='product-image-div'>
                                                <img src={image} alt='product' />
                                            </div>
                                            <div className='product-title-div'>
                                                <h6>کارتخوان g3</h6>
                                                <h6>12000000 ریال</h6>
                                            </div>
                                        </Link>

                                            <div className='product-cart-div'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                                <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                            </div>
                                    </div>
                                    
                            </div>
                        </div>

                        <div className="pagination-div">
                            <div class="pagination">
                                <a href="#">&laquo;</a>
                                <a href="#">1</a>
                                <a href="#" class="active">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
        </>
    )
};

export default ProductsComponent;

