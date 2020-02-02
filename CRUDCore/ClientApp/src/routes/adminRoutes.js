import React from 'react';


const Register = React.lazy(() => import("../components/Registration/RegistrationPage"));

const adminRoutes = [
    { path: '/admin/register', exact: true, name: 'Галерея', component: Register  }
];
export default adminRoutes;