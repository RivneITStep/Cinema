import React from 'react';

const Test = React.lazy(() => import("../components/Test/test"));
const  create= React.lazy(() => import("../components/create/create"));
const Statistic = React.lazy(() => import("../components/Statistic/statistic"));
const Users = React.lazy(() => import("../components/Users/users"));

const adminRoutes = [
    { path: '/admin/test', exact: true, name: 'Test', component: Test  },
    { path: '/admin/create', exact: true, name: 'create', component: create  },
    { path: '/admin/statistic', exact: true, name: 'Галерея', component: Statistic  },
    { path: '/admin', exact: true, name: 'Галерея', component: Users  },
];
export default adminRoutes;