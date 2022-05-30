import sliderImg from '../../../assets/images/Home1-banner.svg'
import Image from 'next/image'

// MUI
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

function Slider() {
    const classes = useStyles()
    return (
        <>
            <Grid container alignItems='center' justifyContent='center' className={classes.slider}>
                <Grid item className={classes.sliderTitle}>
                    <Typography component='p' className={classes.bannerHeaderTitle}>Clinic &amp; beauty consultant</Typography>
                    <Typography component='p' className={classes.bannerDesc}>It is a long established fact that a reader will be<br />
                        by the readable content of a page.</Typography>
                    <a href='' className={classes.bannerButton}>More Details</a>
                </Grid>
                <Grid item className={classes.sliderImg}>
                    <Image
                        src={sliderImg}
                        layout='responsive'
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.slideButtons}>
                <Box className={classes.slideButton}></Box>
                <Box className={`${classes.slideButton} ${classes.slideButtonMid}`}></Box>
                <Box className={classes.slideButton}></Box>
            </Grid>
        </>
    )
}

export default Slider