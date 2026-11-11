import RootLayout from "./components/layouts/RootLayout";
import HomeIndex from "./pages/home/HomeIndex";
import { BrowserRouter, Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createRoutesFromElements(
  <>
    <Route element={<RootLayout />}>
      <Route path="/" element={<HomeIndex />} />
      <Route path="/about" element={"aita about page"} />
      <Route path="/blog" element={"aita blog page"} />
    </Route>
  </>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
