import { useEffect, useState } from "react";
import { BiMenu, BiTrendingUp, BiX, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/white-logo.jpg";
import LanguageSelector from "../../language/LanguageSelector";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Courses", href: "/main-courses" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-lg"
          : "bg-transparent text-slate-100"
      }`}
    >
      <div className="container mx-auto py-3 px-6">
        <nav className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group outline-none">
            <img src={Logo} alt="" className="w-28 bg-white p-2 rounded-md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-2 font-semibold  hover:text-[#135f9b] rounded-full hover:bg-slate-50 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* <LanguageSelector /> */}

          {/* <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="lang-select"
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
      </select>  */}

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login">
              <button className="px-5 py-2.5 text-sm font-bold text-white rounded-full hover:bg-slate-900 shadow-sm transition-all duration-300 active:scale-95 bg-color cursor-pointer">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-5 py-2.5 text-sm font-bold text-white rounded-full hover:bg-slate-900 shadow-sm transition-all duration-300 active:scale-95 bg-primary-color cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg bg-slate-50 text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <BiX className="w-6 h-6" />
            ) : (
              <BiMenu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-18 bg-white border-b border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3.5 text-sm font-bold text-slate-600 hover:text-color hover:bg-indigo-50 rounded-xl transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <BiChevronRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-50">
                <button className="w-full py-3.5 text-sm font-bold text-slate-900 bg-slate-50 rounded-xl border border-slate-200">
                  Login
                </button>
                <button className="w-full py-3.5 text-sm font-bold text-white bg-color rounded-xl shadow-lg shadow-indigo-100">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
