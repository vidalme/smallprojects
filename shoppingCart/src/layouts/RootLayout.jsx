import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import ProductsGrid from "../pages/products/ProductsGrid";
import ProductsCheckOut from "../pages/products/ProductsCheckOut";

import Header from "../pages/header/Header";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
      <Route index element={<ProductsGrid />} />
      <Route path="checkout" element={<ProductsCheckOut />} />
    </Route>
  )
);

export default function RootLayout() {
  return <RouterProvider router={router} />;
}
