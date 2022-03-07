import React, { Component } from "react";
import PersonalDataSection from "./PersonalDataSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

class Section extends Component {
    constructor(props){
        super(props)
        this.state = {
            toField: ""
        };
        this.renderSection = this.renderSection.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
        this.setToField = this.setToField.bind(this);
    }

    renderSection(){
        if(this.props.sectionType === "personal"){
            return <PersonalDataSection updatePersonalInfo={this.props.updatePersonalInfo}/>
        }
        if(this.props.sectionType === "education"){
            return <EducationSection setToField={this.setToField} toField={this.state.toField} updateInfo={this.updateInfo}/>
        }
        if(this.props.sectionType === "experience"){
            return <ExperienceSection setToField={this.setToField} toField={this.state.toField} updateInfo={this.updateInfo}/>
        }
    }

    setToField(e){
        if(e.target.checked){
            this.setState({
                toField: "",
                [this.props.sectionID]: {
                    ...this.state[this.props.sectionID],
                    toYear: "Present"
                }
            }, ()=>{if(this.props.sectionType === "education"){this.props.addEduInfo(this.state[this.props.sectionID])}
            if(this.props.sectionType === "experience"){this.props.addExpInfo(this.state[this.props.sectionID])}})
        }
        else{
            this.setState({
                toField: <input  className="section-input" type="number" name="toYear" placeholder="To" onChange={this.updateInfo}/>,
                [this.props.sectionID]: {
                    ...this.state[this.props.sectionID],
                    toYear: ""
                }
             })
        }
    }

    updateInfo(e){
        this.setState({
            ...this.state.toField,
            [this.props.sectionID]: {
                ...this.state[this.props.sectionID],
                [e.target.name]: e.target.value
            }
        }, ()=>{if(this.props.sectionType === "education"){this.props.addEduInfo(this.state[this.props.sectionID])}
                if(this.props.sectionType === "experience"){this.props.addExpInfo(this.state[this.props.sectionID])}})
    }

    componentDidMount(){
        if(this.props.sectionType === "education"){
            this.setState({
                [this.props.sectionID]: {
                    programName: "",
                    schoolName: "",
                    fromYear: "",
                    gpa: "",
                    toYear: "Present"
                }
            })
        }

        if(this.props.sectionType === "experience"){
            this.setState({
                [this.props.sectionID]: {
                    position: "",
                    company: "",
                    expLocation: "",
                    fromYear: "",
                    toYear: "Present"
                }
            })
        }
    }

    render(){
        return(
            <div className="section-wrapper">
                {this.renderSection()}
            </div>
        )
    }
}

export default Section