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
                    <input name="name" placeholder="Full Name"></input>
                    <input name="title" placeholder="Current Position or Title"></input>
                    <input name="address" placeholder="Address"></input>
                    <input name="phone" placeholder="Phone Number"></input>
                    <input name="email" placeholder="Email"></input>

                </div>
            </div>
        )
    }
}

export default PersonalDataSection