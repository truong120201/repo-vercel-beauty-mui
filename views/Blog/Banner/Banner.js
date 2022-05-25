import style from '../../../pages/Blog/Blog.module.css'

function Banner() {
    return (
        <>
            <div className={style.banner}>
                <p className={style.bannerHeading}>
                    Blog
                </p>
                <p className={style.bannerDesc}>
                    Home • Blog
                </p>
            </div>
        </>
    )
}

export default Banner