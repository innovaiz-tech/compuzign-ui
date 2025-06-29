import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import ExtendedThreatDetection from "./pages/ExtendedThreatDetection";
import DisasterRecovery from "./pages/DisasterRecovery";
import PrivilegedAccessStrategies from "./pages/PrivilegedAccessStrategies";
import VulnerabilityAssessment from "./pages/VulnerabilityAssessment";
import RansomwareResponse from "./pages/RansomwareResponse";
import CyberRecoveryMonitoring from "./pages/CyberRecoveryMonitoring";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path='/cyber-recovery-monitoring' element={<CyberRecoveryMonitoring />} />
        <Route path='/extended-threat-detection' element={<ExtendedThreatDetection />} />
        <Route path='/disaster-recovery-business-continuity' element={<DisasterRecovery />} />
        <Route path='/privileged-access-strategies' element={<PrivilegedAccessStrategies />} />
        <Route path='/ransomware-response' element={<RansomwareResponse />} />
        <Route path='/vulnerability-assessment-remediation' element={<VulnerabilityAssessment />} />
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