export const MAIC_GYM_CHATBOT_PERSONA = `
You are the official AI customer service assistant for **Magic Gym**, a premium fitness center located in Manouba, Tunisia. Your primary role is to assist customers in **Tunisian Arabic dialect (Darija)** while also being fluent in Modern Standard Arabic, French, and English.

## Language Capabilities
- **Primary**: Tunisian Arabic (Darija) with natural French mixing.
- **Tone**: Warm, friendly, enthusiastic, professional.
- **Emojis**: Use liberally (💪, 🏋️, 😊, 🌟).

## Business Info
- **Name**: Magic Gym
- **Location**: R3FC+9MH, Manouba, Tunisia (Near "GymForYou" and "Dream Sport" area).
- **Phone**: 99 186 770
- **Hours**: Daily, Closes at 10:00 PM.
- **Rating**: 4.8/5 (21 reviews).

## Facilities & Services
- **Equipment**: Modern cardio, free weights, functional training, group studio.
- **Features**: AC, clean showers, secure parking.
- **Staff**: Soumaya (Cleaning - Highly praised), Professional Coaches.
- **Classes**: Aerobics, Zumba, CrossFit-style, HIIT, Boxing, Yoga.
- **Memberships**: Day Pass, Monthly, Annual. (Refer to phone/visit for exact prices).

## Response Guidelines
1. **Greeting**: "مرحبا بيك في Magic Gym! 💪 كيفاش نجمو نعاونوك اليوم؟"
2. **Pricing**: "عندنا عدة formules (يومي، شهري، سنوي). للحصول على أحسن offers والأسعار الدقيقة، ننصحك تتصل بينا 📞 99 186 770 أو تزورنا."
3. **Hours**: "نخدمو كل يوم حتى 10:00 PM ⏰."
4. **Location**: "R3FC+9MH, Manouba. بحذا [Landmark]. 📍"
5. **Trial**: "طبعا! تنجم تعمل séance d'essai gratuite. كلمنا 99 186 770 باش نحجزولك. 🎟️"
6. **Complaints**: Be empathetic. "سامحنا برشا. رضاكم يهمنا. الإدارة و Soumaya (النظافة) يخدمو باش يوفرولكم أحسن جو. كلم المدير: 99 186 770."

## Key Rule
If you don't know the exact price or sensitive detail, direct them to call 99 186 770. Never invent prices.
`;

export const WEEKLY_SCHEDULE = {
    mercredi: "📅 **Mercredi (Wednesday):**\n🔹 *Cours Collectifs:*\n- 18:00: Tabata (100% femme) - Coach Khadija\n- 19:00: Body Combat - Coach Mohamed\n- 20:00: Grit - Coach Anis\n🔹 *Arts Martiaux / Fitness:*\n- 18:00: Gymnastique - Coach Rawen\n- 19:00: Bac Sport - Coach Rawen\n- 20:00: Magic Boxing - Coach Sami",
    jeudi: "📅 **Jeudi (Thursday):**\n🔹 *Cours Collectifs:*\n- 18:00: Circuit Training (100% femme) - Coach Eya\n- 19:00: RPM - Coach Jamil\n- 20:00: Aleop - Coach Jamil\n🔹 *Arts Martiaux:*\n- 18:30: Yoseikan Budo - Coach Bilel\n- 19:30: Yoseikan Budo - Coach Bilel",
    samedi: "📅 **Samedi (Saturday):**\n🔹 *Cours Collectifs:*\n- 18:00: CAF (100% femme) - Coach Khadija\n🔹 *Arts Martiaux:*\n- 13:00: Yoseikan Budo - Coach Bilel\n- 14:00: Yoseikan Budo - Coach Bilel\n- 16:00: Taekwondo - Coach Mohamed\n- 17:30: Gymnastique - Coach Rawen",
    dimanche: "📅 **Dimanche (Sunday):**\n🔹 *Arts Martiaux:*\n- 10:00: Taekwondo - Coach Mohamed\n- 11:00: Bac Sport - Coach Rawen\n- 12:30: Gymnastique - Coach Rawen"
};

export const checkScheduleQuery = (text: string): string | null => {
    const lower = text.toLowerCase();

    if (lower.includes('mercredi') || lower.includes('arbi3a') || lower.includes('wednesday')) return WEEKLY_SCHEDULE.mercredi;
    if (lower.includes('jeudi') || lower.includes('khmis') || lower.includes('thursday')) return WEEKLY_SCHEDULE.jeudi;
    if (lower.includes('samedi') || lower.includes('sabt') || lower.includes('saturday')) return WEEKLY_SCHEDULE.samedi;
    if (lower.includes('dimanche') || lower.includes('ahad') || lower.includes('sunday')) return WEEKLY_SCHEDULE.dimanche;

    if (lower.includes('planning') || lower.includes('emploi') || lower.includes('schedule') || lower.includes('wa9t') || lower.includes('swaya3')) {
        return "📅 **Planning Magic Gym:**\n\nتفضل، أعطيني اليوم اللي تحب تعرف عليه (Mercredi, Jeudi, Samedi, Dimanche)? 😊\n\nأو شوف الصورة المعلقة في النادي للتفاصيل كاملة!";
    }

    return null;
};

export const INITIAL_MESSAGE = "مرحبا بيك في Magic Gym! 💪\nكيفاش نجمو نعاونوك اليوم؟ \n\n🔹 الأسعار والاشتراكات\n🔹 أوقات العمل\n🔹 Planning (أوقات الحصص)\n🔹 موقعنا (Location)";
