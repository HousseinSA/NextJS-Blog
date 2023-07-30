import Layout from "../app/layout"
import MainNavigation from "./components/MainNavigation"
import Head from "next/head"
export default function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <MainNavigation />
      <Component {...pageProps} />
    </Layout>
  )
}
