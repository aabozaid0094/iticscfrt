import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

function MovieDetailsPage() {
    const {id} = useParams();
    return (
        <Container className="MovieDetailsPage">
            MovieDetailsPage{(id)?`, Id: ${id}`:``}
        </Container>
    );
}

export default MovieDetailsPage;