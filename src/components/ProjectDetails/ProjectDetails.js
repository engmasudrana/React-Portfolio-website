import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Projectimg from '../../asset/image/foodbazz.png'

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={Projectimg}/>

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Foll Bazzar</h2>
                            <p className="serviceDescription">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                            <ul>
                                <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                <li className="serviceDescription">Admin Can Add, Edit, Delete Product Dynamically</li>
                                <li className="serviceDescription">Dynamic shipping point facilities</li>
                                <li className="serviceDescription">Admin can send special offer for special user</li>
                                <li className="serviceDescription">App force update system form server</li>
                                <li className="serviceDescription">App can receive push notification anytime also after the app is closed.</li>
                                <li className="serviceDescription">Admin can send free message in app inbox</li>
                                <li className="serviceDescription">Admin can push notification to specific user</li>
                                <li className="serviceDescription">User can make wishlist</li>
                                <li className="serviceDescription">User can see order history and invoice also</li>
                                <li className="serviceDescription">Dynamic Product Slider</li>
                                <li className="serviceDescription">Video Blog</li>
                            </ul>
                            <Button variant="primary">More Info</Button>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ProjectDetails;