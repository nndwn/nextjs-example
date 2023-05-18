import { css, Global } from "@emotion/react";

export const GlobalStyles = ({color, font, children, style}) => (
    <>
        <Global styles= {css`
            *, :after, :before {
                box-sizing: border-box;
        }
        @media (prefers-reduced-motion: no-preference){
            :root {
                scroll-behavior: smooth;
            }
        }
        body {
            -webkit-font-smoothing: antialiased;
            font-family: ${font == null ? "" : font + ','}sans-serif;
            line-height: 1.6;
            color: ${color};
        }
        a{
            text-decoration: none;
        }
        a,h1,h2,h3,h4 {
            font:inherit;
        }
        ul,h1,h2,h3,h4 {
            padding: 0;
        }
        body, p, ul, h1, h2, h3,h4 {
            margin: 0
        }
        input, label {
            outline: 0;
        }
        svg {
            fill: inherit
        }
        ${style}
    `}/>
    {children}
    </>
)
export default GlobalStyles