import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm  border-blur-sm   ">
      <div className="w-full sm:px-2 lg:px-6 ">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div className="flex items-center">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-20 h-20 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded object-cover px-1 py-2 "
              />
              <span>
                <span className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block ml-2">
                  SAPUMAL <span className="text-blue-900">PRODUCTS</span>
                </span>
              </span>
            </div>
          </div>
          {/* Nav Links*/}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#Home"
              className="text-gray-300  hover:text-white text-sm lg:text-base"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-gray-300  hover:text-white text-sm lg:text-base"
            >
              Products
            </a>
            <a
              href="#testimonials"
              className="text-gray-300  hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>

            <a
              href="#about"
              className="text-gray-300  hover:text-white text-sm lg:text-base"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300  hover:text-white text-sm lg:text-base"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white  "
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden  bg-slate-900/95 backdrop:blur-lg border-t border-slate-800 animate-in slide-in-from-top  duration-300 flex flex-col items-center space-y-4 py-4 ">
          <div className="px-4 py-4 sm:py-6 space-y-4">
            <a
              href="#Home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300  hover:text-white text-sm lg:text-base"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300  hover:text-white text-sm lg:text-base"
            >
              Products
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300  hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300  hover:text-white text-sm lg:text-base"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="blocktext-gray-300  hover:text-white text-sm lg:text-base"
            >
              Contacts
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
