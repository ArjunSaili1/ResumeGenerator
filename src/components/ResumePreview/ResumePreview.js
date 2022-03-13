import React, { Component } from "react";
import PreviewHeader from "./ResumePreviewSections/PreviewHeader";
import PreviewSidebar from "./ResumePreviewSections/PreviewSidebar";
import EduSectionPreview from "./ResumePreviewSections/EduSectionPreview";

class ResumePreview extends Component {

    render(){
        const {personalInfo, experienceInfo, educationInfo} = this.props.resumeInfo;
        const {name, title, address, phone, email} = personalInfo
        return(
            <div className="resume-preview">
                <PreviewHeader name={name} title={title}/>
                <div className="resume-preview-main">
                    <EduSectionPreview info={educationInfo}/>
                </div>
                <PreviewSidebar address={address} phone={phone} email={email}/>
            </div>
        )
    }
}

export default ResumePreview
