import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import Orders from "./pages/Orders";
import Clinicians from "./pages/Clinicians";
import Patients from "./pages/Patients";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/orders",
    element: (
      <Layout>
        <Orders />
      </Layout>
    ),
  },
  {
    path: "/clinicians",
    element: (
      <Layout>
        <Clinicians />
      </Layout>
    ),
  },
  {
    path: "/patients",
    element: (
      <Layout>
        <Patients />,
      </Layout>
    ),
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
