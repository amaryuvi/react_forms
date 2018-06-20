import React, { Component } from 'react';
import './Name.css';
class Name extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            firstnameError: 'false',
            lastnameError: 'false'
        }
        this.change = this.change.bind(this);
    }
    change(name, e) {
        var value = e.target.value;
        
        this.setState(
            {
                [name]: value
            }
        );

        this.validate(name, value);
    }
     checkFirstName(firstname)
    {
        
        if(firstname!=""){
           document.getElementById("first_error").innerHTML="";
            return true;
          
        }
        else{
            return false;
        }

    }
  first_error()
    {
    
        document.getElementById("first_error").innerHTML="first name is required";
    }
     checkContainsNumber(firstname)
    {
        for(var i=0;i<firstname.length;i++)
        {
            if(firstname[i]>="0" && firstname[i]<="9")
               return true;
        }
        return false;
    }
    containsNumber1_error()
    {
        document.getElementById("first_error").innerHTML="no number to be used";
    }
    checkLastName(lastname)
    {
        if(lastname!=""){
            document.getElementById("last_error").innerHTML="";
            return true;
          
        }
        else{
            return false;
        }
    }
    last_error()
    {
        document.getElementById("last_error").innerHTML="last name is required";
        
    }
     containsNumber2_error()
    {
        document.getElementById("last_error").innerHTML="no number to be used";
     
    }
        validate(name, value) {
        let firstnameValid = this.state.firstnameError;
        let lastnameValid = this.state.lastnameError;
       

        if(name=="firstname")
        {
            if(this.checkFirstName(value)==false)
        {
            this.first_error();
            firstnameValid=false;
        }
        else if(this.checkContainsNumber(value))
        {
      
            this.containsNumber1_error();
            firstnameValid=false;
        }
        else
        {
            this.setState({
                firstnameError: true
            });
        }
        }

        if(name=="lastname")
        {
            if(this.checkLastName(value)==false)
            {
                this.last_error();
                lastnameValid = false;
              
            }
            else if(this.checkContainsNumber(value))
            {
       
                this.containsNumber2_error();
               lastnameValid =false;
            }
            else
            {
                this.setState({
                    lastnameError: true
                });
            }
        }

        //console.log(this.state.firstnameError);
     
          
     
        //console.log(firstnameValid);


    (firstnameValid) ?  this.props.check(true) : this.props.check(false);
    (lastnameValid) ? this.props.check(true) : this.props.check(false);
    
    }
    render() {
        return (
            <div >
                <div class="form-group">
                    <label for="firstname">First name:</label>
                    <input value={this.state.firstname}type="text" class="form-control" name="firstname" onChange={this.change.bind(this, 'firstname')} />
                    { this.state.firstnameError && <span id="first_error"></span>}
                </div>

                <div class="form-group">
                    <label for="lastname">Last name :   </label>
                    <input value={this.state.lastname} type="text" class="form-control" name="lastname" onChange={this.change.bind(this, 'lastname')} />
                    { this.state.lastnameError && <span id="last_error"></span>}
                </div>
            </div>
        );
    }
}
export default Name;