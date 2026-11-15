import ErrorPage from "./components/common/ErrorPage";
import RootLayout from "./components/layouts/RootLayout";
import HomeIndex from "./pages/home/HomeIndex";
import AboutIndex from "./components/pages/about/AboutIndex";
import BlogIndex from "./pages/blog/BlogIndex";
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route path="/" element={<HomeIndex />} />
    <Route path="/about" element={<AboutIndex />} />
    <Route path="/blog" element={<BlogIndex />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
