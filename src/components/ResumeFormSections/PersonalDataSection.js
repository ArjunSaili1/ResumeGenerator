import React, { Component } from "react";

class PersonalDataSection extends Component {

    render(){
        return(
            <div className="resume-section">
                <h2 className="section-title">Personal Information</h2>
                <div className="section-fields">
                    <input className="section-input" type="text" name="name" placeholder="Full Name" onChange={this.props.updatePersonalInfo}></input>
                    <input className="section-input" type="text" name="title" placeholder="Current Position/Title" onChange={this.props.updatePersonalInfo}></input>
                    <input className="section-input" type="text" name="address" placeholder="Address" onChange={this.props.updatePersonalInfo}></input>
                    <input className="section-input" type="number" name="phone" placeholder="Phone Number" onChange={this.props.updatePersonalInfo}></input>
                    <input className="section-input" type="text" name="email" placeholder="Email" onChange={this.props.updatePersonalInfo}></input>
                </div>
            </div>
        )
    }
}

export default PersonalDataSection