import Head from 'next/head'
import style from './layout.module.css'
import Image from 'next/image'

import Footer from '../Footer/Footer'
import totop from '../../assets/images/ToTop.svg'

export default function Layout({ children }) {
    return (
        <div className={style.container}>
            <Head>
                <title>Demo</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet" />
            </Head>
            <div className='totop' onClick={() => {
                window.scrollTo(0, 0);
            }}>
                <Image
                    src={totop}
                />
            </div>
            <main>{children}</main>
            <Footer />
        </div>
    )
}