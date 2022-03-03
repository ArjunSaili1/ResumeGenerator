import React, { Component } from "react";

class ExperienceSection extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3>Experience</h3>
                <div>
                    <input type="text" name="position" placeholder="Position"></input>
                    <input type="text" name="company" placeholder="Company"></input>
                    <input type="text" name="expLocation" placeholder="Location"></input>
                    <input type="number" name="expFromYear" placeholder="From"></input>
                    <input type="number" name="expToYear" placeholder="To"></input>
                </div>
            </div>
        )
    }
}

export default ExperienceSection