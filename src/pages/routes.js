import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from "./Layouts/DashboardLayout";
import NotFound from "./Layouts/NotFound";
import Dashboard from "./Dashboard/Dashboard";
import Todo from "./todo/Todo";
import FetchList from './fetchList/FetchList';
import Formularios from './formularios/Formularios'

const Routes = () => {
    return useRoutes([
    {
    path: '/',
    element: <DashboardLayout/>,
    children: [
    { path: '', element: <Dashboard /> },
    { path: 'todo', element: <Todo /> }, // /todo
    { path: 'fetch-list', element: <FetchList /> },
    { path: 'forms', element: <Formularios/> },
    ]
    },
    {path: '/404', element: <NotFound/>},
    {path:'*', element: <Navigate to="/404" replace/>}
    ])
    }
    export default Routes