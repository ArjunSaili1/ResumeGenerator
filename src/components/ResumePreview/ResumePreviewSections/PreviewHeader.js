import React, { Component } from "react";

class PreviewHeader extends Component{

    render(){
        return(
            <div className="resume-preview-header">
                <h1 className="resume-preview-name">{this.props.name}</h1>
                <h5 className="resume-preview-title">{this.props.title}</h5>
            </div>
        )
    }
}

export default PreviewHeader