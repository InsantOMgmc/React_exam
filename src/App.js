import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Index from './components';
import Register from './components/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
