import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/signUp' element />
        <Route exact path='/login' element={<Login/> }/>
        
      </Routes>
      <h1>app is properly running</h1>
    </>
  );
}

export default App;
