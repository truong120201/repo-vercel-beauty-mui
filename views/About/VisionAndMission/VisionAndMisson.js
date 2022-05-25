import style from '../../../pages/About/About.module.css'
import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import vison from '../../../assets/images/aboutUs-home2.svg'
import mission from '../../../assets/images/misson-about.svg'

function VisionAndMission() {
    return (
        <>
            <div className={style.visonAndMission}>
                <Image
                    src={vison}
                    className={style.visonMissionImg}
                />
                <div className={style.titDescWrapper}>
                    <TitleAndDesc
                        left={true}
                        title1={'Our Vision'}
                        title2={'Be the best and go international'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'}
                    />
                </div>
            </div>
            <div className={style.visonAndMission}>
                <div className={style.titDescWrapper}>
                    <TitleAndDesc
                        left={true}
                        title1={'Our Mission'}
                        title2={'Special & premium service to any clients'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'}
                    />
                </div>
                <Image
                    src={mission}
                    className={style.visonMissionImg}
                />
            </div>
        </>
    )
}

export default VisionAndMission