import React, { Component } from "react";
import PersonalDataSection from "./PersonalDataSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import uniqid from "uniqid";
import '../styles.css'

class ResumeForm extends Component {
    constructor(props){
        super(props)

        this.pdSection = <PersonalDataSection updatePersonalInfo={this.props.updatePersonalInfo}></PersonalDataSection>
        this.eduSection = <EducationSection addEduInfo={this.props.addEduInfo}></EducationSection>;
        this.expSection = <ExperienceSection addExpInfo={this.props.addExpInfo}></ExperienceSection>;

        this.state = {
            sections: [this.addComponentId(this.pdSection),
                this.addComponentId(this.eduSection),
                this.addComponentId(this.expSection),
                this.addComponentId(this.expSection)
            ]
        }
        this.attachSectionId = this.attachSectionId.bind(this);
        this.addComponentId = this.addComponentId.bind(this)
    }

    addComponentId(component){
        const elementId = uniqid()
        return React.cloneElement(component, {key: elementId, sectionID: elementId}, null)
    }

    attachSectionId(){
        this.setState({
            sections: this.state.sections.map((comp)=>{this.addComponentId(comp)})
        })
    }

    render(){
        return(
            <div>
                <form className="resume-form">
                    {this.state.sections.map(section => section)}
                </form>
            </div>
        )
    }
}

export default ResumeForm