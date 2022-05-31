import style from './About.module.css'
import { Layout } from '../../components/index.js'

// import from components
import { Header, ProfessionalExpert } from '../../components/index.js'

// import from views
import { AboutUs, Slogan, VisionAndMission, Client } from '../../views/About/index.js'

// backgr
import backgr1 from '../../assets/images/bubble-backgr-about.svg'
import backgr2 from '../../assets/images/about-bubble-backgr-2.svg'

// MUI
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    about: {
        backgroundImage: `url('${backgr1.src}'), url('${backgr2.src}')`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'auto, auto',
        backgroundPosition: 'top 700px right 0, top 2727px left 0',
    }
})

function About() {

    const classes = useStyles()

    return (
        <Layout>
            <div className={classes.about}>
                <Header logo1={true} color1={false} />
                <AboutUs />
                <ProfessionalExpert />
                <Slogan />
                <VisionAndMission />
                <Client />
            </div>
        </Layout>
    )
}

export default About