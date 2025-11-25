import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileOptimizedBadge } from "./components/MobileOptimizedBadge";
import { ParticleBackground } from "./components/ParticleBackground";
import { HomePage } from "./pages/HomePage";
import { AnalysisPage } from "./pages/AnalysisPage";
import { ProcessingPage } from "./pages/ProcessingPage";
import { ReportsPage } from "./pages/ReportsPage";
import { AboutPage } from "./pages/AboutPage";

// Simple client-side router
function useRouter() {
  const [route, setRoute] = useState("/");

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const push = (path: string) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  return { route, push };
}

// Create a simple Router context
import { createContext, useContext, ReactNode } from "react";

interface RouterContextType {
  route: string;
  push: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function useRouterContext() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouterContext must be used within RouterProvider");
  }
  return context;
}

function RouterProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <RouterContext.Provider value={router}>
      {children}
    </RouterContext.Provider>
  );
}

// Link component
export function Link({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const { push } = useRouterContext();
  
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        push(href);
      }}
    >
      {children}
    </a>
  );
}

// Router component that renders based on route
export function useRouterHook() {
  return useRouterContext();
}

export function Router() {
  const { route } = useRouterContext();

  // Route matching
  if (route === "/") {
    return <HomePage />;
  } else if (route === "/processing") {
    return <ProcessingPage />;
  } else if (route.startsWith("/analyze/")) {
    return <AnalysisPage />;
  } else if (route === "/reports") {
    return <ReportsPage />;
  } else if (route === "/about") {
    return <AboutPage />;
  }

  // 404
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <p className="text-[#94A3B8] mb-6">Page not found</p>
        <Link href="/" className="px-6 py-3 rounded-2xl bg-[#00E5FF] text-[#0A0F1C] inline-block">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col relative">
        <ParticleBackground />
        <Header />
        <main className="flex-1 relative z-10">
          <Router />
        </main>
        <Footer />
        <MobileOptimizedBadge />
      </div>
    </RouterProvider>
  );
}