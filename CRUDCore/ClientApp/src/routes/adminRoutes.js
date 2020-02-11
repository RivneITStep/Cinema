import React from 'react';

const Home = React.lazy(() => import("../components/Home/Home"));
const Login = React.lazy(() => import("../components/Login/LoginPage"));
const Register = React.lazy(() => import("../components/Registration/RegistrationPage"));
const Profile = React.lazy(() => import("../components/UserProfile/userprofile"));

const adminRoutes = [
    { path: '/admin/home', exact: true, name: 'Головна', component: Home  },
    { path: '/admin/login', exact: true, name: 'Вхід', component: Login  },
    { path: '/admin/register', exact: true, name: 'Галерея', component: Register  },
    { path: '/admin/profile', exact: true, name: 'Профіль', component: Profile  },
   
];
export default adminRoutes;