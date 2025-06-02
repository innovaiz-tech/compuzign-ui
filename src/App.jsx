// App.jsx - Main application component
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import About from "./Components/About";
import RootLayouts from "./Layout/RootLayouts";
import PageNotFound from "./Components/PageNotFound";
import HomePage from "./Components/HomePage";
import Services from "./Components/services/Services.jsx";
import Support from "./Components/support/Support.jsx";
import SupportAsAService from "./Components/services/SupportAsAService.jsx";
import MigrationAsAService from "./Components/services/MigrationAsAService.jsx";
import CloudAndInfrastructureAsAService from "./Components/services/CloudAndInfrastructureAsAService.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />}>
        <Route index element={<HomePage />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/support' element={<Support />} />
        <Route path='/csaas' element={<SupportAsAService />} />
        {/* <Route path='/maas' element={<MigrationAsAService />} /> */}
        {/* <Route path='/ciaas' element={<CloudAndInfrastructureAsAService />} /> */}

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