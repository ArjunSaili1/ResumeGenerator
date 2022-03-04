import React, { Component } from "react";

class EducationSection extends Component {

    constructor(props){
        super(props)
        this.state = {
            [this.props.sectionID]: {
                programName: "",
                schoolName: "",
                eduFromYear: "",
                eduToYear: "",
                gpa: "",
            }
        }
        this.updateEduInfo = this.updateEduInfo.bind(this);
    }


    updateEduInfo(e){
        this.setState({
            [this.props.sectionID]: {
                ...this.state[this.props.sectionID],
                [e.target.name]: e.target.value
            }
        }, ()=>{this.props.addEduInfo(this.state)})
    }

    render(){
        return(
            <div>
                <h3 className="section-title">Education</h3>
                <div className="section-fields">
                    <input type="text" name="programName" placeholder="Program/Field of Study" onChange={this.updateEduInfo}></input>
                    <input type="text" name="schoolName" placeholder="Institution Name" onChange={this.updateEduInfo}></input>
                    <input type="number" name="eduFromYear" placeholder="From" onChange={this.updateEduInfo}></input>
                    <input type="number" name="eduToYear" placeholder="To" onChange={this.updateEduInfo}></input>
                    <input type="number" name="gpa" placeholder="GPA" onChange={this.updateEduInfo}></input>
                </div>
            </div>
        )
    }
}

export default EducationSection