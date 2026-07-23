import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/Landing";
import InfluencerOnboarding from "@/pages/InfluencerOnboarding";
import BusinessListing from "@/pages/BusinessListing";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import RefundCancellationPolicy from "@/pages/RefundCancellationPolicy";

const queryClient = new QueryClient();

function Router() {
  const path = window.location.pathname;
  if (path === "/influencer-onboarding") return <InfluencerOnboarding />;
  if (path === "/list-your-business") return <BusinessListing />;
  if (path === "/privacy-policy") return <PrivacyPolicy />;

  if (path === "/terms-and-conditions") return <TermsAndConditions />;

  if (path === "/refund-cancellation-policy")
    return <RefundCancellationPolicy />;

  return <Landing />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
