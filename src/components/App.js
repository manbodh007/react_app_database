import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { fetchStudent } from "../actions/student";
import JwtDecode from "jwt-decode";
import { authenticateUser } from "../actions/auth";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Sign_up from "./Sign_up";
import Home from "./Home";
import Interview from "./Interview";
import { fetchInterviews } from "../actions/interview";



class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchStudent());
    this.props.dispatch(fetchInterviews());
    const { auth } = this.props;

    let token = localStorage.getItem("token");
    if (token) {
      let user = JwtDecode(token);
      console.log("user", user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    console.log("props", this.props);
    const { user, isLoggedIn, inProgress, error } = this.props.auth;
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} isLoggedIn={isLoggedIn} />;
            }}
          />
          <Route
            path="/signup"
            render={(props) => {
              return <Sign_up {...props} auth={this.props.auth} />;
            }}
          />
          <Route
            path="/interviews"
            render={(props) => {
              return <Interview {...props} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    students: state.students,
    auth: state.auth,
    interviews:state.interviews
  };
}

export default connect(mapStateToProps)(App);
