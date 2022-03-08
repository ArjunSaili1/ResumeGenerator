import React, { Component } from "react";

class PreviewHeader extends Component{

    render(){
        return(
            <div className="resume-preview-header">
                {this.props.name}
                {this.props.title}
            </div>
        )
    }
}

export default PreviewHeader