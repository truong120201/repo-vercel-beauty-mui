import { Header, Layout } from '../../components/index.js'

// import from views
import { Faq, Responsibility, Services, ServicesDes } from '../../views/Service/index.js'

import backgr from '../../assets/images/service-bubble-backgr.svg'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
    service: {
        backgroundImage: `url('${backgr.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top 222px right 0'
    }
})

function Service() {

    const classes = useStyles()

    return (
        <Layout>
            <Box className={classes.service}>
                <Header logo1={true} color1={false} />
                <Services />
                <ServicesDes />
                <Responsibility />
                <Faq />
            </Box>
        </Layout>
    )
}

export default Service