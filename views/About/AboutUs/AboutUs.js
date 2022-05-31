import Image from 'next/image'

import style from '../../../pages/About/About.module.css'

import { TitleAndDesc } from '../../../components/index.js'

import imgBanner from '../../../assets/images/about-us-img-about.svg'
import playBanner from '../../../assets/images/about-us-playbutton-about.svg'

// MUI
import { Grid, Typography, Box } from '@material-ui/core'
import useStyles from './styles'

function AboutUs() {

    const classes = useStyles()

    return (
            <Box className={classes.aboutUs}>
                <Box className={classes.titleHeading}>
                    <TitleAndDesc
                        left={true}
                        title1={'About'}
                        title2={'We are a leading beauty clinic that has been around since 2002'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}
                    />
                </Box>
                <Box className={classes.videoBannerWrapper}>
                    <Box className={classes.mainBanner}>
                        <Image
                            src={imgBanner}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.playBtn}>
                        <Image
                            src={playBanner}
                        />
                    </Box>
                </Box>
            </Box>
    )
}

export default AboutUs