import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Determine basename dynamically so app works on both custom domain and project pages
function getRouterBase(): string {
  const baseFromVite = (import.meta as any).env?.BASE_URL as string | undefined;
  if (typeof window !== 'undefined') {
    const host = window.location.hostname.toLowerCase();
    const isGithubPagesUserSite = host.endsWith('.github.io');
    // If served from a GitHub project pages path, preserve pathname prefix
    if (isGithubPagesUserSite) {
      // e.g., /u4ia-genz-vibe/ -> use that as basename
      const pathPrefix = window.location.pathname.split('/').filter(Boolean)[0];
      return pathPrefix ? `/${pathPrefix}/` : "/";
    }
  }
  // Prefer vite base when available, otherwise root
  return baseFromVite || "/";
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getRouterBase()}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
