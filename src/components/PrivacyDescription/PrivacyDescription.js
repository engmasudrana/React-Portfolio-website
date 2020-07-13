import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PrivacyDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <ul className="serviceDescription text-justify">
                                <li>BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</li><br/>
                                <li>BY VIEWING, VISITING, USING, OR INTERACTING WITH THIS SITE OR WITH ANY BANNER, POP-UP, OR ADVERTISING THAT APPEARS ON IT, YOU ARE AGREEING TO ALL THE PROVISIONS OF THIS TERMS OF USE POLICY AND THE PRIVACY POLICY OF this site.</li><br/>
                                <li>THIS SITE SPECIFICALLY DENIES ACCESS TO ANY INDIVIDUAL THAT IS COVERED BY THE CHILDREN'S ONLINE PRIVACY PROTECTION ACT (COPPA) OF 1998.</li><br/>
                                <li>THIS SITE RESERVES THE RIGHT TO DENY ACCESS TO ANY PERSON OR VIEWER FOR ANY LAWFUL REASON. UNDER THE TERMS OF THE PRIVACY POLICY, WHICH YOU ACCEPT AS A CONDITION FOR VIEWING, THIS SITE IS ALLOWED TO COLLECT AND STORE DATA AND INFORMATION FOR THE PURPOSE OF EXCLUSION AND FOR MANY OTHER USES.</li><br/>
                                <li>THIS TERMS OF USE AGREEMENT MAY CHANGE FROM TIME TO TIME. VISITORS HAVE AN AFFIRMATIVE DUTY, AS PART OF THE CONSIDERATION FOR PERMISSION TO ACCESS this site, TO KEEP THEMSELVES INFORMED OF SUCH CHANGES BY REVIEWING THIS TERMS OF USE PAGE EACH TIME THEY VISIT THIS SITE.</li><br/>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default PrivacyDescription;