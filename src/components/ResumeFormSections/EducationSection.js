import React, { Component } from "react";

class EducationSection extends Component {
    render(){
        return(
            <div>
                <h3 className="section-title">Education</h3>
                <div className="section-fields">
                    <input type="text" name="programName" placeholder="Program/Field of Study" onChange={this.props.updateInfo}></input>
                    <input type="text" name="schoolName" placeholder="Institution Name" onChange={this.props.updateInfo}></input>
                    <input type="number" name="gpa" placeholder="GPA" onChange={this.props.updateInfo}></input>
                    <input type="number" name="fromYear" placeholder="From" onChange={this.props.updateInfo}></input>
                    {this.props.toField}
                    <div>
                        <label htmlFor="present">Present </label>
                        <input id="present" type="checkbox" name="expToYear" defaultChecked onChange={this.props.setToField}></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default EducationSection