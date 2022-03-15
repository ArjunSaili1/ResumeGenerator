import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm/ResumeForm"
import Header from "./components/Header";
import ResumePreview from "./components/ResumePreview/ResumePreview";
import 'normalize.css';
import './index.css'

const App = () => {

  const [resumeInfo, setResumeInfo] = useState({
    personalInfo:{
      name: "",
      title: "",
      address: "",
      phone: "",
      email: "",
    },
    educationInfo: {},
    experienceInfo: {}
  })

  function updatePersonalInfo(e){
    if(e.target.name in resumeInfo.personalInfo){
      setResumeInfo({
        personalInfo:{
          ...resumeInfo.personalInfo,
          [e.target.name]: e.target.value
        },
        educationInfo: {...resumeInfo.educationInfo},
        experienceInfo: {...resumeInfo.experienceInfo}
      })
    }
  }

  function addEduInfo(eduObj){
    setResumeInfo({
      personalInfo: {...resumeInfo.personalInfo},
      educationInfo: {...resumeInfo.educationInfo, ...eduObj},
      experienceInfo: {...resumeInfo.experienceInfo}
    })
  }

  function addExpInfo(expObj){
    setResumeInfo({
      personalInfo: {...resumeInfo.personalInfo},
      educationInfo: {...resumeInfo.educationInfo},
      experienceInfo: {...resumeInfo.experienceInfo, ...expObj}
    })
  }

  return (
    <div className="App">
      <Header/>
      <div className="resume-wrapper">
        <ResumeForm addExpInfo={addExpInfo} addEduInfo={addEduInfo} updatePersonalInfo={updatePersonalInfo}/>
        <ResumePreview resumeInfo={resumeInfo}/>
      </div>
    </div>
  ); 
}
export default App;
