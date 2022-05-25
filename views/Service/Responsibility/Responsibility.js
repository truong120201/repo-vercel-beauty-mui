import style from '../../../pages/Service/Service.module.css'

import playButton from '../../../assets/images/playbutton-home2.png'
import Image from 'next/image'

function Responsibility() {
    return (
        <>
            <div className={style.responsibility}>
                <div className={style.responsibilitySlogan}>
                    <p className={style.sloganHeading}>Best responsibility and service for our customers</p>
                    <p className={style.sloganDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
                <div className={style.playTreatmentsVideos}>
                    <Image src={playButton} />
                    <p className={style.treatmentsText}>Treatments Videos</p>
                </div>
            </div>
        </>
    )
}

export default Responsibility