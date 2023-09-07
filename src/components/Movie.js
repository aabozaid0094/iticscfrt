import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const Movie = (movie) => {
    const { id, poster_path, title, overview, release_date, vote_average, vote_count, is_single } = movie;
    const imgPath = "https://image.tmdb.org/t/p/w500/";
    return (
        <Col xxl="3" lg="4" sm="6" xs="12">
            <Card className="Movie my-3">
                <Card.Img variant="top" src={imgPath + poster_path} alt={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {
                        is_single &&
                        <Card.Text>
                            <span className="d-flex">{overview}</span>
                        </Card.Text>
                    }
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>{release_date}</ListGroup.Item>
                    <ListGroup.Item>{`${vote_average} (${vote_count})`}</ListGroup.Item>
                    {
                        !is_single &&
                        <ListGroup.Item>
                            <LinkContainer to={`/MovieDetails/${id}`} state={{ movie: movie }}>
                                <Button variant="primary">Details</Button>
                            </LinkContainer>
                        </ListGroup.Item>
                    }
                </ListGroup>
            </Card>
        </Col>
    );
}

export default Movie;