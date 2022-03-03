import React, { Component } from "react";

class PersonalDataSection extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3>Personal Information</h3>
                <div>
                    <input name="name" placeholder="Full Name" onChange={this.props.updatePersonalInfo}></input>
                    <input name="title" placeholder="Current Position/Title" onChange={this.props.updatePersonalInfo}></input>
                    <input name="address" placeholder="Address" onChange={this.props.updatePersonalInfo}></input>
                    <input name="phone" placeholder="Phone Number" onChange={this.props.updatePersonalInfo}></input>
                    <input name="email" placeholder="Email" onChange={this.props.updatePersonalInfo}></input>

                </div>
            </div>
        )
    }
}

export default PersonalDataSection