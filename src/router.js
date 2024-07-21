import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import EnterNewPassword from "./pages/EnterNewPassword";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";
import LayoutWithoutNavbar from "./layouts/LayoutWithoutNavbar";
import ProductDetail from "./pages/ProductDetail";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithNavbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-detail/:productName",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutWithoutNavbar />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/enter-new-password",
        element: <EnterNewPassword />,
      },
      {
        path: "/sitemap",
        element: <Sitemap />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
