import style from '../../../pages/ContactPage/Contact.module.css'
import Image from 'next/image'

import map1 from '../../../assets/images/contact-map.svg'
import phone1 from '../../../assets/images/contact-phone.svg'
import mail1 from '../../../assets/images/contact-mail.svg'

function Handling() {
    return (
        <>
            <div className={style.handling}>
                <div className={style.handlingElement}>
                    <Image
                        className={style.handlingIcon}
                        src={map1}
                    />
                    <p className={style.title1}>Address</p>
                    <p className={style.title2}>101 Baker Street, NY</p>
                    <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                </div>
                <div className={style.handlingElement}>
                    <Image
                        className={style.handlingIcon}
                        src={phone1}
                    />
                    <p className={style.title1}>Phone</p>
                    <p className={style.title2}>+896 120 5889</p>
                    <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                </div>
                <div className={style.handlingElement}>
                    <Image
                        className={style.handlingIcon}
                        src={mail1}
                    />
                    <p className={style.title1}>Mail</p>
                    <p className={style.title2}>mail@company.com</p>
                    <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>

                </div>
            </div>
        </>
    )
}

export default Handling