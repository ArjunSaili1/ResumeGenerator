import React, { Component } from "react";

class ExperienceSection extends Component {
    render(){
        return(
            <div>
                <h3 className="section-title">Experience</h3>
                <div className="section-fields">
                    <input type="text" name="position" placeholder="Position" onChange={this.props.updateInfo}></input>
                    <input type="text" name="company" placeholder="Company" onChange={this.props.updateInfo}></input>
                    <input type="text" name="expLocation" placeholder="Location" onChange={this.props.updateInfo}></input>
                    <input type="number" name="expFromYear" placeholder="From" onChange={this.props.updateInfo}></input>
                    <input type="number" name="expToYear" placeholder="To" onChange={this.props.updateInfo}></input>
                </div>
            </div>
        )
    }
}

export default ExperienceSection