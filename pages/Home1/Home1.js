import { Layout } from '../../components/index.js'

// import css module file
import style from './Home1.module.css'

// import components from components
import { Header, TitleAndDesc, Contact, ProfessionalExpert } from '../../components/index.js'

// import comnponents from views
import { AboutUs, ListService, Slider } from '../../views/Home1/index.js'

// MUI
import Grid from '@material-ui/core/Grid'

function Home1() {
    return (
        <Layout>
            <div id='top' className={`${style.home1}`}>
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
            </div>
        </Layout>
    )
}

export default Home1