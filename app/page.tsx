'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Components
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Training from '@/components/Training'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Goals from '@/components/Goals'
import SuccessStories from '@/components/SuccessStories'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // GSAP ScrollTrigger integration with Lenis
        gsap.registerPlugin(ScrollTrigger)

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time: number) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <main className="min-h-screen bg-deep-black overflow-hidden selection:bg-neon selection:text-deep-black">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Training />
            <Gallery />
            <Goals />
            <Testimonials />
            <SuccessStories />
            <CTA />
            <Footer />
        </main>
    )
}
