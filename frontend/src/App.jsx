import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";  
import Dashboard from "./pages/driverPage/Dashboard";
import SingleSpace from "./components/driver/dashboard/SingleSpace";
import Space from "./pages/driverPage/Space";
import MyBookings  from "./pages/driverPage/MyBookings";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Dashboard/>} />
        <Route exact path="/space/:id" element={<Space/>} />
        <Route exact path="/myBookings" element={<MyBookings/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

