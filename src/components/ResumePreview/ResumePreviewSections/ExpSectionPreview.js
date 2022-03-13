import React, { Component } from "react";

class ExpPreviewSection extends Component{

    render(){
        return(
            <div>
                <h2>Experience</h2>
                {
                    Object.keys(this.props.info).map((section)=>{
                        return(
                            <div key={section} className="preview-section">
                                <h5>{this.props.info[section].position}</h5>
                                <h5>{this.props.info[section].company}</h5>
                                <h5>{this.props.info[section].expLocation}</h5>
                                <h5>{this.props.info[section].fromYear} - {this.props.info[section].toYear}</h5>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ExpPreviewSection