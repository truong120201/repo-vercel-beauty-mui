import style from '../../../pages/Home2/Home2.module.css'
import Image from 'next/image'

import playButton from '../../../assets/images/playbutton-home2.png'

function Slider() {
    return (
        <>
            <div className={style.slider}>
                <div className={style.sliderLeft}>
                    <p className={style.sliderTitle}>Your beauty center place</p>
                    <p className={style.sliderDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</p>
                    <a href='' className={style.moreDetailBtn}>More Details</a>
                </div>
                <div className={style.sliderRight}>
                    <Image
                        src={playButton}
                        className={style.playButtonImg}
                    />
                    <p className={style.playButtonText}>Tour Video</p>
                </div>
            </div>
        </>
    )
}

export default Slider