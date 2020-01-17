import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import LoginPage from './components/Login/LoginPage';
import registration from './components/Registration/registration';
import Application from './components/demo/Application';
import { Helmet } from 'react-helmet';
import film from './components/demo/film';
import film2 from './components/demo/film2';
import userprofile from './components/userprofile';
function App() {
  return (

    <Layout>
      <Helmet>
        <style>{'body {background: -webkit-linear-gradient(right, #000000,#1d3655); }'}</style>
      </Helmet>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Application' component={Application} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/registration' component={registration} />
        <Route exact path='/film' component={film} />
        <Route exact path='/film2' component={film2} />
        <Route exact path='/userprofile' component={userprofile} />
      </Switch>
    </Layout>

  );
}

export default App;
