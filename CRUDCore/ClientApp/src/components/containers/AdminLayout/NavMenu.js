import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
// import $ from "jquery";

export class NavMenu extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {

		return (
			<div className="admin-panel clearfix">
				<div className="slidebar">
					<div className="logo">
						<Link to="/admin"></Link>
					</div>
					<ul>
						<li><Link to="/admin">Users</Link></li>
						<li><Link to="/admin/add_film">Add Films</Link></li>
						<li><Link to="/admin/statistic">Statistic</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}


export default (NavMenu);