import './App.css';
import MasterLayout from './components/layouts/MasterLayout';
import Home from './components/pages/home';
import { Route, Routes } from 'react-router';
import Shop from './components/pages/shop';
import Detail from './components/pages/detail';
import Login from './components/pages/login';
import Regester from './components/pages/regester';
import Cart from './components/pages/cart';
import Utraboot from './components/pages/utraboot';
import Jodan from './components/pages/jodan';
import Nike01 from './components/pages/nike01';
import Mlb from './components/pages/mlb';
import Converse from './components/pages/converse';
import Adidass from './components/pages/adidas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MasterLayout Page={<Home />} />} />
        <Route path='shop' element={<MasterLayout Page={<Shop />} />} />
        <Route path='detail/:id' element={<MasterLayout Page={<Detail />} />} />
        <Route path='login' element={<MasterLayout Page={<Login />} />} />
        <Route path='regester' element={<MasterLayout Page={<Regester />} />} />
        <Route path='cart' element={<MasterLayout Page={<Cart />}/>}  />
        <Route path='utraboot' element={<MasterLayout Page={<Utraboot />}/>}  />
        <Route path='jodan' element={<MasterLayout Page={<Jodan />}/>}  />
        <Route path='nike01' element={<MasterLayout Page={<Nike01/>}/>}  />
        <Route path='mlb' element={<MasterLayout Page={<Mlb />}/>}  />
        <Route path='converse' element={<MasterLayout Page={<Converse />}/>}  />
        <Route path='adidass' element={<MasterLayout Page={<Adidass />}/>}  />
      </Routes>
    </div>
  );
}

export default App;
