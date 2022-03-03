import React, { Component } from "react";
import PersonalDataSection from "./PersonalDataSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

class ResumeForm extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="resume-form">
                <PersonalDataSection></PersonalDataSection>
                <EducationSection></EducationSection>
                <ExperienceSection></ExperienceSection>
            </div>
        )
    }
}

export default ResumeForm