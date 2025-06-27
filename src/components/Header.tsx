
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ArrowLeft, Terminal, Coffee, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [konami, setKonami] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isPromptPage = location.pathname.startsWith('/prompts/');
  const currentPromptId = isPromptPage ? parseInt(location.pathname.split('/')[2]) : null;

  // Konami code easter egg
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA';
      const newKonami = konami + e.code;
      
      if (konamiCode.startsWith(newKonami)) {
        setKonami(newKonami);
        if (newKonami === konamiCode) {
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 3000);
          setKonami('');
        }
      } else {
        setKonami('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konami]);

  const handleCoffeeClick = () => {
    setCoffeeCount(prev => prev + 1);
    if (coffeeCount === 41) { // 42nd click
      alert('🎉 The Answer to Life, Universe, and Everything... is coffee! ☕');
      setCoffeeCount(0);
    }
  };

  return (
    <>
      {showEasterEgg && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
          <div className="text-center text-green-400 font-mono animate-pulse">
            <div className="text-4xl mb-4">🚀 KONAMI CODE ACTIVATED 🚀</div>
            <div className="text-xl">You've unlocked the secret developer mode!</div>
            <div className="text-sm mt-2 opacity-70">// Achievement unlocked: Nerd Level 100</div>
          </div>
        </div>
      )}
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left: Back button for prompt pages on mobile, Logo otherwise */}
            <div className="flex items-center gap-3">
              {isMobile && isPromptPage ? (
                <Link 
                  to="/" 
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group"
                  title="Back to home // exit(0)"
                >
                  <ArrowLeft className="h-5 w-5 group-hover:animate-pulse" />
                </Link>
              ) : (
                <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:animate-spin transition-transform">
                    <Terminal className="text-white h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="hidden sm:inline font-mono">
                    <span className="text-cyan-600">$</span> prompt_mastery
                  </span>
                  <span className="sm:hidden font-mono">
                    <span className="text-cyan-600">$</span> PM
                  </span>
                </Link>
              )}
            </div>

            {/* Center: Current lesson info on mobile prompt pages */}
            {isMobile && isPromptPage && currentPromptId && (
              <div className="flex-1 text-center">
                <div className="text-sm font-semibold text-gray-900 font-mono">
                  <span className="text-cyan-600">//</span> Lesson {String(currentPromptId).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  {currentPromptId === 31 ? '/* Golden Rules */' : 
                   currentPromptId <= 10 ? '/* Beginner */' :
                   currentPromptId <= 20 ? '/* Intermediate */' : '/* Expert */'}
                </div>
              </div>
            )}

            {/* Right: Navigation with easter eggs */}
            <div className="flex items-center gap-2">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium font-mono hover:animate-pulse">
                  <span className="text-cyan-600">./</span>home
                </Link>
                <Link to="/prompts/1" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium font-mono hover:animate-pulse">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-cyan-600">./</span>prompts
                </Link>
                <button 
                  onClick={handleCoffeeClick}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium font-mono hover:animate-bounce"
                  title={`Coffee counter: ${coffeeCount}/42`}
                >
                  <Coffee className="h-4 w-4" />
                  <span className="text-cyan-600">./</span>fuel
                  {coffeeCount > 0 && (
                    <span className="text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5 animate-pulse">
                      {coffeeCount}
                    </span>
                  )}
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? 
                  <X className="h-5 w-5 group-hover:animate-spin" /> : 
                  <Menu className="h-5 w-5 group-hover:animate-pulse" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col gap-1">
                <Link 
                  to="/" 
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium font-mono"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-cyan-600">./</span>home
                </Link>
                <Link 
                  to="/prompts/1" 
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium font-mono"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="text-cyan-600">./</span>prompts
                </Link>
                <button 
                  onClick={() => {
                    handleCoffeeClick();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium font-mono text-left"
                >
                  <Coffee className="h-5 w-5" />
                  <span className="text-cyan-600">./</span>fuel
                  {coffeeCount > 0 && (
                    <span className="text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5 ml-auto animate-pulse">
                      {coffeeCount}
                    </span>
                  )}
                </button>
                <div className="px-3 py-2 text-xs text-gray-500 font-mono border-t mt-2">
                  <div>// Try the Konami code! ↑↑↓↓←→←→BA</div>
                  <div className="mt-1">// Coffee achievement: {coffeeCount}/42</div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
