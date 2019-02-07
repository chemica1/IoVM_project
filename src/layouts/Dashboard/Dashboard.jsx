import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "routes/dashboard.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

<<<<<<< HEAD
=======
import FirebaseAuth from "../../components/Login/firebaseUI";
import StyledFirebaseAuth from "../../components/Login/StyledFirebaseUI";

import firebase from "firebase/app";
import "firebase/auth";

import styles from "../../components/Login/app.css"; // This uses CSS modules.
import "../../components/Login/firebaseui-styling.global.css"; // Import globally.
import { DB_config } from "config/fbconfig.js";

const firebaseApp = firebase.initializeApp(DB_config);
>>>>>>> 6c66ed7c0d0d0903991a21b96425031404a47ebc
const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
<<<<<<< HEAD
=======
        //이게 처음 들왔을때 화면이다.
>>>>>>> 6c66ed7c0d0d0903991a21b96425031404a47ebc
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
=======
      mobileOpen: false,
      isSignedIn: undefined
    };

    this.resizeFunction = this.resizeFunction.bind(this);
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

>>>>>>> 6c66ed7c0d0d0903991a21b96425031404a47ebc
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
<<<<<<< HEAD
=======
    this.unregisterAuthObserver = firebaseApp
      .auth()
      .onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user });
      });
>>>>>>> 6c66ed7c0d0d0903991a21b96425031404a47ebc
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
<<<<<<< HEAD
  }
=======
    this.unregisterAuthObserver();
  }

>>>>>>> 6c66ed7c0d0d0903991a21b96425031404a47ebc
  render() {
    const { classes, ...rest } = this.props;
    return (
<<<<<<< HEAD
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          logoText={"US Entertainment"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
=======
      <div className={styles.container}>
        <div className={styles.logo}>
          <i className={styles.logoIcon + " material-icons"}>photo</i> My App
        </div>
        <div className={styles.caption}>This is a cool demo app</div>
        {this.state.isSignedIn !== undefined &&
          !this.state.isSignedIn && (
            <div>
              {/* <StyledFirebaseAuth
                className={styles.firebaseUi}
                uiConfig={this.uiConfig}
                firebaseAuth={firebaseApp.auth()}
              /> */}
>>>>>>> 6c66ed7c0d0d0903991a21b96425031404a47ebc
            </div>
          )}
<<<<<<< HEAD
          {this.getRoute() ? <Footer /> : null}
        </div>
=======
        {this.state.isSignedIn && (
          <div className={classes.wrapper}>
            <Sidebar
              routes={dashboardRoutes}
              logoText={"US Entertainment"}
              logo={logo}
              image={image}
              handleDrawerToggle={this.handleDrawerToggle}
              open={this.state.mobileOpen}
              color="blue"
              {...rest}
            />
            <div className={classes.mainPanel} ref="mainPanel">
              <Header
                routes={dashboardRoutes}
                handleDrawerToggle={this.handleDrawerToggle}
                {...rest}
              />

              {this.getRoute() ? (
                <div className={classes.content}>
                  <div className={classes.container}>{switchRoutes}</div>
                </div>
              ) : (
                <div className={classes.map}>{switchRoutes}</div>
              )}
              {this.getRoute() ? <Footer /> : null}
            </div>
          </div>
        )}
>>>>>>> 6c66ed7c0d0d0903991a21b96425031404a47ebc
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);