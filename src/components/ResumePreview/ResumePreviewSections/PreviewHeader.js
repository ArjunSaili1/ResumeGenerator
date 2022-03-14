import React from "react";

const PreviewHeader = (props) => {
    return(
        <div className="resume-preview-header">
            <h1 className="resume-preview-name">{props.name}</h1>
            <h5 className="resume-preview-title">{props.title}</h5>
        </div>
    )
}

export default PreviewHeader