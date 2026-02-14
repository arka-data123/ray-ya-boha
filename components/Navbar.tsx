'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                isScrolled ? 'bg-deep-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Dumbbell className="w-8 h-8 text-neon transition-transform group-hover:rotate-45" />
                    <span className="text-2xl font-black tracking-tighter uppercase font-montserrat">
                        Magic <span className="text-neon">Gym</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neon transition-all duration-300 hover:scale-110 active:scale-95 inline-block"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-neon text-deep-black px-6 py-2 rounded-full font-bold uppercase tracking-tighter hover:scale-105 active:scale-95 transition-transform glow-green"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-neon transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed inset-0 bg-deep-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden',
                    isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl font-black uppercase tracking-tighter hover:text-neon transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-neon text-deep-black px-10 py-4 rounded-full text-xl font-black uppercase tracking-tighter glow-green"
                >
                    Get Started
                </Link>
            </div>
        </nav >
    )
}
