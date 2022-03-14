import React from "react";

const ExpPreviewSection = (props) => {

    return(
        <div className="preview-section">
            <h2 className="section-title">Experience</h2>
            <hr></hr>
            {
                Object.keys(props.info).map((section)=>{
                    return(
                        <div className="preview-section-fields" key={section}>
                            <h5 className="date-fields">{props.info[section].fromYear} - {props.info[section].toYear}</h5>
                            <div className="info-fields">
                                <h3>{props.info[section].position}</h3>
                                <h5>{props.info[section].company}</h5>
                                <h6>{props.info[section].expLocation}</h6>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExpPreviewSection