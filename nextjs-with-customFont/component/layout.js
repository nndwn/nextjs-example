import { css, Global } from "@emotion/react";
import {page} from "./style.js"

const Layout = ({children}) => {
    return (
        <>
            <Global styles = {css`
              ${page}
            `
             } />
            <main>
                {children}
            </main>
        </>
    )
}
export default Layout