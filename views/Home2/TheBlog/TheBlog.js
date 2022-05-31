import style from '../../../pages/Home2/Home2.module.css'
import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import arrDouble from '../../../assets/images/angle-double-right.svg'

import blog1 from '../../../assets/images/blog1.svg'
import blog2 from '../../../assets/images/blog2.svg'
import blog3 from '../../../assets/images/blog3.svg'
// MUI

import { Grid, Box, Typography } from '@material-ui/core'
import useStyles from './styles'

function TheBlog() {

    const classes = useStyles()

    return (
        <Box className={classes.theBlog}>
            <TitleAndDesc
                left={false}
                title1={'The Blog'}
                title2={'Our latest news'}
                desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
            <Grid container justifyContent='space-between' className={classes.listBlog}>
                <Box className={classes.blog}>
                    <Box className={classes.blogImg}>
                        <Image
                            src={blog1}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.blogDescContainer}>
                        <Typography component='p' className={classes.serviceHeading}>How much does a consultation cost at our clinic?</Typography>
                        <Typography component='p' className={classes.serviceDesc}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</Typography>
                        <a href='#' className={classes.serviceLearnMore}>
                            <Typography component='p' className={classes.learnMoreText}>Learn more</Typography>
                            <Image src={arrDouble} />
                        </a>
                    </Box>
                </Box>
                <Box className={classes.blog}>
                    <Box className={classes.blogImg}>
                        <Image
                            src={blog2}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.blogDescContainer}>
                        <Typography component='p' className={classes.serviceHeading}>Watch out! don't choose the wrong beauty product</Typography>
                        <Typography component='p' className={classes.serviceDesc}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</Typography>
                        <a href='#' className={classes.serviceLearnMore}>
                            <Typography component='p' className={classes.learnMoreText}>Learn more</Typography>
                            <Image src={arrDouble} />
                        </a>
                    </Box>
                </Box>
                <Box className={classes.blog}>
                    <Box className={classes.blogImg}>
                        <Image
                            src={blog3}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.blogDescContainer}>
                        <Typography component='p' className={classes.serviceHeading}>About skin care you need to know</Typography>
                        <Typography component='p' className={classes.serviceDesc}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</Typography>
                        <a href='#' className={classes.serviceLearnMore}>
                            <Typography component='p' className={classes.learnMoreText}>Learn more</Typography>
                            <Image src={arrDouble} />
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Box>
    )
}

export default TheBlog