import React from 'react';
import './Admin.css';

export class NavMenu extends React.Component {
  constructor(props) {
    super(props);
   
  }
  
 
  render() {
    return (
      <div className="admin-panel clearfix">
        <div className="slidebar">
          <div className="logo">
            <a href=""></a>
          </div>
          <ul>
            <li><a href="#posts">Users</a></li>
            <li><a href="#media">Add Films</a></li>
            <li><a href="#pages">Bun</a></li>
            <li><a href="#links">Statistic</a></li>
          </ul>
        </div>
        <div className="Main">

        </div>
      </div>
    );
  }
}


export default(NavMenu);