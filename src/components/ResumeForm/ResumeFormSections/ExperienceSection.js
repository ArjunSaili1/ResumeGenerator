import React from "react";

const ExperienceSection = (props) => {
    return(
        <div className="resume-section">
            <h2 className="section-title">Experience</h2>
            <div className="section-fields">
                <input className="section-input" type="text" name="position" placeholder="Position" onChange={props.updateInfo}></input>
                <input className="section-input" type="text" name="company" placeholder="Company" onChange={props.updateInfo}></input>
                <input className="section-input" type="text" name="expLocation" placeholder="Location" onChange={props.updateInfo}></input>
                <input className="section-input" type="number" name="fromYear" placeholder="From" onChange={props.updateInfo}></input>
                {props.toField}
                <div className="present section-input">
                    <input id="present" type="checkbox" name="toYear" defaultChecked onChange={props.updateToField}></input>
                    <label htmlFor="present">Present </label>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection