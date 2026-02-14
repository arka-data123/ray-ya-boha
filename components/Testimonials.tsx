'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
    {
        name: 'Jihen Bmr',
        time: '3 weeks ago',
        text: "I am very impressed with Ms. Soumaya's work. She is very efficient and pays close attention to detail. The gym is always clean thanks to her. I thank her for her dedication and kindness. 🩷🩷",
        rating: 5,
    },
    {
        name: 'Raja Béjaoui',
        time: '2 months ago',
        text: "The location was perfect and the equipment too but the reception's girl unwelcoming and she's impolite with the customers there is no customer service good.",
        rating: 3,
    },
    {
        name: 'Sooltan Tal',
        time: '2 years ago',
        text: "Top 🔥🔥💪🏽💪🏽",
        rating: 5,
    },
]

export default function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-deep-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-montserrat mb-4">
                            Real Stories, <span className="text-neon">Real Results</span>
                        </h2>
                        <p className="text-white/40 tracking-widest uppercase text-sm">Join the 1000+ members transforming their lives.</p>
                    </div>
                    <div className="bg-dark-gray/50 p-6 rounded-[30px] border border-neon/20 glow-green flex items-center gap-6">
                        <div className="text-4xl font-black text-neon">4.8</div>
                        <div className="h-10 w-[1px] bg-white/10" />
                        <div className="flex flex-col">
                            <div className="flex text-neon">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? 'currentColor' : 'none'} />)}
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Overall Rating</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-dark-gray/30 p-6 md:p-10 rounded-[40px] border border-white/5 relative group hover:border-white/10 transition-all cursor-default"
                        >
                            <Quote className="absolute top-10 right-10 text-neon/10 group-hover:text-neon/20 transition-colors" size={60} />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-black text-neon">
                                    {rev.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{rev.name}</h4>
                                    <span className="text-xs text-white/20 uppercase tracking-widest">{rev.time}</span>
                                </div>
                            </div>

                            <div className="flex text-neon mb-4">
                                {[...Array(5)].map((_, starI) => (
                                    <Star key={starI} size={14} fill={starI < rev.rating ? 'currentColor' : 'none'} />
                                ))}
                            </div>

                            <p className="text-white/60 leading-relaxed italic">"{rev.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
