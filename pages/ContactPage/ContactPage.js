import map from '../../assets/images/map.svg'
import Image from 'next/image'

import { Header, TitleAndDesc, Contact, Layout } from '../../components/index.js'

import { Handling } from '../../views/ContactPage/index.js'

// MUI
import { Box } from '@material-ui/core'

function ContactPage() {
    return (
        <Layout>
            <div>
                <Header logo1={true} color1={false} />
                <Box sx={{ marginTop: '100px' }}>
                    <Contact flexRow={true} />
                </Box>
                <Box sx={{
                    marginTop: '103px',
                    marginBottom: '112px',
                    width: '100%'
                }}>
                    <Image
                        src={map}
                    />
                </Box>
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