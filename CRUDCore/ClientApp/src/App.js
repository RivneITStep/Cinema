import React, { Suspense, Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

// import { Admin, Resource, ListGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// const dataProvider =
//   jsonServerProvider("https://jsonplaceholder.typicode.com");
import './App.css';

import GuestRoute from "./components/routes/GuestRoute";
import UserRoute from "./components/routes/UserRoute";


const Home = React.lazy(() => import("./components/Home/Home"));
const Counter = React.lazy(() => import("./components/UserProfile/userprofile"));
const FetchData = React.lazy(() => import("./components/Test/test"));
const Register = React.lazy(() => import("./components/Registration/RegistrationPage"));
const Login = React.lazy(() => import("./components/Login/LoginPage"));


const DefaultLayout = React.lazy(() => import('./components/containers/DefaultLayout'));
const AdminLayout = React.lazy(() => import('./components/containers/AdminLayout'));

class App extends Component {
  render() {
    return (
      // <Layout>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          
          <Route path="/admin" name="Admin" render={props => <AdminLayout {...props} />} />

          <Route path="/" name="Default"
            render={props => <DefaultLayout {...props} />} />


          {/* <Route exact path="/" component={Home} />
                        <UserRoute path="/counter" component={Counter} />
                        <UserRoute path="/fetch-data/:startDateIndex?" component={FetchData} />
                        <UserRoute path="/products/:page?" component={ProductsPage} />
                        <GuestRoute path="/register" component={Register} />
                        <GuestRoute path='/login' component={Login} /> */}
        </Switch>
      </Suspense>
      // </Layout>
    );
  }
};
export default App;