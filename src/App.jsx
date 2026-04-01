
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar'
import HomeLayout from './HomeLayout/HomeLayout'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <HomeLayout/>
    <Footer/>
    <ToastContainer autoClose={3000} closeButton={false}/>
    </>
  )
}

export default App
