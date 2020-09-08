import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import interview from "../reducers/interview";
import { createInterview } from "../actions/interview";
import student from "../reducers/student";
import Lists from "./Lists";

function mapStateToProps(state) {
  return {
    auth: state.auth,
    interviews: state.interviews,
    students: state.students,
  };
}

class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formDispaly: "none",
      name: "",
      date: "",
    };
    
  }
  

  handleCreateBtn = () => {
    if (this.state.formDispaly === "none") {
      this.setState({
        formDispaly: "flex",
      });
    }
  };
  handleSubmitBtn = (e) => {
    e.preventDefault();
    this.props.dispatch(createInterview({
      name:this.state.name,
      date:this.state.date
    }));
    
    this.setState({
      formDispaly: "none",
    });
  };

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };
 

  render() {
    const { isLoggedIn, error } = this.props.auth;
    const { interviews, students } = this.props;
    if (!isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="interview-list-container">
        <button className="heading" onClick={this.handleCreateBtn}>
          Create Interview
        </button>
        <form
          className="interview-form"
          style={{ display: this.state.formDispaly }}
        >
          <input
            type="text"
            name="name"
            placeholder="Subject Name"
            required
            onChange={(e) => {
              this.handleChange("name", e.target.value);
            }}
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            required
            onChange={(e) => {
              this.handleChange("date", e.target.value);
            }}
          />
          <button onClick={this.handleSubmitBtn}>Create</button>
        </form>
        {interviews.length>0&&(interviews.map((interview) => {
          return (
            <Lists interview = {interview} students = {students} key={interview._id} dispatch={this.props.dispatch}/>
          );
        }))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Interview);
