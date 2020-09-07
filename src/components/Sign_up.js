import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { clearAuthState, signUp } from "../actions/auth";

function mapStateToProps(state) {
  return {};
}

class Sign_up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      confrimPassword: "",
    };
  }

  componentDidMount() {
    this.props.dispatch(clearAuthState());
  }
  handleSignup = (e) => {
    e.preventDefault();
    this.props.dispatch(signUp(this.state));
  };
  handleChange = (fieldName,value)=>{
      this.setState({
          [fieldName]:value,
      })
  }

  render() {
    const { isLoggedIn, error } = this.props.auth;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <form className="form">
        <h2>Register Here</h2>
        {error && <div className="alert error-dailog">{error}</div>}
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          onChange={(e) => {
            this.handleChange("email", e.target.value);
          }}
        />
        <input
          type="name"
          name="text"
          placeholder="Name"
          required
          onChange={(e) => {
            this.handleChange("name", e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => {
            this.handleChange("password", e.target.value);
          }}
        />
        <input
          type="password"
          name="confrimPassword"
          placeholder="confirm password"
          required
          onChange={(e) => {
            this.handleChange("confirmPassword", e.target.value);
          }}
        />
        <button className="login-btn" onClick={this.handleSignup}>
          Create
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps)(Sign_up);
