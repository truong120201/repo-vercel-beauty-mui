import style from '../../../pages/Home2/Home2.module.css'
import Image from 'next/image'

import playButton from '../../../assets/images/playbutton-home2.png'

// MUI
import { Typography, Box, Grid } from '@material-ui/core'
import useStyles from './styles'

function Slider() {
    const classes = useStyles()
    return (
        <>
            <Grid container justifyContent='space-between' className={classes.slider}>
                <Box className={classes.sliderLeft}>
                    <Typography component='p' className={classes.sliderTitle}>Your beauty center place</Typography>
                    <Typography component='p' className={classes.sliderDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</Typography>
                    <a href='' className={classes.moreDetailBtn}>More Details</a>
                </Box>
                <Grid container alignItems='center' justifyContent='center' className={classes.sliderRight}>
                    <Image
                        src={playButton}
                        className={classes.playButtonImg}
                    />
                    <Typography component='p' className={classes.playButtonText}>Tour Video</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Slider