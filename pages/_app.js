import Header from '../Components/Header'
import SideBar from '../components/SideBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <div className="bg-gray-100   text-gray-600 h-screen flex overflow-hidden text-sm">
    <SideBar></SideBar>
    <div className="flex-grow overflow-auto h-full flex flex-col">
    <Header></Header>
      
  <Component {...pageProps} />

    </div>
  </div>
  </>
  )
}

export default MyApp
