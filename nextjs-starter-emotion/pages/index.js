import Layout from "../components/layouts/layout"
import { css } from "@emotion/react"

export const bodycolor = css`
  body {
    background-color: yellow;
  }
`

export default function Home() {
  return (
    <Layout title={"hello world"} style={bodycolor}>
      <main>
        <h1>Hello</h1>
      </main>
    </Layout>
  )
}