function CheckoutComponent() {
    return (
        <>
        <div class="checkout-container">
            <div class="billing-address">
                <h2>آدرس صورتحساب</h2>
                <form>
                    <div class="checkout-form-group">
                        <label for="first-name">نام</label>
                        <input type="text" id="first-name" placeholder="نام" />
                    </div>
                    <div class="checkout-form-group">
                        <label for="last-name">نام خانوادگی</label>
                        <input type="text" id="last-name" placeholder="نام خانوادگی" />
                    </div>
                    <div class="checkout-form-group">
                        <label for="email">ایمیل</label>
                        <input type="email" id="email" placeholder="example@email.com" />
                    </div>
                    <div class="checkout-form-group">
                        <label for="mobile">شماره موبایل</label>
                        <input type="tel" id="mobile" placeholder="+123 456 789" />
                    </div>
                    <div class="checkout-form-group">
                        <label for="address-line1">آدرس </label>
                        <input type="text" id="address-line1" placeholder="123 Street" />
                    </div>
                    <div class="checkout-form-group">
                        <label for="city">شهر</label>
                        <input type="text" id="city" placeholder="New York" />
                    </div>
                    <div class="checkout-form-group">
                        <label for="state">استان</label>
                        <input type="text" id="state" placeholder="New York" />
                    </div>
                    <div class="checkout-form-group">
                        <label for="zip">کد پستی</label>
                        <input type="text" id="zip" placeholder="123" />
                    </div>
                </form>
            </div>
            <div class="order-summary">
                <h2>مجموع سفارش</h2>
                <ul>
                    <li>محصولات</li>
                    <li>پیراهن شیک رنگارنگ 1 <span>$150</span></li>
                    <li>پیراهن شیک رنگارنگ 2 <span>$150</span></li>
                    <li>پیراهن شیک رنگارنگ 3 <span>$150</span></li>
                    <li>جمع جزء <span>$450</span></li>
                    <li>هزینه ارسال <span>$10</span></li>
                    <li>مجموع <span>$460</span></li>
                </ul>
            </div>
        </div>
        </>
    )
};

export default CheckoutComponent;
