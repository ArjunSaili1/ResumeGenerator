import React, { Component } from "react";

class ExpPreviewSection extends Component{

    render(){
        return(
            <div className="preview-section">
                <h2 className="section-title">Experience</h2>
                <hr></hr>
                {
                    Object.keys(this.props.info).map((section)=>{
                        console.log(this.props.info[section])
                        return(
                            <div className="preview-section-fields" key={section}>
                                <h5 className="date-fields">{this.props.info[section].fromYear} - {this.props.info[section].toYear}</h5>
                                <div className="info-fields">
                                    <h3>{this.props.info[section].position}</h3>
                                    <h5>{this.props.info[section].company}</h5>
                                    <h6>{this.props.info[section].expLocation}</h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ExpPreviewSection