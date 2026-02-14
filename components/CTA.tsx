'use client'

import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Visual background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070" className="w-full h-full object-cover" alt="Gym Motivation" />
                <div className="absolute inset-0 bg-deep-black" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-dark-gray/60 backdrop-blur-xl border border-white/10 rounded-[60px] p-8 md:p-20 grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="text-neon font-bold uppercase tracking-[0.5em] block mb-6">Join The Movement</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-montserrat mb-8 leading-none">
                            Start Your <br /><span className="text-neon">Legend</span> Today
                        </h2>
                        <p className="text-white/50 text-xl leading-relaxed mb-10">
                            Ready to transform your body and mind? Sign up for a free trial session at Magic Gym and experience the difference of elite coaching and facilities.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 text-neon">
                                <CheckCircle size={20} />
                                <span className="font-bold uppercase tracking-widest text-sm">Free Trial Session</span>
                            </div>
                            <div className="flex items-center gap-4 text-neon">
                                <CheckCircle size={20} />
                                <span className="font-bold uppercase tracking-widest text-sm">Body Composition Audit</span>
                            </div>
                            <div className="flex items-center gap-4 text-neon">
                                <CheckCircle size={20} />
                                <span className="font-bold uppercase tracking-widest text-sm">Custom Training Plan</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-deep-black p-8 md:p-12 rounded-[40px] border border-white/5 relative h-full">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center text-center h-full gap-6"
                            >
                                <div className="w-20 h-20 bg-neon text-deep-black rounded-full flex items-center justify-center glow-green">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter">Your Journey Begins!</h3>
                                <p className="text-white/40">Our team will contact you within 24 hours to schedule your session.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-neon uppercase tracking-tighter font-bold border-b border-neon"
                                >
                                    Book another session
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold px-2">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-neon focus:outline-none transition-colors text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold px-2">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+216 00 000 000"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-neon focus:outline-none transition-colors text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold px-2">Select Goal</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-neon focus:outline-none transition-colors text-white/50 appearance-none">
                                        <option>Muscle Gain</option>
                                        <option>Weight Loss</option>
                                        <option>Endurance</option>
                                        <option>Personal Coaching</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-neon text-deep-black font-black uppercase tracking-tighter py-5 rounded-2xl glow-green hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                                >
                                    Start Your Transformation <Send size={20} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
