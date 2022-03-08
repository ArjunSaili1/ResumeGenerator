import React, { Component } from "react";

class PreviewSidebar extends Component{

    render(){
        return(
            <div className="resume-preview-sidebar">
                <h2 className="sidebar-title">Contact Info</h2>
                <div className="sidebar-section">
                    <h3 className="sidebar-section-title">Address</h3>
                    <h5 className="sidebar-content">{this.props.address}</h5>
                </div>
                <div className="sidebar-section">
                    <h3 className="sidebar-section-title">Phone</h3>
                    <h5 className="sidebar-content">{this.props.phone}</h5>
                </div>
                <div className="sidebar-section">
                    <h3 className="sidebar-section-title">Email</h3>
                    <h5 className="sidebar-content">{this.props.email}</h5>
                </div>
            </div>
        )
    }
}

export default PreviewSidebar