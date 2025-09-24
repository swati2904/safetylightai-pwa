import { Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './layout/AppShell'
import LinkPage from './pages/LinkPage'
import PromptPage from './pages/PromptPage'
import AuditPage from './pages/AuditPage'
import PrivacyPage from './pages/PrivacyPage'
import HistoryPage from './pages/HistoryPage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/link" replace />} />
        <Route path="/link" element={<LinkPage />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}
