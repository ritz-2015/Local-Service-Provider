import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' //instead of Swutch, we use Routes 
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return(
    <div className="App">
      <Router>
        <Link to="/signup"> Sign Up  </Link>
        <Link to="/"> Home  </Link>
        <Routes>
          <Route path="/" element={<Home/>} />       {/* instead of exact component we use element */}
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
