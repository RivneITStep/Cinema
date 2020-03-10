import React from 'react';
import './users.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { show_data } from "../../action/authAction";
// import $ from "jquery";
class NavMenu extends React.Component {
	constructor(props) {
		super(props);
		};
	
		  render() {    
			return (
			 <div></div>
			);
		  }
		}
		NavMenu.propTypes = {
			show_data: PropTypes.func.isRequired
}

export default  connect(null,{show_data})(NavMenu);