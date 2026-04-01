import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomeLayout from "./HomeLayout/HomeLayout";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <HomeLayout/>
      <Footer />
      <ToastContainer autoClose={3000} closeButton={false} />
    </>
  );
}

export default App;
