import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar({ isLoggedIn, onLogout }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout();
    }
  };

  
  const textColorClass = 'text-white';
  const hoverColorClass = 'hover:text-blue-200';
  const hoverBgClass = 'hover:bg-blue-700';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-blue-600 py-3 shadow-md' 
        : 'bg-blue-700 py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={`text-2xl font-bold transition-colors duration-300 ${textColorClass}`}
            >
              PurifyMe
            </Link>
          </div>

          <div className="flex-grow flex justify-center items-center space-x-8">
            <NavLink to="/physical-cleansing" textColorClass={textColorClass} hoverColorClass={hoverColorClass}>
              Fiziksel Arınma
            </NavLink>
            <NavLink to="/mental-cleansing" textColorClass={textColorClass} hoverColorClass={hoverColorClass}>
              Zihinsel Arınma
            </NavLink>
            <NavLink to="/spiritual-cleansing" textColorClass={textColorClass} hoverColorClass={hoverColorClass}>
              Ruhsal Arınma
            </NavLink>
          </div>

          
          <div className="flex-shrink-0 flex items-center space-x-4">
            {isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${textColorClass} ${hoverBgClass}`}
              >
                Çıkış Yap
              </button>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${textColorClass} ${hoverBgClass}`}
                >
                  Giriş Yap
                </Link>
                <Link 
                  to="/register" 
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${textColorClass} ${hoverBgClass}`}
                >
                  Kayıt Ol
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, textColorClass, hoverColorClass }) {
  return (
    <Link 
      to={to} 
      className={`relative font-medium transition-colors duration-300 ${textColorClass}
      after:content-[''] after:absolute after:bottom-0 after:left-0 
      after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 
      hover:after:w-full ${hoverColorClass}`}
    >
      {children}
    </Link>
  );
}
