import style from '../../../pages/Home1/Home1.module.css'
import sliderImg from '../../../assets/images/Home1-banner.svg'
import Image from 'next/image'

import useStyles from './styles'

// MUI
import Grid from '@material-ui/core/Grid'

function Slider() {
    const classes = useStyles()
    return (
        <>
            <Grid container alignItems='center' justifyContent='center'>
                <Grid item lg={5} md={5} sm={12} className={style.sliderTitle}>
                    <p className={style.bannerHeaderTitle}>Clinic & beauty consultant</p>
                    <p className={style.bannerDesc}>It is a long established fact that a reader will be<br />
                        by the readable content of a page.</p>
                    <a href='' className={style.bannerButton}>More Details</a>
                </Grid>
                <Grid item lg={5} md={5} sm={12} className={style.sliderImg}>
                    <Image
                        src={sliderImg}
                        className={style.sliderImage}
                    />
                </Grid>
            </Grid>
            <div className={style.slideButtons}>
                <div className={style.slideButton}></div>
                <div className={`${style.slideButton} ${style.slideButtonMid}`}></div>
                <div className={style.slideButton}></div>
            </div>
        </>
    )
}

export default Slider