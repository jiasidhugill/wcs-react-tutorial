import logo from './logo.svg';
import './App.css';
// add useNavigate to the import statement
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import About from './pages/about';

function Home() {
    const navigate = useNavigate(); // add this line

    const goToAbout = () => {
        navigate('/about'); // navigate to the /about page when function is called
    };
    
    return (
      <div className="App">
         <h1>This is my web app!</h1>
         <p>It has a paragraph here</p>
         <h3>And a subheading here</h3>
         <button onClick={goToAbout}>About us</button> {/* this button takes us to the about page*/}
      </div>
    );
}

// leave the rest of the file unchanged

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
