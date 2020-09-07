import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

class Navbar extends Component {
  handleLogOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logout());
  };
  render() {
    const { isLoggedIn, error, inProgress, user } = this.props.auth;
    return (
      <div className="Navbar">
        <div className="left-nav">
          <h1> Student Database</h1>
        </div>
        {isLoggedIn == false ? (
          <div className="right-nav">
            <Link to="/">
              <div>Log-in</div>
            </Link>
            <Link to="/signup">
              <div>Register</div>
            </Link>
          </div>
        ) : (
          <div className="right-nav">
            <div className="user-avatar">
              <img src="https://image.flaticon.com/icons/svg/145/145867.svg" />
              <span>{user.name}</span>
            </div>
            <div onClick={this.handleLogOut}>log-out</div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Navbar);
