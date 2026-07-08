import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Layout/Loader";
import Notfound from "./Layout/Notfound";
import { Toaster } from "react-hot-toast";
import BusinessDetails from "./components/OurBuisness/BusinessDetails";
import ContactPage from "./pages/ContactPage";
import PortAgencyServices from "./pages/Portagencyservices";
import ShipChandlingServices from "./pages/Shipchandlingservices";
import FreightForwardingServices from "./pages/FreightForwardingServices";

// Lazy loaded components
const Home = lazy(() => import("./pages/Home")); // ✅ fixed path

const AppRouter: React.FC = () => {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="*" element={<Notfound />} />

            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/business-details/:id" element={<BusinessDetails />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Shipping Services Pages */}
            <Route
              path="/services/port-agency"
              element={<PortAgencyServices />}
            />
            <Route
              path="/services/ship-chandling"
              element={<ShipChandlingServices />}
            />
            <Route
              path="/services/freight-forwarding"
              element={<FreightForwardingServices />}
            />

            {/* Alias routes for navigation flexibility */}
            <Route
              path="/shipping-services/port-agency"
              element={<PortAgencyServices />}
            />
            <Route
              path="/shipping-services/ship-chandling"
              element={<ShipChandlingServices />}
            />
            <Route
              path="/shipping-services/freight-forwarding"
              element={<FreightForwardingServices />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
