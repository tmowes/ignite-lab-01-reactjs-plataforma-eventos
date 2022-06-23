import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/event" element={<Home />} />
        <Route path="/event/lesson/:slug" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
