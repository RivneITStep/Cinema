import React, { Component } from 'react';
import axios from 'axios';
import './Admin.css';
class SignUpForm extends Component {


  logconsole() {
    console.log(document.getElementById('d1').value);
    console.log(document.getElementById('d2').value);
    console.log(document.getElementById('d3').value);
    console.log(document.getElementById('d4').value);
  }

  render() {
    return (
      <div className="centeradm">
        <div>
          <input type="text"
            className="admintext"
            id="d1"
            name="Name"
            placeholder="Name"
          />
        </div>
        <div>
          <input type="number"
            className="admintext"
            id="d2"
            name="Year"
            placeholder="Year"
          />
        </div>
        <div>
          <input type="text"
            className="admintext"
            id="d3"
            name="country"
            placeholder="Country"
          />
        </div>
        <div>
          <input type="text"
            className="admintext"
            id="d4"
            name="director"
            placeholder="Director"
          />
        </div>
        {/* id="d2" id="d3" d="d4" */}
        <button id="d1"  onClick={this.logconsole} type="submit">add film</button>
        
        <div className="panel" >
         <label className="lb"id="d1"></label>
        </div>
      </div>
    )
  }
}
export default (SignUpForm);