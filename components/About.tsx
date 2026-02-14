'use client'

import { MapPin, Phone, Clock, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
    { label: 'Overall Rating', value: '4.8', icon: <Star className="text-neon" /> },
    { label: 'Member Reviews', value: '250+', icon: <Star className="text-neon" /> },
    { label: 'Happy Athletes', value: '1000+', icon: <Star className="text-neon" /> },
]

export default function About() {
    return (
        <section id="about" className="py-24 bg-dark-gray/30 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 font-montserrat">
                            More Than Just A <span className="text-neon">Gym</span>.
                        </h2>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed">
                            Magic Gym is a premium fitness sanctuary designed for those who demand excellence.
                            Located in the heart of Manouba, we provide a state-of-the-art environment where
                            art meets athleticism. Our high-contrast, professional atmosphere is engineered
                            to push your limits and elevate your spirit.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-6 bg-deep-black rounded-2xl border border-white/5 hover:border-neon/20 transition-colors">
                                <MapPin className="text-neon w-6 h-6 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Location</h4>
                                    <p className="text-white/40 text-sm">R3FC+9MH, Manouba, Tunisia</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-deep-black rounded-2xl border border-white/5 hover:border-neon/20 transition-colors">
                                <Phone className="text-neon w-6 h-6 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Contact</h4>
                                    <p className="text-white/40 text-sm">(+216) 99 186 770</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-deep-black rounded-2xl border border-white/5 hover:border-neon/20 transition-colors">
                                <Clock className="text-neon w-6 h-6 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Hours</h4>
                                    <p className="text-white/40 text-sm">Daily: 6 AM - 10 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-deep-black rounded-2xl border border-white/5 hover:border-neon/20 transition-colors">
                                <Star className="text-neon w-6 h-6 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Rating</h4>
                                    <p className="text-white/40 text-sm">4.8 ⭐ (Verified Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Side / Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="col-span-2 relative h-80 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                                alt="Gym Interior"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent" />
                        </motion.div>

                        {stats.slice(0, 2).map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-deep-black p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center gap-2 group hover:border-neon transition-all"
                            >
                                {stat.icon}
                                <span className="text-4xl font-black font-montserrat group-hover:text-neon transition-colors">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
