import React from 'react';

const Home = React.lazy(() => import("../components/Home/Home"));
const Login = React.lazy(() => import("../components/Login/LoginPage"));
const Registration = React.lazy(() => import("../components/Registration/RegistrationPage"));
const Profile = React.lazy(() => import("../components/UserProfile/userprofile"));
const Film = React.lazy(() => import("../components/demo/Application"));
const Film_second = React.lazy(() => import("../components/demo/film"));
const Film_third = React.lazy(() => import("../components/demo/film"));
const defaultRoutes = [
    { path: '/home', exact: true, name: 'Головна', component: Home  },
    { path: '/login', exact: true, name: 'Вхід', component: Login  },
    { path: '/registration', exact: true, name: 'Вхід', component: Registration  },
    { path: '/profile', exact: true, name: 'Профіль', component: Profile  },
    { path: '/app_film', exact: true, name: 'Фільм', component: Film  },
    { path: '/film', exact: true, name: 'Фільм', component: Film_second  },
    { path: '/film_asd', exact: true, name: 'Фільм', component: Film_third  },
];
export default defaultRoutes;