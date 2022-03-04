import React, { Component } from "react";
import PersonalDataSection from "./PersonalDataSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

class Section extends Component {
    constructor(props){
        super(props)
        this.renderSection = this.renderSection.bind(this);
    }

    renderSection(){
        if(this.props.sectionType === "personal"){
            return <PersonalDataSection sectionID={this.props.sectionID} updatePersonalInfo={this.props.updatePersonalInfo}></PersonalDataSection>
        }
        if(this.props.sectionType === "education"){
            return <EducationSection sectionID={this.props.sectionID} addEduInfo={this.props.addEduInfo}></EducationSection>;
        }
        if(this.props.sectionType === "experience"){
            return <ExperienceSection sectionID={this.props.sectionID} addExpInfo={this.props.addExpInfo}></ExperienceSection>;
        }
    }

    render(){
        return(
            <div>
                {this.renderSection()}
            </div>
        )
    }
}

export default Section