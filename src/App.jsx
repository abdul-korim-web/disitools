
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar'
import HomeLayout from './HomeLayout/HomeLayout'

function App() {

  return (
    <>
    <Navbar/>
    <HomeLayout/>
    <ToastContainer autoClose={3000} closeButton={false}/>
    </>
  )
}

export default App
