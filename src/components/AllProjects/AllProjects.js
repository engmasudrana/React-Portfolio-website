import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectsCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foolbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardDes">
                                        Some quick example text to build on the card title and make.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectsCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foolbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardDes">
                                        Some quick example text to build on the card title and make.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectsCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foolbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardDes">
                                        Some quick example text to build on the card title and make.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectsCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foolbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardDes">
                                        Some quick example text to build on the card title and make.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectsCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foolbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardDes">
                                        Some quick example text to build on the card title and make.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectsCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foolbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardDes">
                                        Some quick example text to build on the card title and make.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;