import React, { Component } from "react";
import PreviewHeader from "./ResumePreviewSections/PreviewHeader";
import PreviewSidebar from "./ResumePreviewSections/PreviewSidebar";

class ResumePreview extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const {personalInfo, experienceInfo, educationInfo} = this.props.resumeInfo;
        const {name, title, address, phone, email} = personalInfo
        return(
            <div className="resume-preview">
                <PreviewHeader name={name} title={title}/>
                <div lassName="resume-preview-main">

                </div>
                <PreviewSidebar address={address} phone={phone} email={email}/>
            </div>
        )
    }
}

export default ResumePreview
