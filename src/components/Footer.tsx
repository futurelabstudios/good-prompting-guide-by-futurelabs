
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-muted-foreground flex items-center gap-1 mb-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Futurelab Studios
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Quantum Consumer Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
