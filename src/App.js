import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // add this import statement
import About from './pages/about'; // import the About page you wrote earlier

function Home() { // move your original return statement into another function
    return (
      <div className="App">
         <h1>This is my web app!</h1>
         <p>It has a paragraph here</p>
         <h3>And a subheading here</h3>
      </div>
    );
}

function App() {
  return ( // add this router element
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
