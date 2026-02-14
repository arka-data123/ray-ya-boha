'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subRef = useRef<HTMLDivElement>(null)
    const imgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entry animations
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: 'power4.out',
                delay: 0.5,
            })

            gsap.from(subRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: 1,
            })

            gsap.from(imgRef.current, {
                scale: 1.2,
                opacity: 0,
                duration: 2,
                ease: 'power2.out',
            })

            // Parallax effect on mouse move
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e
                const xPos = (clientX / window.innerWidth - 0.5) * 40
                const yPos = (clientY / window.innerHeight - 0.5) * 40

                gsap.to(imgRef.current, {
                    x: xPos,
                    y: yPos,
                    duration: 1,
                    ease: 'power2.out',
                })
            }

            window.addEventListener('mousemove', handleMouseMove)
            return () => window.removeEventListener('mousemove', handleMouseMove)
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Parallax Image */}
            <div
                ref={imgRef}
                className="absolute inset-0 z-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black z-10" />
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                    alt="Fitness Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                <h1
                    ref={titleRef}
                    className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6 font-montserrat"
                >
                    Sculpt Your <span className="text-neon inline-block animate-float">Body</span><br />
                    Elevate Your <span className="text-white/20 [text-shadow:0_0_20px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Spirit</span>
                </h1>

                <div
                    ref={subRef}
                    className="flex flex-col items-center gap-8"
                >
                    <p className="max-w-xl text-xl text-white/60 tracking-widest uppercase">
                        Inspired to inspire your best self through premium fitness solutions and anti-gravity aesthetics.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-neon text-deep-black px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-bold uppercase tracking-tighter glow-green hover:scale-105 transition-transform flex items-center gap-2 group">
                            Get Started <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>

                    </div>
                </div>
            </div>

            {/* Floating Elements (Anti-gravity aesthetic) */}
            <div className="absolute top-1/4 left-10 w-24 h-24 border border-neon/20 rounded-full animate-float opacity-50 hidden lg:block" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-1/4 right-20 w-48 h-48 border border-white/10 rounded-full animate-float opacity-30 hidden lg:block" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-neon/20 blur-xl rounded-full animate-float" style={{ animationDelay: '0.5s' }} />

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-neon to-transparent" />
            </div>


        </section>
    )
}
