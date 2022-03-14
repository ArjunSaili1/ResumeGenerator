import React from "react";

const PersonalDataSection = (props) =>{
    return(
        <div className="resume-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="section-fields">
                <input className="section-input" type="text" name="name" placeholder="Full Name" onChange={props.updatePersonalInfo}></input>
                <input className="section-input" type="text" name="title" placeholder="Current Position/Title" onChange={props.updatePersonalInfo}></input>
                <input className="section-input" type="text" name="address" placeholder="Address" onChange={props.updatePersonalInfo}></input>
                <input className="section-input" type="number" name="phone" placeholder="Phone Number" onChange={props.updatePersonalInfo}></input>
                <input className="section-input" type="text" name="email" placeholder="Email" onChange={props.updatePersonalInfo}></input>
            </div>
        </div>
    )
}

export default PersonalDataSection