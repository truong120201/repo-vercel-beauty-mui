import style from '../../../pages/Home1/Home1.module.css'
import { TitleAndDesc } from '../../../components'
import Image from 'next/image'

import aboutUsImg from '../../../assets/images/about-us-home1.svg'
import aboutUsPlayBtn from '../../../assets/images/about-us-play-button.svg'

// MUI
import Grid from '@material-ui/core/Grid'

function AboutUs() {
    return (
        <>
            <div className={style.aboutUs}>
                <div className={style.aboutUsDes}>
                    <TitleAndDesc
                        left={true}
                        title1={'About Us'}
                        title2={'We are the best beauty clinic'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat. Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.'}
                    />
                    <div className={style.aboutUsBtns}>
                        <a href='' className={`${style.bannerButton} ${style.mgt0}`}>Learn More</a>
                        <div className={style.aboutUsPlayBtn}>
                            <Image
                                src={aboutUsPlayBtn}
                            />
                            <p className={style.aboutUsPlayText}>Watch Video</p>
                        </div>
                    </div>
                </div>
                <Grid>
                    <Image
                        src={aboutUsImg}
                        layout='responsive'
                    />
                </Grid>
            </div>
        </>
    )
}

export default AboutUs