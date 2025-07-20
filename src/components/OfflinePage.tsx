import React from 'react';
import { Button } from '@/components/ui/button';
import { useOffline } from '@/contexts/OfflineContext';

const OfflinePage: React.FC = () => {
  const { toggleOffline } = useOffline();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-muted-foreground">Website Offline</h1>
          <p className="text-lg text-muted-foreground">
            Website sedang dalam mode offline. Silakan coba lagi nanti.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-muted-foreground border-t-transparent rounded-full animate-spin"></div>
          
          {/* Hidden admin button - click 5 times to toggle back online */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={toggleOffline}
            className="text-xs text-muted-foreground/50 hover:text-muted-foreground"
          >
            Admin Access
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;