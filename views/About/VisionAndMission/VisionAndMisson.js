import style from '../../../pages/About/About.module.css'
import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import vison from '../../../assets/images/aboutUs-home2.svg'
import mission from '../../../assets/images/misson-about.svg'
import { Grid, Box } from '@material-ui/core'
import useStyles from './styles'

function VisionAndMission() {

    const classes = useStyles()

    return (
        <>
            <Grid container justifyContent='space-between' className={classes.visonAndMission}>
                <Box className={classes.imgWrapper}>
                    <Image
                        src={vison}
                        layout='responsive'
                    />
                </Box>
                <Box className={classes.titDescWrapper}>
                    <TitleAndDesc
                        left={true}
                        title1={'Our Vision'}
                        title2={'Be the best and go international'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'}
                    />
                </Box>
            </Grid>
            <Grid container justifyContent='space-between' className={classes.visonAndMission}>
                <Box className={classes.titDescWrapper}>
                    <TitleAndDesc
                        left={true}
                        title1={'Our Mission'}
                        title2={'Special & premium service to any clients'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'}
                    />
                </Box>
                <Box className={classes.imgWrapper}>
                    <Image
                        src={mission}
                        layout='responsive'
                    />
                </Box>
            </Grid>
        </>
    )
}

export default VisionAndMission