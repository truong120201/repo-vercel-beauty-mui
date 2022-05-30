import '../styles/globals.css'
import createEmotionCache from '../src/createEmotionCache'
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { StylesProvider } from '@material-ui/core';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <StylesProvider injectFirst={true}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </CacheProvider>
    </StylesProvider>
  );
}
