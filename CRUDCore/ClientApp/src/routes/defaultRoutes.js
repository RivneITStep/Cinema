import React from 'react';

const Home = React.lazy(() => import("../components/Home/Home"));
const Login = React.lazy(() => import("../components/Login/LoginPage"));
const Registration = React.lazy(() => import("../components/Registration/RegistrationPage"));
const Profile = React.lazy(() => import("../components/UserProfile/userprofile"));
const Application = React.lazy(() => import("../components/demo/Application"));
const film = React.lazy(() => import("../components/demo/film"));
const film2 = React.lazy(() => import("../components/demo/film2"));


const defaultRoutes = [
    { path: '/home', exact: true, name: 'Головна', component: Home  },
    { path: '/login', exact: true, name: 'Вхід', component: Login  },
    { path: '/registration', exact: true, name: 'Вхід', component: Registration  },
    { path: '/profile', exact: true, name: 'Профіль', component: Profile  },
    { path: '/Application', exact: true, name: 'фільм', component: Application  },
    { path: '/film', exact: true, name: 'фільм', component: film  },
    { path: '/film2', exact: true, name: 'фільм', component: film2  },
];
export default defaultRoutes;