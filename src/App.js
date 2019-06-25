import React, { Component } from "react";
import { Container, Sidebar } from "semantic-ui-react";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import MenuSidebar from "./Components/MenuSidebar";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import HowThisWorks from "./Components/HowThisWorks";
import AboutProject from "./Components/AboutProject";
import BeingStockholmBeta from "./Components/BeingStockholmBeta";
import Contact from "./Components/Contact";
import LegalInfo from "./Components/LegalInfo";
import MyProfile from "./Components/MyProfile";
import AdminPage from "./Components/AdminPage";
import { connect } from "react-redux";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import { IonApp, IonContent } from "@ionic/react";

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonContent>
          <Sidebar.Pushable as={Container} id="main-content">
            <Switch>
              <Route exact path="/" component={Map} />
              <Route exact path="/admin" component={AdminPage} />
              <Route exact path="/log-in" component={Login} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/how-this-works" component={HowThisWorks} />
              <Route exact path="/about" component={AboutProject} />
              <Route exact path="/contact" component={Contact} />
              <Route
                exact
                path="/being-stockholm-beta"
                component={BeingStockholmBeta}
              />
              <Route exact path="/legal-info" component={LegalInfo} />
              <Route exact path="/my-profile" component={MyProfile} />
            </Switch>

            <MenuSidebar />
          </Sidebar.Pushable>
          <Footer />
        </IonContent>
      </IonApp>
    );
  }
}

export default connect()(App);
