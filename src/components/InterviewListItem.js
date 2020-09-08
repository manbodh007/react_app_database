import React, { Component } from 'react';
import { selectStudent } from '../actions/interview';

class InterviewListItem extends Component {
   
    handleSelectStudent = ()=>{
        const {interview_id,student} = this.props;
        this.props.dispatch(selectStudent(interview_id,student._id));
    }
    render() {
        const {student} = this.props;

        return (
            <div className = 'list' key={student._id}>
                <span>{student.name}</span>
                <button onClick= {this.handleSelectStudent}>select</button>
              </div>
        );
    }
}

export default InterviewListItem;