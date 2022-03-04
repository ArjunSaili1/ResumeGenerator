import React, { Component } from "react";

class ExperienceSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            [this.props.sectionID]: {
                position: "",
                company: "",
                expLocation: "",
                expFromYear: "",
                expToYear: ""
            }
        }
        this.updateExpInfo = this.updateExpInfo.bind(this);
    }

    updateExpInfo(e){
        this.setState({
            [this.props.sectionID]: {
                ...this.state[this.props.sectionID],
                [e.target.name]: e.target.value
            }
        }, ()=>{this.props.addExpInfo(this.state)})
    }

    render(){
        return(
            <div>
                <h3 className="section-title">Experience</h3>
                <div className="section-fields">
                    <input type="text" name="position" placeholder="Position" onChange={this.updateExpInfo}></input>
                    <input type="text" name="company" placeholder="Company" onChange={this.updateExpInfo}></input>
                    <input type="text" name="expLocation" placeholder="Location" onChange={this.updateExpInfo}></input>
                    <input type="number" name="expFromYear" placeholder="From" onChange={this.updateExpInfo}></input>
                    <input type="number" name="expToYear" placeholder="To" onChange={this.updateExpInfo}></input>
                </div>
            </div>
        )
    }
}

export default ExperienceSection