import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPages from "../pages/CoursesPages";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CoursDetailsPage from "../pages/CoursDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPages}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/Refund" component={RefundPage}/>
                    <Route exact path="/Terms" component={TermsPage}/>
                    <Route exact path="/Privacy" component={PrivacyPage}/>
                    <Route exact path="/ProjectDetails" component={ProjectDetailsPage}/>
                    <Route exact path="/CourseDetails" component={CoursDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;