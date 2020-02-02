import React from 'react';

const Home = React.lazy(() => import("../components/Home/Home"));
const Login = React.lazy(() => import("../components/Login/LoginPage"));

const defaultRoutes = [
    { path: '/home', exact: true, name: 'Головна', component: Home  },
    { path: '/login', exact: true, name: 'Вхід', component: Login  }
];
export default defaultRoutes;