import { Routes, Route } from 'react-router-dom'
import { LoginScreen } from './../pages/Login/Login'
import { RegisterScreen } from './../pages/Register/Register'
import { MySchedules } from '../pages/MySchedules/MySchedules'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/page" element={<MySchedules />} />
    </Routes>
  )
}
