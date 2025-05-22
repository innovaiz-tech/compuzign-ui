// App.jsx - Main application component
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import About from "./Components/About";
import RootLayouts from "./Layout/RootLayouts";
import PageNotFound from "./Components/PageNotFound";
import HomePage from "./Components/HomePage";
import Services from "./Components/services/Services.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />

        {/* <Route path='contact' element={<ContactLayout />} >
          <Route path='mail' element={<Mail />} />
          <Route path='phone' element={<Phone />} />
        </Route> */}

        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />;
}

export default App;