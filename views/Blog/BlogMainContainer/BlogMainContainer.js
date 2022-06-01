import Image from 'next/image'

import blogLeft1 from '../../../assets/images/blog1.svg'
import blogLeft2 from '../../../assets/images/blog2.svg'
import blogLeft3 from '../../../assets/images/blog3.svg'
import folder from '../../../assets/images/folder.svg'
import blogRight1 from '../../../assets/images/blog-right-1.svg'
import blogRight2 from '../../../assets/images/blog-right-2.svg'
import blogRight3 from '../../../assets/images/blog-right-3.svg'
import caretRight from '../../../assets/images/caret-right.svg'
import searchIcon from '../../../assets/images/search.svg'
import facebook from '../../../assets/images/Facebook-2.svg'
import instagram from '../../../assets/images/Instagram-2.svg'
import twitter from '../../../assets/images/Twitter-2.svg'
import linkedin from '../../../assets/images/Linkedin.svg'

// MUI
import { Grid, Box, Typography } from '@material-ui/core'
import useStyles from './styles'

function BlogMainContainer() {

    const classes = useStyles()

    return (
        <Grid container justifyContent='space-between' className={classes.blogMainContainer}>
            <Box className={classes.mainContainerLeft}>
                <Grid container direction='column' className={classes.blogLeftElement}>
                    <Box className={classes.blogLeftImg}>
                        <Image
                            src={blogLeft1}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.blogLeftElementDesc}>
                        <Grid container alignItems='center' className={classes.blogLeftElementHeading}>
                            <Box className={classes.folderIcon}>
                                <Image
                                    src={folder}
                                    layout='responsive'
                                />
                            </Box>
                            <Typography component='p' className={classes.blogLeftElementHeadingText}>Consultation</Typography>
                        </Grid>
                        <Typography component='p' className={classes.blogLeftElementHeadingBot}>
                            How much does a consultation cost at our clinic?
                        </Typography>
                        <Typography component='p' className={classes.blogLeftElementAbout}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</Typography>
                        <Grid container className={classes.blogLeftBtn}>
                            <Typography component='p' className={classes.btnText}>Read More</Typography>
                            <Box className={classes.caretRightIcon}>
                                <Image
                                    src={caretRight}
                                />
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
                <Grid container direction='column' className={classes.blogLeftElement}>
                    <Box className={classes.blogLeftImg}>
                        <Image
                            src={blogLeft2}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.blogLeftElementDesc}>
                        <Grid container alignItems='center' className={classes.blogLeftElementHeading}>
                            <Box className={classes.folderIcon}>
                                <Image
                                    src={folder}
                                    layout='responsive'
                                />
                            </Box>
                            <Typography component='p' className={classes.blogLeftElementHeadingText}>Beauty</Typography>
                        </Grid>
                        <Typography component='p' className={classes.blogLeftElementHeadingBot}>
                            Watch out! don't choose the wrong beauty product
                        </Typography>
                        <Typography component='p' className={classes.blogLeftElementAbout}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</Typography>
                        <Grid container className={classes.blogLeftBtn}>
                            <Typography component='p' className={classes.btnText}>Read More</Typography>
                            <Box className={classes.caretRightIcon}>
                                <Image
                                    src={caretRight}
                                />
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
                <Grid container direction='column' className={classes.blogLeftElement}>
                    <Box className={classes.blogLeftImg}>
                        <Image
                            src={blogLeft3}
                            layout='responsive'
                        />
                    </Box>
                    <Box className={classes.blogLeftElementDesc}>
                        <Grid container alignItems='center' className={classes.blogLeftElementHeading}>
                            <Box className={classes.folderIcon}>

                                <Image
                                    src={folder}
                                    layout='responsive'
                                />
                            </Box>
                            <Typography component='p' className={classes.blogLeftElementHeadingText}>Treatments</Typography>
                        </Grid>
                        <Typography component='p' className={classes.blogLeftElementHeadingBot}>
                            About skin care you need to know
                        </Typography>
                        <Typography component='p' className={classes.blogLeftElementAbout}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</Typography>
                        <Grid container className={classes.blogLeftBtn}>
                            <Typography component='p' className={classes.btnText}>Read More</Typography>
                            <Box className={classes.caretRightIcon}>
                                <Image
                                    src={caretRight}
                                />
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box className={classes.mainContainerRight}>
                <Box className={`${classes.blogRightElement} ${classes.searchBox}`}>
                    <input
                        type='text'
                        placeholder='Search here ...'
                        className={classes.inputSearchBlogRight}
                    />
                    <Box className={classes.searchBtn}>
                        <Box className={classes.searchIconImg}>
                            <Image
                                src={searchIcon}
                                layout='responsive'
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={`${classes.blogRightElement} ${classes.blogRightBot}`}>
                    <Typography component='p' className={classes.blogRightEleHeading}>Recent Posts</Typography>
                    <Grid container justifyContent='space-between' alignItems='center' className={classes.blogRightBotElement}>
                        <Box className={classes.blogRightImg}>
                            <Image
                                src={blogRight1}
                                layout='responsive'
                            />
                        </Box>
                        <Box className={classes.blogRightSubDiv}>
                            <Typography component='p' className={classes.blogRightSubDivHeading}>
                                01 jan 2021
                            </Typography>
                            <Typography component='p' className={classes.blogRightSubDivDesc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container justifyContent='space-between' alignItems='center' className={classes.blogRightBotElement}>
                        <Box className={classes.blogRightImg}>
                            <Image
                                src={blogRight2}
                                layout='responsive'
                            />
                        </Box>
                        <Box className={classes.blogRightSubDiv}>
                            <Typography component='p' className={classes.blogRightSubDivHeading}>
                                01 jan 2021
                            </Typography>
                            <Typography component='p' className={classes.blogRightSubDivDesc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container justifyContent='space-between' alignItems='center' className={classes.blogRightBotElement}>
                        <Box className={classes.blogRightImg}>
                            <Image
                                src={blogRight3}
                                layout='responsive'
                            />
                        </Box>
                        <Box className={classes.blogRightSubDiv}>
                            <Typography component='p' className={classes.blogRightSubDivHeading}>
                                01 jan 2021
                            </Typography>
                            <Typography component='p' className={classes.blogRightSubDivDesc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                            </Typography>
                        </Box>
                    </Grid>
                </Box>
                <Box className={`${classes.blogRightElement} ${classes.blogRightBot}`}>
                    <Typography component='p' className={classes.blogRightEleHeading}>Categories</Typography>
                    <Typography component='p' className={classes.categoryElement}>
                        Consultation
                    </Typography>
                    <Typography component='p' className={classes.categoryElement}>
                        Beauty
                    </Typography>
                    <Typography component='p' className={classes.categoryElement}>
                        Treatments
                    </Typography>
                    <Typography component='p' className={classes.categoryElement}>
                        News
                    </Typography>

                </Box>
                <Box className={`${classes.blogRightElement} ${classes.blogRightBot}`}>
                    <Typography component='p' className={classes.blogRightEleHeading}>Cloud Tags</Typography>
                    <Grid container justifyContent='space-between' className={classes.tags}>
                        <Typography component='p' className={classes.tag}>beauty</Typography>
                        <Typography component='p' className={classes.tag}>cute</Typography>
                        <Typography component='p' className={classes.tag}>skin</Typography>
                        <Typography component='p' className={classes.tag}>glow</Typography>
                        <Typography component='p' className={classes.tag}>style</Typography>
                        <Typography component='p' className={classes.tag}>clinic</Typography>
                        <Typography component='p' className={classes.tag}>style</Typography>
                        <Typography component='p' className={classes.tag}>great</Typography>
                        <Typography component='p' className={classes.tag}>cute</Typography>
                    </Grid>
                </Box>
                <Box className={`${classes.blogRightElement} ${classes.blogRightBot}`}>
                    <Typography component='p' className={classes.blogRightEleHeading}>Cloud Tags</Typography>
                    <Grid container className={classes.socialMedias}>
                        <Box className={classes.socialMediaIcon}>
                            <Image
                                src={facebook}
                            />
                        </Box>
                        <Box className={classes.socialMediaIcon}>
                            <Image
                                src={twitter}
                            />
                        </Box>
                        <Box className={classes.socialMediaIcon}>
                            <Image
                                src={instagram}
                            />
                        </Box>
                        <Box className={classes.socialMediaIcon}>
                            <Image
                                src={linkedin}
                            />
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    )
}

export default BlogMainContainer