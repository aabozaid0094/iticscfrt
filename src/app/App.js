import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage';
import About from '../pages/AboutPage';
import MovieDetails from '../pages/MovieDetailsPage';
import NotFound from '../pages/NotFoundPage';

function App() {
    return (
        <div className="App">
            <HashRouter basename="/">
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="about/" element={<About/>}></Route>
                    <Route path="MovieDetails/:id?" element={<MovieDetails/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
                <Footer></Footer>
            </HashRouter>
        </div>
    );
}

export default App;