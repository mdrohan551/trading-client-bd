import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Layout/Loader";
import Notfound from "./Layout/Notfound";
import { Toaster } from "react-hot-toast";

// 👇 Lazy loaded components
const Home = lazy(() => import("../src/pages/Home"));

const AppRouter: React.FC = (): React.ReactElement => {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        {/* Suspense handles lazy component loading */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="*" element={<Notfound />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
