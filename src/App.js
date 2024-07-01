import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import {UserContext} from './context/UserContext';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <UserContext>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<h1>About</h1>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </Router>
    </UserContext>
    </>
  );
}

export default App;
