import style from '../../../pages/About/About.module.css'
import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import client1 from '../../../assets/images/LOGO1.svg'
import client2 from '../../../assets/images/LOGO2.svg'
import client3 from '../../../assets/images/LOGO3.svg'
import client4 from '../../../assets/images/LOGO4.svg'
import client5 from '../../../assets/images/LOGO5.svg'

function Client() {
    return (
        <>
            <div className={style.clients}>
                <TitleAndDesc
                    left={false}
                    title1={'Our Clients'}
                    title2={'Well-known agencies'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                />
                <div className={style.clientList}>
                    <div className={style.client}>
                        <Image
                            src={client1}
                            className={style.clientImg}
                        />
                    </div>
                    <div className={style.client}>
                        <Image
                            src={client2}
                            className={style.clientImg}
                        />
                    </div>
                    <div className={style.client}>
                        <Image
                            src={client3}
                            className={style.clientImg}
                        />
                    </div>
                    <div className={style.client}>
                        <Image
                            src={client4}
                            className={style.clientImg}
                        />
                    </div>
                    <div className={style.client}>
                        <Image
                            src={client5}
                            className={style.clientImg}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client