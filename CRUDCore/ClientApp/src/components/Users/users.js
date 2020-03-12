import React from 'react';
import './users.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

class NavMenu extends React.Component {
	constructor(props) {
		super(props);
	};
	// componentDidMount() {
	// 	axios.get(`api/Users/`)
	// 	  .then(res => {
	// 		const posts = res.data.data.children.map(obj => obj.data);
	// 		this.setState({ posts });
	// 	  });
	//   }
	render() {
		//const users = this.props.fetchUsers;
		return (
			// {users}</div>
			<div></div>
		);
	}
	// NavMenu.propTypes = {
	// 	fetchUsers: React.PropTypes.func.isRequired
	// }
}

export default connect(null, {})(NavMenu);