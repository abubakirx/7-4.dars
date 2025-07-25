import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "./Layout/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";

import { Home, Signup, Login, Profile, SingleImage } from "./pages";

function App() {
  const { user } = useSelector((stare) => stare.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/Profile ",
          element: <Profile />,
        },
        { path: "/SingleImage/:id ", element: <SingleImage /> },
      ],
    },
    {
      path: "/Login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/Signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
export default App;
