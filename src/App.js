import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout.js';
function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
