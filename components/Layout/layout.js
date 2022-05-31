import Head from 'next/head'
import Image from 'next/image'

import Footer from '../Footer/Footer'
import totop from '../../assets/images/ToTop.svg'

import Box from '@material-ui/core/Box'

export default function Layout({ children }) {
    return (
        <Box sx={{ maxWidth: 1440, fontFamily: 'Poppins' }}>
            <Head>
                <title>Demo</title>
            </Head>
            <Box sx={{
                position: 'fixed',
                bottom: '65px',
                right: '65px',
                cursor: 'pointer',
                zIndex: '9999',
            }} className='totop' onClick={() => {
                window.scrollTo(0, 0);
            }}>
                <Image
                    src={totop}
                />
            </Box>
            <main>{children}</main>
            <Footer />
        </Box>
    )
}