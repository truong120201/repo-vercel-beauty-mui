import styles from '../styles/Home.module.css'
import { Layout } from '../components/index'
import Home1 from './Home1/Home1'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Home1 />
      </Layout>
    </div>
  )
}
