import React, { Component } from "react";
import InterviewListItem from "./InterviewListItem";
import SelectedList from "./SelectedList";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleList: "none",
    };
  }
  toggleStudentList = () => {
    const { toggleList } = this.state;
    if (toggleList == "none") {
      this.setState({
        toggleList: "block",
      });
    } else {
      this.setState({
        toggleList: "none",
      });
    }
  };
  render() {
    const { students, interview } = this.props;
    return (
      <div className="interview-list" onClick={this.toggleStudentList}>
        <div className="interview">
          <h3>{interview.name}</h3>
          <small>{interview.date}</small>
        </div>
        <div className="students" style={{ display: this.state.toggleList }}>
          {interview.selected.length > 0 &&
            interview.selected.map((student, index) => {
              return (
                <SelectedList
                  student={student}
                  dispatch={this.props.dispatch}
                  interview={interview}
                  index={index}
                  key={index}
                />
              );
            })}
          {interview.students &&
            interview.students.map((student) => {
              return (
                <InterviewListItem
                  student={student}
                  interview_id={interview._id}
                  dispatch={this.props.dispatch}
                  key={student._id}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Lists;
