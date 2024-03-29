import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import InvestigationList from 'src/pages/InvestigationList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import PersonalList from 'src/pages/PersonalInvestigationList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import CreateInvestigation from 'src/pages/CreateInvestigation';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'investigations', element: <InvestigationList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'crinvestigation', element: <CreateInvestigation /> },
      { path: 'pnlinvestigations', element: <PersonalList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
