import React from 'react';
import Link from 'next/link'
import style from './Header.module.css'
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
        <Grid container alignItems='center' justifyContent='center'>
            <Grid item container alignItems='center' justifyContent='space-between' wrap='nowrap' lg={10} md={11} xs={12} sm={12}>
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
                    <Grid item className={`${style.headerNavLink} ${showMenu == true ? style.show : style.hide}`}>
                        <Link href='/Home2'><a className={`${style.headerNav} ${props.color1 == true ? style.color1Home : style.headerNavHome}`}>Home +</a></Link>
                        <Link href='/About'><a className={`${style.headerNav} ${style.headerNavAbout} ${props.color1 == true ? style.color1 : ''}`}>About</a></Link>
                        <Link href='/Service'><a className={`${style.headerNav} ${style.headerNavService} ${props.color1 == true ? style.color1 : ''}`}>Service</a></Link>
                        <Link href='/Gallery'><a className={`${style.headerNav} ${style.headerNavGallery} ${props.color1 == true ? style.color1 : ''}`}>Gallery</a></Link>
                        <Link href='/Blog'><a className={`${style.headerNav} ${style.headerNavBlog} ${props.color1 == true ? style.color1 : ''}`}>Blog</a></Link>
                        <Link href='/ContactPage'><a className={`${style.headerNav} ${style.headerNavContact} ${props.color1 == true ? style.color1 : ''}`}>Contact</a></Link>
                    </Grid>
                    <Grid item className={style.phoneBars}>
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