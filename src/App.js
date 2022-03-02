import React, { Component } from "react";
import ResumeForm from "./components/ResumeForm";

class App extends Component {
  constructor(){
    super();
    this.state = {
      generalInfo:{
        name: "",
        num: "",
        email: "",
        address: "",
      },
      educationInfo:[],
      experienceInfo:[]
    }
  }

  render(){
    return (
      <div className="App">
        <ResumeForm></ResumeForm>
      </div>
    ); 
  }
}

export default App;
