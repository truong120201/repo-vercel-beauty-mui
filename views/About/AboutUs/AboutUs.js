import Image from 'next/image'

import style from '../../../pages/About/About.module.css'

import { TitleAndDesc } from '../../../components/index.js'

import imgBanner from '../../../assets/images/about-us-img-about.svg'
import playBanner from '../../../assets/images/about-us-playbutton-about.svg'

// MUI
import Grid from '@material-ui/core/Grid'

function AboutUs() {
    return (
        <>
            <div className={style.aboutUs}>
                <Grid>
                    <TitleAndDesc
                        left={true}
                        title1={'About'}
                        title2={'We are a leading beauty clinic that has been around since 2002'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}
                    />
                </Grid>
                <div className={style.videoBannerWrapper}>
                    <div className={style.mainBanner}>
                        <Image
                            src={imgBanner}
                            layout='responsive'
                        />
                    </div>
                    <div className={style.playBtn}>
                        <Image
                            src={playBanner}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs