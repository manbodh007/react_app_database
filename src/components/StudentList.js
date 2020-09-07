import React, { Component } from 'react';
import { connect } from 'react-redux';
import Student from './Student';

function mapStateToProps(state) {
    return {
        students:state.students
    };
}

class StudentList extends Component {
    render() {
        const {students} = this.props;
        return (
            <div className = 'student-list'>
              {students.map(student=>(
                 <Student student = {student}/>
              ))}  
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(StudentList);