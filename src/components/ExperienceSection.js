import React, { Component } from "react";
import uniqid from "uniqid";


class ExperienceSection extends Component {
    constructor(props){
        super(props)
        this.stateKey = uniqid();
        this.state = {
            [this.stateKey]: {
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
        const stateKey = this.stateKey;
        if(e.target.name in this.state[stateKey]){
            this.setState({
                [stateKey]: {
                    ...this.state[stateKey],
                    [e.target.name]: e.target.value
                }
            }, ()=>{this.props.addExpInfo(this.state)})
        }
    }

    render(){
        return(
            <div>
                <h3>Experience</h3>
                <div>
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