'use client'

import Link from 'next/link'
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock, ArrowRight, Dumbbell } from 'lucide-react'

const footerLinks = {
    navigation: [
        { name: 'About Us', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Facility Gallery', href: '#gallery' },
        { name: 'Reviews', href: '#reviews' },
    ],

}

export default function Footer() {
    return (
        <footer className="bg-deep-black pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <Dumbbell className="w-8 h-8 text-neon" />
                            <span className="text-2xl font-black tracking-tighter uppercase font-montserrat">
                                Magic <span className="text-neon">Gym</span>
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Elevating the fitness standard in Manouba through premium facilities, expert coaching, and a driven community. Sculpt your body, elevate your spirit.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/magicgymm/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-white/50 hover:text-neon hover:bg-white/10 transition-all border border-transparent hover:border-neon">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/magicgym.tn/?hl=en" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-white/50 hover:text-neon hover:bg-white/10 transition-all border border-transparent hover:border-neon">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-lg font-black uppercase tracking-tighter">Explore</h4>
                        <div className="flex flex-col gap-4">
                            {footerLinks.navigation.map((link) => (
                                <Link key={link.name} href={link.href} className="text-white/40 hover:text-neon transition-colors text-sm uppercase tracking-widest font-bold">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-lg font-black uppercase tracking-tighter">Contact</h4>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-neon w-5 h-5 flex-shrink-0" />
                                <span className="text-white/40 text-sm leading-tight">R3FC+9MH, Manouba, Tunisia</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-neon w-5 h-5 flex-shrink-0" />
                                <span className="text-white/40 text-sm">(+216) 99 186 770</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-neon w-5 h-5 flex-shrink-0" />
                                <span className="text-white/40 text-sm">Open until 10 PM Daily</span>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/20 text-xs uppercase tracking-widest font-bold">
                        © {new Date().getFullYear()} Magic Gym Manouba. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-white/20 hover:text-white transition-colors text-xs uppercase font-bold tracking-widest">Privacy Policy</Link>
                        <Link href="#" className="text-white/20 hover:text-white transition-colors text-xs uppercase font-bold tracking-widest">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
