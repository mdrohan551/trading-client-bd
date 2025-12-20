import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Layout/Loader";
import Notfound from "./Layout/Notfound";
import { Toaster } from "react-hot-toast";
import BusinessDetails from "./components/OurBuisness/BusinessDetails";
import ContactPage from "./pages/ContactPage";

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
            <Route path="/" element={<Home />} />
            <Route path="/business-details/:id" element={<BusinessDetails />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
