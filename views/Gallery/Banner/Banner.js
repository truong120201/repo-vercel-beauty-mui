
import Image from 'next/image'

import galBanner1 from '../../../assets/images/gal-banner-1.svg'
import galBanner2 from '../../../assets/images/gal-banner-2.svg'
import galBanner3 from '../../../assets/images/gal-banner-3.svg'
import galBanner4 from '../../../assets/images/gal-banner-4.svg'
import galBanner5 from '../../../assets/images/gal-banner-5.svg'
import galBanner6 from '../../../assets/images/gal-banner-6.svg'
import galBanner7 from '../../../assets/images/gal-banner-7.svg'
import galBanner8 from '../../../assets/images/gal-banner-8.svg'
import galBanner9 from '../../../assets/images/gal-banner-9.svg'

// MUI
import { Grid, Box, Typography } from '@material-ui/core'
import useStyles from './styles'

function Gallery() {

    const classes = useStyles()

    return (
            <Box className={classes.galleryBanner}>
                <Grid container justifyContent='space-between' alignItems='center' className={classes.bannerTitleDesc}>
                    <Box className={classes.bannerTitle}>
                        <Typography component='p' className={classes.bannerTitle1}>Our Gallery</Typography>
                        <Typography component='p' className={classes.bannerTitle2}>Check out the collection pictures from our clinic</Typography>
                    </Box>
                    <Typography component='p' className={classes.bannerDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Typography>
                </Grid>
                <Grid container justifyContent='space-between' className={classes.bannerImages}>
                    <Box className={classes.bannerImage}>
                        <Image
                            src={galBanner1}
                        />
                    </Box>
                    <Box className={classes.bannerImage}>
                        <Image
                            src={galBanner2}
                        />
                    </Box>
                    <Box className={classes.bannerImage}>
                        <Image
                            src={galBanner3}
                        />
                    </Box>
                    <Box className={classes.bannerImage}>
                        <Image
                            src={galBanner4}
                        />
                    </Box>
                    <Box className={classes.bannerImage}>
                        <Image
                            src={galBanner5}
                        />
                    </Box>
                    <Box className={classes.bannerImage}>
                        <Image
                            src={galBanner6}
                        />
                    </Box>
                    <Box className={classes.bannerImage}>
                        <Image
                            src={galBanner7}
                        />
                    </Box>
                    <Box className={classes.bannerImage}>
                        <Image
                            src={galBanner8}
                        />
                    </Box>
                    <Box className={classes.bannerImage}>
                        <Image
                            src={galBanner9}
                        />
                    </Box>
                </Grid>
                <Typography component='p' className={classes.bannerFooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <span className={classes.colorBlue}>our teams</span>.</Typography>
            </Box>
    )
}

export default Gallery