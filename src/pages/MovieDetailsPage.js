import Container from 'react-bootstrap/Container';
import Movie from '../components/Movie';
import { useParams, useLocation } from 'react-router-dom';

function MovieDetailsPage() {
    const {id} = useParams();
    const location = useLocation();
    const movieData = location.state?.movie;
    return (
        <Container className="MovieDetailsPage">
            MovieDetailsPage{(id)?`, Id: ${id}`:``}
            { movieData && <Movie {...movieData} is_single={true}></Movie>}
        </Container>
    );
}

export default MovieDetailsPage;