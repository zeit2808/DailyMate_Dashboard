import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../layouts/AdminLayout';
import { DashboardPage } from '../pages/DashboardPage';
import { PlaceholderPage } from '../pages/PlaceholderPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<PlaceholderPage title="Users" />} />
        <Route path="partners" element={<PlaceholderPage title="Partners" />} />
        <Route path="ai-tokens" element={<PlaceholderPage title="AI Token Management" />} />
        <Route path="analytics" element={<PlaceholderPage title="Analytics" />} />
        <Route path="settings" element={<PlaceholderPage title="Settings" />} />
      </Route>
    </Routes>
  );
}
