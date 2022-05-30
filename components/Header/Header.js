import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react';

import headerLogo from '../../assets/images/Header-logo.svg'
import headerLogo2 from '../../assets/images/logo-white.svg'
import phoneBars from '../../assets/images/phone-menu-bars.png'

// MUI
import Grid from '@material-ui/core/Grid'
import useStyles from './styles';


function Header(props) {

    const classes = useStyles()
    const [showMenu, setShowMenu] = useState(false)
    return (
        <Grid container alignItems='center' justifyContent='center' className={classes.header}>
            <Grid item container alignItems='center' justifyContent='space-between' wrap='nowrap'>
                <Grid item>
                    <Link href='/Home1'>
                        <a>
                            {
                                props.logo1 == true &&
                                <Image
                                    src={headerLogo}
                                    alt=''
                                />
                            }

                            {
                                !props.logo1 == true &&
                                <Image
                                    src={headerLogo2}
                                    alt=''
                                />
                            }
                        </a>
                    </Link>
                </Grid>
                <Grid container justifyContent='flex-end'>
                    <Grid item className={`${classes.headerNavLink} ${showMenu == true ? classes.show : classes.hide}`}>
                        <Link href='/Home2'><a className={`${classes.headerNav} ${props.color1 == true ? classes.color1Home : classes.headerNavHome}`}>Home +</a></Link>
                        <Link href='/About'><a className={`${classes.headerNav} ${classes.headerNavAbout} ${props.color1 == true ? classes.color1 : ''}`}>About</a></Link>
                        <Link href='/Service'><a className={`${classes.headerNav} ${classes.headerNavService} ${props.color1 == true ? classes.color1 : ''}`}>Service</a></Link>
                        <Link href='/Gallery'><a className={`${classes.headerNav} ${classes.headerNavGallery} ${props.color1 == true ? classes.color1 : ''}`}>Gallery</a></Link>
                        <Link href='/Blog'><a className={`${classes.headerNav} ${classes.headerNavBlog} ${props.color1 == true ? classes.color1 : ''}`}>Blog</a></Link>
                        <Link href='/ContactPage'><a className={`${classes.headerNav} ${classes.headerNavContact} ${props.color1 == true ? classes.color1 : ''}`}>Contact</a></Link>
                    </Grid>
                    <Grid item className={classes.phoneBars}>
                        <Image
                            src={phoneBars}
                            onClick={() => setShowMenu(prev => !prev)}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header