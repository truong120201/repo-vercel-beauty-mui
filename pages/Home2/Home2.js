// import css module file
import style from './Home2.module.css'

import { Layout } from '../../components/index.js'

// import components from components
import { Header } from '../../components/index.js'

// import components from views
import { AboutUs, Choosing, MainService, RequestCall, Slider, TheBlog } from '../../views/Home2/index.js'

// backgr
import backGr1 from '../../assets/images/home2-backgr.svg'
import backGr2 from '../../assets/images/wave.svg'
import backGr3 from '../../assets/images/wave2.svg'
import backGr4 from '../../assets/images/start-backgr.svg'

// MUI
import { Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    home2: {
        width: '100%',
        backgroundImage: `url('${backGr1.src}'), url('${backGr2.src}'), url('${backGr3.src}'), url('${backGr4.src}')`,
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
        backgroundSize: 'auto, auto, auto, auto',
        backgroundPosition: 'top left, top 1900px left 0, top 2893px right 0, top 3800px left',
    }
})


function Home2() {

    const classes = useStyles()

    return (
        <Layout>
            <Box className={classes.home2}>
                <Header logo1={false} color1={true} />
                <Slider />
                <AboutUs />
                <MainService />
                <Choosing />
                <TheBlog />
                <RequestCall />
            </Box>
        </Layout>
    )
}

export default Home2