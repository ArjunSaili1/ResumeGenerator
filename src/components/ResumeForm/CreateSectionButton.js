import React, { Component } from "react";

class CreateSectionButton extends Component {
    constructor(props){
        super(props)
        this.createButton = this.createButton.bind(this);
    }

    createButton(){
        if(this.props.newExpSection){
            return <button className="create-section-button" onClick={this.props.newExpSection}>Add Entry</button>
        }
        if(this.props.newEduSection){
            return <button className="create-section-button" onClick={this.props.newEduSection}>Add Entry</button>
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