import React, { Component } from "react";

class PreviewSidebar extends Component{

    render(){
        return(
            <div className="resume-preview-sidebar">
                {this.props.address}
                {this.props.phone}
                {this.props.email}
            </div>
        )
    }
}

export default PreviewSidebar