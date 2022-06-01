import Image from 'next/image'

import arrUp from '../../../assets/images/arrUp.svg'
import arrDown from '../../../assets/images/arrDown.svg'

import { Grid, Box, Typography } from '@material-ui/core'
import useStyles from './styles'

function Faq() {

    const classes = useStyles()

    return (
        <Box className={classes.serviceFAQ}>
            <Typography component='p' className={classes.faqHeading}>Services FAQ’s</Typography>
            <Box className={classes.center}>
                <Box className={classes.headingUnderline}></Box>
            </Box>
            <Typography component='p' className={classes.faqQuestion}>Is beauty consultation handled thoroughly? <span className={classes.arr}><Image src={arrUp} /></span></Typography>
            <Typography component='p' className={classes.fqaAnswer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna <br /> <br />porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</Typography>
            <Typography component='p' className={classes.faqQuestion}>Can I be beautiful in an instant time?<span className={classes.arr}><Image src={arrDown} /></span></Typography>
            <Typography component='p' className={classes.faqQuestion}>Are there any side effects to the treatment methods or treatments at this clinic?<span className={classes.arr}><Image src={arrDown} /></span></Typography>
            <Typography component='p' className={classes.faqQuestion}>Do professionals have accreditation in their respective fields?<span className={classes.arr}><Image src={arrDown} /></span></Typography>
        </Box>
    )
}

export default Faq