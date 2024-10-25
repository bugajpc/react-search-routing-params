import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Items from './Items';
import Navbar from './Navbar';
import Item from './Item';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/single-item/:text' element={<Item/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
