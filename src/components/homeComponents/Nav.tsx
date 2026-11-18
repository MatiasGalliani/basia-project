import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "O projekcie", href: "#o-projekcie" },
  { label: "Praktyka", href: "#praktyka" },
  { label: "Psychologia korzystania", href: "#psychologia" },
  { label: "Literatura", href: "#literatura" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-gray-200/90 backdrop-blur-md transition-all duration-200",
        isScrolled
          ? "border-b border-gray-300 shadow-xs"
          : "border-b border-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-1 z-50 mx-auto">
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="cursor-pointer text-xs lg:text-sm font-medium px-2.5 lg:px-3 text-neutral-800 hover:bg-gray-300/60"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer text-neutral-800 hover:bg-gray-300/60 rounded-md"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={22} weight="bold" />
            ) : (
              <List size={22} weight="bold" />
            )}
          </Button>
        </div>
      </div>

      {isOpen && (
        <nav
          className="md:hidden border-t border-gray-300/80 bg-gray-200/95 backdrop-blur-lg px-4 py-3 flex flex-col gap-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150"
          aria-label="Nawigacja mobilna"
        >
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="w-full justify-start cursor-pointer text-sm font-medium py-3 px-3.5 h-auto text-neutral-800 hover:bg-gray-300/60 rounded-lg"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      )}
    </header>
  );
}
