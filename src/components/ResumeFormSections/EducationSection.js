import React, { Component } from "react";

class EducationSection extends Component {
    render(){
        return(
            <div>
                <h3 className="section-title">Education</h3>
                <div className="section-fields">
                    <input type="text" name="programName" placeholder="Program/Field of Study" onChange={this.props.updateInfo}></input>
                    <input type="text" name="schoolName" placeholder="Institution Name" onChange={this.props.updateInfo}></input>
                    <input type="number" name="eduFromYear" placeholder="From" onChange={this.props.updateInfo}></input>
                    <input type="number" name="eduToYear" placeholder="To" onChange={this.props.updateInfo}></input>
                    <input type="number" name="gpa" placeholder="GPA" onChange={this.props.updateInfo}></input>
                </div>
            </div>
        )
    }
}

export default EducationSection