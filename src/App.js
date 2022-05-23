import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home/Home';
import Navbar from './pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='appointment' element={<Appointment></Appointment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
