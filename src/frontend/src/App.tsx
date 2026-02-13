import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import AboutMediationPage from './pages/AboutMediationPage';
import MediationProcessPage from './pages/MediationProcessPage';
import ComparisonPage from './pages/ComparisonPage';
import DisputeGuidancePage from './pages/DisputeGuidancePage';
import RecentDevelopmentsPage from './pages/RecentDevelopmentsPage';
import CommonPersonPage from './pages/roles/CommonPersonPage';
import LawyerPage from './pages/roles/LawyerPage';
import MediatorPage from './pages/roles/MediatorPage';
import StudentPage from './pages/roles/StudentPage';
import JudgePage from './pages/roles/JudgePage';

function RootLayout() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutMediationPage,
});

const processRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/process',
  component: MediationProcessPage,
});

const comparisonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/comparison',
  component: ComparisonPage,
});

const guidanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/guidance',
  component: DisputeGuidancePage,
});

const developmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/developments',
  component: RecentDevelopmentsPage,
});

const commonPersonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/role/common-person',
  component: CommonPersonPage,
});

const lawyerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/role/lawyer',
  component: LawyerPage,
});

const mediatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/role/mediator',
  component: MediatorPage,
});

const studentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/role/student',
  component: StudentPage,
});

const judgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/role/judge',
  component: JudgePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  processRoute,
  comparisonRoute,
  guidanceRoute,
  developmentsRoute,
  commonPersonRoute,
  lawyerRoute,
  mediatorRoute,
  studentRoute,
  judgeRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
