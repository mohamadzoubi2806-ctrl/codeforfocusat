import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

import HomePageEn from './pages/en/HomePageEn';
import WhatIsSatPageEn from './pages/en/WhatIsSatPageEn';
import ComparisonPageEn from './pages/en/ComparisonPageEn';
import CoursePlanPageEn from './pages/en/CoursePlanPageEn';
import WhyFocusPageEn from './pages/en/WhyFocusPageEn';
import ContactPageEn from './pages/en/ContactPageEn';
import UniversitiesPageEn from './pages/en/UniversitiesPageEn';

import HomePageAr from './pages/ar/HomePageAr';
import WhatIsSatPageAr from './pages/ar/WhatIsSatPageAr';
import ComparisonPageAr from './pages/ar/ComparisonPageAr';
import CoursePlanPageAr from './pages/ar/CoursePlanPageAr';
import WhyFocusPageAr from './pages/ar/WhyFocusPageAr';
import ContactPageAr from './pages/ar/ContactPageAr';
import UniversitiesPageAr from './pages/ar/UniversitiesPageAr';

import HomePageHe from './pages/he/HomePageHe';
import WhatIsSatPageHe from './pages/he/WhatIsSatPageHe';
import ComparisonPageHe from './pages/he/ComparisonPageHe';
import CoursePlanPageHe from './pages/he/CoursePlanPageHe';
import WhyFocusPageHe from './pages/he/WhyFocusPageHe';
import ContactPageHe from './pages/he/ContactPageHe';
import UniversitiesPageHe from './pages/he/UniversitiesPageHe';

import AiPageEn from './pages/en/AiPageEn';
import AiPageAr from './pages/ar/AiPageAr';
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
      <Outlet />
    </>
  );
}

function HomePage() {
  const { language } = useLanguage();
  if (language === 'ar') return <HomePageAr />;
  if (language === 'he') return <HomePageHe />;
  return <HomePageEn />;
}

function WhatIsSatPage() {
  const { language } = useLanguage();
  if (language === 'ar') return <WhatIsSatPageAr />;
  if (language === 'he') return <WhatIsSatPageHe />;
  return <WhatIsSatPageEn />;
}

function ComparisonPage() {
  const { language } = useLanguage();
  if (language === 'ar') return <ComparisonPageAr />;
  if (language === 'he') return <ComparisonPageHe />;
  return <ComparisonPageEn />;
}

function CoursePlanPage() {
  const { language } = useLanguage();
  if (language === 'ar') return <CoursePlanPageAr />;
  if (language === 'he') return <CoursePlanPageHe />;
  return <CoursePlanPageEn />;
}

function WhyFocusPage() {
  const { language } = useLanguage();
  if (language === 'ar') return <WhyFocusPageAr />;
  if (language === 'he') return <WhyFocusPageHe />;
  return <WhyFocusPageEn />;
}

function ContactPage() {
  const { language } = useLanguage();
  if (language === 'ar') return <ContactPageAr />;
  if (language === 'he') return <ContactPageHe />;
  return <ContactPageEn />;
}

function UniversitiesPage() {
  const { language } = useLanguage();
  if (language === 'ar') return <UniversitiesPageAr />;
  if (language === 'he') return <UniversitiesPageHe />;
  return <UniversitiesPageEn />;
}

function AiPage() {
  const { language } = useLanguage();
  if (language === 'ar') return <AiPageAr />;
  if (language === 'he') return <AiPageHe />;
  return <AiPageEn />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "what-is-sat", element: <WhatIsSatPage /> },
      { path: "comparison", element: <ComparisonPage /> },
      { path: "course-plan", element: <CoursePlanPage /> },
      { path: "why-focus", element: <WhyFocusPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "universities", element: <UniversitiesPage /> },
      { path: "ai-tutor", element: <AiPage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
