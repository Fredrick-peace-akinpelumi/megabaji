
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './component/pages/Landing'
import Navbar from './component/static/Navbar';
import Footer from './component/static/Footer';
import Signup from './component/pages/Signup';
import Casino from './component/pages/casino/Casino';
import Slot from './component/pages/Slot';
import Promotions from './component/pages/promotion/Promotions';
import Table from './component/pages/Table';
import Game1 from './component/pages/game/Game1';

function App() {
  return (
   <>
        <Navbar/>
       
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/casino' element={<Casino/>}/>
            <Route path='/slot' element={<Slot/>}/>
            <Route path='/promotion' element={<Promotions/>}/>
            <Route path='/table' element={<Table/>}/>
            <Route path='/game' element={<Game1/>}/>
        </Routes>
    
    <Footer/>
   </>
  );
}

export default App;
