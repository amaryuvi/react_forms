import React, { Component } from 'react';
class EmployeeCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            code_error: 'false',
            date: '',
            date_error: 'false'
        }
        this.change = this.change.bind(this);
    }
    checkCode(code) {
        if (code != "") {
            document.getElementById("code_error").innerHTML = "";
            return true;

        }
        else {
            return false;
        }
    }
    checkLength(code) {
        if (code.length != 7) {
            return true;
        }
        return false;
    }
    checkLetters(code) {
        for (var i = 0; i < code.length; i++) {
            if (code[i] < "0" || code[i] > "9") {
                return true;
            }
        }
        return false;
    }
    code_error() {
        document.getElementById("code_error").innerHTML = "employee code is required";
    }
    length_error() {
        document.getElementById("code_error").innerHTML = "employee length should be seven";
    }
    letters_error() {
        document.getElementById("code_error").innerHTML = "employee code doesnt contain letters";
    }
    checkDate(date) {
        console.log(date);
        if (date != "") {
            document.getElementById("date_error").innerHTML = "";
            return true;
        }
        else {
            return false;
        }
    }
    date_error() {
        document.getElementById("date_error").innerHTML = "date  is required";
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

    validate(name, code) {

        var coddee = this.state.code_error;
        var datt = this.state.date_error;
        if (name == "code") {
            if (this.checkCode(code) == false) {
                this.code_error();
            }
            else if (this.checkLength(code) && this.checkLetters(code)) {
                if (this.checkLength(code))
                    this.length_error();

                if (this.checkLetters(code))
                    this.letters_error();
            }
            else if (this.checkLetters(code)) {

                this.letters_error();
            }
            else if (this.checkLength(code)) {
                this.length_error();
            }
            else {
                this.setState({
                    code_error: true
                });
            }
        }
        else {
            if (this.checkDate(code) == false) {
                this.date_error();
            }
            else {
                this.setState({
                    date_error: true
                });
            }
        }
    }
    render() {
        return (
            <div>
                <div class="form-group">
                    <label for="code">Employee code :   </label>
                    <input value={this.state.code} type="text" onChange={this.change.bind(this, 'code')} class="form-control" name="code" />
                    {this.state.code_error && <span id="code_error"></span>}
                </div>

                <div class="form-group">
                    <label for="date">Date of Employeemnt :   </label>
                    <input type="date" onChange={this.change.bind(this, 'date')} class="form-control" name="date" />
                    {this.state.date_error && <span id="date_error"></span>}
                </div>
            </div>
        );
    }
}

export default EmployeeCode;