import Image from 'next/image'

import playButton from '../../../assets/images/playbutton-home2.png'

import {Grid, Box, Typography} from '@material-ui/core'
import useStyles from './styles'

function VideoTour() {

    const classes = useStyles()

    return (
        <Grid container direction='column' alignItems='center' className={classes.watchVideoTour}>
            <Typography component='p' className={classes.title1}>Watch the video tour</Typography>
            <Typography component='p' className={classes.title2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Typography>
            <Image src={playButton} />
        </Grid>
    )
}

export default VideoTour