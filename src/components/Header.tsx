
import React from 'react';
import { Brain } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-6 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">AI Research Whisperer</h1>
              <p className="text-sm text-muted-foreground">Quantum Consumer Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
