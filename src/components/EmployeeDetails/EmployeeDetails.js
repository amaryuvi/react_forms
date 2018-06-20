import React ,{Component} from 'react';
class EmployeeDetails extends Component
{
    constructor()
    {
        super();
        this.state = {
                  email:'',
                  email_error :'false',
                  mobile:'',
                  mobile_error:'false'
        } 
        this.change = this.change.bind(this);
    }

    checkEmail(email)
    {
        if(email!=""){
        document.getElementById("email_error").innerHTML="";
            return true;
          
        }
        else{
            return false;
        }
    }

    checkVirtusa(email)
    {
     var s = email.substring(email.length-12,email.length);
      if(s!="@virtusa.com")
      {
          return true;
      }
      else
      {
          return false;
      }
    }

   email_error()
    {
        document.getElementById("email_error").innerHTML = "Email Id  is required";
    }
  virtusa_error()
    {
        document.getElementById("email_error").innerHTML ="Email Id  is not valid";
    }

 checkMobile(mobile)
    {
        if(mobile!=""){
         document.getElementById("mobile_error").innerHTML="";
            return true;
          
        }
        else{
            return false;
        }
    }
 checkMobileLength(mobile)
    {
       if(mobile.length != 10)
       {
           return true;
       }
       else
       {
           return false;
       }
    }
    MbLength_error()
    {
     document.getElementById("mobile_error").innerHTML ="Mobile number Length should be 10";
    }
 mobile_error()
    {
        document.getElementById("mobile_error").innerHTML ="Mobile number   is required";
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

    validate(name, email) {
        if(name=="email")
        {
            if(this.checkEmail(email)=="")
            {
                this.email_error();
            }
            else if(this.checkVirtusa(email))
            {
                this.virtusa_error();
            }
            else 
            {
              this.setState({
                  email_error:true
              });
            }
        }
        else
        {
            if(this.checkMobile(email)==false)
            {
                this.mobile_error();
            }
            else if(this.checkMobileLength(email))
            {
              this.MbLength_error();
            }
            else 
            {
                this.setState({
                    mobile_error:true
                });
            }
        }
    }
    render()
    {
        return (
          <div>
            <div class="form-group">
            <label for="email">Employee Id :   </label>
            <input type="email" class="form-control" name="email" onChange={this.change.bind(this, 'email')}/>
        { this.state.email_error && <span id="email_error"></span> }
          </div>

            <div class="form-group">
            <label for="mobile">Employee mobile No :  </label>
            <input type="text" class="form-control" onChange={this.change.bind(this, 'mobile')} id="mobile"/>
          {  this.state.mobile_error && <span id="mobile_error"></span>}
          </div>

          </div>
          
        );
    }
}


export default EmployeeDetails;