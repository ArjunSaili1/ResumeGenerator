import React, { useState } from "react";
import CreateSectionButton from "./CreateSectionButton";
import Section from "./ResumeFormSections/Section";
import uniqid from "uniqid";

const ResumeForm = (props) => {
    const pdSection = <Section sectionType="personal" updatePersonalInfo={props.updatePersonalInfo}/>
    const eduSection = <Section sectionType="education" addEduInfo={props.addEduInfo}></Section>;
    const expSection = <Section sectionType="experience" addExpInfo={props.addExpInfo}></Section>;

    const [eduSections, setEduSection] = useState([addComponentProps(eduSection)])
    const [expSections, setExpSection] = useState([addComponentProps(expSection)])


    function addComponentProps(component){
        const elementId = uniqid();
        return React.cloneElement(component, {newEduSection: createEduSection, 
            newExpSection: createExpSection, key: elementId, sectionId: elementId}, null)
    }

    function createEduSection(){
        setEduSection([...eduSections, addComponentProps(eduSection)])
    }

    function createExpSection(){
        setExpSection([...expSections, addComponentProps(expSection)])
    }

    return(
        <div className="resume-form">
            {pdSection}
            {eduSections.map(section => section)}
            <CreateSectionButton newEduSection={createEduSection}/>
            {expSections.map(section => section)}
            <CreateSectionButton newExpSection={createExpSection}/>
        </div>
    )
}

export default ResumeForm