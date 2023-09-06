import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header className="sticky-top">
            <Navbar bg="dark" expand="sm">
                <Container>
                    <Navbar.Brand href="#home">ITI Client Side Course Final React Tasks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="header_nav" />
                    <Navbar.Collapse id="header_nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="https://github.com/aabozaid0094/iticscfrt" target="_blank">Code Repo</Nav.Link>
                            <LinkContainer to={`/`}>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={`/About`}>
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={`/MovieDetails`}>
                                <Nav.Link>MovieDetailsPage</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;