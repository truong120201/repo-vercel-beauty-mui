import classes from '../../../pages/Home2/Home2.module.css'
import { TitleAndDesc } from '../../../components/index.js'
import Image from 'next/image'

import aboutUsImg from '../../../assets/images/aboutUs-home2.svg'

// MUI
import { Grid, Typography, Box } from '@material-ui/core'
import useStyles from './styles'

function AboutUs() {
    const classes = useStyles()
    return (
        <>
            <Grid container justifyContent='space-between' className={classes.aboutUs}>
                <Box className={classes.aboutUsEle}>
                    <Image
                        src={aboutUsImg}
                    />
                </Box>
                <Box className={classes.aboutUsEle}>
                    <TitleAndDesc
                        left={true}
                        title1={'About Us'}
                        title2={'We are the best beauty clinic'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'}
                    />
                    <a href='#' className={classes.aboutUsLearnMoreBtn}>Learn More</a>
                </Box>
            </Grid>
        </>
    )
}

export default AboutUs