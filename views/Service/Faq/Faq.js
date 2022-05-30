import style from '../../../pages/Service/Service.module.css'
import Image from 'next/image'

import arrUp from '../../../assets/images/arrUp.svg'
import arrDown from '../../../assets/images/arrDown.svg'

function Faq() {
    return (
        <>
            <div className={style.serviceFAQ}>
                <p className={style.faqHeading}>Services FAQ’s</p>
                <div className={style.center}>
                    <div className={style.headingUnderline}></div>
                </div>
                <p className={style.faqQuestion}>Is beauty consultation handled thoroughly? <span className={style.arr}><Image src={arrUp} /></span></p>
                <p className={style.fqaAnswer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna <br /> <br />porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                <p className={style.faqQuestion}>Can I be beautiful in an instant time?<span className={style.arr}><Image src={arrDown} /></span></p>
                <p className={style.faqQuestion}>Are there any side effects to the treatment methods or treatments at this clinic?<span className={style.arr}><Image src={arrDown} /></span></p>
                <p className={style.faqQuestion}>Do professionals have accreditation in their respective fields?<span className={style.arr}><Image src={arrDown} /></span></p>
            </div>
        </>
    )
}

export default Faq