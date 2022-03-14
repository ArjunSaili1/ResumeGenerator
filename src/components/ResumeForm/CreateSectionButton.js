import React from "react";

const CreateSectionButton = (props) => {

    function createButton(){
        if(props.newExpSection){
            return <button className="create-section-button" onClick={props.newExpSection}>Add Entry</button>
        }
        if(props.newEduSection){
            return <button className="create-section-button" onClick={props.newEduSection}>Add Entry</button>
        }
    }

    return(
        <div>
            {createButton()}
        </div>
    )
}

export default CreateSectionButton