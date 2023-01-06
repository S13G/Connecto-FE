import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AirportPage from "./pages/AirportPage";
import DestinationsPage from "./pages/DestinationsPage";
import FAQ from "./pages/FaqPage";
import PartnerPage from "./pages/PartnerPage";
import SingleTransport from "./pages/SingleTransport";
import Home from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="destinations" element={<DestinationsPage />} />
      <Route path="about" element={<AboutPage />} />

      <Route path="faq" element={<FAQ />} />
      <Route path="partners" element={<PartnerPage />} />
      <Route path="terms" element={<PartnerPage />} />
      <Route path="airport" element={<AirportPage />} />
      <Route path="transport" element={<SingleTransport />} />
    </Routes>
  );
}
export default App;
