import React from 'react';
import './Admin.css';
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

          <div className="pie-container">
            <div id="notregist" className="pie"></div>
            <div id="ie" className="pie"></div>
            <div id="something" className="pie"></div>
            <div id="firefox" className="pie"></div>
            <div id="regist" className="pie"></div>
          </div>
          <h2>Статистика користувачів сайту</h2>
          <div className="stats">
            <ul>
              <li data-name="Chrome">Зареєстрованих</li>
              <li data-name="Firefox">Firefox</li>
              <li data-name="Internet Explorer">Internet Explorer</li>
              <li data-name="Safari">Не зареєстрованих</li>
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
				<div className="label">School #1</div>
				<div className="label">School #2</div>
				<div className="label">School #3</div>
				<div className="label">School #4</div>
				<div className="label">School #5</div>
				<div className="label">School #6</div>
				<div className="label">School #7</div>
				<div className="label">School #8</div>
				<div className="label">School #9</div>
				<div className="label">School #10</div>
				<div className="label">School #11</div>
				<div className="label">School #12</div>
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