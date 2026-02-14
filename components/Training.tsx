'use client'

import { motion } from 'framer-motion'
import { Dumbbell, HeartPulse, Users2, Activity } from 'lucide-react'

const programs = [
    {
        title: 'Strength Training',
        desc: 'Build raw power with our professional weightlifting equipment and expert spotters.',
        icon: <Dumbbell className="w-8 h-8" />,
        image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Cardio Focus',
        desc: 'High-intensity sessions designed to improve endurance and metabolic health.',
        icon: <HeartPulse className="w-8 h-8" />,
        image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2074&auto=format&fit=crop',
    },
    {
        title: 'Group Classes',
        desc: 'Energetic team environments that foster motivation and community achievement.',
        icon: <Users2 className="w-8 h-8" />,
        image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Expert Coaching',
        desc: 'One-on-one sessions tailored specifically to your unique anatomy and goals.',
        icon: <Activity className="w-8 h-8" />,
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    },
]

export default function Training() {
    return (
        <section id="programs" className="py-24 bg-deep-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-montserrat mb-6">
                            Train Smarter, <span className="text-neon">Unleash</span> Potential
                        </h2>
                        <p className="text-white/50 text-xl uppercase tracking-widest">
                            Explore our specialized disciplines engineered for peak performance.
                        </p>
                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {programs.map((prog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative h-[400px] rounded-[40px] overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 grayscale group-hover:grayscale-0 group-hover:saturate-150 group-hover:scale-110 transition-all duration-700">
                                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-neon text-deep-black rounded-2xl flex items-center justify-center shadow-lg transform group-hover:-rotate-12 transition-transform duration-500">
                                        {prog.icon}
                                    </div>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter font-montserrat">
                                        {prog.title}
                                    </h3>
                                </div>
                                <p className="max-w-sm text-white/70 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {prog.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
