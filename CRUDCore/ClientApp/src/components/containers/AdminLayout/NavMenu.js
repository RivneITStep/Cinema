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
						<Link to="/admin/home"></Link>
					</div>
					<ul>
						<li><Link to="#posts">Users</Link></li>
						<li><Link to="/admin/add_film">Add Films</Link></li>
						<li><Link to="#links">Statistic</Link></li>
					</ul>
				</div>
				<div className="Main">
					<h2>Статистика користувачів сайту</h2>
					<div className="pie-container">
						{/* <div id="notregist" className="pie"></div> */}
						{/* <div id="ie" className="pie"></div> */}
						<div id="reg" className="pie"></div>
						{/* <div id="firefox" className="pie"></div>*/}
						<div id="notreg" className="pie"></div>
					</div>

					<div className="stats">
						<ul>
							<li data-name="Chrome">Зареєстрованих</li>
							{/* <li data-name="Firefox">Chrome</li>
              <li data-name="Internet Explorer">Yandex Browser</li> */}
							<li data-name="Safari">Не зареєстрованих</li>
						</ul>
					</div>

					<div className="pie-container">
						<div id="chrome" className="pie"></div>
						<div id="ie" className="pie"></div>
						<div id="fiorefox" className="pie"></div>
						<div id="yandex" className="pie"></div>
					</div>
					<div className="stats">
						<ul>
							<li data-name="Chrome">Chrome</li>
							<li data-name="Firefox">Firefox</li>
							<li data-name="Internet Explorer">Internet Explorer</li>
							<li data-name="Safari">Yandex Browser</li>
						</ul>
					</div>


					<div className="wrap">
						<div className="barra barra1">
						</div>
						<div className="barra barra2">
						</div>
						<div className="barra barra3">
						</div>
						<div className="barra barra4">
						</div>
						<div className="pointer">Height:
            			<span className="data-height"></span>
						</div>
					</div>
					<div className="bar-chart">
						<div className="y-axis">
							<div className="label">70.00%</div>
							<div className="label">60.00%</div>
							<div className="label">50.00%</div>
							<div className="label">40.00%</div>
							<div className="label">30.00%</div>
							<div className="label">20.00%</div>
							<div className="label">10.00%</div>
							<div className="label">0.00%</div>
						</div>
						<div className="overflow-wrap">
							<div className="indicator"></div>
							<div className="sub-grid">
								<div className="x-axis">
									<div className="label">January</div>
									<div className="label">February </div>
									<div className="label">March </div>
									<div className="label">April </div>
									<div className="label">May </div>
									<div className="label">June </div>
									<div className="label">July </div>
									<div className="label">August </div>
									<div className="label">September </div>
									<div className="label">October </div>
									<div className="label">November </div>
									<div className="label">December </div>
								</div>
								<div className="chart">
									<div className="gridRow gridRow-1"></div>
									<div className="gridRow gridRow-2"></div>
									<div className="gridRow gridRow-3"></div>
									<div className="gridRow gridRow-4"></div>
									<div className="gridRow gridRow-5"></div>
									<div className="gridRow gridRow-6"></div>
									<div className="gridRow gridRow-7"></div>
									<div className="barGroup barGroup-1">
										<div className="bar bar-1"></div>
									</div>
									<div className="barGroup barGroup-2">
										<div className="bar bar-1"></div>
									</div>
									<div className="barGroup barGroup-3">
										<div className="bar bar-1"></div>
									</div>
									<div className="barGroup barGroup-4">
										<div className="bar bar-1"></div>
									</div>
									<div className="barGroup barGroup-5">
										<div className="bar bar-1"></div>
									</div>
									<div className="barGroup barGroup-6">
										<div className="bar bar-1"></div>
									</div>
									<div className="barGroup barGroup-7">
										<div className="bar bar-1"></div>
										<div className="bar bar-2"></div>
										<div className="bar bar-3"></div>
									</div>
									<div className="barGroup barGroup-8">
										<div className="bar bar-1"></div>
										<div className="bar bar-2"></div>
										<div className="bar bar-3"></div>
									</div>
									<div className="barGroup barGroup-9">
										<div className="bar bar-1"></div>
										<div className="bar bar-2"></div>
										<div className="bar bar-3"></div>
									</div>
									<div className="barGroup barGroup-10">
										<div className="bar bar-1"></div>
										<div className="bar bar-2"></div>
										<div className="bar bar-3"></div>
									</div>
									<div className="barGroup barGroup-11">
										<div className="bar bar-1"></div>
										<div className="bar bar-2"></div>
										<div className="bar bar-3"></div>
									</div>
									<div className="barGroup barGroup-12">
										<div className="bar bar-1"></div>
										<div className="bar bar-2"></div>
										<div className="bar bar-3"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}


export default (NavMenu);