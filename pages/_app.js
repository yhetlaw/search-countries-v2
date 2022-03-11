import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import './../styles/style.scss'
import { ThemeProvider } from 'next-themes'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
