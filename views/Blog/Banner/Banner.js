import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles'

function Banner() {

    const classes = useStyles()

    return (
        <Grid container justifyContent='space-between' alignItems='center' className={classes.banner}>
            <Typography component='p' className={classes.bannerHeading}>
                Blog
            </Typography>
            <Typography component='p' className={classes.bannerDesc}>
                Home • Blog
            </Typography>
        </Grid>
    )
}

export default Banner