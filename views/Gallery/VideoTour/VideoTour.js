import style from '../../../pages/Gallery/Gallery.module.css'
import Image from 'next/image'

import playButton from '../../../assets/images/playbutton-home2.png'


function VideoTour() {
    return (
        <>
            <div className={style.watchVideoTour}>
                <p className={style.title1}>Watch the video tour</p>
                <p className={style.title2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                <Image src={playButton} />
            </div>
        </>
    )
}

export default VideoTour