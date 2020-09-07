import React from "react";

function Student(props) {
  const { student } = props;
  return (
    <div className="student">
      <div className="student-info">
        <div>
          <span>Name</span>
          <span>{student.name}</span>
        </div>
        <div>
          <span>Batch</span>
          <span>{student.batch}</span>
        </div>
      </div>
      <div className='download'>
      </div>
    </div>
  );
}

export default Student;
