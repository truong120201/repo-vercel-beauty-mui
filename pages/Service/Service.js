import style from './Service.module.css'

import { Header, Layout } from '../../components/index.js'

// import from views
import { Faq, Responsibility, Services, ServicesDes } from '../../views/Service/index.js'

function Service() {
    return (
        <Layout>
            <div className={style.service}>
                <Header logo1={true} color1={false} />
                <Services />
                <ServicesDes />
                <Responsibility />
                <Faq />
            </div>
        </Layout>
    )
}

export default Service