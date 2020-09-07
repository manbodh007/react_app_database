import React, { Component } from "react";
import Student from "./Student";
import Login from "./Login";
import StudentList from "./StudentList";

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="home">{isLoggedIn === true ? <StudentList /> : <Login />}</div>
    );
  }
}

export default Home;
