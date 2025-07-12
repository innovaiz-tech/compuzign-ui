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
import StorageMigration from "./pages/StorageMigration";
import DataDrivenConsulting from "./pages/DataDrivenConsulting";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import ComputeMigration from "./pages/ComputeMigration";
import CloudMigration from "./pages/CloudMigration";
import AIInfrastructureHPC from "./pages/AIInfrastructureHPC";
import ApplicationModernization from "./pages/ApplicationModernization";
import IntelligentAutomation from "./pages/IntelligentAutomation";
import CostOptimization from "./pages/CostOptimization";

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
        <Route path='/storage-migration' element={<StorageMigration />} />
        <Route path='/data-driven-consulting' element={<DataDrivenConsulting />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/careers/:jobId' element={<JobDetail />} />
        <Route path='/compute-migration' element={<ComputeMigration />} />
        <Route path='/cloud-migration' element={<CloudMigration />} />
        <Route path='/services/ai-infrastructure' element={<AIInfrastructureHPC />} />
        <Route path='/services/app-modernization' element={<ApplicationModernization />} />
        <Route path='/services/automation' element={<IntelligentAutomation />} />
        <Route path='/services/cost-optimization' element={<CostOptimization />} />
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