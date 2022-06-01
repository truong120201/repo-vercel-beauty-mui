import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import serviceDesc1 from '../../../assets/images/service-desc-img-1.svg'
import serviceDesc2 from '../../../assets/images/service-desc-img-2.svg'
import serviceDesc3 from '../../../assets/images/service-desc-img-3.svg'
import arrDouble from '../../../assets/images/angle-double-right.svg'

// MUI
import useStyles from './styles'
import { Grid, Box, Typography } from '@material-ui/core'

function ServiesDes() {

    const classes = useStyles()

    return (
        <>
            <Grid container justifyContent='space-between' alignItems='center' className={classes.serviceDes}>
                <Box className={classes.serviceDesImg}>
                    <Image
                        layout='responsive'
                        src={serviceDesc1}
                    />
                </Box>
                <Box className={classes.serviceTitleAndDesc}>
                    <TitleAndDesc
                        left={true}
                        title1={'Beauty Consultation'}
                        title2={'We services beauty consultation'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.'}
                    />
                    <Grid container alignItems='center' className={classes.serviceDesFooter}>
                        <Typography component='p' className={classes.serviceDesFooterText}>Make an Appointment</Typography>
                        <Box className={classes.dbArrr}>
                            <Image src={arrDouble} />
                        </Box>
                    </Grid>
                </Box>
            </Grid>
            <Grid container justifyContent='space-between' alignItems='center' className={classes.serviceDes}>
                <Box className={classes.serviceTitleAndDesc}>
                    <TitleAndDesc
                        left={true}
                        title1={'Skin Treatements'}
                        title2={'Skin care and treatment by expert'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.'}
                    />
                    <Grid container alignItems='center' className={classes.serviceDesFooter}>
                        <Typography component='p' className={classes.serviceDesFooterText}>Make an Appointment</Typography>
                        <Box className={classes.dbArrr}>
                            <Image src={arrDouble} />
                        </Box>
                    </Grid>
                </Box>
                <Box className={classes.serviceDesImg}>
                    <Image
                        layout='responsive'
                        src={serviceDesc2}
                    />
                </Box>
            </Grid>
            <Grid container justifyContent='space-between' alignItems='center' className={classes.serviceDes}>
                <Box className={classes.serviceDesImg}>
                    <Image
                        layout='responsive'
                        src={serviceDesc3}
                    />
                </Box>
                <Box className={classes.serviceTitleAndDesc}>
                    <TitleAndDesc
                        left={true}
                        title1={'Beauty Product'}
                        title2={'We present quality beauty products'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.'}
                    />
                    <Grid container alignItems='center' className={classes.serviceDesFooter}>
                        <Typography component='p' className={classes.serviceDesFooterText}>Make an Appointment</Typography>
                        <Box className={classes.dbArrr}>
                            <Image src={arrDouble} />
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default ServiesDes