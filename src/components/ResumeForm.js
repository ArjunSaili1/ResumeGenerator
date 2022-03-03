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
                <form>
                    <PersonalDataSection updatePersonalInfo={this.props.updatePersonalInfo}></PersonalDataSection>
                    <EducationSection addEduInfo={this.props.addEduInfo}></EducationSection>
                    <ExperienceSection></ExperienceSection>
                </form>
            </div>
        )
    }
}

export default ResumeForm