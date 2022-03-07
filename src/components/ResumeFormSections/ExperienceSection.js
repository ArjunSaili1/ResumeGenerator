import React, { Component } from "react";

class ExperienceSection extends Component {
    render(){
        return(
            <div className="resume-section">
                <h2 className="section-title">Experience</h2>
                <div className="section-fields">
                    <input className="section-input" type="text" name="position" placeholder="Position" onChange={this.props.updateInfo}></input>
                    <input className="section-input" type="text" name="company" placeholder="Company" onChange={this.props.updateInfo}></input>
                    <input className="section-input" type="text" name="expLocation" placeholder="Location" onChange={this.props.updateInfo}></input>
                    <input className="section-input" type="number" name="expFromYear" placeholder="From" onChange={this.props.updateInfo}></input>
                    {this.props.toField}
                    <div className="present section-input">
                        <input id="present" type="checkbox" name="expToYear" defaultChecked onChange={this.props.setToField}></input>
                        <label htmlFor="present">Present </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperienceSection