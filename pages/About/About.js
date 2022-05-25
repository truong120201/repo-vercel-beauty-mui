import style from './About.module.css'
import { Layout } from '../../components/index.js'

// import from components
import { Header, ProfessionalExpert } from '../../components/index.js'

// import from views
import { AboutUs, Slogan, VisionAndMission, Client } from '../../views/About/index.js'

function About() {
    return (
        <Layout>
            <div className={style.about}>
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