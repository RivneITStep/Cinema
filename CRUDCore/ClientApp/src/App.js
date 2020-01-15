import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import LoginPage from './components/Login/LoginPage';
import registration from './components/Registration/registration';
import Application from './components/demo/Application'
import { Helmet } from 'react-helmet';
function App() {
  return (

    <Layout>
      <Helmet>
        <style>{'body {background: -webkit-linear-gradient(right, #000000,#1d3655); }'}</style>
      </Helmet>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/Application' component={Application} />
        <Route exact path='/registration' component={registration} />

      </Switch>
    </Layout>

  );
}

export default App;
