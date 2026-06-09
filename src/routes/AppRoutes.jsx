import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '../core/constants/routes.constant'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Accounts from '../pages/Accounts'
import AccountDetails from '../pages/AccountDetails'
import AccountStatement from '../pages/AccountStatement'
import Profile from '../pages/Profile'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.ACCOUNTS} element={<Accounts />} />
      <Route path={ROUTES.ACCOUNT_DETAILS} element={<AccountDetails />} />
      <Route path={ROUTES.ACCOUNT_STATEMENT} element={<AccountStatement />} />
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
       <Route path={ROUTES.PROFILE} element={<Profile />} />
    </Routes>
  )
}
