import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DestinationsPage from "./pages/DestinationsPage";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import PartnerPage from "./pages/PartnerPage";
import AirportPage from "./pages/AirportPage";
import SingleTransport from "./pages/SingleTransport";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="destinations" element={<DestinationsPage />}></Route>
      <Route path="about" element={<AboutPage />}></Route>

      <Route path="faq" element={<FAQ />}></Route>
      <Route path="partners" element={<PartnerPage />}></Route>
      <Route path="terms" element={<PartnerPage />}></Route>
      <Route path="airport" element={<AirportPage />}></Route>
      <Route path="transport" element={<SingleTransport />}></Route>
    </Routes>
  );
}
export default App;
