import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import ExtendedThreatDetection from "./pages/ExtendedThreatDetection";
import DisasterRecovery from "./pages/DisasterRecovery";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path='/extended-threat-detection' element={<ExtendedThreatDetection />} />
        <Route path='/disaster-recovery-business-continuity' element={<DisasterRecovery />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    ),
    {
      basename: '/compuzign-ui'
    }
  )

  return <RouterProvider router={router} />;
}

export default App;