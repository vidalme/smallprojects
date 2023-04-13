//contexts
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

//routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Router,
  Route,
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

//routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="store" element={<Store />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
}

export default App;
