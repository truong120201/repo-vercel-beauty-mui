import style from '../../../pages/Team/Team.module.css'
import Image from 'next/image'

import { TitleAndDesc } from '../../../components/index.js'

import arrLeft from '../../../assets/images/arrow-left.svg'
import arrRight from '../../../assets/images/arrow-right.svg'
import cusAvata from '../../../assets/images/cus-avt.svg'
import star from '../../../assets/images/Star.svg'

function CustomerSay() {
    return (
        <>
            <div className={style.customerSay}>
                <TitleAndDesc
                    left={false}
                    title1={'Our Testimonials'}
                    title2={'What our customer says'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'}
                />
                <div className={style.cusSayDesc}>
                    <Image
                        className={style.arrLeft}
                        src={arrLeft}
                    />
                    <div className={style.cusVote}>
                        <Image
                            className={style.cusAvata}
                            src={cusAvata}
                        />
                        <p className={style.whatCusSay}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.
                        </p>
                        <Image
                            className={style.star}
                            src={star}
                        />
                    </div>
                    <Image
                        className={style.arrRight}
                        src={arrRight}
                    />
                </div>
            </div>
        </>
    )
}

export default CustomerSay