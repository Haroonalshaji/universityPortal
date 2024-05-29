import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Faculty from './Components/Faculty';
import Parent from './Components/Parent';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/parent' element={<Parent />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
