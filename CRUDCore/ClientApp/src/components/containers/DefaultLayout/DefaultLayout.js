import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import defaultRoutes from '../../../routes/defaultRoutes'
import { Helmet } from 'react-helmet';

class DefaultLayout extends Component {

  render() {
    return (
        <Layout>
            <Helmet>
                <style>{'body {background-image: linear-gradient(180deg,#1d3655, #000000 70%,#1d3655) ;background-attachment: fixed; no-repeat}'}</style>
            </Helmet>
        <h1>Hello default Layout</h1>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            {defaultRoutes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>

      </Layout>
    );
  }
}
export default DefaultLayout;