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
    setTimeout(()=>{console.log(this.state)}, 0)
  }

  addEduInfo(eduObj){
    this.setState({
      educationInfo: {...this.state.educationInfo, ...eduObj}
    })
    setTimeout(()=>{console.log(this.state)}, 0)
  }

  addExpInfo(expObj){
    this.setState({
      experienceInfo: {...this.state.experienceInfo, ...expObj}
    })
    setTimeout(()=>{console.log(this.state)}, 0)
  }

  render(){
    return (
      <div className="App">
        <ResumeForm addExpInfo={this.addExpInfo} addEduInfo={this.addEduInfo} updatePersonalInfo={this.updatePersonalInfo}></ResumeForm>
      </div>
    ); 
  }
}

export default App;
