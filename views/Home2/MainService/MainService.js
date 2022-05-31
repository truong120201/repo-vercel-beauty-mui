import style from '../../../pages/Home2/Home2.module.css'
import { TitleAndDesc } from '../../../components/index.js'
import Image from 'next/image'

import service1 from '../../../assets/images/icon-service-1-home2.svg'
import service2 from '../../../assets/images/icon-service-2-home2.svg'
import service3 from '../../../assets/images/icon-service-3-home2.svg'
import arrDouble from '../../../assets/images/angle-double-right.svg'

// MUI
import { Grid, Box, Typography } from '@material-ui/core'
import useStyles from './styles'

function MainService() {

    const classes = useStyles()

    return (
        <Box className={classes.services}>
            <TitleAndDesc
                left={false}
                title1={'Main Services'}
                title2={'Our focus services'}
                desc={'Lorem ipsum dolor sit amet.'}
            />
            <Grid container justifyContent='space-around' className={classes.listServices}>
                <Box className={classes.service}>
                    <Image
                        src={service1}
                        className={classes.serviceIcon}
                    />
                    <Typography component='p' className={classes.serviceHeading}>Beauty consultation</Typography>
                    <Typography component='p' className={classes.serviceDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                    <a href='#' className={classes.serviceLearnMore}>
                        <Typography component='p' className={classes.learnMoreText}>Learn more</Typography>
                        <Image src={arrDouble} />
                    </a>
                </Box>
                <Box className={classes.service}>
                    <Image
                        src={service2}
                        className={classes.serviceIcon}
                    />
                    <Typography component='p' className={classes.serviceHeading}>Skin treatments</Typography>
                    <Typography component='p' className={classes.serviceDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                    <a href='#' className={classes.serviceLearnMore}>
                        <Typography component='p' className={classes.learnMoreText}>Learn more</Typography>
                        <Image src={arrDouble} />
                    </a>
                </Box>
                <Box className={classes.service}>
                    <Image
                        src={service3}
                        className={classes.serviceIcon}
                    />
                    <Typography component='p' className={classes.serviceHeading}>Beauty product</Typography>
                    <Typography component='p' className={classes.serviceDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                    <a href='#' className={classes.serviceLearnMore}>
                        <Typography component='p' className={classes.learnMoreText}>Learn more</Typography>
                        <Image src={arrDouble} />
                    </a>
                </Box>
            </Grid>
        </Box>
    )
}

export default MainService