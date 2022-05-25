import style from './Footer.module.css'
import Image from 'next/image'

import logoWhite from '../../assets/images/logo-white.svg'
import facebookf from '../../assets/images/facebook-f.svg'
import instagramf from '../../assets/images/instagram-f.svg'
import youtubef from '../../assets/images/youtube-f.svg'
import twitterf from '../../assets/images/twitter-f.svg'
import linkedinf from '../../assets/images/linkedin-f.svg'
import arrow from '../../assets/images/caret-right.svg'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footerTop}>
                <div className={style.footerTop50}>
                    <Image
                        className={style.footerLogo}
                        src={logoWhite}
                    />
                    <p className={style.footerDesc}><span className={style.beautyText}>Beauty </span>is a Beauty Clinic WordPress Theme.</p>
                    <p className={style.footerDesc2}>Baker Steet 101, NY, United States.</p>
                    <p className={style.footerDesc3}>
                        <span className={style.phoneNumber}>
                            +521 569 8966.
                        </span>
                        mail@company.com.
                    </p>
                </div>
                <div className={style.footerTopElement}>
                    <p className={style.footerTopHeading}>
                        Pages
                    </p>
                    <div className={style.footerCategory}>
                        <div className={style.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Home
                        </div>
                        <div className={style.cateElement}>
                            <Image
                                src={arrow}
                            />
                            About
                        </div>
                        <div className={style.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Services
                        </div>
                        <div className={style.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Gallery
                        </div>
                        <div className={style.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Team
                        </div>
                    </div>
                </div>
                <div className={style.footerTopElement}>
                    <p className={style.footerTopHeading}>
                        Informations
                    </p>
                    <div className={style.footerCategory}>
                        <div className={style.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Terms & conditions
                        </div>
                        <div className={style.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Privacy policy
                        </div>
                        <div className={style.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Blog
                        </div>
                        <div className={style.cateElement}>
                            <Image
                                src={arrow}
                            />
                            Contact
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerBot}>
                <div className={style.footerBotSocials}>
                    <a href='#'>
                        <div className={style.socialMediaIcon}>

                            <Image
                                src={facebookf}
                            />
                        </div>
                    </a>
                    <a href='#'>
                        <div className={style.socialMediaIcon}>

                            <Image
                                src={twitterf}
                            />
                        </div>
                    </a>
                    <a href='#'>
                        <div className={style.socialMediaIcon}>

                            <Image
                                src={linkedinf} className={style.socialMediaIcon}
                            />
                        </div>
                    </a>
                    <a href='#'>
                        <div className={style.socialMediaIcon}>

                            <Image
                                src={youtubef}
                            />
                        </div>
                    </a>
                    <a href='#'>
                        <div className={style.socialMediaIcon}>

                            <Image
                                src={instagramf}
                            />
                        </div>
                    </a>
                </div>
                <p className={style.footerCopyright}>© AltDesain Studio 2021 - All right reserved.</p>
            </div>
        </div>
    )
}

export default Footer