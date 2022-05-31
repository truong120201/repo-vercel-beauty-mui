import phone from '../../../assets/images/phone-volume.svg'
import Image from 'next/image'

// MUI
import useStyles from './styles'
import { Grid, Typography, Box, TextField } from '@material-ui/core'

function RequestCall() {

    const classes = useStyles()

    return (
            <Grid container alignContent='center' justifyContent='center' className={classes.call}>
                <Box className={classes.callDesc}>
                    <p className={classes.callDescHeading}>Request call services</p>
                    <p className={classes.callDescText}>Lorem ipsum dolor sit amet, consect adipiscing elit <span className={classes.contactUs}>Contact Us</span>.</p>
                </Box>
                <Box className={classes.callRight}>
                    <Grid container justifyContent='space-between' className={classes.callInput}>
                        <TextField
                            type='text'
                            placeholder='Insert your phone number here ...'
                            className={classes.callInputPlace}
                            InputProps={{
                                disableUnderline: true
                            }}
                        />
                        <Box className={classes.phoneIcon}>
                            <Image src={phone} />
                        </Box>
                    </Grid>
                    <Typography component='p' className={classes.callFootText}>Toll free for our coverage areas.</Typography>
                </Box>
            </Grid>
    )
}

export default RequestCall