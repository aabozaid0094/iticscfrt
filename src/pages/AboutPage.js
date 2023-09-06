import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import PP from '../images/pp1000.jpg';

function AboutPage() {
    return (
        <Container className="AboutPage">
            <Row className="align-items-center justify-content-center">
                <Col lg="4">
                    <div className="my-3">
                        <img className="w-100 rounded" src={PP} alt="A. Abo Zaid" />
                    </div>
                </Col>
                <Col lg={{ span: 7, offset: 1 }}>
                    <h3 className="fs-2">A. Abo Zaid</h3>
                    <h4 className="fs-3 text-secondary">Software Developer</h4>
                    <p className="fs-4">A Software Developer who has background in multiple technology stacks</p>
                    <Row>
                        <Col sm className="mb-3">
                            <ListGroup>
                                <ListGroup.Item>6 years experience in PHP/WP</ListGroup.Item>
                                <ListGroup.Item>2+ years experience in C#/DotNet Core</ListGroup.Item>
                                <ListGroup.Item>Experience developing Node.js App with Express</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm className="mb-3">
                            <ListGroup>
                                <ListGroup.Item>Experience developing React.js Apps</ListGroup.Item>
                                <ListGroup.Item>Experience developing Vue.js Apps</ListGroup.Item>
                                <ListGroup.Item>Experience developing with Bootstrap</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center justify-content-center">
                        <a href="tel:+201145066025" className="btn m-2 p-2 fs-3 lh-1 bg-secondary bg-opacity-25 rounded-circle"><i className="bi-phone-fill"></i></a>
                        <a href="mailto:aabozaid0094@gmail.com" className="btn m-2 p-2 fs-3 lh-1 bg-secondary bg-opacity-25 rounded-circle"><i className="bi-envelope-at-fill"></i></a>
                        <a href="https://www.linkedin.com/in/aabozaid0094/" className="btn m-2 p-2 fs-3 lh-1 bg-secondary bg-opacity-25 rounded-circle"><i className="bi-linkedin"></i></a>
                        <a href="https://github.com/aabozaid0094" className="btn m-2 p-2 fs-3 lh-1 bg-secondary bg-opacity-25 rounded-circle"><i className="bi-github"></i></a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutPage;