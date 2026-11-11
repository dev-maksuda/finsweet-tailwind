import HomeIndex from "./pages/home/HomeIndex"
import { BrowserRouter, Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router"

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<HomeIndex />} />
    <Route path="/about" element={"aita about page"} />
    <Route path="/blog" element={"aita blog page"} />
  </>
);

const router = createBrowserRouter(routes);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
