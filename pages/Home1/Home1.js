import { Layout } from '../../components/index.js'

// import components from components
import { Header, TitleAndDesc, Contact, ProfessionalExpert } from '../../components/index.js'

// import comnponents from views
import { AboutUs, ListService, Slider } from '../../views/Home1/index.js'

// MUI
import { Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'

import Home1SliderBackgr from '../../assets/images/Home1-slider-background.svg'
import BgrBubbleRight from '../../assets/images/bgr-bubble-right.svg'
import BgrBubbleLeft from '../../assets/images/bgr-bubble-left.svg'


const useStyles = makeStyles({
    home1: {
        width: '100%',
        backgroundImage: `url('${Home1SliderBackgr.src}'), url('${BgrBubbleRight.src}'), url('${BgrBubbleLeft.src}')`,
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundSize: '87% auto, auto, auto',
        backgroundPosition: 'top left, top 1320px right 0, top 2835px left 0'
    }
})

function Home1() {
    const classes = useStyles()
    return (
        <Layout>
            <Box className={classes.home1}>
                <Header logo1={true} color1={false} />
                <Slider />
                <TitleAndDesc
                    left={false}
                    title1={'Main Services'}
                    title2={'Learn services to focus on your beauty'}
                    desc={'Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'}
                />
                <ListService />
                <AboutUs />
                <ProfessionalExpert />
                <Contact flexRow={false} />
            </Box>
        </Layout>
    )
}

export default Home1