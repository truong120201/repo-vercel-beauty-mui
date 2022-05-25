import style from '../../../pages/Home2/Home2.module.css'
import phone from '../../../assets/images/phone-volume.svg'
import Image from 'next/image'

function RequestCall() {
    return (
        <>
            <div className={style.call}>
                <div className={style.callDesc}>
                    <p className={style.callDescHeading}>Request call services</p>
                    <p className={style.callDescText}>Lorem ipsum dolor sit amet, consect adipiscing elit <span className={style.contactUs}>Contact Us</span>.</p>
                </div>
                <div className={style.callRight}>
                    <div className={style.callInput}>
                        <input
                            type='text'
                            placeholder='Insert your phone number here ...'
                            className={style.callInputPlace}
                        />
                        <div className={style.phoneIcon}>
                            <Image src={phone} />
                        </div>
                    </div>
                    <p className={style.callFootText}>Toll free for our coverage areas.</p>
                </div>
            </div>
        </>
    )
}

export default RequestCall