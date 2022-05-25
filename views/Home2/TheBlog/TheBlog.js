import style from '../../../pages/Home2/Home2.module.css'
import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import arrDouble from '../../../assets/images/angle-double-right.svg'

import blog1 from '../../../assets/images/blog1.svg'
import blog2 from '../../../assets/images/blog2.svg'
import blog3 from '../../../assets/images/blog3.svg'

function TheBlog() {
    return (
        <>
            <div className={style.theBlog}>
                <TitleAndDesc
                    left={false}
                    title1={'The Blog'}
                    title2={'Our latest news'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                />
                <div className={style.listBlog}>
                    <div className={style.blog}>
                        <div className={style.blogImg}>
                            <Image
                                src={blog1}
                                layout='responsive'
                            />
                        </div>
                        <div className={style.blogDescContainer}>
                            <p className={style.serviceHeading}>How much does a consultation cost at our clinic?</p>
                            <p className={style.serviceDesc}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>
                            <a href='#' className={style.serviceLearnMore}>
                                <p className={style.learnMoreText}>Learn more</p>
                                <Image src={arrDouble} />
                            </a>
                        </div>
                    </div>
                    <div className={style.blog}>
                        <div className={style.blogImg}>
                            <Image
                                src={blog2}
                                layout='responsive'
                            />
                        </div>
                        <div className={style.blogDescContainer}>
                            <p className={style.serviceHeading}>Watch out! don't choose the wrong beauty product</p>
                            <p className={style.serviceDesc}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>
                            <a href='#' className={style.serviceLearnMore}>
                                <p className={style.learnMoreText}>Learn more</p>
                                <Image src={arrDouble} />
                            </a>
                        </div>
                    </div>
                    <div className={style.blog}>
                        <div className={style.blogImg}>
                            <Image
                                src={blog3}
                                layout='responsive'
                            />
                        </div>
                        <div className={style.blogDescContainer}>
                            <p className={style.serviceHeading}>About skin care you need to know</p>
                            <p className={style.serviceDesc}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>
                            <a href='#' className={style.serviceLearnMore}>
                                <p className={style.learnMoreText}>Learn more</p>
                                <Image src={arrDouble} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheBlog