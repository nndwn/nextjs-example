import Head from "next/head";
import GlobalStyles from "./globalstyles";

export default function Layout ({title, children, style}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" /> 
            </Head>
            <GlobalStyles style={style}/>
            {children}
        </>
    )
}