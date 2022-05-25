import style from '../../../pages/Blog/Blog.module.css'

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

function BlogMainContainer() {
    return (
        <>
            <div className={style.blogMainContainer}>
                <div className={style.mainContainerLeft}>
                    <div className={style.blogLeftElement}>
                        <div className={style.blogLeftImg}>
                            <Image
                                src={blogLeft1}
                                layout='responsive'
                            />
                        </div>
                        <div className={style.blogLeftElementDesc}>
                            <div className={style.blogLeftElementHeading}>
                                <div className={style.folderIcon}>
                                    <Image
                                        src={folder}
                                        layout='responsive'
                                    />
                                </div>
                                <p className={style.blogLeftElementHeadingText}>Consultation</p>
                            </div>
                            <p className={style.blogLeftElementHeadingBot}>
                                How much does a consultation cost at our clinic?
                            </p>
                            <p className={style.blogLeftElementAbout}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</p>
                            <div className={style.blogLeftBtn}>
                                <p className={style.btnText}>Read More</p>
                                <div className={style.caretRightIcon}>
                                    <Image
                                        src={caretRight}
                                        layout='responsive'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.blogLeftElement}>
                        <div className={style.blogLeftImg}>
                            <Image
                                src={blogLeft2}
                                layout='responsive'
                            />
                        </div>
                        <div className={style.blogLeftElementDesc}>
                            <div className={style.blogLeftElementHeading}>
                                <div className={style.folderIcon}>
                                    <Image
                                        src={folder}
                                        layout='responsive'
                                    />
                                </div>
                                <p className={style.blogLeftElementHeadingText}>Beauty</p>
                            </div>
                            <p className={style.blogLeftElementHeadingBot}>
                                Watch out! don't choose the wrong beauty product
                            </p>
                            <p className={style.blogLeftElementAbout}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</p>
                            <div className={style.blogLeftBtn}>
                                <p className={style.btnText}>Read More</p>
                                <div className={style.caretRightIcon}>
                                    <Image
                                        src={caretRight}
                                        layout='responsive'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.blogLeftElement}>
                        <div className={style.blogLeftImg}>
                            <Image
                                src={blogLeft3}
                                layout='responsive'
                            />
                        </div>
                        <div className={style.blogLeftElementDesc}>
                            <div className={style.blogLeftElementHeading}>
                                <div className={style.folderIcon}>

                                    <Image
                                        src={folder}
                                        layout='responsive'
                                    />
                                </div>
                                <p className={style.blogLeftElementHeadingText}>Treatments</p>
                            </div>
                            <p className={style.blogLeftElementHeadingBot}>
                                About skin care you need to know
                            </p>
                            <p className={style.blogLeftElementAbout}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</p>
                            <div className={style.blogLeftBtn}>
                                <p className={style.btnText}>Read More</p>
                                <div className={style.caretRightIcon}>
                                    <Image
                                        src={caretRight}
                                        layout='responsive'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.mainContainerRight}>
                    <div className={`${style.blogRightElement} ${style.searchBox}`}>
                        <input
                            type='text'
                            placeholder='Search here ...'
                            className={style.inputSearchBlogRight}
                        />
                        <div className={style.searchBtn}>
                            <div className={style.searchIconImg}>
                                <Image
                                    src={searchIcon}
                                    layout='responsive'
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`${style.blogRightElement} ${style.blogRightBot}`}>
                        <p className={style.blogRightEleHeading}>Recent Posts</p>
                        <div className={style.blogRightBotElement}>
                            <div className={style.blogRightImg}>
                                <Image
                                    src={blogRight1}
                                    layout='responsive'
                                />
                            </div>
                            <div className={style.blogRightSubDiv}>
                                <p className={style.blogRightSubDivHeading}>
                                    01 jan 2021
                                </p>
                                <p className={style.blogRightSubDivDesc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </p>
                            </div>
                        </div>
                        <div className={style.blogRightBotElement}>
                            <div className={style.blogRightImg}>
                                <Image
                                    src={blogRight2}
                                    layout='responsive'
                                />
                            </div>
                            <div className={style.blogRightSubDiv}>
                                <p className={style.blogRightSubDivHeading}>
                                    01 jan 2021
                                </p>
                                <p className={style.blogRightSubDivDesc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </p>
                            </div>
                        </div>
                        <div className={style.blogRightBotElement}>
                            <div className={style.blogRightImg}>
                                <Image
                                    src={blogRight3}
                                    layout='responsive'
                                />
                            </div>
                            <div className={style.blogRightSubDiv}>
                                <p className={style.blogRightSubDivHeading}>
                                    01 jan 2021
                                </p>
                                <p className={style.blogRightSubDivDesc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.blogRightElement} ${style.blogRightBot}`}>
                        <p className={style.blogRightEleHeading}>Categories</p>
                        <p className={style.categoryElement}>
                            Consultation
                        </p>
                        <p className={style.categoryElement}>
                            Beauty
                        </p>
                        <p className={style.categoryElement}>
                            Treatments
                        </p>
                        <p className={style.categoryElement}>
                            News
                        </p>

                    </div>
                    <div className={`${style.blogRightElement} ${style.blogRightBot}`}>
                        <p className={style.blogRightEleHeading}>Cloud Tags</p>
                        <div className={style.tags}>
                            <p className={style.tag}>beauty</p>
                            <p className={style.tag}>cute</p>
                            <p className={style.tag}>skin</p>
                            <p className={style.tag}>glow</p>
                            <p className={style.tag}>style</p>
                            <p className={style.tag}>clinic</p>
                            <p className={style.tag}>style</p>
                            <p className={style.tag}>great</p>
                            <p className={style.tag}>cute</p>
                        </div>
                    </div>
                    <div className={`${style.blogRightElement} ${style.blogRightBot}`}>
                        <p className={style.blogRightEleHeading}>Cloud Tags</p>
                        <div className={style.socialMedias}>
                            <div className={style.socialMediaIcon}>
                                <Image
                                    src={facebook}
                                />
                            </div>
                            <div className={style.socialMediaIcon}>
                                <Image
                                    src={twitter}
                                />
                            </div>
                            <div className={style.socialMediaIcon}>
                                <Image
                                    src={instagram}
                                />
                            </div>
                            <div className={style.socialMediaIcon}>
                                <Image
                                    src={linkedin}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogMainContainer