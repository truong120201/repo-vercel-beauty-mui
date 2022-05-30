import { Layout } from '../../components/index.js'

// import components from components
import { Header, TitleAndDesc, Contact, ProfessionalExpert } from '../../components/index.js'

// import comnponents from views
import { AboutUs, ListService, Slider } from '../../views/Home1/index.js'

// MUI
import useStyles from './styles.js'
import { Box } from '@material-ui/core'

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