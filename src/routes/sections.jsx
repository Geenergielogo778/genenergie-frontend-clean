import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/main';
import { ForgotPasswordView } from 'src/sections/forgot-password';

export const IndexPage = lazy(() => import('src/pages/app'));
export const HowItWorks = lazy(() => import('src/pages/how-it-works'));
export const Faqs = lazy(() => import('src/pages/faqs'));
export const Pricing = lazy(() => import('src/pages/pricing'));
export const ContactUs = lazy(() => import('src/pages/contact-us'));
export const AdditionalServices = lazy(() => import('src/pages/additional-services'));
export const LogoCreation = lazy(() => import('src/pages/logo-creation/logo-creation'));
export const LogoPreview = lazy(() => import('src/pages/logo-preview'));
export const EditLogo = lazy(() => import('src/pages/edit-logo'));
export const ForgotPassword = lazy(() => import('src/pages/forgot-password'));
export const Profile = lazy(() => import('src/pages/profile'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const SignUpPage = lazy(() => import('src/pages/signup'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const Generatelogo = lazy(() => import('src/components/generate-logo'));
export const Terms = lazy(() => import('src/components/terms-condtions'));
export const Privacy = lazy(() => import('src/components/privacy-policy'));
export const CustomLogoSection = lazy(() => import('src/pages/custom-logo-design'))
export const WebDevelopmentPage = lazy(() => import('src/pages/web-development'));
export const VideoEditingPage = lazy(() => import('src/pages/video-editing-services'));
export const CopyWritingPage = lazy(() => import('src/pages/copy-writing-services'));
export const DigitalMarketingPage = lazy(() => import('src/pages/digital-marketing-services'));
export const GraphicEditingPage = lazy(() => import('src/pages/graphic-design-services'));
export const SocialMediaManagement = lazy(() => import('src/pages/social-media-management'));
export const AnimationPage = lazy(() => import('src/pages/animation-services'));
export const SEOPage = lazy(() => import('src/pages/seo-services'));
export const BlogsPage = lazy(() => import('src/pages/Blogs'));
export const BlogsMainPage = lazy(() => import('src/pages/blogMain'))

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        // { path: 'index', element: <IndexPage /> },
        { path: 'how-it-works', element: <HowItWorks /> },
        { path: 'faqs', element: <Faqs /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'contact-us', element: <ContactUs /> },
        { path: 'additional-services', element: <AdditionalServices /> },
        { path: 'logo-creation', element: <LogoCreation /> },
        { path: 'logo-preview', element: <LogoPreview /> },
        { path: 'edit-logo', element: <EditLogo /> },
        { path: 'profile', element: <Profile /> },
        {
          path: '/generate-logo',
          element: <Generatelogo />,
        },
        {
          path: '/terms-conditions',
          element: <Terms />,
        },
        {
          path: '/privacy-policy',
          element: <Privacy />,
        },
        {

          path: '/custom-logo-design-services',
          element: <CustomLogoSection />

        },

        {

          path: '/web-development-services',
          element:<WebDevelopmentPage />

        },
        {

          path: '/video-editing-services',
          element:<VideoEditingPage />

        },
        {

          path: '/copy-writing-services',
          element:<CopyWritingPage />

        },
        {

          path: '/digital-marketing-services',
          element:<DigitalMarketingPage />

        },
        {

          path: '/graphic-design-services',
          element:<GraphicEditingPage />

        },
        {

          path: '/social-media-management',
          element:<SocialMediaManagement />

        },
        {

          path: '/animation-services',
          element:<AnimationPage />

        },
        {

          path: '/seo-services',
          element:<SEOPage />

        },
        {
          path: '/blogs',
          element: <BlogsPage />,
        },
        {
          path: '/blog-main-page/:slug',
          element: <BlogsMainPage />
        }
        
      
      ],
    },

    {
      path: 'login',
      element: <LoginPage />,
    },
  
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: 'signup',
      element: <SignUpPage />,
    },
    


    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
