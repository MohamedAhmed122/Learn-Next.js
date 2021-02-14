import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Nav />
    <Component {...pageProps} />
    <Footer />
     </>
    )
}

export default MyApp
