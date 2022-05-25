import style from '../../../pages/Home2/Home2.module.css'
import Image from 'next/image'

import handShake from '../../../assets/images/handshake 1.svg'
import brotherhood from '../../../assets/images/brotherhood 1.svg'
import earth from '../../../assets/images/earth 1.svg'
import doctor from '../../../assets/images/doctor 1.svg'

function Choosing() {
    return (
        <>
            <div className={style.choosing}>
                <div className={style.choosingTitle}>
                    <p className={style.choosingHeading}>Why choosing us?</p>
                    <p className={style.choosinDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                </div>
                <div className={style.choosingData}>
                    <div className={style.choosingDataChild}>
                        <Image
                            src={handShake}
                            className={style.choosingIcon}
                        />
                        <div className={style.choosingDataRigth}>
                            <p className={style.choosingCount}>100%</p>
                            <p className={style.choosingCountDesc}>trusted clinic</p>
                        </div>
                    </div>
                    <div className={style.choosingDataChild}>
                        <Image
                            src={brotherhood}
                            className={style.choosingIcon}
                        />
                        <div className={style.choosingDataRigth}>
                            <p className={style.choosingCount}>99%</p>
                            <p className={style.choosingCountDesc}>customer love</p>
                        </div>
                    </div>
                    <div className={style.choosingDataChild}>
                        <Image
                            src={earth}
                            className={style.choosingIcon}
                        />
                        <div className={style.choosingDataRigth}>
                            <p className={style.choosingCount}>75+</p>
                            <p className={style.choosingCountDesc}>asia branch</p>
                        </div>
                    </div>
                    <div className={style.choosingDataChild}>
                        <Image
                            src={doctor}
                            className={style.choosingIcon}
                        />
                        <div className={style.choosingDataRigth}>
                            <p className={style.choosingCount}>1.200+</p>
                            <p className={style.choosingCountDesc}>license worker</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Choosing