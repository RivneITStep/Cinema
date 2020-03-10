import React from 'react';

const Home = React.lazy(() => import("../components/Home/Home"));
const Login = React.lazy(() => import("../components/Login/LoginPage"));
const Registration = React.lazy(() => import("../components/Registration/RegistrationPage"));
const Profile = React.lazy(() => import("../components/UserProfile/userprofile"));

const defaultRoutes = [
    { path: '/home', exact: true, name: 'Головна', component: Home  },
    { path: '/login', exact: true, name: 'Вхід', component: Login  },
    { path: '/registration', exact: true, name: 'Вхід', component: Registration  },
    { path: '/profile', exact: true, name: 'Профіль', component: Profile  },
];
export default defaultRoutes;