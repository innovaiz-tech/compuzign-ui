import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    ),
    {
      basename: import.meta.env.DEV ? '/' : '/compuzign-ui'
    }
  )

  return <RouterProvider router={router} />;
}

export default App;