import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons"
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                            <a className="socialLink" href="https://www.facebook.com/profile.php?id=100005380605484" target="_blank"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                            <a className="socialLink" href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube}/> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDescription">219 East Rampura, Rampura Dhaka-1219. Dhaka,Bangladesh</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> m.rana2018@yahoo.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> +880 1521380593</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Information</h1>
                            <Link className="footerLink" to="/about">About Me</Link><br/>
                            <a className="footerLink" href="#">My Resume</a><br/>
                            <Link className="footerLink" to="/contact">Contact Me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <Link className="footerLink" to="/Refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/Terms">Terms And Condition</Link><br/>
                            <Link className="footerLink" to="/Privacy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">M.Rana Info.com &copy; 2019-2020</a>
                </Container>


            </Fragment>
        );
    }
}

export default Footer;