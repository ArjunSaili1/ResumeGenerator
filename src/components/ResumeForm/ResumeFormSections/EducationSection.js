import React from "react";

const EducationSection = (props) => {
    return(
        <div className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="section-fields">
                <input className="section-input" type="text" name="programName" placeholder="Program/Field of Study" onChange={props.updateInfo}></input>
                <input className="section-input" type="text" name="schoolName" placeholder="Institution Name" onChange={props.updateInfo}></input>
                <input className="section-input" type="number" name="gpa" placeholder="GPA" onChange={props.updateInfo}></input>
                <input className="section-input" type="number" name="fromYear" placeholder="From" onChange={props.updateInfo}></input>
                {props.toField} 
                <div className="present section-input">
                    <input id="present" type="checkbox" name="expToYear" defaultChecked onChange={props.updateToField}></input>
                    <label htmlFor="present">Present </label>
                </div>
            </div>
        </div>
    );
}

export default EducationSection