import { useState, useEffect } from 'react';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';
import Spinner from 'react-bootstrap/Spinner';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
        const url = "https://api.themoviedb.org/3";
        const path = "/discover/movie?sort_by=popularity.desc";
        const apiUrl = (url, path, apiKey) => url + path + apiKey;
        Axios.get(apiUrl(url, path, apiKey))
            .then(response => setMovies(response.data.results));
    }, []);

    return (
        <Container className="Movies">
            <Row className="justify-content-center">
                {
                    (!movies.length>0)
                        ? <Spinner className="my-3" animation="grow" variant="secondary" />
                        : movies.map((m)=><Movie key={m.id} {...m}></Movie>)
                }
            </Row>
        </Container>
    );
};

export default Movies;