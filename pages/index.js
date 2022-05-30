import styles from '../styles/Home.module.css'
import { Layout } from '../components/index'
import Home1 from './Home1/Home1'

import React from 'react';

export default function Index() {

  return (
    <div className={styles.container}>
      {/* <Layout> */}
        <Home1 />
      {/* </Layout> */}
    </div>
  );
}
