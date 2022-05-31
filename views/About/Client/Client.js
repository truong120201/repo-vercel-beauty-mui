import style from '../../../pages/About/About.module.css'
import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import client1 from '../../../assets/images/LOGO1.svg'
import client2 from '../../../assets/images/LOGO2.svg'
import client3 from '../../../assets/images/LOGO3.svg'
import client4 from '../../../assets/images/LOGO4.svg'
import client5 from '../../../assets/images/LOGO5.svg'

import { Box, Grid } from '@material-ui/core'
import useStyles from './styles'

function Client() {

    const classes = useStyles()

    return (
            <Box className={classes.clients}>
                <TitleAndDesc
                    left={false}
                    title1={'Our Clients'}
                    title2={'Well-known agencies'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                />
                <Grid container justifyContent='space-around' className={classes.clientList}>
                    <Box className={classes.clientImg}>
                        <Image
                            src={client1}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.clientImg}>
                        <Image
                            src={client2}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.clientImg}>
                        <Image
                            src={client3}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.clientImg}>
                        <Image
                            src={client4}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.clientImg}>
                        <Image
                            src={client5}
                            layout='responsive'
                        />
                    </Box>
                </Grid>
            </Box>
    )
}

export default Client