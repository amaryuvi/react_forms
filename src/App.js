import React, { Component } from 'react';
import './App.css';
import Name from './components/Name/Name';
import EmployeeCode from './components/EmployeeCode/EmployeeCode';
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
class App extends Component {
  constructor()
  {
    super();
    this.state={
      isValid:'false',
      NameInfo:
      {
        firstName:'',
        LastName:''
      }
    }
    this.valid = this.valid.bind(this);
  }


  valid(v)
  {
    console.log("ASf" + v);
   if(v==false)
     {
       this.setState({
         isValid:false
       });
     }
     else 
     {
       this.setState({
         isValid:true
       });
     }
  }

  render() {
    return (
      <div class="container">
        <Name  />
        <EmployeeCode />
        <EmployeeDetails />
       <center> <button disabled={this.state.isValid} class="btn btn-success">Submit</button></center>
      </div>
    );
  }
}

export default App;
