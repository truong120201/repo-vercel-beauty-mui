import { TitleAndDesc } from '../../../components/index.js'

// MUI
import useStyles from './styles'
import { Box, Grid } from '@material-ui/core'

function GetQuota() {

    const classes = useStyles()

    return (
        <Grid container justifyContent='space-between' alignItems='center' className={classes.getQuota}>
            <Box className={classes.titleAndDescWrapper}>
                <TitleAndDesc
                    left={true}
                    title1={'Get The Quota'}
                    title2={'Want to be handled by our professional team immediately?'}
                    desc={'Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.'}
                />
            </Box>
            <Box className={classes.getQuotaBtn}>Make an Appointment</Box>
        </Grid>
    )
}

export default GetQuota