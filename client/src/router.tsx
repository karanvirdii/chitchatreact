import { Outlet, createBrowserRouter } from "react-router-dom"
import { AuthLayout } from "./pages/Layouts/AuthLayout"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { AuthProvider } from "./Context/AuthContext"
import { Home } from "./pages/Home"
import { RootLayout } from "./pages/Layouts/RootLayout"
import { NewChannel } from "./pages/channel/new"

export const router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/channel", children: [
            { path: "new", element: <NewChannel /> } 
          ]}
        ]
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> }
        ]
      }
    ]
  }
])

function ContextWrapper() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}
