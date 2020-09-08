import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import { createStudent } from "../actions/student";

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStyle: "none",
      name: "",
      batch: "",
      collageName: "",
      status: "",
      dscScore: "",
      reactScore: "",
      wev_devScore: "",
    };
  }

  handleLogOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logout());
  };

  showform = () => {
    if (this.state.formStyle === "none") {
      this.setState({
        formStyle: "flex",
      });
    } else {
      this.setState({
        formStyle: "none",
      });
    }
  };
  handleForm = (e) => {
    e.preventDefault();
    this.props.dispatch(createStudent(this.state));
  };
  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  render() {
    const { isLoggedIn, error, inProgress, user } = this.props.auth;
    return (
      <div className="Navbar">
        <form
          className="student-form"
          style={{ display: this.state.formStyle }}
        >
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            required
            onChange={(e) => {
              this.handleChange("name", e.target.value);
            }}
          />
          <input
            type="text"
            name="batch"
            placeholder="Student Batch"
            required
            onChange={(e) => {
              this.handleChange("batch", e.target.value);
            }}
          />
          <input
            type="text"
            name="collage_name"
            placeholder="Collage Name"
            required
            onChange={(e) => {
              this.handleChange("collageName", e.target.value);
            }}
          />
          <input
            type="text"
            name="status"
            placeholder="Placement status"
            required
            onChange={(e) => {
              this.handleChange("status", e.target.value);
            }}
          />
          <input
            type="text"
            name="dsa_Score"
            placeholder="DSA final Score"
            required
            onChange={(e) => {
              this.handleChange("dsaScore", e.target.value);
            }}
          />
          <input
            type="text"
            name="react_Score"
            placeholder="React final Score"
            required
            onChange={(e) => {
              this.handleChange("reactScore", e.target.value);
            }}
          />
          <input
            type="text"
            name="web_devScore"
            placeholder="Web development final score"
            required
            onChange={(e) => {
              this.handleChange("web_devScore", e.target.value);
            }}
          />
          <input
            className="submit-btn"
            type="submit"
            value="create"
            onClick={this.handleForm}
          />
        </form>
        <div className="left-nav">
          <Link to ='/' style={{textDecoration:'none',color:'white'}}>
            <h1> Student Database</h1>
          </Link>
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
            <div onClick={this.showform}>
              <button>Create New Student</button>
            </div>
            <div>
              <Link to="/interviews">
                <button>Interviews</button>
              </Link>
            </div>
            <div className="user-avatar">
              <img src="https://image.flaticon.com/icons/svg/145/145867.svg" />
              <span>{user.name}</span>
            </div>
            <div onClick={this.handleLogOut}>logout</div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Navbar);
