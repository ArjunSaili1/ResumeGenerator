import React, { Component } from "react";

class EduSectionPreview extends Component{

    render(){
        return(
            <div>
                <h2>Education</h2>
                {
                    Object.keys(this.props.info).map((section)=>{
                        return(
                            <div key={section} className="preview-section">
                                <h5>{this.props.info[section].programName}</h5>
                                <h5>{this.props.info[section].schoolName}</h5>
                                <h5>{this.props.info[section].gpa}</h5>
                                <h5>{this.props.info[section].fromYear} - {this.props.info[section].toYear}</h5>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default EduSectionPreview