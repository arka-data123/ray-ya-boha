'use client'

import { motion } from 'framer-motion'

const images = [
    { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2072', size: 'small' },
    { url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975', size: 'small' },
    { url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070', size: 'medium' },
    { url: 'https://images.unsplash.com/photo-1574680077505-ef9a617cbdbc?q=80&w=2070', size: 'medium' },
]

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-dark-gray/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-montserrat">
                        Experience <span className="text-neon inline-block hover:scale-110 transition-transform">Fitness</span> Like Never Before
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-[600px] md:h-[800px]">
                    {/* Large Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-2 md:col-span-2 row-span-2 rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <img src={images[0].url} className="w-full h-full object-cover" alt="Gym" />
                    </motion.div>

                    {/* Small/Medium Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 rounded-[30px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <img src={images[1].url} className="w-full h-full object-cover" alt="Equipment" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 rounded-[30px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <img src={images[2].url} className="w-full h-full object-cover" alt="Dumbbells" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-2 rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <img src={images[3].url} className="w-full h-full object-cover" alt="Interior" />
                    </motion.div>
                </div>


            </div>
        </section>
    )
}
