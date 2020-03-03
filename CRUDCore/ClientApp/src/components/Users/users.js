import React from 'react';
import './users.css';
// import $ from "jquery";

async function getDatafromDB() {
	// var pg = require('pg');
	// var connectionString = "postgres://postgres:mypass@91.238.103.120/ip:5432/mydb";
	// var pgClient = new pg.Client(connectionString);
	// pgClient.connect();
	// var query = pgClient.query("SELECT * from AspNetUsers");
	// query.on("row", function(row,result){

	// 	result.addRow(row);

	// 	});
}
export class NavMenu extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
	
		return (
			<div>
				<div className="container">
					<table>
						<thead>
							<tr>
								<th>Column 1</th>
								<th>Column 2</th>
								<th>Column 3</th>
								<th>Column 4</th>
								<th>Column 5</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Cell 1</td>
								<td>Cell 2</td>
								<td>Cell 3</td>
								<td>Cell 4</td>
								<td>Cell 5</td>
							</tr>
							<tr>
								<td>Cell 1</td>
								<td>Cell 2</td>
								<td>Cell 3</td>
								<td>Cell 4</td>
								<td>Cell 5</td>
							</tr>
							<tr>
								<td>Cell 1</td>
								<td>Cell 2</td>
								<td>Cell 3</td>
								<td>Cell 4</td>
								<td>Cell 5</td>
							</tr>
							<tr>
								<td>Cell 1</td>
								<td>Cell 2</td>
								<td>Cell 3</td>
								<td>Cell 4</td>
								<td>Cell 5</td>
							</tr>
							<tr>
								<td>Cell 1</td>
								<td>Cell 2</td>
								<td>Cell 3</td>
								<td>Cell 4</td>
								<td>Cell 5</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}


export default (NavMenu);