import React, { Component } from "react";

class EducationSection extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3>Education</h3>
                <div>
                    <input type="text" name="programName" placeholder="Program/Field of Study"></input>
                    <input type="text" name="schoolName" placeholder="Institution Name"></input>
                    <input type="number" name="eduFromYear" placeholder="From"></input>
                    <input type="number" name="eduToYear" placeholder="To"></input>
                    <input type="number" name="gpa" placeholder="GPA"></input>
                </div>
            </div>
        )
    }
}

export default EducationSection