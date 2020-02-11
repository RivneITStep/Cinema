import React from 'react';

const Test = React.lazy(() => import("../components/Test/test"));
const AddFilms = React.lazy(() => import("../components/Add_Films/Add_film"));
const Statistic = React.lazy(() => import("../components/Statistic/statistic"));
const Users = React.lazy(() => import("../components/Users/users"));

const adminRoutes = [
    { path: '/admin/test', exact: true, name: 'Test', component: Test  },
    { path: '/admin/add_film', exact: true, name: 'Галерея', component: AddFilms  },
    { path: '/admin/statistic', exact: true, name: 'Галерея', component: Statistic  },
    { path: '/admin', exact: true, name: 'Галерея', component: Users  },
];
export default adminRoutes;