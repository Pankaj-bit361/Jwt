import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Mainroutes from './components/Mainroutes';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Mainroutes/>
     <Link to="/login"><button>Login</button></Link>
     <Link to="/signup"><button>Signup</button></Link>
    </div>
  );
}

export default App;
