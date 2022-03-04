import React, { Component } from "react";
import PersonalDataSection from "./PersonalDataSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

class Section extends Component {
    constructor(props){
        super(props)
        this.state = {};
        this.renderSection = this.renderSection.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
    }

    renderSection(){
        if(this.props.sectionType === "personal"){
            return <PersonalDataSection sectionID={this.props.sectionID} updatePersonalInfo={this.props.updatePersonalInfo}/>
        }
        if(this.props.sectionType === "education"){
            return <EducationSection sectionID={this.props.sectionID} updateInfo={this.updateInfo}/>
        }
        if(this.props.sectionType === "experience"){
            return <ExperienceSection sectionID={this.props.sectionID} updateInfo={this.updateInfo}/>
        }
    }

    updateInfo(e){
        this.setState({
            [this.props.sectionID]: {
                ...this.state[this.props.sectionID],
                [e.target.name]: e.target.value
            }
        }, ()=>{if(this.props.sectionType === "education"){this.props.addEduInfo(this.state)}
                else{this.props.addExpInfo(this.state)}})
    }

    componentDidMount(){
        if(this.props.sectionType === "education"){
            this.setState({
                [this.props.sectionID]: {
                    programName: "",
                    schoolName: "",
                    eduFromYear: "",
                    eduToYear: "",
                    gpa: "",
                }
            })
        }

        if(this.props.sectionType === "experience"){
            this.setState({
                [this.props.sectionID]: {
                    position: "",
                    company: "",
                    expLocation: "",
                    expFromYear: "",
                    expToYear: ""
                }
            })
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