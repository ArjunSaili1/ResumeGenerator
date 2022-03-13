import React, { Component } from "react";
import ResumeForm from "./components/ResumeForm/ResumeForm"
import Header from "./components/Header";
import ResumePreview from "./components/ResumePreview/ResumePreview";
import 'normalize.css';
import './index.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      personalInfo:{
        name: "",
        title: "",
        address: "",
        phone: "",
        email: "",
      },
      educationInfo: {},
      experienceInfo: {}
    }
    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    this.addExpInfo = this.addExpInfo.bind(this);
    this.addEduInfo = this.addEduInfo.bind(this);
  }

  updatePersonalInfo(e){
    if(e.target.name in this.state.personalInfo){
      this.setState({
        personalInfo:{
          ...this.state.personalInfo,
          [e.target.name]: e.target.value
        },
        ...this.state.educationInfo,
        ...this.state.experienceInfo
      })
    }
  }

  addEduInfo(eduObj){
    this.setState({
      educationInfo: {...this.state.educationInfo, ...eduObj}
    })
  }

  addExpInfo(expObj){
    this.setState({
      experienceInfo: {...this.state.experienceInfo, ...expObj}
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <div className="resume-wrapper">
          <ResumeForm addExpInfo={this.addExpInfo} addEduInfo={this.addEduInfo} updatePersonalInfo={this.updatePersonalInfo}/>
          <ResumePreview resumeInfo={this.state}/>
        </div>
      </div>
    ); 
  }
}

export default App;
