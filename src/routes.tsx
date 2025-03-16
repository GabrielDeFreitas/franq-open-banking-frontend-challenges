import { BrowserRouter, Route, Routes } from 'react-router'
import { RoutesUrls } from './utils/enums/routes-url'
import HomeGeneric from './pages/home-generic'
import { ErrorGenericController } from './pages/error-generic'
import { LoadingScreenController } from './pages/loading-screen'

export default function RouterProvider() {
  const routes = [
    {
      path: RoutesUrls.BASE_URL,
      element: <HomeGeneric />
    },
    {
      path: '*',
      element: <ErrorGenericController />
    },
    {
      path: RoutesUrls.LOADING_SCREEN,
      element: <LoadingScreenController />
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
