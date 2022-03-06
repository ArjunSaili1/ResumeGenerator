import React, { Component } from "react";

class CreateSectionButton extends Component {
    constructor(props){
        super(props)
        this.createButton = this.createButton.bind(this);
    }

    createButton(){
        if(this.props.newExpSection){
            return <button onClick={this.props.newExpSection}>Add Experience</button>
        }
        if(this.props.newEduSection){
            return <button onClick={this.props.newEduSection}>Add Education</button>
        }
    }

    render(){
        return(
            <div>
                {this.createButton()}
            </div>
        )
    }
}

export default CreateSectionButton