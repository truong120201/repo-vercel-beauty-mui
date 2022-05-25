import style from '../../../pages/Home2/Home2.module.css'
import { TitleAndDesc } from '../../../components/index.js'
import Image from 'next/image'

import aboutUsImg from '../../../assets/images/aboutUs-home2.svg'

function AboutUs() {
    return (
        <>
            <div className={style.aboutUs}>
                <div className={style.aboutUsEle}>
                    <Image
                        src={aboutUsImg}
                        className={style.aboutUsImg}
                    />
                </div>
                <div className={style.aboutUsEle}>
                    <TitleAndDesc
                        left={true}
                        title1={'About Us'}
                        title2={'We are the best beauty clinic'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'}
                    />
                    <a href='#' className={style.aboutUsLearnMoreBtn}>Learn More</a>
                </div>
            </div>
        </>
    )
}

export default AboutUs