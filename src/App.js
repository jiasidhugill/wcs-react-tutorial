import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import About from './pages/about';

function Home() {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/about');
    };
    
    return (
      <div className="App">
         <h1>This is my web app!</h1>
         <p>It has a paragraph here</p>
         <h3>And a subheading here</h3>
         <button onClick={goToAbout}>About us</button>
      </div>
    );
}

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
