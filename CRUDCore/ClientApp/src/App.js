import React, { Suspense, Component } from "react";
import { Switch, Route } from "react-router-dom";
import $ from "jquery";
// import { Admin, Resource, ListGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// const dataProvider =
//   jsonServerProvider("https://jsonplaceholder.typicode.com");
import './App.css';


const DefaultLayout = React.lazy(() => import('./components/containers/DefaultLayout'));
const AdminLayout = React.lazy(() => import('./components/containers/AdminLayout'));

class App extends Component {
  render() {
    setTimeout(function() {
      $('.inner div').addClass('done'); 
      
      setTimeout(function() {
        $('.inner div').addClass('page'); 
        
        setTimeout(function() {
          $('.pageLoad').addClass('off'); 
          
          $('body, html').addClass('on'); 
          
          
        }, 500)
      }, 500)
    }, 1500)
    return (
      <Suspense fallback={<div className="pageLoad">
      <div className="inner">
        <div></div>
        <div></div> 
        <div></div>
        <div></div>
      </div> </div>}>
        <Switch>
          
          <Route path="/admin" name="Admin" render={props => <AdminLayout {...props} />} />

          <Route path="/" name="Default"
            render={props => <DefaultLayout {...props} />} />


       
        </Switch>
      </Suspense>
    );
  }
};
export default App;