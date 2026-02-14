'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Dumbbell } from 'lucide-react'
import { INITIAL_MESSAGE, checkScheduleQuery } from '@/lib/chatbot-prompt'

// Initial Message (hardcoded to avoid import issues if file not ready)


type Message = {
    id: string
    text: string
    sender: 'user' | 'bot'
    timestamp: Date
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: INITIAL_MESSAGE,
            sender: 'bot',
            timestamp: new Date(),
        },
    ])
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isOpen])

    const generateResponse = (userText: string) => {
        setIsTyping(true)

        // Simulate network delay
        setTimeout(() => {
            let botText = ""
            const lowerText = userText.toLowerCase()

            // Simple keyword matching based on Persona (Mock Logic)
            const scheduleResponse = checkScheduleQuery(lowerText);

            if (scheduleResponse) {
                botText = scheduleResponse;
            } else if (lowerText.includes('prix') || lowerText.includes('soum') || lowerText.includes('flous') || lowerText.includes('اشتراك') || lowerText.includes('price')) {
                botText = "أهلا! عندنا عدة formules:\n\n📋 الخيارات:\n- Séance يومي (essai)\n- اشتراك شهري\n- اشتراك سنوي (أحسن prix)\n\nباش نعطيك les prix الدقيقة، اتصل بينا: 📞 99 186 770 أو زورنا في Manouba! 💪"
            } else if (lowerText.includes('wa9t') || lowerText.includes('wakt') || lowerText.includes('time') || lowerText.includes('heure') || lowerText.includes('أوقات') || lowerText.includes('حل') || lowerText.includes('open')) {
                botText = "⏰ مواعيد العمل:\nنخدمو كل يوم حتى للساعة 10:00 مساءً.\nمرحباً بيك في أي وقت! 😊"
            } else if (lowerText.includes('win') || lowerText.includes('place') || lowerText.includes('location') || lowerText.includes('bnh') || lowerText.includes('site') || lowerText.includes('موقع') || lowerText.includes('عنوان')) {
                botText = "📍 العنوان:\nR3FC+9MH, Manouba.\n\nقريبة من وسط منوبة، وعندنا parking متوفر. تحب نبعثلك localisation؟ 🚗"
            } else if (lowerText.includes('coach') || lowerText.includes('entrainement') || lowerText.includes('sport') || lowerText.includes('cours') || lowerText.includes('تدريب')) {
                botText = "عندنا coaches محترفين و cours collectifs (Zumba, CrossFit, HIIT...). 🏋️\n\nتحب تحجز حصة تجريبية؟ كلمنا: 99 186 770."
            } else {
                botText = "شكراً على رسالتك! 😊\nأنا مساعد ذكي، يمكن ما فهمتش بالضبط. 🤔\n\nنجم تعاونك بأسئلة على:\n- الأسعار 💰\n- الوقت ⏰\n- الموقع 📍\n\nوإلا كلمنا ديركت: 99 186 770."
            }

            const botMessage: Message = {
                id: Date.now().toString(),
                text: botText,
                sender: 'bot',
                timestamp: new Date(),
            }

            setMessages(prev => [...prev, botMessage])
            setIsTyping(false)
        }, 1500)
    }

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!inputValue.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, userMessage])
        const textToSend = inputValue
        setInputValue('')

        generateResponse(textToSend)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-deep-black border border-neon/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto shadow-neon/10"
                    >
                        {/* Header */}
                        <div className="bg-dark-gray/90 p-4 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-deep-black shadow-lg shadow-neon/20">
                                    <Dumbbell size={20} />
                                </div>
                                <div>
                                    <h3 className="font-black uppercase tracking-tighter text-white">Magic Gym AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-deep-black/95 scrollbar-thin scrollbar-thumb-neon/20 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.sender === 'user'
                                            ? 'bg-neon text-deep-black font-bold rounded-tr-sm shadow-lg shadow-neon/10'
                                            : 'bg-white/10 text-white rounded-tl-sm border border-white/5'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-3 rounded-2xl rounded-tl-sm border border-white/5 flex gap-1.5 items-center">
                                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 bg-dark-gray/90 border-t border-white/10 backdrop-blur-md">
                            <div className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about prices..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder:text-white/20 focus:outline-none focus:border-neon transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 p-2 bg-neon rounded-lg text-deep-black disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={!isOpen ? { y: [0, -10, 0] } : { y: 0 }}
                transition={{
                    y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-neon text-deep-black flex items-center justify-center shadow-lg shadow-neon/20 hover:shadow-neon/40 transition-shadow pointer-events-auto z-50"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>
        </div>
    )
}
