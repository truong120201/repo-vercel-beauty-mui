import style from '../../../pages/Home1/Home1.module.css'
import Image from 'next/image'

import service1 from '../../../assets/images/service1.svg'
import service2 from '../../../assets/images/service2.svg'
import service3 from '../../../assets/images/service3.svg'

function ListService() {
    return (
        <>
            <div className={style.listService}>
                <div className={style.service}>
                    <Image
                        className={style.serviceImg}
                        src={service1}
                    />
                    <p className={style.serviceTitle}>Beauty consultation</p>
                    <p className={style.serviceDesc}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>
                <div className={style.service}>
                    <Image
                        className={style.serviceImg}
                        src={service2}
                    />
                    <p className={style.serviceTitle}>Skin treatments</p>
                    <p className={style.serviceDesc}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>
                <div className={style.service}>
                    <Image
                        className={style.serviceImg}
                        src={service3}
                    />
                    <p className={style.serviceTitle}>Beauty product</p>
                    <p className={style.serviceDesc}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>
            </div>
        </>
    )
}

export default ListService