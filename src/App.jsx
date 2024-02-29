import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./routes/Home";
import Products, { loader as productLoader } from "./routes/Product";
import ErrorPage from "./pages/ErrorPage";
import SingleProduct, {
  loader as singleProductLoader,
} from "./routes/SingleProduct";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Products />,
        loader: productLoader,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
