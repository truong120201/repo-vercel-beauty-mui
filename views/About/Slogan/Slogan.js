import { Box, Typography } from '@material-ui/core'
import useStyles from './styles'

function Slogan() {

    const classes = useStyles()

    return (
            <Box className={classes.slogan}>
                <Box>
                    <Typography component='p' className={classes.sloganTitleTop}>Business Slogan</Typography>
                    <Typography component='p' className={classes.sloganTitleBot}>Best responsibility and service for our customers</Typography>
                    <Typography component='p' className={classes.sloganAbout}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Typography>
                </Box>
            </Box>
    )
}

export default Slogan