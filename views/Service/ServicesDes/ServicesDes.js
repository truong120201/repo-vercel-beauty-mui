import style from '../../../pages/Service/Service.module.css'
import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import serviceDesc1 from '../../../assets/images/service-desc-img-1.svg'
import serviceDesc2 from '../../../assets/images/service-desc-img-2.svg'
import serviceDesc3 from '../../../assets/images/service-desc-img-3.svg'
import arrDouble from '../../../assets/images/angle-double-right.svg'

function ServiesDes() {
    return (
        <>
            <div className={style.serviceDes}>
                <div className={style.serviceDesImg}>
                    <Image
                        layout='responsive'
                        src={serviceDesc1}
                    />
                </div>
                <div className={style.serviceTitleAndDesc}>
                    <TitleAndDesc
                        left={true}
                        title1={'Beauty Consultation'}
                        title2={'We services beauty consultation'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.'}
                    />
                    <div className={style.serviceDesFooter}>
                        <p className={style.serviceDesFooterText}>Make an Appointment</p>
                        <div className={style.dbArrr}>
                            <Image src={arrDouble} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.serviceDes}>
                <div className={style.serviceTitleAndDesc}>
                    <TitleAndDesc
                        left={true}
                        title1={'Skin Treatements'}
                        title2={'Skin care and treatment by expert'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.'}
                    />
                    <div className={style.serviceDesFooter}>
                        <p className={style.serviceDesFooterText}>Make an Appointment</p>
                        <div className={style.dbArrr}>
                            <Image src={arrDouble} />
                        </div>
                    </div>
                </div>
                <div className={style.serviceDesImg}>
                    <Image
                        layout='responsive'
                        src={serviceDesc2}
                    />
                </div>
            </div>
            <div className={style.serviceDes}>
                <div className={style.serviceDesImg}>
                    <Image
                        layout='responsive'
                        src={serviceDesc3}
                    />
                </div>
                <div className={style.serviceTitleAndDesc}>
                    <TitleAndDesc
                        left={true}
                        title1={'Beauty Product'}
                        title2={'We present quality beauty products'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.'}
                    />
                    <div className={style.serviceDesFooter}>
                        <p className={style.serviceDesFooterText}>Make an Appointment</p>
                        <div className={style.dbArrr}>
                            <Image src={arrDouble} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiesDes