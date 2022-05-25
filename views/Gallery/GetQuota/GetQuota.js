import style from '../../../pages/Gallery/Gallery.module.css'

import { TitleAndDesc } from '../../../components/index.js'


function GetQuota() {
    return (
        <>
            <div className={style.getQuota}>
                <div className={style.titleAndDescWrapper}>
                    <TitleAndDesc
                        left={true}
                        title1={'Get The Quota'}
                        title2={'Want to be handled by our professional team immediately?'}
                        desc={'Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.'}
                    />
                </div>
                <div className={style.getQuotaBtn}>Make an Appointment</div>
            </div>
        </>
    )
}

export default GetQuota