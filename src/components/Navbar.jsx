import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme ? savedTheme === "dark" : prefersDark;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme switching
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Fallback inline styles to ensure visible theme change
    try {
      if (darkMode) {
        // Body styles for dark mode
        document.body.style.backgroundColor = "#0f172a"; // gray-900
        // document.body.style.backgroundColor = "#1e293b"; // gray-800
        document.body.style.color = "#f8fafc"; // gray-50

        // GetInTouch styles for dark mode
        document.querySelectorAll(".get-in-touch").forEach((touch) => {
          touch.style.backgroundColor = "#1e2838"; // gray-400
        });

        // Hero-bg for dark mode
        document.querySelectorAll(".hero-bg").forEach((touch) => {
          touch.style.backgroundColor = "#1e293b"; // gray-800
        });

        // Text for dark mode
        document.querySelectorAll(".text-muted").forEach((txt) => {
          txt.style.color = "#9ca3af"; // gray-400
        });

        // Button styles for dark mode
        document.querySelectorAll(".btn-primary").forEach((btn) => {
          btn.style.backgroundColor = "#f8fafc";
          btn.style.color = "#0f172a";
          btn.style.border = "1px solid #334155";
        });

        // Button styles for dark mode
        document.querySelectorAll(".btn-secondary").forEach((btn) => {
          btn.style.backgroundColor = "#0f172a";
          btn.style.color = "#f8fafc";
          btn.style.border = "1px solid #334155";
        });

        // Card for dark mode
        document.querySelectorAll(".card").forEach((c) => {
          c.style.backgroundColor = "#1e2838";
          c.style.color = "#f8fafc";
          c.style.border = "1px solid #334155";
        });

        // Tech for dark mode
        document.querySelectorAll(".tech").forEach((tech) => {
          tech.style.backgroundColor = "#374151";
          tech.style.color = "#d1d5db";
        });
      } else {
        // Body styles for light mode
        document.body.style.backgroundColor = "#f8fafc"; // gray-50
        // document.body.style.backgroundColor = "#f1f5f9"; // gray-100
        document.body.style.color = "#0f172a"; // gray-900

        // GetInTouch styles for light mode
        document.querySelectorAll(".get-in-touch").forEach((touch) => {
          touch.style.backgroundColor = "#e2e8f0"; // gray-200
        });

        // Hero-bg for light mode
        document.querySelectorAll(".hero-bg").forEach((touch) => {
          // touch.style.backgroundColor = "#e2e8f0"; // gray-200
          touch.style.backgroundColor = "#f1f5f9"; // gray-100
        });

        // Text for light mode
        document.querySelectorAll(".text-muted").forEach((txt) => {
          txt.style.color = "#4b5563"; //gray-600
        });

        // Button styles for light mode
        document.querySelectorAll(".btn-primary").forEach((btn) => {
          btn.style.backgroundColor = "#0f172a";
          btn.style.color = "#f8fafc";
          btn.style.border = "1px solid #cbd5e1";
        });

        // Button styles for light mode
        document.querySelectorAll(".btn-secondary").forEach((btn) => {
          btn.style.backgroundColor = "#f8fafc";
          btn.style.color = "#0f172a";
          btn.style.border = "1px solid #cbd5e1";
        });

        // Image-container for light mode
        document
          .querySelectorAll(".image-container")
          .forEach((img_container) => {
            img_container.style.color = "#E5E7EB ";
          });

        // Card for light mode
        document.querySelectorAll(".card").forEach((card) => {
          card.style.backgroundColor = "#f8fafc";
          card.style.color = "#0f172a";
          card.style.border = "1px solid #cbd5e1";
        });
        
        // Tech for light mode
        document.querySelectorAll(".tech").forEach((tech) => {
          tech.style.backgroundColor = "#e5e7eb";
          tech.style.color = "#374151";
        });
      }
    } catch (err) {
      console.warn(
        "Navbar: failed to set fallback body and button styles",
        err
      );
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      return next;
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-xl shadow-xl z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold">Ravi</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex space-x-8">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                {/* <Link
                    to="/experience"
                >
                  Experience
                </Link> */}
                <Link to="/projects">Projects</Link>
                {/* <Link
                    to="/testimonials"
                >
                  Testimonials
                </Link> */}
                <Link to="/contact">Contact</Link>
              </div>
              <button
                type="button"
                onClick={toggleDarkMode}
                className="p-2 rounded-md bg-muted text-foreground hover:bg-accent transition-colors duration-200"
                style={{ zIndex: 60, pointerEvents: "auto" }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleDarkMode();
                  }
                }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-4">
              <button
                type="button"
                onClick={toggleDarkMode}
                className="p-2 rounded-md bg-muted text-foreground hover:bg-accent transition-colors duration-200"
                style={{ zIndex: 60, pointerEvents: "auto" }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleDarkMode();
                  }
                }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-40 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg animate-slide-down">
              <div className="flex flex-col  pr-12 py-4">
                <Link
                  to="/"
                  className="px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/skills"
                  className="px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Skills
                </Link>
                {/* <Link
                    to="/experience"
                  className="px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Experience
                </Link> */}
                <Link
                  to="/projects"
                  className="px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
