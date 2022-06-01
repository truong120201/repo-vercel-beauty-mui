import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import bannerImg1 from '../../../assets/images/service-banner-img-1.svg'
import bannerImg2 from '../../../assets/images/service-banner-img-2.svg'
import bannerImg3 from '../../../assets/images/service-banner-img-3.svg'
import bannerImg4 from '../../../assets/images/service-banner-img-4.svg'

import { Box, Grid } from '@material-ui/core'
import useStyles from './styles.js'

function Services() {

    const classes = useStyles()

    return (
        <Box className={classes.servicesWrapper}>
            <TitleAndDesc
                left={false}
                title1={'Our Services'}
                title2={'We focus on your beauty'}
                desc={'Lorem ipsum dolor sit amet'}
            />
            <Grid container justifyContent='space-between' alignItems='center' className={classes.serviceBanners}>
                <Box className={`${classes.serviceBanner1}`}>
                    <Box className={classes.serviceBannerImage}>
                        <Image
                            src={bannerImg1}
                            layout='responsive'
                        />
                    </Box>
                </Box>
                <Box className={`${classes.serviceBanner2}`}>
                    <Box className={classes.serviceBannerImage}>
                        <Image
                            src={bannerImg2}
                            layout='responsive'
                        />
                    </Box>
                </Box>
                <Box className={`${classes.serviceBanner3}`}>
                    <Box className={classes.serviceBannerImage}>
                        <Image
                            src={bannerImg3}
                            layout='responsive'
                        />
                    </Box>
                </Box>
                <Box className={`${classes.serviceBanner4}`}>
                    <Box className={classes.serviceBannerImage}>
                        <Image
                            src={bannerImg4}
                            layout='responsive'
                        />
                    </Box>
                </Box>
            </Grid>
        </Box>
    )
}

export default Services