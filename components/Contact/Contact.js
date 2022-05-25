import style from './Contact.module.css'
import Image from 'next/image'

import contactImg from '../../assets/images/contact-image.svg'

function Contact(props) {
    return (
        <div className={style.contact}>
            <div className={`${style.contactTop} ${props.flexRow == true ? style.flexRow : ''}`}>
                <div className={style.contactTopEle}>
                    <p className={style.contactTitleTop}>Contact Us</p>
                    <p className={style.contactTitleBot}>Send your inquiry to our expert team</p>
                </div>
                <p className={style.contactTopDesc}>
                    Lorem ipsum dolor sit amet nulla turapis tellus.
                </p>
            </div>
            <div className={style.contactBot}>
                <div className={style.contactImage}>
                    <Image
                        src={contactImg}
                    />
                </div>
                <form id='myform' className={style.formContact}>
                    <div className={style.contactRow}>
                        <input
                            type='text'
                            placeholder='First name'
                            className={style.formInputShort}
                        />
                        <input
                            type='text'
                            placeholder='Last name'
                            className={style.formInputShort}
                        />
                    </div>
                    <input
                        type='text'
                        placeholder='Email address'
                        className={style.formInputLong}
                    />
                    <input
                        type='text'
                        placeholder='Subject message'
                        className={style.formInputLong}
                    />
                    <textarea
                        placeholder='Your inquiry here'
                        rows="40"
                        className={style.formTextarea}
                    ></textarea>
                </form>
            </div>
            <div className={style.submitBtnWrapper}>
                <input
                    className={style.submitContactFormButton}
                    type="submit"
                    form="myform"
                    value="Send Message"
                />
            </div>
        </div>
    )
}

export default Contact