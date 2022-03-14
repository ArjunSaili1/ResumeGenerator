import React from "react";
import PreviewHeader from "./ResumePreviewSections/PreviewHeader";
import PreviewSidebar from "./ResumePreviewSections/PreviewSidebar";
import EduSectionPreview from "./ResumePreviewSections/EduSectionPreview";
import ExpSectionPreview from "./ResumePreviewSections/ExpSectionPreview"

const ResumePreview = (props) => {
    const {personalInfo, experienceInfo, educationInfo} = props.resumeInfo;
    console.log(props.resumeInfo)
    const {name, title, address, phone, email} = personalInfo

    return(
        <div className="resume-preview">
            <PreviewHeader name={name} title={title}/>
            <div className="resume-preview-main">
                <EduSectionPreview info={educationInfo}/>
                <ExpSectionPreview info={experienceInfo}/>
            </div>
            <PreviewSidebar address={address} phone={phone} email={email}/>
        </div>
    )
}


export default ResumePreview
