import Image from 'next/image'

import map1 from '../../../assets/images/contact-map.svg'
import phone1 from '../../../assets/images/contact-phone.svg'
import mail1 from '../../../assets/images/contact-mail.svg'

// MUI
import useStyles from './styles'
import { Grid, Typography, Box } from '@material-ui/core'

function Handling() {

    const classes = useStyles()

    return (
        <Grid container justifyContent='space-between' alignItems='center' className={classes.handling}>
            <Grid container direction='column' alignItems='center' className={classes.handlingElement}>
                <Box className={classes.handlingIcon}>
                    <Image
                        src={map1}
                    />
                </Box>
                <Typography component='p' className={classes.title1}>Address</Typography>
                <Typography component='p' className={classes.title2}>101 Baker Street, NY</Typography>
                <Typography component='p' className={classes.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Typography>
            </Grid>
            <Grid container direction='column' alignItems='center' className={classes.handlingElement}>
                <Box className={classes.handlingIcon}>
                    <Image
                        src={phone1}
                    />
                </Box>
                <Typography component='p' className={classes.title1}>Phone</Typography>
                <Typography component='p' className={classes.title2}>+896 120 5889</Typography>
                <Typography component='p' className={classes.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Typography>
            </Grid>
            <Grid container direction='column' alignItems='center' className={classes.handlingElement}>
                <Box className={classes.handlingIcon}>
                    <Image
                        src={mail1}
                    />
                </Box>
                <Typography component='p' className={classes.title1}>Mail</Typography>
                <Typography component='p' className={classes.title2}>mail@company.com</Typography>
                <Typography component='p' className={classes.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Typography>

            </Grid>
        </Grid>
    )
}

export default Handling