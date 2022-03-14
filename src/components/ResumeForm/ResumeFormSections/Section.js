import React, { useEffect, useState } from "react";
import PersonalDataSection from "./PersonalDataSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

const Section = (props) => {
    const [toField, setToField] = useState("");
    const [sectionObj, setSectionObj] = useState({[props.sectionId]:{}})

    function updateInfo(e){
        setSectionObj({
            [props.sectionId]: {
                ...sectionObj[props.sectionId],
                [e.target.name]: e.target.value
            } 
        })
        setTimeout(()=>{console.log(sectionObj)},0)

    }

    function renderSection(){
        if(props.sectionType === "personal"){
            return <PersonalDataSection updatePersonalInfo={props.updatePersonalInfo}/>
        }
        if(props.sectionType === "education"){
            return <EducationSection updateToField={updateToField} toField={toField} updateInfo={updateInfo}/>
        }
        if(props.sectionType === "experience"){
            return <ExperienceSection updateToField={updateToField} toField={toField} updateInfo={updateInfo}/>
        }
    }

    useEffect(()=>{
        if(props.sectionType === "education"){
            props.addEduInfo(sectionObj);
        }
        if(props.sectionType === "experience"){
            props.addExpInfo(sectionObj);
        }

    }, [sectionObj, props])

    function updateToField(e){
        if(e.target.checked){
            setToField("");
            setSectionObj({
                [props.sectionId]:{
                    ...sectionObj[props.sectionId],
                    toYear: "Present"
                }
            })
        }
        else{
            setToField(<input  className="section-input" type="number" name="toYear" placeholder="To" onChange={updateInfo}/>);
            setSectionObj({
                [props.sectionId]:{
                    ...sectionObj[props.sectionId],
                    toYear: ""
                }
            })
        }
    }

    return(
        <div className="section-wrapper">
            {renderSection()}
        </div>
    )

}

export default Section