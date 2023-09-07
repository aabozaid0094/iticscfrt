import Row from 'react-bootstrap/Row';
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
            <Row className="justify-content-center">
                { movieData && <Movie {...movieData} is_single={true}></Movie>}
            </Row>
        </Container>
    );
}

export default MovieDetailsPage;