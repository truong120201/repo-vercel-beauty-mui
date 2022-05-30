// import style from './Footer.module.css'
import Image from 'next/image'

import logoWhite from '../../assets/images/logo-white.svg'
import facebookf from '../../assets/images/facebook-f.svg'
import instagramf from '../../assets/images/instagram-f.svg'
import youtubef from '../../assets/images/youtube-f.svg'
import twitterf from '../../assets/images/twitter-f.svg'
import linkedinf from '../../assets/images/linkedin-f.svg'
import arrow from '../../assets/images/caret-right.svg'

// MUI
import { Grid, Box, Typography } from '@material-ui/core'
import useStyles from './styles'

function Footer() {

    const classes = useStyles()

    return (
        <Box className={classes.footer}>
            <Grid container className={classes.footerTop}>
                <Box className={classes.footerTop50}>
                    <Image
                        className={classes.footerLogo}
                        src={logoWhite}
                    />
                    <Typography component='p' className={classes.footerDesc}><Typography component='span' className={classes.beautyText}>Beautice </Typography>is a Beauty Clinic WordPress Theme.</Typography>
                    <Typography component='p' className={classes.footerDesc2}>Baker Steet 101, NY, United States.</Typography>
                    <Typography component='p' className={classes.footerDesc3}>
                        <Typography component='span' className={classes.phoneNumber}>
                            +521 569 8966.
                        </Typography>
                        mail@company.com.
                    </Typography>
                </Box>
                <Box className={classes.footerTopElement}>
                    <Typography component='p' className={classes.footerTopHeading}>
                        Pages
                    </Typography>
                    <Box>
                        <Box className={classes.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Home
                        </Box>
                        <Box className={classes.cateElement}>
                            <Image
                                src={arrow}
                            />
                            About
                        </Box>
                        <Box className={classes.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Services
                        </Box>
                        <Box className={classes.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Gallery
                        </Box>
                        <Box className={classes.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Team
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.footerTopElement}>
                    <Typography component='p' className={classes.footerTopHeading}>
                        Informations
                    </Typography>
                    <Box className={classes.footerCategory}>
                        <Box className={classes.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Terms & conditions
                        </Box>
                        <Box className={classes.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Privacy policy
                        </Box>
                        <Box className={classes.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Blog
                        </Box>
                        <Box className={classes.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Contact
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid container alignItems='center' justifyContent='space-between' className={classes.footerBot}>
                <Grid container className={classes.socialMediaIcons}>
                    <a href='#' className={classes.socialMediaIcon}>
                        <Image
                            src={facebookf}
                        />
                    </a>
                    <a href='#' className={classes.socialMediaIcon}>
                        <Image
                            src={twitterf}
                        />
                    </a>
                    <a href='#' className={classes.socialMediaIcon}>
                        <Image
                            src={linkedinf}
                        />
                    </a>
                    <a href='#' className={classes.socialMediaIcon}>
                        <Image
                            src={youtubef}
                        />
                    </a>
                    <a href='#' className={classes.socialMediaIcon}>

                        <Image
                            src={instagramf}
                        />
                    </a>
                </Grid>
                <Typography component='p' className={classes.footerCopyright}>© AltDesain Studio 2021 - All right reserved.</Typography>
            </Grid>
        </Box>
    )
}

export default Footer