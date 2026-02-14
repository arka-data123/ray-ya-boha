'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion'

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            let start = 0
            const end = value
            const duration = 2000
            let startTime: number | null = null

            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp
                const progress = Math.min((timestamp - startTime) / duration, 1)
                setCount(Math.floor(progress * (end - start) + start))
                if (progress < 1) {
                    window.requestAnimationFrame(step)
                }
            }
            window.requestAnimationFrame(step)
        }
    }, [isInView, value])

    return (
        <span ref={ref} className="text-6xl md:text-8xl font-black font-montserrat tracking-tighter">
            {count}{suffix}
        </span>
    )
}

const stats = [
    { label: 'Active Members', value: 1200, suffix: '+' },
    { label: 'Transformations', value: 450, suffix: '+' },
    { label: 'Expert Coaches', value: 15, suffix: '' },
    { label: 'Experience Years', value: 10, suffix: '+' },
]

export default function SuccessStories() {
    return (
        <section className="py-24 bg-dark-gray/30 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-montserrat">
                        Your <span className="text-neon">Success</span>, Our Inspiration
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-4 group">
                            <div className="text-neon group-hover:scale-110 transition-transform duration-500">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <span className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-white/40">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-24 grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative h-80 rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070" className="w-full h-full object-cover" alt="Transformation 1" />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <span className="text-neon font-bold uppercase tracking-widest text-xs">Achievement</span>
                            <h4 className="text-xl font-black uppercase tracking-tighter">12 Week Power Program</h4>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative h-80 rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974" className="w-full h-full object-cover" alt="Transformation 2" />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <span className="text-neon font-bold uppercase tracking-widest text-xs">Milestone</span>
                            <h4 className="text-xl font-black uppercase tracking-tighter">Body Recomposition Success</h4>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
