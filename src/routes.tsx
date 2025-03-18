import { BrowserRouter, Route, Routes } from 'react-router'
import { RoutesUrls } from './utils/enums/routes-url'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

export default function RouterProvider() {
  const routes = [
    {
      path: RoutesUrls.BASE_URL,
      element: <Home />
    },
    {
      path: RoutesUrls.LOGIN,
      element: <Login />
    },
    {
      path: RoutesUrls.REGISTER,
      element: <Register />
    }
  ]

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
