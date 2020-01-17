import React, { Component } from 'react';
import './test.css';
class SignUpForm extends Component {


  logconsole() {
    console.log(document.getElementById('d1').value);
    console.log(document.getElementById('d2').value);
    console.log(document.getElementById('d3').value);
    console.log(document.getElementById('d4').value);
  }
  render() {
    return (
      <div class="admin-panel clearfix">
        <div class="slidebar">
          <div class="logo">
            <a href=""></a>
          </div>
          <ul>
            <li><a href="#dashboard" id="targeted">dashboard</a></li>
            <li><a href="#posts">posts</a></li>
            <li><a href="#media">media</a></li>
            <li><a href="#pages">pages</a></li>
            <li><a href="#links">links</a></li>
            <li><a href="#comments">comments</a></li>
            <li><a href="#widgets">widgets</a></li>
            <li><a href="#plugins">plugins</a></li>
            <li><a href="#users">users</a></li>
            <li><a href="#tools">tools</a></li>
            <li><a href="#settings">settings</a></li>
          </ul>
        </div>
        <div class="Main">
          <ul class="topbar clearfix">
            <li><a href="#">q</a></li>
            <li><a href="#">p</a></li>
            <li><a href="#">o</a></li>
            <li><a href="#">f</a></li>
            <li><a href="#">n</a></li>
          </ul>
          <div class="mainContent clearfix">
            <div id="dashboard">
              <h2 class="header"><span class="icon"></span>Dashboard</h2>
              <div class="monitor">
                <h4>Right Now</h4>
                <div class="clearfix">
                  <ul class="content">
                    <li>content</li>
                    <li class="posts"><span class="count">179</span><a href="">posts</a></li>
                    <li class="pages"><span class="count">13</span><a href="">pages</a></li>
                    <li class="categories"><span class="count">21</span><a href="">categories</a></li>
                    <li class="tags"><span class="count">305</span><a href="">tags</a></li>
                  </ul>
                  <ul class="discussions">
                    <li>discussions</li>
                    <li class="comments"><span class="count">353</span><a href="">comments</a></li>
                    <li class="approved"><span class="count">319</span><a href="">approved</a></li>
                    <li class="pending"><span class="count">0</span><a href="">pending</a></li>
                    <li class="spam"><span class="count">34</span><a href="">spam</a></li>
                  </ul>
                </div>
                <p>Theme <a href="">Twenty Eleven</a> with <a href="">3 widgets</a></p>
              </div>
              <div class="quick-press">
                <h4>Quick Press</h4>
                <form action="" method="post">
                </form>

              </div>

            </div>
            <ul class="statusbar">
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li class="profiles-setting"><a href="">s</a></li>
              <li class="logout"><a href="">k</a></li>
            </ul>
          </div>



        </div>
      </div>
    )
  }
}
export default (SignUpForm);