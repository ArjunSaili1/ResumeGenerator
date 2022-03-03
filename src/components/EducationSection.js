import React, { Component } from "react";
import uniqid from "uniqid";

class EducationSection extends Component {

    constructor(props){
        super(props)
        this.stateKey = uniqid();
        this.state = {
            [this.stateKey]: {
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
        const stateKey = this.stateKey
        if(e.target.name in this.state[stateKey]){
            this.setState({
                [stateKey]: {
                    ...this.state[stateKey],
                    [e.target.name]: e.target.value
                }
            }, ()=>{this.props.addEduInfo(this.state)})
        }
    }

    render(){
        return(
            <div>
                <h3>Education</h3>
                <div>
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