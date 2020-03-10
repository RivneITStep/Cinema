import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import './Admin.css';
import $ from "jquery";
// routes config
import adminRoutes from '../../../routes/adminRoutes';

class AdminLayout extends Component {

  render() {
      // setTimeout(function() {
      //   $('.inner div').addClass('done'); 
        
      //   setTimeout(function() {
      //     $('.inner div').addClass('page'); 
          
      //     setTimeout(function() {
      //       $('.pageLoad').addClass('off'); 
            
      //       $('body, html').addClass('on'); 
            
            
      //     }, 500)
      //   }, 500)
      // }, 1500)
    console.log('-------this-----', this.props);
    return (
      <Layout>
        <Suspense fallback={<div className="pageLoad">
      <div className="inner">
        <div></div>
        <div></div> 
        <div></div>
        <div></div>
      </div> </div>}>
          <Switch>
            {adminRoutes.map((route, idx) => {
              return  (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              );
            })}
            <Redirect from="/" to="/admin" />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}
export default AdminLayout;