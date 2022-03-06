import React, { Component } from "react";
import CreateSectionButton from "./CreateSectionButton";
import Section from "./Section";
import uniqid from "uniqid";
import '../styles.css'

class ResumeForm extends Component {
    constructor(props){
        super(props)

        this.pdSection = <Section sectionType="personal" updatePersonalInfo={this.props.updatePersonalInfo}></Section>
        this.eduSection = <Section sectionType="education" addEduInfo={this.props.addEduInfo}></Section>;
        this.expSection = <Section sectionType="experience" addExpInfo={this.props.addExpInfo}></Section>;

        this.state = {
            eduSections: [this.addComponentProps(this.eduSection)],
            expSections: [this.addComponentProps(this.expSection)]
        }
        this.addComponentProps = this.addComponentProps.bind(this)
        this.createEduSection = this.createEduSection.bind(this);
        this.createExpSection = this.createExpSection.bind(this);
    }

    createEduSection(){
        this.setState({
            eduSections: [...this.state.eduSections, this.addComponentProps(this.eduSection)]
        })
    }

    createExpSection(){
        this.setState({
            expSections: [...this.state.expSections, this.addComponentProps(this.expSection)]
        })
    }

    addComponentProps(component){
        const elementId = uniqid()
        return React.cloneElement(component, {newEduSection: this.createEduSection, 
            newExpSection: this.createExpSection, key: elementId, sectionID: elementId}, null)
    }

    render(){
        return(
            <div>
                <div className="resume-form">
                    {this.addComponentProps(this.pdSection)}
                    {this.state.eduSections.map(section => section)}
                    <CreateSectionButton newEduSection={this.createEduSection}/>
                    {this.state.expSections.map(section => section)}
                    <CreateSectionButton newExpSection={this.createExpSection}/>
                </div>
            </div>
        )
    }
}

export default ResumeForm