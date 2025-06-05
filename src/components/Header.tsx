
import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-6 fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="rounded-full p-2 bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">AI Research Whisperer</h1>
              <p className="text-sm text-muted-foreground">Quantum Consumer Solutions</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/tools" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              AI Tools
            </Link>
            <Link 
              to="/prompts/1" 
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
            >
              View Prompts
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
