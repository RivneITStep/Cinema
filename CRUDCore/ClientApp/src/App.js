import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/NavBar/Layout';
import LoginPage from './components/Login/LoginPage';
import registration from './components/Registration/registration';
import Add_film from './components/Admin_Panel/Add_film';
import Application from './components/demo/Application';
import { Helmet } from 'react-helmet';
import film from './components/demo/film';
import film2 from './components/demo/film2';
import userprofile from './components/UserProfile/userprofile';
// import { Admin, Resource, ListGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// const dataProvider =
//   jsonServerProvider("https://jsonplaceholder.typicode.com");
import test from './components/Test/test'; 
import './App.css';
function App() {
  return (

    <Layout>
      <Helmet>
        <style>{'body {background-image: linear-gradient(180deg,#1d3655, #000000 70%,#1d3655) ;background-attachment: fixed; no-repeat}'}</style>
        
      </Helmet>
      <Switch>
      {/* <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
      </Admin> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/Application' component={Application} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/registration' component={registration} />
        <Route exact path='/upload' component={Add_film} />
        <Route exact path='/film' component={film} />
        <Route exact path='/film2' component={film2} />
        <Route exact path='/userprofile' component={userprofile} />
        <Route exact path='/test' component={test} /> 
      </Switch>
    </Layout>

  );
}

export default App;
