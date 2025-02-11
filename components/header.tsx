"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#A31115] backdrop-blur-sm">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 md:mr-10 hidden md:flex">
            <Link href="/">
              <Image
                src="/assets/haussmannlogo.png"
                alt="Haussmann Sols Résine"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-white text-[#A31115] hover:bg-white/90">
              Devis 24H
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex w-full items-center justify-between">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full bg-[#A31115]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg text-white hover:text-white/80 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex-shrink-0 md:mr-10">
              <Link href="/" className="md:hidden">
                <Image
                  src="/assets/haussmannlogo.png"
                  alt="Haussmann Sols Résine"
                  width={180}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            <Button
              className="bg-white text-[#A31115] hover:bg-white/90"
              size="sm"
            >
              Devis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
