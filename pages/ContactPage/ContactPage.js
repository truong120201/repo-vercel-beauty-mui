import style from './Contact.module.css'
import map from '../../assets/images/map.svg'
import Image from 'next/image'

import { Header, TitleAndDesc, Contact, Layout } from '../../components/index.js'

import { Handling } from '../../views/ContactPage/index.js'

function ContactPage() {
    return (
        <Layout>
            <div className={style.contact}>
                <Header logo1={true} color1={false} />
                <div className={style.wrapperContact}>
                    <Contact flexRow={true} />
                </div>
                <div className={style.map}>
                    <Image
                        src={map}
                    />
                </div>
                <TitleAndDesc
                    left={false}
                    title1={'Get in Touch'}
                    title2={'Get direct handling by us'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'}
                />
                <Handling />
            </div>
        </Layout>
    )
}

export default ContactPage