import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/Login";
import Footer from "./components/Footer";
// import SignUp from "./pages/SignUp";  // uncomment if needed

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signUp" element={<SignUp />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

