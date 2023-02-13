import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Home from './pages/Home';


function App() {
  return (

    <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </div >
    </Router>


  );
}

export default App;
