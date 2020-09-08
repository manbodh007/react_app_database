import React from "react";
import { writeToString } from "@fast-csv/format";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
  componentDidMount() {
    const {student}  = this.props;
    const rows = [
      [
        "Student id",
        "student name",
        "student college",
        "student status",
        "DSA Final Score",
        "WebD Final Score",
        "React Final Score",
        "interview date",
        "interview company",
        "interview student result",
      ],
    ];
    for(let i=0;i<student.interviewInfo.length;i++){
       let arr = [
        student._id,
        student.name,
        student.collageName,
        student.status,
        student.dsaScore,
        student.web_devScore,
        student.reactScore,
        student.interviewInfo[i].date,
        student.interviewInfo[i].company,
        student.interviewInfo[i].status,
       ]
       rows.push(arr);
      }
      
  
    writeToString(rows).then((data) => {
      this.setState({
        csvData: data,
      });
    });
  }

  handleDownload = () => {
    const {student}  = this.props;
    const data = this.state.csvData;
    const obj = { hello: "world" };
    const blob = new Blob([data], {
      type: "text/csv",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  render() {
    const { student } = this.props;
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
        <button className="downloadBtn" onClick={this.handleDownload}>
          download
        </button>
      </div>
    );
  }
}

export default Student;

// student._id,
      //  student.name,
      //  student.collageName,
      //  student.status,
      //  student.dsaScore,
      //  student.web_devScore,
      //  student.reactScore,
      //  student.interviewDate[0],
      //  student.interviewCompany[0],
      //  student.interviewResult[0],