import { TitleAndDesc } from '../../../components'
import Image from 'next/image'

import aboutUsImg from '../../../assets/images/about-us-home1.svg'
import aboutUsPlayBtn from '../../../assets/images/about-us-play-button.svg'

// MUI
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

function AboutUs() {

    const classes = useStyles()

    return (
        <>
            <Grid container justifyContent='center' alignItems='center' className={classes.aboutUs}>
                <Grid className={classes.aboutUsDes}>
                    <TitleAndDesc
                        left={true}
                        title1={'About Us'}
                        title2={'We are the best beauty clinic'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat. Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.'}
                    />
                    <Grid container direction='row' className={classes.aboutUsBtns}>
                        <a href='' className={`${classes.bannerButton}`}>Learn More</a>
                        <Grid item container direction='row' alignItems='center' className={classes.aboutUsPlayBtn}>
                            <Image
                                src={aboutUsPlayBtn}
                            />
                            <Typography component='p' className={classes.aboutUsPlayText}>Watch Video</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.aboutUsImg}>
                    <Image
                        src={aboutUsImg}
                        layout='responsive'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default AboutUs