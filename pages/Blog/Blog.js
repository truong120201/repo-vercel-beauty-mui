import { Header, Layout } from '../../components/index.js'

// import from views
import { Banner, BlogMainContainer } from '../../views/Blog/index.js'

function Blog() {
    return (
        <Layout>
            <div>
                <Header logo1={true} color1={false} />
                <Banner />
                <BlogMainContainer />
            </div>
        </Layout>
    )
}

export default Blog