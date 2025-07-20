
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OfflineProvider, useOffline } from "./contexts/OfflineContext";
import Home from "./components/Home";
import Index from "./pages/Index";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";
import OfflinePage from "./components/OfflinePage";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isOffline } = useOffline();

  if (isOffline) {
    return <OfflinePage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Index />} />
        <Route path="/store" element={<Store />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <OfflineProvider>
        <AppContent />
      </OfflineProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
