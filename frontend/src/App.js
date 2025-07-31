import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' //instead of Swutch, we use Routes 
import Home from './pages/Home';
import Signup from './pages/Signup';
import ProviderForm from './pages/ProviderForm';

function App() {
  return(
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/signup">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />       {/* instead of exact component we use element */}
          <Route path="/signup" element={<Signup/>} />
          <Route path="/provider-form" element={<ProviderForm />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
