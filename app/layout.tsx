import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['700', '900'],
    variable: '--font-montserrat'
})

export const metadata: Metadata = {
    title: 'Magic Gym | Sculpt Your Body, Elevate Your Spirit',
    description: 'Premium fitness experience in Manouba, Tunisia. Anti-gravity training, 3D aesthetics, and professional coaching.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
                {children}
                <ChatWidget />
            </body>
        </html>
    )
}
