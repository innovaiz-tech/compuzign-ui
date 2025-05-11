import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import PageNotFound from "./Components/PageNotFound";
import About from "./Components/About";
import RootLayouts from "./Layout/RootLayouts";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />

        {/* <Route path='contact' element={<ContactLayout />} >
          <Route path='mail' element={<Mail />} />
          <Route path='phone' element={<Phone />} />
        </Route> */}

        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;