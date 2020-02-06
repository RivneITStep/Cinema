import React from 'react';
import './Admin.css';
import $ from "jquery";

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

          <div class="pie-container">
            <div id="safari" class="pie"></div>
            <div id="ie" class="pie"></div>
            <div id="firefox" class="pie"></div>
            <div id="chrome" class="pie"></div>
          </div>

          <div class="stats">
            <ul>
              <li data-name="Chrome">Chrome</li>
              <li data-name="Firefox">Firefox</li>
              <li data-name="Internet Explorer">Internet Explorer</li>
              <li data-name="Safari">Safari</li>
            </ul>
          </div>
          <div class="wrap">
            <div class="barra barra1">
            </div>
            <div class="barra barra2">
            </div>
            <div class="barra barra3">
            </div>
            <div class="barra barra4">
            </div>
            <div class="barra barra5">
            </div>
            <div class="pointer">Height:
            <span class="data-height"></span>
            </div>
          </div>
          <div class="bar-chart">
	<div class="y-axis">
		<div class="label">70.00%</div>
		<div class="label">60.00%</div>
		<div class="label">50.00%</div>
		<div class="label">40.00%</div>
		<div class="label">30.00%</div>
		<div class="label">20.00%</div>
		<div class="label">10.00%</div>
		<div class="label">0.00%</div>
	</div>
	<div class="overflow-wrap">
		<div class="indicator"></div>
		<div class="sub-grid">
			<div class="x-axis">
				<div class="label">School #1</div>
				<div class="label">School #2</div>
				<div class="label">School #3</div>
				<div class="label">School #4</div>
				<div class="label">School #5</div>
				<div class="label">School #6</div>
				<div class="label">School #7</div>
				<div class="label">School #8</div>
				<div class="label">School #9</div>
				<div class="label">School #10</div>
				<div class="label">School #11</div>
				<div class="label">School #12</div>
			</div>
			<div class="chart">
				<div class="gridRow gridRow-1"></div>
				<div class="gridRow gridRow-2"></div>
				<div class="gridRow gridRow-3"></div>
				<div class="gridRow gridRow-4"></div>
				<div class="gridRow gridRow-5"></div>
				<div class="gridRow gridRow-6"></div>
				<div class="gridRow gridRow-7"></div>
				<div class="barGroup barGroup-1">
					<div class="bar bar-1"></div>
				</div>
				<div class="barGroup barGroup-2">
					<div class="bar bar-1"></div>
				</div>
				<div class="barGroup barGroup-3">
					<div class="bar bar-1"></div>
				</div>
				<div class="barGroup barGroup-4">
					<div class="bar bar-1"></div>
				</div>
				<div class="barGroup barGroup-5">
					<div class="bar bar-1"></div>
				</div>
				<div class="barGroup barGroup-6">
					<div class="bar bar-1"></div>
				</div>
				<div class="barGroup barGroup-7">
					<div class="bar bar-1"></div>
					<div class="bar bar-2"></div>
					<div class="bar bar-3"></div>
				</div>
				<div class="barGroup barGroup-8">
					<div class="bar bar-1"></div>
					<div class="bar bar-2"></div>
					<div class="bar bar-3"></div>
				</div>
				<div class="barGroup barGroup-9">
					<div class="bar bar-1"></div>
					<div class="bar bar-2"></div>
					<div class="bar bar-3"></div>
				</div>
				<div class="barGroup barGroup-10">
					<div class="bar bar-1"></div>
					<div class="bar bar-2"></div>
					<div class="bar bar-3"></div>
				</div>
				<div class="barGroup barGroup-11">
					<div class="bar bar-1"></div>
					<div class="bar bar-2"></div>
					<div class="bar bar-3"></div>
				</div>
				<div class="barGroup barGroup-12">
					<div class="bar bar-1"></div>
					<div class="bar bar-2"></div>
					<div class="bar bar-3"></div>
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