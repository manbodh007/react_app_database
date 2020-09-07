import React, { Component } from "react";
import { connect } from "react-redux";
import {loginUser, clearAuthState} from '../actions/auth';

function mapStateToProps(state) {
  return {
      auth:state.auth
  };
}



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidMount() {
      this.props.dispatch(clearAuthState());
  }
  

  handleChange = (fieldName,value) => {
    this.setState({
       [fieldName]:value,
    });
  };
  handleSubmitBtn = (e)=>{
    e.preventDefault();
     this.props.dispatch(loginUser(this.state))
  }

  render() {
      const {error,inProgress} = this.props.auth;
    return (
      <form className="form">
        <h2>Log in</h2>
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
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => {
            this.handleChange("password", e.target.value);
          }}
        />
        <button className="login-btn" onClick={this.handleSubmitBtn} disabled={inProgress}>Log in</button>
      </form>
    );
  }
}

export default connect(mapStateToProps)(Login);
