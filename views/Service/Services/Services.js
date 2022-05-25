import style from '../../../pages/Service/Service.module.css'
import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import bannerImg1 from '../../../assets/images/service-banner-img-1.svg'
import bannerImg2 from '../../../assets/images/service-banner-img-2.svg'
import bannerImg3 from '../../../assets/images/service-banner-img-3.svg'
import bannerImg4 from '../../../assets/images/service-banner-img-4.svg'

function Services() {
    return (
        <>
            <div className={style.servicesWrapper}>
                <TitleAndDesc
                    left={false}
                    title1={'Our Services'}
                    title2={'We focus on your beauty'}
                    desc={'Lorem ipsum dolor sit amet'}
                />
                <div className={style.serviceBanners}>
                    <div className={`${style.serviceBanner} ${style.serviceBanner1}`}>
                        <div className={style.serviceBannerImage}>
                            <Image
                                src={bannerImg1}
                                layout='responsive'
                            />
                        </div>
                    </div>
                    <div className={`${style.serviceBanner} ${style.serviceBanner2}`}>
                        <div className={style.serviceBannerImage}>
                            <Image
                                src={bannerImg2}
                                layout='responsive'
                            />
                        </div>
                    </div>
                    <div className={`${style.serviceBanner} ${style.serviceBanner3}`}>
                        <div className={style.serviceBannerImage}>
                            <Image
                                src={bannerImg3}
                                layout='responsive'
                            />
                        </div>
                    </div>
                    <div className={`${style.serviceBanner} ${style.serviceBanner4}`}>
                        <div className={style.serviceBannerImage}>
                            <Image
                                src={bannerImg4}
                                layout='responsive'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services