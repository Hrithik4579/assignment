import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Next from './components/Next'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Track from './components/Track';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Welcome/>}/>
          <Route exact path='/next' element={<Next/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/track' element={<Track/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
