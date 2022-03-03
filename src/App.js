import React, { Component } from "react";
import ResumeForm from "./components/ResumeForm";

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
      educationInfo:[],
      experienceInfo:[]
    }
    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
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

  render(){
    return (
      <div className="App">
        <ResumeForm updatePersonalInfo={this.updatePersonalInfo}></ResumeForm>
      </div>
    ); 
  }
}

export default App;
