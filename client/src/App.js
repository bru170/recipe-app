import './App.css';
// import {AuthContext} from "./context/AuthContext"
import Login from './components/login/Login'
import Register from './components/login/Register'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>  
        <Switch>
          <Register path="/Register"/>
          <Login path="/Login"/>
          <Home exact path="/"/>
          <Profile path="/Profile"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;