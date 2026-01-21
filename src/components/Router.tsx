import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import LanguageSelectionPage from './pages/LanguageSelectionPage';
import AiBubble from './AiBubble';

import HomePageEn from './pages/en/HomePageEn';
import WhatIsSatPageEn from './pages/en/WhatIsSatPageEn';
import ComparisonPageEn from './pages/en/ComparisonPageEn';
import CoursePlanPageEn from './pages/en/CoursePlanPageEn';
import WhyFocusPageEn from './pages/en/WhyFocusPageEn';
import ContactPageEn from './pages/en/ContactPageEn';
import UniversitiesPageEn from './pages/en/UniversitiesPageEn';
import AiPageEn from './pages/en/AiPageEn';

import HomePageAr from './pages/ar/HomePageAr';
import WhatIsSatPageAr from './pages/ar/WhatIsSatPageAr';
import ComparisonPageAr from './pages/ar/ComparisonPageAr';
import CoursePlanPageAr from './pages/ar/CoursePlanPageAr';
import WhyFocusPageAr from './pages/ar/WhyFocusPageAr';
import ContactPageAr from './pages/ar/ContactPageAr';
import UniversitiesPageAr from './pages/ar/UniversitiesPageAr';
import AiPageAr from './pages/ar/AiPageAr';

import HomePageHe from './pages/he/HomePageHe';
import WhatIsSatPageHe from './pages/he/WhatIsSatPageHe';
import ComparisonPageHe from './pages/he/ComparisonPageHe';
import CoursePlanPageHe from './pages/he/CoursePlanPageHe';
import WhyFocusPageHe from './pages/he/WhyFocusPageHe';
import ContactPageHe from './pages/he/ContactPageHe';
import UniversitiesPageHe from './pages/he/UniversitiesPageHe';
import AiPageHe from './pages/he/AiPageHe';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <AiBubble />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LanguageSelectionPage />,
      },
      // English Routes
      { path: "en", element: <HomePageEn /> },
      { path: "en/what-is-sat", element: <WhatIsSatPageEn /> },
      { path: "en/comparison", element: <ComparisonPageEn /> },
      { path: "en/course-plan", element: <CoursePlanPageEn /> },
      { path: "en/why-focus", element: <WhyFocusPageEn /> },
      { path: "en/contact", element: <ContactPageEn /> },
      { path: "en/universities", element: <UniversitiesPageEn /> },
      { path: "en/ai-tutor", element: <AiPageEn /> },

      // Arabic Routes
      { path: "ar", element: <HomePageAr /> },
      { path: "ar/what-is-sat", element: <WhatIsSatPageAr /> },
      { path: "ar/comparison", element: <ComparisonPageAr /> },
      { path: "ar/course-plan", element: <CoursePlanPageAr /> },
      { path: "ar/why-focus", element: <WhyFocusPageAr /> },
      { path: "ar/contact", element: <ContactPageAr /> },
      { path: "ar/universities", element: <UniversitiesPageAr /> },
      { path: "ar/ai-tutor", element: <AiPageAr /> },

      // Hebrew Routes
      { path: "he", element: <HomePageHe /> },
      { path: "he/what-is-sat", element: <WhatIsSatPageHe /> },
      { path: "he/comparison", element: <ComparisonPageHe /> },
      { path: "he/course-plan", element: <CoursePlanPageHe /> },
      { path: "he/why-focus", element: <WhyFocusPageHe /> },
      { path: "he/contact", element: <ContactPageHe /> },
      { path: "he/universities", element: <UniversitiesPageHe /> },
      { path: "he/ai-tutor", element: <AiPageHe /> },

      // ⚠️ Catch-all (Must ALWAYS be last)
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}