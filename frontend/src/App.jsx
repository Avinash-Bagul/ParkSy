import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";  
import Dashboard from "./pages/driverPage/Dashboard";
import SingleSpace from "./components/driver/dashboard/SingleSpace";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard/>} />
        <Route path="/space/:id" element={<SingleSpace/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

