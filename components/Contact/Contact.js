import Image from 'next/image'

import contactImg from '../../assets/images/contact-image.svg'

// MUI
import useStyles from './styles'
import { Grid, Box, FormControl, TextField, Input } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { TextareaAutosize } from '@material-ui/core'


function Contact(props) {

    const classes = useStyles()

    return (
        <Grid container direction='column' alignItems='flex-end' className={classes.contact}>
            <Grid container direction='column' className={`${classes.contactTop} ${props.flexRow == true ? classes.flexRow : ''}`}>
                <Box>
                    <Typography component='p' className={`${classes.contactTitleTop}`}>Contact Us</Typography>
                    <Typography component='p' className={classes.contactTitleBot}>Send your inquiry to our expert team</Typography>
                </Box>
                <Typography className={classes.contactTopDesc}>
                    Lorem ipsum dolor sit amet nulla turapis tellus.
                </Typography>
            </Grid>
            <Grid container justifyContent='space-between' className={classes.contactBot}>
                <Box className={classes.contactImage}>
                    <Image
                        src={contactImg}
                    />
                </Box>
                <FormControl component='form' id='myform' className={classes.formContact}>
                    <Grid container justifyContent='space-between'>
                        <TextField
                            type='text'
                            placeholder='First name'
                            className={classes.formInputShort}
                            InputProps={{
                                disableUnderline: true
                            }}
                        />
                        <TextField
                            type='text'
                            placeholder='Last name'
                            className={classes.formInputShort}
                            InputProps={{
                                disableUnderline: true
                            }}
                        />
                    </Grid>
                    <TextField
                        type='text'
                        placeholder='Email address'
                        className={classes.formInputLong}
                        InputProps={{
                            disableUnderline: true
                        }}
                    />
                    <TextField
                        type='text'
                        placeholder='Subject message'
                        className={classes.formInputLong}
                        InputProps={{
                            disableUnderline: true
                        }}
                    />
                    <TextareaAutosize
                        placeholder='Your inquiry here'
                        maxRows="40"
                        minRows="40"
                        className={classes.formTextarea}
                    ></TextareaAutosize>
                </FormControl>
            </Grid>
            <Box className={classes.submitBtnWrapper}>
                <Input
                    className={classes.submitContactFormButton}
                    type="submit"
                    form="myform"
                    value="Send Message"
                    disableUnderline
                />
            </Box>
        </Grid>
    )
}

export default Contact