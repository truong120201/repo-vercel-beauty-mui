import style from '../../../pages/Team/Team.module.css'
import Image from 'next/image'

import asis1 from '../../../assets/images/asis1.svg'
import asis2 from '../../../assets/images/asis2.svg'
import asis3 from '../../../assets/images/asis3.svg'


function Assistant() {
    return (
        <>
            <div className={style.assistant}>
                <Image
                    className={style.assistantImg}
                    src={asis1}
                />
                <div className={style.assistantAbout}>
                    <p className={style.assistantName}>
                        Lina Gustav / <span className={style.assistantPosition}>Pharmacist</span>
                    </p>
                    <p className={style.assistentDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.
                    </p>
                </div>
            </div>
            <div className={style.assistant}>
                <Image
                    className={style.assistantImg}
                    src={asis2}
                />
                <div className={style.assistantAbout}>
                    <p className={style.assistantName}>
                        Adam White /
                        <span className={style.assistantPosition}>Finan</span>
                    </p>
                    <p className={style.assistentDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.
                    </p>
                </div>
            </div>
            <div className={style.assistant}>
                <Image
                    className={style.assistantImg}
                    src={asis3}
                />
                <div className={style.assistantAbout}>
                    <p className={style.assistantName}>
                        Jane Doe /
                        <span className={style.assistantPosition}>Marketer</span>
                    </p>
                    <p className={style.assistentDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Assistant