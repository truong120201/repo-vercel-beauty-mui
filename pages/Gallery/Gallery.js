import { Header, Layout } from '../../components/index.js'

// import from views
import { Banner, GetQuota, VideoTour } from '../../views/Gallery/index.js'

export function Gallery() {
    return (
        <Layout>
            <>
                <Header logo1={true} color1={false} />
                <Banner />
                <VideoTour />
                <GetQuota />
            </>
        </Layout>
    )
}

export default Gallery