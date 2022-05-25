import style from '../../../pages/Home2/Home2.module.css'
import { TitleAndDesc } from '../../../components/index.js'
import Image from 'next/image'

import service1 from '../../../assets/images/icon-service-1-home2.svg'
import service2 from '../../../assets/images/icon-service-2-home2.svg'
import service3 from '../../../assets/images/icon-service-3-home2.svg'
import arrDouble from '../../../assets/images/angle-double-right.svg'

function MainService() {
    return (
        <>
            <div className={style.services}>
                <div className={style.servicesTitle}>
                    <TitleAndDesc
                        left={false}
                        title1={'Main Services'}
                        title2={'Our focus services'}
                        desc={'Lorem ipsum dolor sit amet.'}
                    />
                </div>
                <div className={style.listServices}>
                    <div className={style.service}>
                        <Image
                            src={service1}
                            className={style.serviceIcon}
                        />
                        <p className={style.serviceHeading}>Beauty consultation</p>
                        <p className={style.serviceDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        <a href='#' className={style.serviceLearnMore}>
                            <p className={style.learnMoreText}>Learn more</p>
                            <Image src={arrDouble} />
                        </a>
                    </div>
                    <div className={style.service}>
                        <Image
                            src={service2}
                            className={style.serviceIcon}
                        />
                        <p className={style.serviceHeading}>Skin treatments</p>
                        <p className={style.serviceDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        <a href='#' className={style.serviceLearnMore}>
                            <p className={style.learnMoreText}>Learn more</p>
                            <Image src={arrDouble} />
                        </a>
                    </div>
                    <div className={style.service}>
                        <Image
                            src={service3}
                            className={style.serviceIcon}
                        />
                        <p className={style.serviceHeading}>Beauty product</p>
                        <p className={style.serviceDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        <a href='#' className={style.serviceLearnMore}>
                            <p className={style.learnMoreText}>Learn more</p>
                            <Image src={arrDouble} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainService