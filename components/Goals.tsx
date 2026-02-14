'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, TrendingUp, ShieldCheck, Flame } from 'lucide-react'

const goals = [
    {
        id: 'weight-loss',
        title: 'Weight Loss',
        icon: <Flame />,
        desc: 'Burn calories and torch body fat with specialized metabolic conditioning circuits.',
        metrics: ['-5kg average/month', 'Daily cardio', 'Nutritional plan'],
    },
    {
        id: 'muscle-gain',
        title: 'Muscle Gain',
        icon: <TrendingUp />,
        desc: 'Hypertrophy focused training designed to maximize muscle growth and density.',
        metrics: ['Progressive overload', 'Compound lifts', 'High protein focus'],
    },
    {
        id: 'endurance',
        title: 'Endurance',
        icon: <Target />,
        desc: 'Improve your VO2 max and stamina through persistent aerobic and anaerobic training.',
        metrics: ['Heart rate zones', 'Interval training', 'Recovery focus'],
    },
    {
        id: 'wellbeing',
        title: 'Well-being',
        icon: <ShieldCheck />,
        desc: 'Enhance mobility, flexibility, and overall health for a balanced physical life.',
        metrics: ['Mobility drills', 'Stress reduction', 'Core stability'],
    },
]

export default function Goals() {
    const [activeGoal, setActiveGoal] = useState(goals[0])

    return (
        <section className="py-24 relative bg-deep-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-montserrat mb-8">
                            Your Goal, <br /><span className="text-neon">Our Expertise</span>
                        </h2>
                        <div className="space-y-4">
                            {goals.map((goal) => (
                                <button
                                    key={goal.id}
                                    onClick={() => setActiveGoal(goal)}
                                    className={`w-full flex items-center gap-4 p-4 md:gap-6 md:p-6 rounded-[30px] border transition-all text-left group ${activeGoal.id === goal.id
                                        ? 'bg-neon text-deep-black border-neon'
                                        : 'bg-white/5 border-white/5 hover:border-white/20'
                                        }`}
                                >
                                    <div className={`p-4 rounded-2xl transition-colors ${activeGoal.id === goal.id ? 'bg-deep-black text-neon' : 'bg-white/5 text-neon group-hover:bg-white/10'
                                        }`}>
                                        {goal.icon}
                                    </div>
                                    <span className="text-xl font-black uppercase tracking-tighter">{goal.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeGoal.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-dark-gray/30 p-8 md:p-12 rounded-[50px] border border-white/5 min-h-[450px] flex flex-col justify-center"
                            >
                                <div className="text-neon mb-8">
                                    {goalIcons[activeGoal.id as keyof typeof goalIcons]}
                                </div>
                                <h3 className="text-5xl font-black uppercase tracking-tighter font-montserrat mb-6">
                                    {activeGoal.title}
                                </h3>
                                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                                    {activeGoal.desc}
                                </p>

                                <div className="space-y-4">
                                    {activeGoal.metrics.map((metric, i) => (
                                        <div key={i} className="flex items-center gap-4 text-neon">
                                            <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                                            <span className="text-sm font-bold uppercase tracking-[0.2em]">{metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Background Shape */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon/5 blur-[100px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const goalIcons = {
    'weight-loss': <Flame size={60} />,
    'muscle-gain': <TrendingUp size={60} />,
    'endurance': <Target size={60} />,
    'wellbeing': <ShieldCheck size={60} />,
}
