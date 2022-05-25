import style from '../../../pages/Gallery/Gallery.module.css'
import Image from 'next/image'

import galBanner1 from '../../../assets/images/gal-banner-1.svg'
import galBanner2 from '../../../assets/images/gal-banner-2.svg'
import galBanner3 from '../../../assets/images/gal-banner-3.svg'
import galBanner4 from '../../../assets/images/gal-banner-4.svg'
import galBanner5 from '../../../assets/images/gal-banner-5.svg'
import galBanner6 from '../../../assets/images/gal-banner-6.svg'
import galBanner7 from '../../../assets/images/gal-banner-7.svg'
import galBanner8 from '../../../assets/images/gal-banner-8.svg'
import galBanner9 from '../../../assets/images/gal-banner-9.svg'

function Gallery() {
    return (
        <>
            <div className={style.galleryBanner}>
                <div className={style.bannerTitleDesc}>
                    <div className={style.bannerTitle}>
                        <p className={style.bannerTitle1}>Our Gallery</p>
                        <p className={style.bannerTitle2}>Check out the collection pictures from our clinic</p>
                    </div>
                    <p className={style.bannerDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
                <div className={style.bannerImages}>
                    <div className={style.bannerImage}>
                        <Image
                            src={galBanner1}
                        />
                    </div>
                    <div className={style.bannerImage}>
                        <Image
                            src={galBanner2}
                        />
                    </div>
                    <div className={style.bannerImage}>
                        <Image
                            src={galBanner3}
                        />
                    </div>
                    <div className={style.bannerImage}>
                        <Image
                            src={galBanner4}
                        />
                    </div>
                    <div className={style.bannerImage}>
                        <Image
                            src={galBanner5}
                        />
                    </div>
                    <div className={style.bannerImage}>
                        <Image
                            src={galBanner6}
                        />
                    </div>
                    <div className={style.bannerImage}>
                        <Image
                            src={galBanner7}
                        />
                    </div>
                    <div className={style.bannerImage}>
                        <Image
                            src={galBanner8}
                        />
                    </div>
                    <div className={style.bannerImage}>
                        <Image
                            src={galBanner9}
                        />
                    </div>
                </div>
                <p className={style.bannerFooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <span className={style.colorBlue}>our teams</span>.</p>
            </div>
        </>
    )
}

export default Gallery