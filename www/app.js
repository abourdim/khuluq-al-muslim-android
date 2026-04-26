/* خلق المسلم — THE MUSLIM'S CHARACTER — app.js v1.0 */
/* Based on "Khuluq al-Muslim" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'خلق المسلم',
    splashSub: 'أخلاق إسلامية للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة القلم ٦٨: ٤',
    tabHome: 'الرئيسية', tabTraits: 'الأخلاق', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'أخلاق المسلم',
    traitsDesc: '٢٠ خُلقاً إسلامياً من كتاب الشيخ محمد الغزالي — كل خُلق بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن أخلاق المسلم — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي الأخلاقية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة الأخلاق',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية حسن الخلق',
    dailyLabel: '✨ خُلق اليوم',
    searchPlaceholder: 'ابحث في الأخلاق...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ خُلقاً إسلامياً من كتاب خلق المسلم',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: "The Muslim's Character",
    splashSub: 'Islamic ethics for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Qalam 68:4',
    tabHome: 'Home', tabTraits: 'Traits', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Muslim Character Traits',
    traitsDesc: '20 Islamic character traits from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islamic character — 4 choices per question',
    progressTitle: 'My Character Journey',
    progressDesc: 'Your progress and achievements in the character journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Good Character',
    dailyLabel: "✨ Today's Trait",
    searchPlaceholder: 'Search traits...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      "20 Islamic traits from The Muslim's Character",
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Le Caractère du Musulman',
    splashSub: "L'éthique islamique pour les jeunes",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Qalam 68:4',
    tabHome: 'Accueil', tabTraits: 'Vertus', tabQuiz: 'Quiz',
    tabProgress: 'Progrès', tabAbout: 'Livre',
    traitsTitle: 'Vertus du Musulman',
    traitsDesc: "20 vertus islamiques du livre du Sheikh al-Ghazali — chacune avec un verset, un hadith et une application pratique",
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur le caractère islamique — 4 choix par question',
    progressTitle: 'Mon Parcours Moral',
    progressDesc: 'Vos progrès et réalisations dans le parcours des vertus',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour le Bon Caractère',
    dailyLabel: '✨ Vertu du Jour',
    searchPlaceholder: 'Rechercher les vertus...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Expérience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consécutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Réf. Coran',
    correct: 'Bravo ! Bonne réponse ! 🎉',
    wrong: 'Réessayez la prochaine fois 💪',
    quizComplete: 'Quiz Terminé !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Débutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Persévérant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 vertus islamiques du livre Le Caractère du Musulman',
      'Quiz « Qui Veut Devenir Savant ? » avec récompenses',
      'Système de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 CHARACTER TRAITS DATA (faithful to book chapters) ═══════════════
const TRAITS = [
  {
    id:1, emoji:'✨',
    ar:{title:'الصدق',desc:'يرى الغزالي في خلق المسلم: الصدق أساس سلوك المسلم. لا يجتمع الإيمان والكذب في قلب مسلم. يؤكد الغزالي على محاربة الشائعات والظنون الكاذبة، فالصدق يهدي إلى البر والبر يهدي إلى الجنة.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ',verseRef:'التوبة ١١٩',hadith:'إن الصدق يهدي إلى البر وإن البر يهدي إلى الجنة وإن الرجل ليصدق حتى يُكتب عند الله صديقاً — متفق عليه',action:'تحرَّ الصدق في كل كلمة اليوم — واحفظ لسانك من الإشاعة والظن',young:'كن صادقاً دائماً! الصدق يجعل الجميع يثقون بك ويحبونك ✨'},
    en:{title:'Truthfulness',desc:'Al-Ghazali in The Muslims Character sees: Truthfulness is the foundation of Muslim conduct. Faith and lying cannot coexist in a believer. Al-Ghazali emphasizes fighting rumors and false assumptions — truthfulness leads to righteousness, and righteousness leads to Paradise.',verse:'O you who believe, fear Allah and be with the truthful',verseRef:'At-Tawbah 119',hadith:'Truthfulness leads to righteousness, and righteousness leads to Paradise. A person keeps being truthful until they are recorded with Allah as truthful — Agreed upon',action:'Be truthful in every word today — and guard your tongue from rumors and suspicion',young:'Always be truthful! Honesty makes everyone trust and love you ✨'},
    fr:{title:'La Véracité',desc:'Al-Ghazali dans Le Caractère du Musulman voit: La véracité est le fondement du comportement musulman. La foi et le mensonge ne peuvent coexister dans le coeur du croyant. Al-Ghazali insiste sur le combat contre les rumeurs et les fausses suppositions.',verse:'Ô vous qui croyez, craignez Allah et soyez avec les véridiques',verseRef:'At-Tawbah 119',hadith:'La véracité mène à la droiture, et la droiture mène au Paradis — Unanimement reconnu',action:'Soyez véridique dans chaque parole — gardez votre langue des rumeurs et des suspicions',young:'Sois toujours honnête ! La véracité fait que tout le monde te fait confiance ✨'}
  },
  {
    id:2, emoji:'🔒',
    ar:{title:'الأمانة',desc:'يرى الغزالي في خلق المسلم: الأمانة أن تضع كل شيء في موضعه وتتحمل المسؤولية. النبي ﷺ عُرف بالصادق الأمين. للأمانة وجوه كثيرة: ألا تستغل منصبك، وتحفظ الأسرار، وتؤدي الودائع.',verse:'إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا',verseRef:'النساء ٥٨',hadith:'آية المنافق ثلاث: إذا حدّث كذب وإذا وعد أخلف وإذا اؤتمن خان — متفق عليه',action:'أدِّ أماناتك اليوم: أعد ما استعرته، واحفظ سر من ائتمنك',young:'كن أميناً! أعد ما استعرته واحفظ أسرار أصدقائك 🔒'},
    en:{title:'Trustworthiness',desc:'Al-Ghazali in The Muslims Character sees: Trustworthiness means placing everything in its proper place and bearing responsibility. The Prophet was known as "the Truthful, the Trustworthy." It has many facets: not exploiting your position, keeping secrets, and returning deposits.',verse:'Indeed, Allah commands you to render trusts to whom they are due',verseRef:'An-Nisa 58',hadith:'The signs of the hypocrite are three: when they speak they lie, when they promise they break it, and when trusted they betray — Agreed upon',action:'Fulfill your trusts today: return what you borrowed and keep the secrets entrusted to you',young:'Be trustworthy! Return what you borrow and keep your friends secrets 🔒'},
    fr:{title:'La Fiabilité',desc:'Al-Ghazali dans Le Caractère du Musulman voit: La fiabilité signifie mettre chaque chose à sa place et assumer ses responsabilités. Le Prophète était connu comme « le Véridique, le Fiable ». Elle a de nombreuses facettes : ne pas abuser de sa position, garder les secrets, rendre les dépôts.',verse:'Allah vous ordonne de rendre les dépôts à leurs ayants droit',verseRef:'An-Nisa 58',hadith:'Les signes de l hypocrite sont trois : quand il parle il ment, quand il promet il ne tient pas, et quand on lui confie il trahit — Unanimement reconnu',action:'Accomplissez vos engagements : rendez ce que vous avez emprunté et gardez les secrets confiés',young:'Sois fiable ! Rends ce que tu empruntes et garde les secrets de tes amis 🔒'}
  },
  {
    id:3, emoji:'🤝',
    ar:{title:'الوفاء',desc:'يرى الغزالي في خلق المسلم: الوفاء يحتاج عنصرين: دوام الذكر لمجابهة النسيان، وعزم على إنفاذ العهد. يشمل الوفاء بالعهود مع الله والعقود التجارية وعقد الزواج وسداد الديون. والفضيلة لا تتجزأ فتشمل المسلم وغيره.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ',verseRef:'المائدة ١',hadith:'استشهد الغزالي بوفاء النبي ﷺ بالعهود ومنها صلح الحديبية — السيرة النبوية',action:'أوفِ بوعدك اليوم مهما كان صغيراً — الوفاء يبني الثقة',young:'أوفِ بوعودك دائماً! إذا وعدت صديقاً فلا تُخلف 🤝'},
    en:{title:'Loyalty',desc:'Al-Ghazali in The Muslims Character sees: Loyalty requires two elements: constant remembrance against forgetfulness, and determination to fulfill the covenant. It covers covenants with God, commercial contracts, marriage bonds, and debt repayment. Virtue does not divide — it applies to Muslims and non-Muslims alike.',verse:'O you who believe, fulfill your contracts',verseRef:'Al-Maidah 1',hadith:'Al-Ghazali cites the Prophets faithfulness to treaties, including the Treaty of Hudaybiyyah — Prophetic biography',action:'Keep your promise today no matter how small — loyalty builds trust',young:'Always keep your promises! If you promise a friend, never break it 🤝'},
    fr:{title:'La Loyauté',desc:'Al-Ghazali dans Le Caractère du Musulman voit: La loyauté nécessite deux éléments : un rappel constant contre l oubli, et la détermination à honorer l engagement. Elle couvre les pactes avec Dieu, les contrats commerciaux, le mariage et le remboursement des dettes.',verse:'Ô vous qui croyez, remplissez vos engagements',verseRef:'Al-Maidah 1',hadith:'Al-Ghazali cite la fidélité du Prophète aux traités, notamment le traité de Hudaybiyyah — Biographie prophétique',action:'Tenez votre promesse aujourd hui même si elle est petite — la loyauté bâtit la confiance',young:'Tiens toujours tes promesses ! Si tu promets à un ami, ne manque jamais 🤝'}
  },
  {
    id:4, emoji:'💎',
    ar:{title:'الإخلاص',desc:'يرى الغزالي في خلق المسلم: النية تفرق بين المهاجر والمسافر. الرياء شرك خفي. الإخلاص واجب خاصة على العلماء والمربين. يرى الغزالي أن دفء الإخلاص ينطفئ تدريجياً حين تتسلل الأنانية وحب الثناء.',verse:'أَلَا لِلَّهِ الدِّينُ الْخَالِصُ',verseRef:'الزمر ٣',hadith:'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى — متفق عليه',action:'راجع نيتك قبل كل عمل اليوم — هل تفعله لله أم للناس؟',young:'افعل الخير لله وحده! لا تتباهى بأعمالك أمام الناس 💎'},
    en:{title:'Sincerity',desc:'Al-Ghazali in The Muslims Character sees: Intention distinguishes the emigrant from the mere traveler. Showing off is a hidden form of polytheism. Sincerity is especially incumbent upon scholars and educators. Al-Ghazali argues that sincerity fades gradually when selfishness and love of praise take over.',verse:'Unquestionably, for Allah is the pure religion',verseRef:'Az-Zumar 3',hadith:'Actions are but by intentions, and every person shall have only what they intended — Agreed upon',action:'Check your intention before every action today — is it for God or for peoples praise?',young:'Do good for Allah alone! Do not show off your good deeds to others 💎'},
    fr:{title:'La Sincérité',desc:'Al-Ghazali dans Le Caractère du Musulman voit: L intention distingue l émigrant du simple voyageur. L ostentation est un polythéisme caché. La sincérité incombe particulièrement aux savants et aux éducateurs. Al-Ghazali soutient que la chaleur de la sincérité s éteint progressivement quand l égoïsme s installe.',verse:'C est à Allah qu appartient la religion pure',verseRef:'Az-Zumar 3',hadith:'Les actes ne valent que par les intentions, et chacun n aura que ce qu il a eu l intention de faire — Unanimement reconnu',action:'Vérifiez votre intention avant chaque acte — est-ce pour Dieu ou pour l éloge des gens ?',young:'Fais le bien pour Allah seul ! Ne te vante pas de tes bonnes actions devant les autres 💎'}
  },
  {
    id:5, emoji:'🗣️',
    ar:{title:'أدب الحديث',desc:'يرى الغزالي في خلق المسلم: الكلام ينبغي أن يكون هادفاً. على المسلم أن يتجنب اللغو والجدل العقيم والغيبة والبهتان والنميمة. الكلمة الطيبة تنفع وتجمع القلوب.',verse:'لَّا خَيْرَ فِي كَثِيرٍ مِّن نَّجْوَاهُمْ إِلَّا مَنْ أَمَرَ بِصَدَقَةٍ أَوْ مَعْرُوفٍ أَوْ إِصْلَاحٍ بَيْنَ النَّاسِ',verseRef:'النساء ١١٤',hadith:'من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت — متفق عليه',action:'قبل أن تتكلم اسأل نفسك: هل كلامي مفيد؟ إن لم يكن فاصمت',young:'فكّر قبل أن تتكلم! الكلمة الطيبة صدقة 🗣️'},
    en:{title:'Speech Etiquette',desc:'Al-Ghazali in The Muslims Character sees: Speech should be purposeful. A Muslim must avoid idle talk, pointless arguments, backbiting, slander, and gossip. A good word benefits and unites hearts.',verse:'There is no good in most of their secret talk except for those who enjoin charity, kindness, or reconciliation',verseRef:'An-Nisa 114',hadith:'Whoever believes in Allah and the Last Day, let them speak good or remain silent — Agreed upon',action:'Before you speak, ask yourself: is this useful? If not, stay silent',young:'Think before you speak! A kind word is charity 🗣️'},
    fr:{title:'L Étiquette de la Parole',desc:'Al-Ghazali dans Le Caractère du Musulman voit: La parole doit être utile. Le musulman doit éviter les bavardages, les disputes stériles, la médisance, la calomnie et les commérages. La bonne parole profite et unit les coeurs.',verse:'Il n y a rien de bon dans la plupart de leurs conversations secrètes sauf celui qui ordonne la charité ou le bien',verseRef:'An-Nisa 114',hadith:'Quiconque croit en Allah et au Jour Dernier, qu il dise du bien ou se taise — Unanimement reconnu',action:'Avant de parler, demandez-vous : est-ce utile ? Sinon, taisez-vous',young:'Réfléchis avant de parler ! La bonne parole est une aumône 🗣️'}
  },
  {
    id:6, emoji:'💚',
    ar:{title:'سلامة الصدر',desc:'يرى الغزالي في خلق المسلم: تطهير القلب من الأحقاد ضرورة إيمانية. على المؤمن أن يتمنى الخير للآخرين. من الحماقة أن تجعلك الأنانية تتمنى الخسارة لكل الناس لأنك لم تربح. ومن يتصيد عيوب الناس أسوأ ممن يقع فيها.',verse:'وَنَزَعْنَا مَا فِي صُدُورِهِم مِّنْ غِلٍّ إِخْوَانًا عَلَىٰ سُرُرٍ مُّتَقَابِلِينَ',verseRef:'الحجر ٤٧',hadith:'لا تحاسدوا ولا تباغضوا ولا تدابروا وكونوا عباد الله إخواناً — رواه مسلم',action:'نظّف قلبك اليوم من أي حقد — ادعُ لمن أساء إليك بالهداية',young:'نظّف قلبك من الغضب والحقد! تمنَّ الخير لكل الناس 💚'},
    en:{title:'Pure Heart',desc:'Al-Ghazali in The Muslims Character sees: Purifying the heart from grudges is a duty of faith. The believer must wish good for others. It is foolish to let selfishness make you wish loss for everyone because you have not profited. Those who hunt for others faults are worse than those who commit them.',verse:'And We removed whatever was in their hearts of grudges — brothers on thrones facing each other',verseRef:'Al-Hijr 47',hadith:'Do not envy one another, do not hate one another, do not turn your backs on each other — be servants of Allah as brothers — Muslim',action:'Clean your heart today from any grudge — pray for guidance for those who wronged you',young:'Clean your heart from anger and grudges! Wish good for everyone 💚'},
    fr:{title:'La Pureté du Coeur',desc:'Al-Ghazali dans Le Caractère du Musulman voit: Purifier le coeur des rancunes est un devoir de foi. Le croyant doit souhaiter le bien aux autres. C est de la stupidité de laisser l égoïsme vous faire souhaiter la perte de tous parce que vous n avez pas profité.',verse:'Et Nous avons arraché toute rancune de leurs poitrines — des frères sur des lits se faisant face',verseRef:'Al-Hijr 47',hadith:'Ne vous enviez pas, ne vous haïssez pas, ne vous tournez pas le dos — soyez des serviteurs d Allah en frères — Muslim',action:'Nettoyez votre coeur de toute rancune — priez pour la guidance de ceux qui vous ont fait du mal',young:'Nettoie ton coeur de la colère et de la rancune ! Souhaite le bien à tout le monde 💚'}
  },
  {
    id:7, emoji:'💪',
    ar:{title:'القوة',desc:'يرى الغزالي في "خلق المسلم": الإيمان يمنح المسلم قوة تتجلى في الثقة والثبات. هذه القوة مصدرها التوحيد الخالص. لا ينبغي للمسلم أن يكون إمّعة بل يكون واضح الهدف، آمراً بالمعروف ناهياً عن المنكر، عزيز النفس.',verse:'إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُم بُنْيَانٌ مَّرْصُوصٌ',verseRef:'الصف ٤',hadith:'المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف — رواه مسلم',action:'كن قوياً في موقفك اليوم — لا تكن إمّعة تتبع الأغلبية بلا رأي',young:'كن قوياً! لا تتبع الناس بلا تفكير — كن لك رأيك الخاص 💪'},
    en:{title:'Strength',desc:'Al-Ghazali in "The Muslims Character" sees: Faith grants the Muslim a strength that manifests in confidence and steadfastness. This strength is rooted in pure monotheism. A Muslim must not be a follower without opinion but should be clear in purpose, commanding good and forbidding evil, living with dignity.',verse:'Indeed, Allah loves those who fight in His cause in a row as though they are a solid structure',verseRef:'As-Saff 4',hadith:'The strong believer is better and more beloved to Allah than the weak believer — Muslim',action:'Be firm in your stance today — do not be a blind follower of the majority',young:'Be strong! Do not follow others blindly — have your own opinion 💪'},
    fr:{title:'La Force',desc:'Al-Ghazali dans "Le Caractère du Musulman" voit: La foi donne au musulman une force qui se manifeste en confiance et fermeté. Cette force est enracinée dans le pur monothéisme. Le musulman ne doit pas être un suiveur sans opinion mais doit être clair dans ses objectifs.',verse:'Allah aime ceux qui combattent dans Son chemin en rang comme s ils étaient un édifice solide',verseRef:'As-Saff 4',hadith:'Le croyant fort est meilleur et plus aimé d Allah que le croyant faible — Muslim',action:'Soyez ferme dans votre position — ne suivez pas la majorité aveuglément',young:'Sois fort ! Ne suis pas les autres aveuglément — aie ton propre avis 💪'}
  },
  {
    id:8, emoji:'🕊️',
    ar:{title:'الحلم والصفح',desc:'يرى الغزالي في "خلق المسلم": العظيم يتسع صدره ويمتد حلمه كلما ارتقى في الكمال الروحي. النبي ﷺ كان يُستفز أحياناً لكنه لا يتجاوز حدود الكرم والعفو. ما انتقم لنفسه قط. الغضب يفضي إلى الجنون، وكظم الغيظ والعفو من شيم الإسلام.',verse:'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',verseRef:'آل عمران ١٣٤',hadith:'ليس الشديد بالصُّرَعة إنما الشديد الذي يملك نفسه عند الغضب — متفق عليه',action:'إذا أغضبك أحد اليوم، اكظم غيظك واعفُ — فذلك أقوى من الانتقام',young:'إذا أغضبك أحد، خذ نفساً عميقاً واعفُ عنه — العفو قوة! 🕊️'},
    en:{title:'Forbearance and Forgiveness',desc:'Al-Ghazali in "The Muslims Character" sees: The great person broadens their heart and extends their forbearance as they rise in spiritual perfection. The Prophet was provoked at times but never exceeded generosity and pardoning. He never took revenge for himself. Anger leads to folly; swallowing anger and forgiveness are Islamic virtues.',verse:'Those who restrain anger and pardon the people',verseRef:'Aal-Imran 134',hadith:'The strong person is not the wrestler but the one who controls themselves in anger — Agreed upon',action:'If someone angers you today, swallow your anger and forgive — that is stronger than revenge',young:'If someone makes you angry, take a deep breath and forgive — forgiveness is strength! 🕊️'},
    fr:{title:'La Clémence et le Pardon',desc:'Al-Ghazali dans "Le Caractère du Musulman" voit: Le grand homme élargit sa poitrine et étend sa clémence à mesure qu il s élève spirituellement. Le Prophète était parfois provoqué mais ne dépassait jamais les limites de la générosité et du pardon. La colère mène à la folie.',verse:'Ceux qui dominent leur rage et pardonnent aux gens',verseRef:'Aal-Imran 134',hadith:'Le fort n est pas le lutteur mais celui qui se maîtrise dans la colère — Unanimement reconnu',action:'Si quelqu un vous met en colère, retenez votre rage et pardonnez — c est plus fort que la vengeance',young:'Si quelqu un te met en colère, respire et pardonne — le pardon est une force ! 🕊️'}
  },
  {
    id:9, emoji:'🎁',
    ar:{title:'الجود والكرم',desc:'إذا زلّ المسلم في ذنب فإن الطهارة التي تعيد صفاءه أن يجود بماله الحبيب للفقراء والمحتاجين. الكرم تطهير روحي والبخل سجن للنفس.',verse:'لَن تَنَالُوا الْبِرَّ حَتَّىٰ تُنفِقُوا مِمَّا تُحِبُّونَ',verseRef:'آل عمران ٩٢',hadith:'ما نقصت صدقة من مال — رواه مسلم',action:'تصدق اليوم بشيء تحبه — مال أو وقت أو كلمة طيبة',young:'شارك ما تحبه مع الآخرين! الكرم يجعل قلبك سعيداً 🎁'},
    en:{title:'Generosity',desc:'When a Muslim slips into sin, the purification that restores purity is to give away beloved wealth to the poor and needy. Generosity is spiritual cleansing, and miserliness is a prison for the soul.',verse:'You will never attain righteousness until you spend from what you love',verseRef:'Aal-Imran 92',hadith:'Charity does not decrease wealth — Muslim',action:'Give something you love today — money, time, or a kind word',young:'Share what you love with others! Generosity makes your heart happy 🎁'},
    fr:{title:'La Générosité',desc:'Quand le musulman commet un péché, la purification qui restaure sa pureté est de donner de ses biens aimés aux pauvres et aux nécessiteux. La générosité est une purification spirituelle.',verse:'Vous n atteindrez la piété que lorsque vous dépenserez de ce que vous aimez',verseRef:'Aal-Imran 92',hadith:'La charité ne diminue pas la richesse — Muslim',action:'Donnez quelque chose que vous aimez aujourd hui — argent, temps ou bonne parole',young:'Partage ce que tu aimes avec les autres ! La générosité rend ton coeur heureux 🎁'}
  },
  {
    id:10, emoji:'⏳',
    ar:{title:'الصبر',desc:'البلاء غامض في أسبابه. الناس في الحياة كجيش في المعركة — قد يُطلب من بعض الوحدات أن تقاتل حتى الموت لإنقاذ الآخرين. الدنيا دار الامتحان والخضوع والصبر فيها مطلوب.',verse:'وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ',verseRef:'البقرة ١٥٥',hadith:'عجباً لأمر المؤمن إن أمره كله خير — رواه مسلم',action:'اصبر على ما يصيبك اليوم — وتذكر أن كل ابتلاء فيه حكمة',young:'الصبر قوة خارقة! كل شيء صعب سيمر إن شاء الله ⏳'},
    en:{title:'Patience',desc:'Tribulation is mysterious in its causes. People in life are like an army deployed for battle — some units may fight to the death to save others. This world is the abode of examination where submission and endurance are required.',verse:'And We will surely test you with something of fear and hunger',verseRef:'Al-Baqarah 155',hadith:'How wonderful is the affair of the believer, for all of it is good — Muslim',action:'Be patient with whatever befalls you today — remember every trial has wisdom',young:'Patience is a superpower! Every hard thing will pass, God willing ⏳'},
    fr:{title:'La Patience',desc:'L épreuve est mystérieuse dans ses causes. Les gens dans la vie sont comme une armée déployée — certaines unités doivent combattre jusqu à la mort pour sauver les autres. Ce monde est la demeure de l examen.',verse:'Et Nous vous éprouverons par un peu de peur et de faim',verseRef:'Al-Baqarah 155',hadith:'Que l affaire du croyant est merveilleuse, car tout est bon pour lui — Muslim',action:'Soyez patient face à ce qui vous arrive — rappelez-vous que chaque épreuve a une sagesse',young:'La patience est un super-pouvoir ! Chaque difficulté passera, si Dieu le veut ⏳'}
  },
  {
    id:11, emoji:'⚖️',
    ar:{title:'القصد والعفاف',desc:'يمدح الإسلام الاعتدال في اللباس والعيش. ليس اللباس الفاخر مقياساً للرجولة أو عظمة الخلق. البساطة وضبط النفس من الأخلاق النبيلة.',verse:'وَالَّذِينَ إِذَا أَنفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا وَكَانَ بَيْنَ ذَٰلِكَ قَوَامًا',verseRef:'الفرقان ٦٧',hadith:'ازهد في الدنيا يحبك الله وازهد فيما عند الناس يحبك الناس — رواه ابن ماجه',action:'كن معتدلاً في إنفاقك اليوم — لا إسراف ولا تقتير',young:'كن معتدلاً! لا تبذّر ولا تبخل — الوسط هو الأفضل ⚖️'},
    en:{title:'Moderation and Chastity',desc:'Islam commends moderation in dress and living. Fine clothing is not a measure of manhood or character. Simplicity and self-restraint are noble qualities.',verse:'Those who, when they spend, are neither extravagant nor miserly, but hold a just balance',verseRef:'Al-Furqan 67',hadith:'Be detached from the world and Allah will love you; be detached from what people possess and people will love you — Ibn Majah',action:'Be moderate in your spending today — neither extravagant nor miserly',young:'Be balanced! Do not waste and do not be stingy — the middle way is best ⚖️'},
    fr:{title:'La Modération et la Chasteté',desc:'L Islam loue la modération dans le vêtement et la vie. Les vêtements luxueux ne sont pas une mesure de virilité ou de grandeur morale. La simplicité et la retenue sont des qualités nobles.',verse:'Ceux qui, lorsqu ils dépensent, ne sont ni prodigues ni avares mais tiennent un juste milieu',verseRef:'Al-Furqan 67',hadith:'Renonce au monde et Allah t aimera ; renonce à ce que possèdent les gens et les gens t aimeront — Ibn Majah',action:'Soyez modéré dans vos dépenses — ni extravagance ni avarice',young:'Sois équilibré ! Ne gaspille pas et ne sois pas avare — le juste milieu est le meilleur ⚖️'}
  },
  {
    id:12, emoji:'✨',
    ar:{title:'النظافة والتجمل',desc:'العناية بالجسد والنظافة وحسن المظهر واجبات أخلاقية في الإسلام وليست مجرد تفضيلات. الله جميل يحب الجمال.',verse:'يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ',verseRef:'الأعراف ٣١',hadith:'إن الله جميل يحب الجمال — رواه مسلم',action:'اهتم بنظافتك ومظهرك اليوم — فذلك من الإيمان',young:'كن نظيفاً وأنيقاً! النظافة من الإيمان ✨'},
    en:{title:'Cleanliness and Grooming',desc:'Caring for the body, cleanliness, and good appearance are moral duties in Islam, not mere preferences. Allah is beautiful and loves beauty.',verse:'O children of Adam, take your adornment at every place of prayer',verseRef:'Al-Araf 31',hadith:'Allah is beautiful and loves beauty — Muslim',action:'Take care of your cleanliness and appearance today — it is part of faith',young:'Be clean and neat! Cleanliness is part of faith ✨'},
    fr:{title:'La Propreté et l Élégance',desc:'Prendre soin du corps, la propreté et la bonne apparence sont des devoirs moraux en Islam, pas de simples préférences. Allah est beau et aime la beauté.',verse:'Ô enfants d Adam, prenez votre parure à chaque lieu de prière',verseRef:'Al-Araf 31',hadith:'Allah est beau et aime la beauté — Muslim',action:'Prenez soin de votre propreté et apparence — c est une partie de la foi',young:'Sois propre et soigné ! La propreté fait partie de la foi ✨'}
  },
  {
    id:13, emoji:'🌸',
    ar:{title:'الحياء',desc:'الحياء دليل حقيقي على طبيعة الإنسان يكشف قيمة إيمانه ودرجة رقيّه. إذا رأيت شخصاً يخجل من فعل الخطأ فضميره حي وخلقه طاهر. فقدان الحياء بداية الانحدار الأخلاقي.',verse:'قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ',verseRef:'النور ٣٠',hadith:'إن لكل دين خلقاً وخلق الإسلام الحياء — رواه ابن ماجه',action:'استحِ من الله أولاً: لا تفعل في السر ما تستحي أن يراه الناس',young:'كن حيياً! الحياء يجعلك إنساناً راقياً — لا تفعل ما يُخجلك 🌸'},
    en:{title:'Modesty',desc:'Modesty is a true indicator of a persons nature, revealing the value of their faith and degree of refinement. When you see a person embarrassed by wrongdoing, their conscience is alive. Loss of modesty marks the beginning of moral decline.',verse:'Tell the believing men to lower their gaze',verseRef:'An-Nur 30',hadith:'Every religion has a distinctive character, and the character of Islam is modesty — Ibn Majah',action:'Be modest before God first: do not do in secret what you would be ashamed for people to see',young:'Be modest! Modesty makes you a refined person — never do what makes you ashamed 🌸'},
    fr:{title:'La Pudeur',desc:'La pudeur est un vrai indicateur de la nature d une personne, révélant la valeur de sa foi et son degré de raffinement. Quand on voit quelqu un gêné par ses fautes, sa conscience est vivante. La perte de pudeur marque le début du déclin moral.',verse:'Dis aux croyants de baisser leurs regards',verseRef:'An-Nur 30',hadith:'Chaque religion a un caractère distinctif, et le caractère de l Islam est la pudeur — Ibn Majah',action:'Ayez de la pudeur devant Dieu d abord : ne faites pas en secret ce qui vous ferait honte en public',young:'Sois pudique ! La pudeur te rend raffiné — ne fais jamais ce qui te fait honte 🌸'}
  },
  {
    id:14, emoji:'🤝',
    ar:{title:'الإخاء',desc:'التعارف لا العداوة هو أساس العلاقات الإنسانية. الأخوة الإسلامية روح الإيمان وحقيقة الإسلام. المسلم يفرح لأخيه ويطلب نفعه ويسنده في الحق ويرشده من الخطأ.',verse:'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ',verseRef:'الحجرات ١٠',hadith:'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه — متفق عليه',action:'افعل شيئاً لأخيك اليوم: ابتسم له أو ساعده أو ادعُ له',young:'كن أخاً صالحاً! ساعد أصدقاءك وافرح لفرحهم وتمنَّ لهم الخير 🤝'},
    en:{title:'Brotherhood',desc:'Getting to know one another, not hostility, is the basis of human relationships. Islamic brotherhood is the spirit of faith and the reality of Islam. A Muslim rejoices for their brother, seeks their benefit, and guides them from error.',verse:'The believers are but brothers',verseRef:'Al-Hujurat 10',hadith:'None of you truly believes until they love for their brother what they love for themselves — Agreed upon',action:'Do something for a brother today: smile at them, help them, or pray for them',young:'Be a good brother! Help your friends, be happy for them, and wish them well 🤝'},
    fr:{title:'La Fraternité',desc:'Se connaître, et non l hostilité, est la base des relations humaines. La fraternité islamique est l esprit de la foi et la réalité de l Islam. Le musulman se réjouit pour son frère et cherche son bien.',verse:'Les croyants ne sont que des frères',verseRef:'Al-Hujurat 10',hadith:'Aucun de vous ne croit vraiment tant qu il n aime pour son frère ce qu il aime pour lui-même — Unanimement reconnu',action:'Faites quelque chose pour un frère aujourd hui : souriez-lui, aidez-le ou priez pour lui',young:'Sois un bon frère ! Aide tes amis, réjouis-toi pour eux et souhaite-leur du bien 🤝'}
  },
  {
    id:15, emoji:'🔗',
    ar:{title:'الاتحاد',desc:'الوحدة سنة كونية. الخيط الضعيف إذا انضم لغيره صار حبلاً قوياً. التفرق يُضعف الممالك القوية ويقتل الضعيفة. اجتماع الصف وجمع الكلمة أساس بقاء الأمة.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ١٠٣',hadith:'يد الله مع الجماعة — رواه الترمذي',action:'وحّد بين المتخاصمين اليوم — أصلح بين اثنين متشاجرين',young:'كن مع الجماعة! اتحدوا ولا تتفرقوا — القوة في الوحدة 🔗'},
    en:{title:'Unity',desc:'Unity is a law of the universe. A weak thread joined with others becomes a strong rope. Discord weakens strong kingdoms and kills weak ones. Uniting ranks is the foundation for the Ummahs survival.',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Aal-Imran 103',hadith:'The hand of Allah is with the community — Tirmidhi',action:'Unite those who are in conflict today — reconcile between two who are quarreling',young:'Stay with the group! Unite and do not divide — strength is in unity 🔗'},
    fr:{title:'L Unité',desc:'L unité est une loi de l univers. Un fil faible rejoint à d autres devient une corde solide. La discorde affaiblit les royaumes forts et tue les faibles. Unir les rangs est le fondement de la survie de la Oumma.',verse:'Et cramponez-vous tous ensemble au câble d Allah et ne vous divisez pas',verseRef:'Aal-Imran 103',hadith:'La main d Allah est avec le groupe — Tirmidhi',action:'Unissez ceux qui sont en conflit — réconciliez deux personnes qui se disputent',young:'Reste avec le groupe ! Unissez-vous et ne vous divisez pas — la force est dans l unité 🔗'}
  },
  {
    id:16, emoji:'👥',
    ar:{title:'اختيار الأصدقاء',desc:'الصديق العظيم قد يقود صاحبه للنجاح في الدنيا والنجاة في الآخرة. والصديق الأحمق المغرور نقمة على صاحبه. عدوى الخصال السيئة أسرع انتشاراً وأشد فتكاً من عدوى الخصال الحسنة.',verse:'الْأَخِلَّاءُ يَوْمَئِذٍ بَعْضُهُمْ لِبَعْضٍ عَدُوٌّ إِلَّا الْمُتَّقِينَ',verseRef:'الزخرف ٦٧',hadith:'المرء على دين خليله فلينظر أحدكم من يخالل — رواه أبو داود',action:'راجع صداقاتك: هل أصدقاؤك يقربونك من الخير أم يبعدونك؟',young:'اختر أصدقاءك بعناية! الصديق الصالح يساعدك على فعل الخير 👥'},
    en:{title:'Choosing Friends',desc:'A great friend may lead their companion to success in this world and salvation in the hereafter. A foolish friend is a curse upon their companion. The contagion of bad qualities spreads faster than that of good ones.',verse:'Close friends on that Day will be enemies to each other, except the righteous',verseRef:'Az-Zukhruf 67',hadith:'A person is upon the religion of their close friend, so let each of you look at whom they befriend — Abu Dawud',action:'Review your friendships: do your friends bring you closer to good or take you away?',young:'Choose your friends wisely! A good friend helps you do good things 👥'},
    fr:{title:'Le Choix des Amis',desc:'Un grand ami peut mener son compagnon au succès dans ce monde et au salut dans l au-delà. Un ami stupide est une malédiction. La contagion des mauvaises qualités se propage plus vite que celle des bonnes.',verse:'Les amis intimes ce Jour-là seront ennemis les uns des autres, sauf les pieux',verseRef:'Az-Zukhruf 67',hadith:'La personne suit la religion de son ami proche, que chacun regarde qui il fréquente — Abu Dawud',action:'Révisez vos amitiés : vos amis vous rapprochent-ils du bien ou vous en éloignent-ils ?',young:'Choisis bien tes amis ! Un bon ami t aide à faire le bien 👥'}
  },
  {
    id:17, emoji:'🏔️',
    ar:{title:'العزة',desc:'العزة تشمل السعي للحقوق والدفاع عن الدين. لا ينبغي أن يكون المسلم فريسة سهلة لكل معتدٍ أو هدفاً بسيطاً لكل مهاجم. التكبر على الخلق صفة لله وحده، وعزة العبد في تواضعه أمام ربه.',verse:'وَلِلَّهِ الْعِزَّةُ وَلِرَسُولِهِ وَلِلْمُؤْمِنِينَ',verseRef:'المنافقون ٨',hadith:'لا ينبغي للمؤمن أن يُذل نفسه — رواه الترمذي',action:'لا تقبل الذل اليوم — دافع عن حقك وكرامتك بحكمة وأدب',young:'كن عزيز النفس! لا تقبل أن يُهينك أحد — أنت مسلم كريم 🏔️'},
    en:{title:'Dignity',desc:'Dignity includes striving for ones rights and defending ones religion. A Muslim must not be easy prey for every aggressor. Arrogance over creation is Gods attribute alone — the servants honor lies in their humility before their Lord.',verse:'And to Allah belongs all honor, and to His Messenger, and to the believers',verseRef:'Al-Munafiqun 8',hadith:'A believer should not humiliate themselves — Tirmidhi',action:'Do not accept humiliation today — defend your rights and dignity with wisdom and courtesy',young:'Have self-respect! Do not accept anyone insulting you — you are a noble Muslim 🏔️'},
    fr:{title:'La Dignité',desc:'La dignité inclut la recherche de ses droits et la défense de sa religion. Le musulman ne doit pas être une proie facile pour tout agresseur. L arrogance sur la création est un attribut de Dieu seul.',verse:'C est à Allah qu appartient la puissance, ainsi qu à Son Messager et aux croyants',verseRef:'Al-Munafiqun 8',hadith:'Le croyant ne devrait pas s humilier lui-même — Tirmidhi',action:'N acceptez pas l humiliation — défendez vos droits et votre dignité avec sagesse et courtoisie',young:'Aie de l estime de toi ! N accepte pas qu on t insulte — tu es un musulman noble 🏔️'}
  },
  {
    id:18, emoji:'💝',
    ar:{title:'الرحمة',desc:'الرحمة صفة لله سبقت رحمته غضبه. هي كمال في النفس يجعل صاحبها يحس بألم الآخرين ويسعى لتخفيفه. القسوة انتكاس في الفطرة. يستعمل الغزالي مثال الجراح الذي يقطع اللحم رحمةً بالمريض.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'الراحمون يرحمهم الرحمن، ارحموا من في الأرض يرحمكم من في السماء — رواه الترمذي',action:'ارحم شخصاً اليوم — حتى لو كانت الرحمة كلمة طيبة أو ابتسامة',young:'كن رحيماً! ساعد من يتألم وكن لطيفاً مع الجميع حتى الحيوانات 💝'},
    en:{title:'Mercy',desc:'Mercy is an attribute of God whose mercy preceded His wrath. It is a perfection of the soul that makes one sensitive to others pain and eager to alleviate it. Cruelty is a reversal of natural disposition. Al-Ghazali uses the analogy of a surgeon who cuts flesh out of mercy for the patient.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 107',hadith:'The merciful are shown mercy by the Most Merciful. Be merciful to those on earth and the One in heaven will be merciful to you — Tirmidhi',action:'Show mercy to someone today — even if it is just a kind word or a smile',young:'Be merciful! Help those in pain and be kind to everyone, even animals 💝'},
    fr:{title:'La Miséricorde',desc:'La miséricorde est un attribut de Dieu dont la miséricorde précède Sa colère. C est une perfection de l âme qui rend sensible à la douleur des autres. La cruauté est une inversion de la nature. Al-Ghazali utilise l analogie du chirurgien qui coupe la chair par miséricorde.',verse:'Et Nous ne t avons envoyé qu en miséricorde pour les mondes',verseRef:'Al-Anbiya 107',hadith:'Les miséricordieux recevront la miséricorde du Tout Miséricordieux. Soyez miséricordieux envers ceux sur terre — Tirmidhi',action:'Montrez de la miséricorde à quelqu un — même un bon mot ou un sourire',young:'Sois miséricordieux ! Aide ceux qui souffrent et sois gentil avec tout le monde 💝'}
  },
  {
    id:19, emoji:'📚',
    ar:{title:'العلم والعقل',desc:'التعلم والتعليم روح الإسلام — بدونهما لا يحيا الدين. العلم يجب أن يسبق العمل، فعبادة الجاهل قليلة النفع. العلم يشمل كل ما يوسع البصيرة، وعلوم الدنيا كعلوم الآخرة في خدمة الدين.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'تعلم شيئاً جديداً اليوم — اقرأ صفحة من كتاب أو استمع لدرس علم',young:'تعلم كل يوم شيئاً جديداً! اقرأ كتاباً أو اسأل سؤالاً ذكياً 📚'},
    en:{title:'Knowledge and Reason',desc:'Learning and teaching are the spirit of Islam — without them the religion cannot survive. Knowledge must precede action; the worship of the ignorant is of little benefit. Knowledge encompasses everything that broadens vision, and worldly sciences serve the faith equally.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Learn something new today — read a page from a book or listen to a lesson of knowledge',young:'Learn something new every day! Read a book or ask a smart question 📚'},
    fr:{title:'Le Savoir et la Raison',desc:'L apprentissage et l enseignement sont l âme de l Islam — sans eux la religion ne peut survivre. Le savoir doit précéder l action ; l adoration de l ignorant est peu profitable. Le savoir englobe tout ce qui élargit la vision.',verse:'Dis : Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilite un chemin vers le Paradis — Muslim',action:'Apprenez quelque chose de nouveau — lisez une page ou écoutez une leçon de savoir',young:'Apprends quelque chose de nouveau chaque jour ! Lis un livre ou pose une question intelligente 📚'}
  },
  {
    id:20, emoji:'⏰',
    ar:{title:'الانتفاع بالوقت',desc:'كل شيء ضائع يمكن تعويضه إلا الوقت — إذا ضاع فلا أمل في عودته. الاتعاظ بالزمن يعني دراسة تاريخ العالم وتتبع آيات الله في الآفاق والتأمل في أحوال الأمم.',verse:'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',verseRef:'العصر ١-٢',hadith:'نعمتان مغبون فيهما كثير من الناس: الصحة والفراغ — رواه البخاري',action:'لا تضيع وقتك اليوم — استثمر كل ساعة في شيء نافع لدينك أو دنياك',young:'وقتك ثمين! لا تضيعه — استعمله في التعلم واللعب المفيد والعبادة ⏰'},
    en:{title:'Valuing Time',desc:'Every lost thing may be recovered except time — once lost, there is no hope of its return. Learning from history means studying world history, tracing Gods signs in the horizons, and reflecting on the conditions of nations.',verse:'By time, indeed mankind is in loss',verseRef:'Al-Asr 1-2',hadith:'Two blessings which many people squander: health and free time — Bukhari',action:'Do not waste your time today — invest every hour in something beneficial for your faith or your life',young:'Your time is precious! Do not waste it — use it for learning, useful play, and worship ⏰'},
    fr:{title:'La Valeur du Temps',desc:'Tout ce qui est perdu peut être récupéré sauf le temps — une fois perdu, il n y a aucun espoir de retour. Apprendre de l histoire signifie étudier l histoire du monde et méditer sur les conditions des nations.',verse:'Par le temps, l homme est certes en perdition',verseRef:'Al-Asr 1-2',hadith:'Deux bienfaits dont beaucoup de gens sont dupés : la santé et le temps libre — Bukhari',action:'Ne perdez pas votre temps — investissez chaque heure dans quelque chose d utile pour votre foi ou votre vie',young:'Ton temps est précieux ! Ne le gaspille pas — utilise-le pour apprendre, jouer utilement et adorer ⏰'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'أكمل الآية: "وَإِنَّكَ لَعَلَى خُلُقٍ ..."',opts:['كريم','حسن','عظيم','جميل'],correct:2,hint:'هذه الآية في وصف النبي ﷺ — وهي أساس كتاب خلق المسلم',quran:'القلم ٤'},
    en:{q:'Complete the verse: "And indeed, you are of a ... moral character"',opts:['Noble','Good','Great','Beautiful'],correct:2,hint:'This verse describes the Prophet — it is the foundation of this book',quran:'Al-Qalam 4'},
    fr:{q:'Complétez le verset : « Et tu es certes d\'un caractère ... »',opts:['Noble','Bon','Immense','Beau'],correct:2,hint:'Ce verset décrit le Prophète — c\'est le fondement de ce livre',quran:'Al-Qalam 4'}
  },
  {
    ar:{q:'أكمل الحديث: "إنما الأعمال ب..." — وهو أساس باب الإخلاص في الكتاب',opts:['الصبر','النتائج','النيات','الأقوال'],correct:2,hint:'هذا أول حديث في كتاب البخاري — ذكره الغزالي في فصل الإخلاص',quran:'الزمر ٣'},
    en:{q:'Complete the hadith: "Actions are but by..." — the basis of the chapter on Sincerity',opts:['Patience','Results','Intentions','Words'],correct:2,hint:'This is the first hadith in Bukhari — Al-Ghazali cites it in the Sincerity chapter',quran:'Az-Zumar 3'},
    fr:{q:'Complétez le hadith : « Les actes ne valent que par les... » — base du chapitre Sincérité',opts:['La patience','Les résultats','Les intentions','Les paroles'],correct:2,hint:'Premier hadith de Bukhari — cité par Al-Ghazali dans le chapitre Sincérité',quran:'Az-Zumar 3'}
  },
  {
    ar:{q:'ما علامات المنافق الثلاث التي ذكرها الغزالي في باب الأمانة؟',opts:['الكذب والخيانة والإسراف','الكذب وإخلاف الوعد والخيانة','الغيبة والنميمة والحسد','البخل والكبر والظلم'],correct:1,hint:'هذه العلامات تتعلق بالكلام والوعود والأمانات',quran:'النساء ٥٨'},
    en:{q:'What are the three signs of the hypocrite that Al-Ghazali cites in the Trustworthiness chapter?',opts:['Lying, betrayal, extravagance','Lying, breaking promises, betraying trusts','Backbiting, gossip, envy','Miserliness, arrogance, injustice'],correct:1,hint:'These signs relate to speech, promises, and trusts',quran:'An-Nisa 58'},
    fr:{q:'Quels sont les trois signes de l\'hypocrite cités par Al-Ghazali dans le chapitre Fiabilité ?',opts:['Mensonge, trahison, extravagance','Mensonge, manquement aux promesses, trahison des dépôts','Médisance, commérages, envie','Avarice, arrogance, injustice'],correct:1,hint:'Ces signes concernent la parole, les promesses et les dépôts',quran:'An-Nisa 58'}
  },
  {
    ar:{q:'من قال: "ليس الشديد بالصُّرَعة إنما الشديد الذي يملك نفسه عند الغضب"؟',opts:['عمر بن الخطاب','أبو بكر الصديق','النبي ﷺ','علي بن أبي طالب'],correct:2,hint:'ذكره الغزالي في فصل الحلم والصفح',quran:'آل عمران ١٣٤'},
    en:{q:'Who said: "The strong person is not the wrestler, but the one who controls themselves in anger"?',opts:['Umar ibn al-Khattab','Abu Bakr','The Prophet (PBUH)','Ali ibn Abi Talib'],correct:2,hint:'Al-Ghazali cites this in the Forbearance and Forgiveness chapter',quran:'Aal-Imran 134'},
    fr:{q:'Qui a dit : « Le fort n\'est pas le lutteur, mais celui qui se maîtrise dans la colère » ?',opts:['Umar ibn al-Khattab','Abu Bakr','Le Prophète (PSL)','Ali ibn Abi Talib'],correct:2,hint:'Al-Ghazali cite cela dans le chapitre Clémence et Pardon',quran:'Aal-Imran 134'}
  },
  {
    ar:{q:'ما الخُلق الذي قال عنه الحديث: "لا يأتي إلا بخير" — وخصّه الغزالي بفصل كامل؟',opts:['الصدق','الصبر','الحياء','الكرم'],correct:2,hint:'هذا الخلق يمنع صاحبه من فعل القبيح',quran:'النور ٣٠'},
    en:{q:'Which trait does the hadith say "brings nothing but good" — and Al-Ghazali dedicates a full chapter to it?',opts:['Truthfulness','Patience','Modesty','Generosity'],correct:2,hint:'This trait prevents a person from doing shameful things',quran:'An-Nur 30'},
    fr:{q:'Quelle vertu le hadith dit « n\'apporte que du bien » — et Al-Ghazali lui consacre un chapitre entier ?',opts:['La Véracité','La Patience','La Pudeur','La Générosité'],correct:2,hint:'Cette vertu empêche de faire des choses honteuses',quran:'An-Nur 30'}
  },
  {
    ar:{q:'أكمل الآية التي استشهد بها الغزالي في فصل الوحدة: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا ..."',opts:['تكفروا','تتنازعوا','تفرقوا','تيأسوا'],correct:2,hint:'هذه الآية تدعو لوحدة الصف',quran:'آل عمران ١٠٣'},
    en:{q:'Complete the verse Al-Ghazali cites in the Unity chapter: "Hold firmly to the rope of Allah all together and do not..."',opts:['Disbelieve','Dispute','Become divided','Despair'],correct:2,hint:'This verse calls for unity of ranks',quran:'Aal-Imran 103'},
    fr:{q:'Complétez le verset cité par Al-Ghazali dans le chapitre Unité : « Cramponez-vous au câble d\'Allah et ne vous... pas »',opts:['Mécréez','Disputez','Divisez','Désespérez'],correct:2,hint:'Ce verset appelle à l\'unité des rangs',quran:'Aal-Imran 103'}
  },
  {
    ar:{q:'ما الحديث الذي ذكره الغزالي في باب اختيار الأصدقاء؟',opts:['خير الأصحاب عند الله خيرهم لصاحبه','المرء على دين خليله فلينظر أحدكم من يخالل','الجار قبل الدار','من كان يؤمن بالله فليكرم ضيفه'],correct:1,hint:'الحديث يربط بين الصحبة والدين',quran:'الزخرف ٦٧'},
    en:{q:'Which hadith does Al-Ghazali cite in the Choosing Friends chapter?',opts:['The best companions to Allah are those best to their friends','A person is upon the religion of their close friend','The neighbor before the house','Whoever believes in Allah should honor their guest'],correct:1,hint:'This hadith links companionship and religion',quran:'Az-Zukhruf 67'},
    fr:{q:'Quel hadith Al-Ghazali cite-t-il dans le chapitre Choix des Amis ?',opts:['Les meilleurs compagnons sont les meilleurs envers leurs amis','La personne suit la religion de son ami proche','Le voisin avant la maison','Quiconque croit en Allah honore son hôte'],correct:1,hint:'Ce hadith lie la compagnie et la religion',quran:'Az-Zukhruf 67'}
  },
  {
    ar:{q:'أكمل الآية: "وَمَا أَرْسَلْنَاكَ إِلَّا ..." للعالمين — من فصل الرحمة',opts:['هادياً','بشيراً','رحمةً','نذيراً'],correct:2,hint:'هذه الآية أساس فصل الرحمة عند الغزالي',quran:'الأنبياء ١٠٧'},
    en:{q:'Complete the verse: "And We have not sent you except as a ... to the worlds" — from the Mercy chapter',opts:['Guide','Bearer of glad tidings','Mercy','Warner'],correct:2,hint:'This verse is the basis of Al-Ghazalis chapter on Mercy',quran:'Al-Anbiya 107'},
    fr:{q:'Complétez le verset : « Et Nous ne t\'avons envoyé qu\'en ... pour les mondes » — du chapitre Miséricorde',opts:['Guide','Annonciateur','Miséricorde','Avertisseur'],correct:2,hint:'Ce verset est la base du chapitre Miséricorde d\'Al-Ghazali',quran:'Al-Anbiya 107'}
  },
  {
    ar:{q:'ما النعمتان اللتان ذكرهما الغزالي في فصل الانتفاع بالوقت بأن كثيراً من الناس مغبون فيهما؟',opts:['المال والأولاد','الصحة والفراغ','العلم والإيمان','الشباب والقوة'],correct:1,hint:'حديث نبوي رواه البخاري عن نعمتين ضائعتين',quran:'العصر ١-٢'},
    en:{q:'What two blessings does Al-Ghazali mention in the Valuing Time chapter that many people squander?',opts:['Wealth and children','Health and free time','Knowledge and faith','Youth and strength'],correct:1,hint:'A prophetic hadith narrated by Bukhari about two wasted blessings',quran:'Al-Asr 1-2'},
    fr:{q:'Quels deux bienfaits Al-Ghazali mentionne-t-il dans le chapitre Valeur du Temps que beaucoup gaspillent ?',opts:['Richesse et enfants','Santé et temps libre','Savoir et foi','Jeunesse et force'],correct:1,hint:'Un hadith rapporté par Bukhari sur deux bienfaits gaspillés',quran:'Al-Asr 1-2'}
  },
  {
    ar:{q:'ما أول ما يوضع في ميزان العبد يوم القيامة حسب ما أكده الغزالي؟',opts:['الصلاة','الصيام','حسن الخلق','الصدقة'],correct:2,hint:'الغزالي يؤكد أن الخلق الحسن أثقل شيء في الميزان',quran:'القلم ٤'},
    en:{q:'What is the heaviest thing on the scale on Judgment Day according to Al-Ghazali?',opts:['Prayer','Fasting','Good character','Charity'],correct:2,hint:'Al-Ghazali emphasizes good character is the heaviest thing on the scale',quran:'Al-Qalam 4'},
    fr:{q:'Quelle est la chose la plus lourde sur la balance le Jour du Jugement selon Al-Ghazali ?',opts:['La Prière','Le Jeûne','Le Bon Caractère','La Charité'],correct:2,hint:'Al-Ghazali souligne que le bon caractère est le plus lourd sur la balance',quran:'Al-Qalam 4'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء حسن الخلق',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ وَاصْرِفْ عَنِّي سَيِّئَهَا لا يَصْرِفُ عَنِّي سَيِّئَهَا إِلَّا أَنْتَ',tr:'رواه مسلم'},
    en:{label:'Dua for Good Character',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide me to the best of character, none can guide to the best of it except You — Muslim'},
    fr:{label:'Dua pour le Bon Caractère',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'Ô Allah, guide-moi vers le meilleur caractère, nul ne peut y guider sauf Toi — Muslim'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'سورة التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him and He is Lord of the Great Throne'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets à Lui et Il est le Seigneur du Trône immense'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'},
    fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, déverse sur nous la patience et affermis nos pas — Al-Baqarah 250'} },
  { ar:{label:'دعاء العفو',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'رواه الترمذي'},
    en:{label:'Dua for Forgiveness',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'O Allah, You are Forgiving and love forgiveness, so forgive me — Tirmidhi'},
    fr:{label:'Dua pour le Pardon',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'Ô Allah, Tu es Pardonneur et Tu aimes le pardon, alors pardonne-moi — Tirmidhi'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor which You have bestowed upon me — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'khuluq-xp';
const BADGES_KEY = 'khuluq-badges';
const READ_KEY = 'khuluq-read';
const STREAK_KEY = 'khuluq-streak';
const MODE_KEY = 'khuluq-mode';
const QUIZ_BEST_KEY = 'khuluq-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Débutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Persévérant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabTraits'); if(_e) _e.textContent=t.tabTraits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=(document.getElementById('traitsTitle') || document.getElementById('cardsTitle')); if(_e) _e.textContent=t.traitsTitle; }
  { const _e=(document.getElementById('traitsDesc') || document.getElementById('cardsDesc')); if(_e) _e.textContent=t.traitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  // Render sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  (document.getElementById('homeGrid')||{}).innerHTML= TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = (document.getElementById('traitsContainer') || document.getElementById('cardsContainer'));
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Très bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'خُلق مقروء':lang==='fr'?'Vertus lues':'Traits Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«خلق المسلم» كتاب يتناول ٢٠ خُلقاً إسلامياً بأسلوب عملي: الصدق، الأمانة، الوفاء، الإخلاص، أدب الحديث، سلامة الصدر، القوة، الحلم والصفح، الجود، الصبر، القصد والعفاف، النظافة، الحياء، الإخاء، الاتحاد، اختيار الأصدقاء، العزة، الرحمة، العلم والعقل، والانتفاع بالوقت. مبني على حديث: «إنما بُعثت لأتمم مكارم الأخلاق».',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "خلق المسلم" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending women\'s rights in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"The Muslim\'s Character" covers 20 virtues: Truthfulness, Trustworthiness, Loyalty, Sincerity, Speech Etiquette, Pure Heart, Strength, Forbearance, Generosity, Patience, Moderation, Cleanliness, Modesty, Brotherhood, Unity, Choosing Friends, Dignity, Mercy, Knowledge, and Valuing Time. Built on the hadith: "I was sent to perfect noble character."',
      sourcesTitle: 'Sources',
      sources: ['"The Muslim\'s Character" (Khuluq al-Muslim) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme \"Le Litteraire de la Predication\". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '\"Le Caractere du Musulman\" couvre 20 vertus : Veracite, Fiabilite, Loyaute, Sincerite, Etiquette de la Parole, Purete du Coeur, Force, Clemence, Generosite, Patience, Moderation, Proprete, Pudeur, Fraternite, Unite, Choix des Amis, Dignite, Misericorde, Savoir, et Valeur du Temps. Fonde sur le hadith : \"J\'ai ete envoye pour parfaire les nobles caracteres.\"',
      sourcesTitle: 'Sources',
      sources: ['"Le Caractere du Musulman" (Khuluq al-Muslim) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "خلق المسلم" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ خُلق، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/khuluq-al-muslim'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Muslim\'s Character" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 traits, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/khuluq-al-muslim'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"Le Caractere du Musulman" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 vertus, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/khuluq-al-muslim'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ خُلقاً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بحسن الخلق','⭐ أكمل ٢٠ خُلقاً لتصبح خبيراً'],
    en: ['📖 Read a new trait every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for good character','⭐ Complete all 20 traits to become an Expert'],
    fr: ['📖 Lisez une nouvelle vertu chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour le bon caractere','⭐ Completez les 20 vertus pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set age mode class
  document.body.classList.toggle('young-mode', ageMode === 'young');
  // Update streak
  updateStreak();
  // Init
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
