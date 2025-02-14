import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import About from './pages/about';
import Result from './components/search-result'; // import your result component

function Home() {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/about');
    };

    const data = [ // this is the data we'll use on our web page
        {
            'title': 'H10 Madison',
            'description': `Located in the heart of Barcelona, just 240 metres from the cathedral,
                            the H10 Madison is a new four-star superior hotel.`,
        },
        {
            'title': 'Catalonia Magdalenes',
            'description': `New four-star hotel located in the heart of Barcelona, in the Gothic 
                            neighborhood of the city, between the shopping area Portal de l'Angel 
                            and Via Laietana and a few meters from Las Ramblas, Plaça Catalunya 
                            and the Cathedral.`,
        },
        {
            'title': 'Majestic Hotel & Spa Barcelona',
            'description': `Deluxe 5-star traditional hotel in the real heart of Barcelona, few 
            steps away from Gaudi monuments and famous Rambla.`,
        },
        {
            'title': 'Andante Hotel',
            'description': `The building is located in the Raval Quarter, in the Ciutat Vella district. 
            It is superbly located on the Av. Drassanes, 23-25, which is in the old city center, right 
            in the heart of Barcelona, a few minutes walk from Las Ramblas.`,
        },
    ]
    
    return (
        <div className="App">
            <h1>This is my web app!</h1>
            <p>It has a paragraph here</p>
            <h3>And a subheading here</h3>
            <button onClick={goToAbout}>About us</button>
            <h2>Search Results for Hotels in Barcelona</h2>
            {
                data.map((item) => { // .map loops through each item in a list
                    return <Result title={item.title} summary={item.description}/>
                })
            }
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
