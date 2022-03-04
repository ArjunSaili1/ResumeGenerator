import React, { Component } from "react";
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
            sections: this.state.sections.map((comp)=>{return this.addComponentId(comp)})
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