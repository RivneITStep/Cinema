import React from 'react';
import './users.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { get_users } from "../../action/FetchUsers";

class NavMenu extends React.Component {
	constructor() {  
        super();  
        this.state = {  
            UsersData: []  
        }  
    }  
	componentDidMount() {  
        axios.get("http://91.238.103.120/api/Users").then(response => {  
            console.log(response.data);  
            this.setState({  
                UsersData: response.data  
            });  
        });  
	}  
	render() {
		return (
		
		<div>
			<div>hi</div>
		</div>
		);
	}
}
NavMenu.propTypes = {
	get_users: PropTypes.func.isRequired
 }
export default connect(null, {get_users})(NavMenu);