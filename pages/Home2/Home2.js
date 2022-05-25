// import css module file
import style from './Home2.module.css'

import { Layout } from '../../components/index.js'

// import components from components
import { Header } from '../../components/index.js'

// import components from views
import { AboutUs, Choosing, MainService, RequestCall, Slider, TheBlog } from '../../views/Home2/index.js'

function Home2({ route }) {
    return (
        <Layout>
            <div id='top' className={style.home2}>
                <Header logo1={false} color1={true} />
                <Slider />
                <AboutUs />
                <MainService />
                <Choosing />
                <TheBlog />
                <RequestCall />
            </div>
        </Layout>
    )
}

export default Home2