import style from './Gallery.module.css'
import { Header, Layout } from '../../components/index.js'

// import from views
import { Banner, GetQuota, VideoTour } from '../../views/Gallery/index.js'

export function Gallery() {
    return (
        <Layout>
            <div className={style.gallery}>
                <Header logo1={true} color1={false} />
                <Banner />
                <VideoTour />
                <GetQuota />
            </div>
        </Layout>
    )
}

export default Gallery