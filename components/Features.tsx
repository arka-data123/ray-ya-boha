'use client'

import { Zap, Shield, Users, Trophy, Target, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
    {
        title: 'Elite Equipment',
        desc: 'State-of-the-art cinematic fitness machines for targeted muscle activation.',
        icon: <Zap className="w-10 h-10" />,
    },
    {
        title: 'Expert Coaching',
        desc: 'Professional trainers dedicated to sculpting your physique and technique.',
        icon: <Shield className="w-10 h-10" />,
    },
    {
        title: 'Modern Facilities',
        desc: 'Clean, industrial-themed spaces engineered for focus and performance.',
        icon: <Sparkles className="w-10 h-10" />,
    },
    {
        title: 'Community Spirit',
        desc: 'Join a network of driven individuals who inspire growth and pushing limits.',
        icon: <Users className="w-10 h-10" />,
    },
    {
        title: 'Goal Centric',
        desc: 'Customized training paths designed to hit your milestones with precision.',
        icon: <Target className="w-10 h-10" />,
    },
    {
        title: 'Success Tracking',
        desc: 'Monitor your progress with our integrated biometric and performance tools.',
        icon: <Trophy className="w-10 h-10" />,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-neon text-sm font-bold uppercase tracking-[0.5em] block mb-4"
                    >
                        Advantages
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-montserrat">
                        Discover What Sets <span className="text-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Us Apart</span>
                    </h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="p-8 md:p-10 bg-dark-gray/20 border border-white/5 rounded-[40px] hover:border-neon transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Card Glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="text-neon mb-6 transition-transform group-hover:scale-110 duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 font-montserrat">
                                {item.title}
                            </h3>
                            <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>


        </section>
    )
}
