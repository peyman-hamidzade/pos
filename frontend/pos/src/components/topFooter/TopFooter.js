import t_express from '../../assets/images/t-express.png'
import t_origin from '../../assets/images/t-origin.png'
import t_payment from '../../assets/images/t-payment.png'
import t_support from '../../assets/images/t-support.png'

function TopFooter() {
    return (
        <>
        <div className="top-footer">

            <div className="footer-icon">
                <img src={t_origin} alt="ضمانت اصلی بودن کالا"/>
                <p>ضمانت اصلی بودن کالا</p>
            </div>

            <div className="footer-icon">
                <img src={t_support} alt="پشتیبانی ۲۴ ساعته" />
                <p>پشتیبانی ۲۴ ساعته</p>
            </div>

            <div className="footer-icon">
                <img src={t_express} alt="تحویل اکسپرس" />
                <p>تحویل اکسپرس</p>
            </div>

            <div className="footer-icon">
                <img src={t_payment} alt="پرداخت در محل" />
                <p>پرداخت در محل</p>
            </div>
        </div>
        </>
    )
}

export default TopFooter;