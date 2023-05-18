import GlobalStyles from '../components/layouts/globalstyles'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles>
        <Component {...pageProps} />
    </GlobalStyles>
  </>
)

export default App
