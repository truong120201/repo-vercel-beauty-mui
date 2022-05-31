// import style from '../../../pages/Home2/Home2.module.css'
import Image from 'next/image'

import handShake from '../../../assets/images/handshake 1.svg'
import brotherhood from '../../../assets/images/brotherhood 1.svg'
import earth from '../../../assets/images/earth 1.svg'
import doctor from '../../../assets/images/doctor 1.svg'

// MUI
import { Grid, Typography, Box } from '@material-ui/core'
import useStyles from './styles'

function Choosing() {

    const classes = useStyles()

    return (
            <Grid container justifyContent='space-between' alignItems='center' className={classes.choosing}>
                <Box className={classes.choosingTitle}>
                    <Typography component='p' className={classes.choosingHeading}>Why choosing us?</Typography>
                    <Typography component='p' className={classes.choosinDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</Typography>
                </Box>
                <Grid container className={classes.choosingData}>
                    <Grid container alignItems='center' className={classes.choosingDataChild}>
                        <Image
                            src={handShake}
                            // className={classes.choosingIcon}
                        />
                        <Box className={classes.choosingDataRigth}>
                            <Typography component='p' className={classes.choosingCount}>100%</Typography>
                            <Typography component='p' className={classes.choosingCountDesc}>trusted clinic</Typography>
                        </Box>
                    </Grid>
                    <Grid container alignItems='center' className={classes.choosingDataChild}>
                        <Image
                            src={brotherhood}
                            // className={classes.choosingIcon}
                        />
                        <Box className={classes.choosingDataRigth}>
                            <Typography component='p' className={classes.choosingCount}>99%</Typography>
                            <Typography component='p' className={classes.choosingCountDesc}>customer love</Typography>
                        </Box>
                    </Grid>
                    <Grid container alignItems='center' className={classes.choosingDataChild}>
                        <Image
                            src={earth}
                            // className={classes.choosingIcon}
                        />
                        <Box className={classes.choosingDataRigth}>
                            <Typography component='p' className={classes.choosingCount}>75+</Typography>
                            <Typography component='p' className={classes.choosingCountDesc}>asia branch</Typography>
                        </Box>
                    </Grid>
                    <Grid container alignItems='center' className={classes.choosingDataChild}>
                        <Image
                            src={doctor}
                            // className={classes.choosingIcon}
                        />
                        <Box className={classes.choosingDataRigth}>
                            <Typography component='p' className={classes.choosingCount}>1.200+</Typography>
                            <Typography component='p' className={classes.choosingCountDesc}>license worker</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default Choosing