import React, { Component } from "react";
import {changeInterviewResult } from "../actions/interview";

class SelectedList extends Component {
  
  handleChangeResult = (e) => {
    const {student,interview} = this.props;
    this.props.dispatch(changeInterviewResult(student._id,interview._id,e.target.value));
  };
  render() {
    const { student, index, interview } = this.props;

    return (
      <div className="upper-list" key={student._id}>
        <span>{student.name}</span>
        <select
          name="result"
          defaultValue={interview.interviewInfo[index].status}
          onChange={this.handleChangeResult}
        >
          <option>PASS</option>
          <option>FAIL</option>
          <option>On-Hold</option>
          <option>Did Not Attempt</option>
        </select>
      </div>
    );
  }
}

export default SelectedList;
