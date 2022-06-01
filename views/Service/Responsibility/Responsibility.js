import playButton from '../../../assets/images/playbutton-home2.png'
import Image from 'next/image'

// MUI
import useStyles from './styles'
import { Grid, Box, Typography } from '@material-ui/core'

function Responsibility() {

    const classes = useStyles()

    return (
        <Grid container justifyContent='space-between' alignItems='center' className={classes.responsibility}>
            <Box className={classes.responsibilitySlogan}>
                <Typography component='p' className={classes.sloganHeading}>Best responsibility and service for our customers</Typography>
                <Typography component='p' className={classes.sloganDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Typography>
            </Box>
            <Grid container justifyContent='center' alignItems='center' className={classes.playTreatmentsVideos}>
                <Image src={playButton} />
                <Typography component='p' className={classes.treatmentsText}>Treatments Videos</Typography>
            </Grid>
        </Grid>
    )
}

export default Responsibility