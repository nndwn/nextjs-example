import Head from "next/head"
import Layout from "../component/layout"

export default function Home() {
    return (
        <Layout>
            <Head>
            <title>Hello World</title>
                <link rel='preload' href='./anton.woff2' as='font' type='font/woff2' crossOrigin='anonymous'></link>
            </Head>
            <h1 style={{fontFamily: 'anton'}}>Hello this example custom font with next js </h1>
        </Layout>
    )
}