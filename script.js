// Vocabulary data with difficulty levels and contextual sentences
const vocabulary = {
    french: {
        house: [
            { 
                word: "maison", 
                translation: "house", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "C'est ma maison.",
                        translation: "This is my house."
                    },
                    intermediate: {
                        sentence: "J'habite dans une grande maison.",
                        translation: "I live in a big house."
                    },
                    advanced: {
                        sentence: "Nous avons acheté une maison moderne avec un jardin.",
                        translation: "We bought a modern house with a garden."
                    }
                }
            },
            { 
                word: "chambre", 
                translation: "bedroom", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "Ma chambre est grande.",
                        translation: "My bedroom is big."
                    },
                    intermediate: {
                        sentence: "Je dors dans ma chambre.",
                        translation: "I sleep in my bedroom."
                    },
                    advanced: {
                        sentence: "La chambre d'enfant est décorée avec des jouets.",
                        translation: "The children's room is decorated with toys."
                    }
                }
            },
            { 
                word: "cuisine", 
                translation: "kitchen", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "La cuisine est propre.",
                        translation: "The kitchen is clean."
                    },
                    intermediate: {
                        sentence: "Je cuisine dans la cuisine.",
                        translation: "I cook in the kitchen."
                    },
                    advanced: {
                        sentence: "Notre cuisine moderne a tous les appareils nécessaires.",
                        translation: "Our modern kitchen has all the necessary appliances."
                    }
                }
            },
            { 
                word: "salle de bain", 
                translation: "bathroom", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "La salle de bain est là.",
                        translation: "The bathroom is there."
                    },
                    intermediate: {
                        sentence: "Je me douche dans la salle de bain.",
                        translation: "I shower in the bathroom."
                    },
                    advanced: {
                        sentence: "La salle de bain principale a une baignoire et une douche.",
                        translation: "The main bathroom has a bathtub and a shower."
                    }
                }
            },
            { 
                word: "salon", 
                translation: "living room", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "Le salon est confortable.",
                        translation: "The living room is comfortable."
                    },
                    intermediate: {
                        sentence: "Nous regardons la télévision dans le salon.",
                        translation: "We watch television in the living room."
                    },
                    advanced: {
                        sentence: "Le salon spacieux est meublé avec des canapés élégants.",
                        translation: "The spacious living room is furnished with elegant sofas."
                    }
                }
            },
            { 
                word: "fenêtre", 
                translation: "window", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "La fenêtre est ouverte.",
                        translation: "The window is open."
                    },
                    intermediate: {
                        sentence: "Je regarde par la fenêtre.",
                        translation: "I look through the window."
                    },
                    advanced: {
                        sentence: "Les grandes fenêtres laissent entrer beaucoup de lumière naturelle.",
                        translation: "The large windows let in a lot of natural light."
                    }
                }
            },
            { 
                word: "porte", 
                translation: "door", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "La porte est fermée.",
                        translation: "The door is closed."
                    },
                    intermediate: {
                        sentence: "Je frappe à la porte.",
                        translation: "I knock on the door."
                    },
                    advanced: {
                        sentence: "La porte d'entrée est en bois massif avec une poignée en laiton.",
                        translation: "The front door is made of solid wood with a brass handle."
                    }
                }
            },
            { 
                word: "table", 
                translation: "table", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "La table est ronde.",
                        translation: "The table is round."
                    },
                    intermediate: {
                        sentence: "Nous mangeons à la table.",
                        translation: "We eat at the table."
                    },
                    advanced: {
                        sentence: "La table de salle à manger peut accueillir huit personnes.",
                        translation: "The dining table can accommodate eight people."
                    }
                }
            },
            { 
                word: "chaise", 
                translation: "chair", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "La chaise est confortable.",
                        translation: "The chair is comfortable."
                    },
                    intermediate: {
                        sentence: "Je m'assois sur la chaise.",
                        translation: "I sit on the chair."
                    },
                    advanced: {
                        sentence: "Les chaises de bureau sont ergonomiques pour le travail.",
                        translation: "The office chairs are ergonomic for work."
                    }
                }
            },
            { 
                word: "lit", 
                translation: "bed", 
                category: "house",
                sentences: {
                    basic: {
                        sentence: "Le lit est grand.",
                        translation: "The bed is big."
                    },
                    intermediate: {
                        sentence: "Je dors dans mon lit.",
                        translation: "I sleep in my bed."
                    },
                    advanced: {
                        sentence: "Le lit king-size est recouvert de draps en coton égyptien.",
                        translation: "The king-size bed is covered with Egyptian cotton sheets."
                    }
                }
            }
        ],
        activities: [
            { 
                word: "lire", 
                translation: "to read", 
                category: "activities",
                sentences: {
                    basic: { sentence: "Je lis un livre.", translation: "I read a book." },
                    intermediate: { sentence: "J'aime lire des romans.", translation: "I like reading novels." },
                    advanced: { sentence: "Je lis quotidiennement pour améliorer mon vocabulaire.", translation: "I read daily to improve my vocabulary." }
                }
            },
            { 
                word: "écrire", 
                translation: "to write", 
                category: "activities",
                sentences: {
                    basic: { sentence: "J'écris une lettre.", translation: "I write a letter." },
                    intermediate: { sentence: "J'écris dans mon journal.", translation: "I write in my journal." },
                    advanced: { sentence: "J'écris des articles pour un magazine local.", translation: "I write articles for a local magazine." }
                }
            },
            { 
                word: "danser", 
                translation: "to dance", 
                category: "activities",
                sentences: {
                    basic: { sentence: "Je danse bien.", translation: "I dance well." },
                    intermediate: { sentence: "J'aime danser la salsa.", translation: "I like dancing salsa." },
                    advanced: { sentence: "Je danse professionnellement dans une compagnie de ballet.", translation: "I dance professionally in a ballet company." }
                }
            },
            { 
                word: "chanter", 
                translation: "to sing", 
                category: "activities",
                sentences: {
                    basic: { sentence: "Je chante une chanson.", translation: "I sing a song." },
                    intermediate: { sentence: "Je chante dans une chorale.", translation: "I sing in a choir." },
                    advanced: { sentence: "Je chante dans un groupe de musique jazz.", translation: "I sing in a jazz music group." }
                }
            },
            { 
                word: "nager", 
                translation: "to swim", 
                category: "activities",
                sentences: {
                    basic: { sentence: "Je nage dans la piscine.", translation: "I swim in the pool." },
                    intermediate: { sentence: "J'aime nager dans l'océan.", translation: "I like swimming in the ocean." },
                    advanced: { sentence: "Je nage en compétition depuis mon enfance.", translation: "I have been swimming competitively since childhood." }
                }
            },
            { 
                word: "courir", 
                translation: "to run", 
                category: "activities",
                sentences: {
                    basic: { sentence: "Je cours vite.", translation: "I run fast." },
                    intermediate: { sentence: "Je cours dans le parc.", translation: "I run in the park." },
                    advanced: { sentence: "Je cours des marathons chaque année.", translation: "I run marathons every year." }
                }
            },
            { 
                word: "marcher", 
                translation: "to walk", 
                category: "activities",
                sentences: {
                    basic: { sentence: "Je marche lentement.", translation: "I walk slowly." },
                    intermediate: { sentence: "Je marche au travail.", translation: "I walk to work." },
                    advanced: { sentence: "Je marche en montagne pendant les vacances.", translation: "I hike in the mountains during vacations." }
                }
            },
            { 
                word: "jouer", 
                translation: "to play", 
                category: "activities",
                sentences: {
                    basic: { sentence: "Je joue au football.", translation: "I play football." },
                    intermediate: { sentence: "Je joue de la guitare.", translation: "I play the guitar." },
                    advanced: { sentence: "Je joue dans une équipe de football professionnelle.", translation: "I play in a professional football team." }
                }
            },
            { 
                word: "étudier", 
                translation: "to study", 
                category: "activities",
                sentences: {
                    basic: { sentence: "J'étudie le français.", translation: "I study French." },
                    intermediate: { sentence: "J'étudie à l'université.", translation: "I study at university." },
                    advanced: { sentence: "J'étudie la médecine pour devenir médecin.", translation: "I study medicine to become a doctor." }
                }
            },
            { 
                word: "travailler", 
                translation: "to work", 
                category: "activities",
                sentences: {
                    basic: { sentence: "Je travaille dur.", translation: "I work hard." },
                    intermediate: { sentence: "Je travaille dans un bureau.", translation: "I work in an office." },
                    advanced: { sentence: "Je travaille comme ingénieur dans une entreprise technologique.", translation: "I work as an engineer in a technology company." }
                }
            }
        ],
        verbs: [
            { word: "être", translation: "to be", category: "verbs" },
            { word: "avoir", translation: "to have", category: "verbs" },
            { word: "faire", translation: "to do/make", category: "verbs" },
            { word: "aller", translation: "to go", category: "verbs" },
            { word: "venir", translation: "to come", category: "verbs" },
            { word: "voir", translation: "to see", category: "verbs" },
            { word: "parler", translation: "to speak", category: "verbs" },
            { word: "manger", translation: "to eat", category: "verbs" },
            { word: "boire", translation: "to drink", category: "verbs" },
            { word: "dormir", translation: "to sleep", category: "verbs" }
        ],
        food: [
            { word: "pain", translation: "bread", category: "food" },
            { word: "fromage", translation: "cheese", category: "food" },
            { word: "pomme", translation: "apple", category: "food" },
            { word: "banane", translation: "banana", category: "food" },
            { word: "lait", translation: "milk", category: "food" },
            { word: "eau", translation: "water", category: "food" },
            { word: "café", translation: "coffee", category: "food" },
            { word: "thé", translation: "tea", category: "food" },
            { word: "viande", translation: "meat", category: "food" },
            { word: "poisson", translation: "fish", category: "food" }
        ]
    },
    chinese: {
        house: [
            { 
                word: "房子", 
                translation: "house", 
                pinyin: "fángzi", 
                category: "house",
                sentences: {
                    basic: { sentence: "这是我的房子。", translation: "This is my house." },
                    intermediate: { sentence: "我住在一个大房子里。", translation: "I live in a big house." },
                    advanced: { sentence: "我们买了一栋带花园的现代房子。", translation: "We bought a modern house with a garden." }
                }
            },
            { 
                word: "卧室", 
                translation: "bedroom", 
                pinyin: "wòshì", 
                category: "house",
                sentences: {
                    basic: { sentence: "我的卧室很大。", translation: "My bedroom is big." },
                    intermediate: { sentence: "我在卧室里睡觉。", translation: "I sleep in my bedroom." },
                    advanced: { sentence: "儿童房装饰着各种玩具。", translation: "The children's room is decorated with various toys." }
                }
            },
            { 
                word: "厨房", 
                translation: "kitchen", 
                pinyin: "chúfáng", 
                category: "house",
                sentences: {
                    basic: { sentence: "厨房很干净。", translation: "The kitchen is clean." },
                    intermediate: { sentence: "我在厨房里做饭。", translation: "I cook in the kitchen." },
                    advanced: { sentence: "我们的现代厨房配备了所有必要的电器。", translation: "Our modern kitchen is equipped with all necessary appliances." }
                }
            },
            { 
                word: "浴室", 
                translation: "bathroom", 
                pinyin: "yùshì", 
                category: "house",
                sentences: {
                    basic: { sentence: "浴室在那里。", translation: "The bathroom is there." },
                    intermediate: { sentence: "我在浴室里洗澡。", translation: "I shower in the bathroom." },
                    advanced: { sentence: "主浴室有浴缸和淋浴。", translation: "The main bathroom has a bathtub and shower." }
                }
            },
            { 
                word: "客厅", 
                translation: "living room", 
                pinyin: "kètīng", 
                category: "house",
                sentences: {
                    basic: { sentence: "客厅很舒适。", translation: "The living room is comfortable." },
                    intermediate: { sentence: "我们在客厅里看电视。", translation: "We watch TV in the living room." },
                    advanced: { sentence: "宽敞的客厅配有优雅的沙发。", translation: "The spacious living room is furnished with elegant sofas." }
                }
            },
            { 
                word: "窗户", 
                translation: "window", 
                pinyin: "chuānghu", 
                category: "house",
                sentences: {
                    basic: { sentence: "窗户开着。", translation: "The window is open." },
                    intermediate: { sentence: "我透过窗户看外面。", translation: "I look outside through the window." },
                    advanced: { sentence: "大窗户让很多自然光进来。", translation: "The large windows let in a lot of natural light." }
                }
            },
            { 
                word: "门", 
                translation: "door", 
                pinyin: "mén", 
                category: "house",
                sentences: {
                    basic: { sentence: "门关着。", translation: "The door is closed." },
                    intermediate: { sentence: "我敲门。", translation: "I knock on the door." },
                    advanced: { sentence: "前门是实木做的，配有黄铜把手。", translation: "The front door is made of solid wood with a brass handle." }
                }
            },
            { 
                word: "桌子", 
                translation: "table", 
                pinyin: "zhuōzi", 
                category: "house",
                sentences: {
                    basic: { sentence: "桌子是圆的。", translation: "The table is round." },
                    intermediate: { sentence: "我们在桌子旁吃饭。", translation: "We eat at the table." },
                    advanced: { sentence: "餐厅的桌子可以容纳八个人。", translation: "The dining table can accommodate eight people." }
                }
            },
            { 
                word: "椅子", 
                translation: "chair", 
                pinyin: "yǐzi", 
                category: "house",
                sentences: {
                    basic: { sentence: "椅子很舒服。", translation: "The chair is comfortable." },
                    intermediate: { sentence: "我坐在椅子上。", translation: "I sit on the chair." },
                    advanced: { sentence: "办公椅符合人体工程学，适合工作。", translation: "The office chairs are ergonomic and suitable for work." }
                }
            },
            { 
                word: "床", 
                translation: "bed", 
                pinyin: "chuáng", 
                category: "house",
                sentences: {
                    basic: { sentence: "床很大。", translation: "The bed is big." },
                    intermediate: { sentence: "我在床上睡觉。", translation: "I sleep in my bed." },
                    advanced: { sentence: "大床铺着埃及棉床单。", translation: "The king-size bed is covered with Egyptian cotton sheets." }
                }
            }
        ],
        activities: [
            { 
                word: "读", 
                translation: "to read", 
                pinyin: "dú", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我读书。", translation: "I read a book." },
                    intermediate: { sentence: "我喜欢读小说。", translation: "I like reading novels." },
                    advanced: { sentence: "我每天读书来提高词汇量。", translation: "I read daily to improve my vocabulary." }
                }
            },
            { 
                word: "写", 
                translation: "to write", 
                pinyin: "xiě", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我写信。", translation: "I write a letter." },
                    intermediate: { sentence: "我写日记。", translation: "I write in my journal." },
                    advanced: { sentence: "我为当地杂志写文章。", translation: "I write articles for a local magazine." }
                }
            },
            { 
                word: "跳舞", 
                translation: "to dance", 
                pinyin: "tiàowǔ", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我跳舞跳得好。", translation: "I dance well." },
                    intermediate: { sentence: "我喜欢跳萨尔萨舞。", translation: "I like dancing salsa." },
                    advanced: { sentence: "我在芭蕾舞团专业跳舞。", translation: "I dance professionally in a ballet company." }
                }
            },
            { 
                word: "唱歌", 
                translation: "to sing", 
                pinyin: "chànggē", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我唱歌。", translation: "I sing a song." },
                    intermediate: { sentence: "我在合唱团唱歌。", translation: "I sing in a choir." },
                    advanced: { sentence: "我在爵士乐队唱歌。", translation: "I sing in a jazz band." }
                }
            },
            { 
                word: "游泳", 
                translation: "to swim", 
                pinyin: "yóuyǒng", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我在游泳池游泳。", translation: "I swim in the pool." },
                    intermediate: { sentence: "我喜欢在海里游泳。", translation: "I like swimming in the ocean." },
                    advanced: { sentence: "我从童年开始就参加游泳比赛。", translation: "I have been swimming competitively since childhood." }
                }
            },
            { 
                word: "跑步", 
                translation: "to run", 
                pinyin: "pǎobù", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我跑得快。", translation: "I run fast." },
                    intermediate: { sentence: "我在公园里跑步。", translation: "I run in the park." },
                    advanced: { sentence: "我每年都参加马拉松比赛。", translation: "I run marathons every year." }
                }
            },
            { 
                word: "走路", 
                translation: "to walk", 
                pinyin: "zǒulù", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我慢慢走路。", translation: "I walk slowly." },
                    intermediate: { sentence: "我走路去上班。", translation: "I walk to work." },
                    advanced: { sentence: "我假期里在山上徒步旅行。", translation: "I hike in the mountains during vacations." }
                }
            },
            { 
                word: "玩", 
                translation: "to play", 
                pinyin: "wán", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我踢足球。", translation: "I play football." },
                    intermediate: { sentence: "我弹吉他。", translation: "I play the guitar." },
                    advanced: { sentence: "我在职业足球队踢球。", translation: "I play in a professional football team." }
                }
            },
            { 
                word: "学习", 
                translation: "to study", 
                pinyin: "xuéxí", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我学习中文。", translation: "I study Chinese." },
                    intermediate: { sentence: "我在大学学习。", translation: "I study at university." },
                    advanced: { sentence: "我学习医学，想成为医生。", translation: "I study medicine to become a doctor." }
                }
            },
            { 
                word: "工作", 
                translation: "to work", 
                pinyin: "gōngzuò", 
                category: "activities",
                sentences: {
                    basic: { sentence: "我努力工作。", translation: "I work hard." },
                    intermediate: { sentence: "我在办公室工作。", translation: "I work in an office." },
                    advanced: { sentence: "我在科技公司当工程师。", translation: "I work as an engineer in a technology company." }
                }
            }
        ],
        verbs: [
            { 
                word: "是", 
                translation: "to be", 
                pinyin: "shì", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "我是学生。", translation: "I am a student." },
                    intermediate: { sentence: "这是我的书。", translation: "This is my book." },
                    advanced: { sentence: "他是我见过的最聪明的人。", translation: "He is the smartest person I have ever met." }
                }
            },
            { 
                word: "有", 
                translation: "to have", 
                pinyin: "yǒu", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "我有一本书。", translation: "I have a book." },
                    intermediate: { sentence: "我有两个兄弟。", translation: "I have two brothers." },
                    advanced: { sentence: "我有机会去国外学习。", translation: "I have the opportunity to study abroad." }
                }
            },
            { 
                word: "做", 
                translation: "to do/make", 
                pinyin: "zuò", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "我做作业。", translation: "I do homework." },
                    intermediate: { sentence: "我做晚饭。", translation: "I make dinner." },
                    advanced: { sentence: "我做了一个重要的决定。", translation: "I made an important decision." }
                }
            },
            { 
                word: "去", 
                translation: "to go", 
                pinyin: "qù", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "我去学校。", translation: "I go to school." },
                    intermediate: { sentence: "我去商店买东西。", translation: "I go to the store to buy things." },
                    advanced: { sentence: "我去国外旅行了三个月。", translation: "I went abroad for three months." }
                }
            },
            { 
                word: "来", 
                translation: "to come", 
                pinyin: "lái", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "他来我家。", translation: "He comes to my house." },
                    intermediate: { sentence: "我的朋友来参加聚会。", translation: "My friend comes to the party." },
                    advanced: { sentence: "很多游客来参观这个历史古迹。", translation: "Many tourists come to visit this historical site." }
                }
            },
            { 
                word: "看", 
                translation: "to see", 
                pinyin: "kàn", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "我看电视。", translation: "I watch TV." },
                    intermediate: { sentence: "我看电影。", translation: "I watch movies." },
                    advanced: { sentence: "我看过很多经典文学作品。", translation: "I have read many classic literary works." }
                }
            },
            { 
                word: "说", 
                translation: "to speak", 
                pinyin: "shuō", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "我说中文。", translation: "I speak Chinese." },
                    intermediate: { sentence: "我说英语和中文。", translation: "I speak English and Chinese." },
                    advanced: { sentence: "我说多种语言，包括法语和日语。", translation: "I speak multiple languages, including French and Japanese." }
                }
            },
            { 
                word: "吃", 
                translation: "to eat", 
                pinyin: "chī", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "我吃饭。", translation: "I eat rice." },
                    intermediate: { sentence: "我吃中餐。", translation: "I eat Chinese food." },
                    advanced: { sentence: "我喜欢吃各种国际美食。", translation: "I like eating various international cuisines." }
                }
            },
            { 
                word: "喝", 
                translation: "to drink", 
                pinyin: "hē", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "我喝水。", translation: "I drink water." },
                    intermediate: { sentence: "我喝茶和咖啡。", translation: "I drink tea and coffee." },
                    advanced: { sentence: "我喜欢喝各种茶，特别是绿茶和红茶。", translation: "I like drinking various teas, especially green tea and black tea." }
                }
            },
            { 
                word: "睡觉", 
                translation: "to sleep", 
                pinyin: "shuìjiào", 
                category: "verbs",
                sentences: {
                    basic: { sentence: "我睡觉。", translation: "I sleep." },
                    intermediate: { sentence: "我晚上十点睡觉。", translation: "I sleep at 10 PM." },
                    advanced: { sentence: "我每天保证八小时睡眠以保持健康。", translation: "I ensure eight hours of sleep daily to maintain health." }
                }
            }
        ],
        food: [
            { 
                word: "面包", 
                translation: "bread", 
                pinyin: "miànbāo", 
                category: "food",
                sentences: {
                    basic: { sentence: "我吃面包。", translation: "I eat bread." },
                    intermediate: { sentence: "我喜欢新鲜的面包。", translation: "I like fresh bread." },
                    advanced: { sentence: "我每天从面包店买新鲜的面包。", translation: "I buy fresh bread from the bakery every day." }
                }
            },
            { 
                word: "奶酪", 
                translation: "cheese", 
                pinyin: "nǎilào", 
                category: "food",
                sentences: {
                    basic: { sentence: "奶酪很好吃。", translation: "Cheese is delicious." },
                    intermediate: { sentence: "我喜欢吃奶酪配红酒。", translation: "I like eating cheese with red wine." },
                    advanced: { sentence: "我品尝过各种来自世界各地的奶酪。", translation: "I have tasted various cheeses from around the world." }
                }
            },
            { 
                word: "苹果", 
                translation: "apple", 
                pinyin: "píngguǒ", 
                category: "food",
                sentences: {
                    basic: { sentence: "我吃苹果。", translation: "I eat an apple." },
                    intermediate: { sentence: "我喜欢红苹果。", translation: "I like red apples." },
                    advanced: { sentence: "我每天吃一个苹果来保持健康。", translation: "I eat an apple daily to stay healthy." }
                }
            },
            { 
                word: "香蕉", 
                translation: "banana", 
                pinyin: "xiāngjiāo", 
                category: "food",
                sentences: {
                    basic: { sentence: "香蕉很甜。", translation: "Bananas are sweet." },
                    intermediate: { sentence: "我早餐吃香蕉。", translation: "I eat bananas for breakfast." },
                    advanced: { sentence: "我用香蕉做健康的冰沙。", translation: "I make healthy smoothies with bananas." }
                }
            },
            { 
                word: "牛奶", 
                translation: "milk", 
                pinyin: "niúnǎi", 
                category: "food",
                sentences: {
                    basic: { sentence: "我喝牛奶。", translation: "I drink milk." },
                    intermediate: { sentence: "我每天喝牛奶。", translation: "I drink milk every day." },
                    advanced: { sentence: "我喝有机牛奶来获得更好的营养。", translation: "I drink organic milk for better nutrition." }
                }
            },
            { 
                word: "水", 
                translation: "water", 
                pinyin: "shuǐ", 
                category: "food",
                sentences: {
                    basic: { sentence: "我喝水。", translation: "I drink water." },
                    intermediate: { sentence: "我每天喝八杯水。", translation: "I drink eight glasses of water daily." },
                    advanced: { sentence: "我喝过滤水来确保水质安全。", translation: "I drink filtered water to ensure water safety." }
                }
            },
            { 
                word: "咖啡", 
                translation: "coffee", 
                pinyin: "kāfēi", 
                category: "food",
                sentences: {
                    basic: { sentence: "我喝咖啡。", translation: "I drink coffee." },
                    intermediate: { sentence: "我早上喝咖啡。", translation: "I drink coffee in the morning." },
                    advanced: { sentence: "我喜欢品尝各种咖啡豆的独特风味。", translation: "I like tasting the unique flavors of various coffee beans." }
                }
            },
            { 
                word: "茶", 
                translation: "tea", 
                pinyin: "chá", 
                category: "food",
                sentences: {
                    basic: { sentence: "我喝茶。", translation: "I drink tea." },
                    intermediate: { sentence: "我喜欢绿茶。", translation: "I like green tea." },
                    advanced: { sentence: "我收集各种茶叶，包括红茶、绿茶和花茶。", translation: "I collect various teas, including black tea, green tea, and flower tea." }
                }
            },
            { 
                word: "肉", 
                translation: "meat", 
                pinyin: "ròu", 
                category: "food",
                sentences: {
                    basic: { sentence: "我吃肉。", translation: "I eat meat." },
                    intermediate: { sentence: "我喜欢吃牛肉。", translation: "I like eating beef." },
                    advanced: { sentence: "我选择有机肉类来支持可持续农业。", translation: "I choose organic meat to support sustainable agriculture." }
                }
            },
            { 
                word: "鱼", 
                translation: "fish", 
                pinyin: "yú", 
                category: "food",
                sentences: {
                    basic: { sentence: "我吃鱼。", translation: "I eat fish." },
                    intermediate: { sentence: "我喜欢吃三文鱼。", translation: "I like eating salmon." },
                    advanced: { sentence: "我每周吃两次鱼来获得omega-3脂肪酸。", translation: "I eat fish twice a week to get omega-3 fatty acids." }
                }
            }
        ]
    }
};

class QuickCardApp {
    constructor() {
        this.currentLanguage = 'french';
        this.currentCategory = 'house';
        this.currentDifficulty = 'basic';
        this.currentCardIndex = 0;
        this.currentCards = [];
        this.isDragging = false;
        this.startX = 0;
        this.currentX = 0;
        this.speechSynthesis = window.speechSynthesis;
        this.isPlaying = false;
        
        this.init();
    }

    init() {
        this.loadCards();
        this.setupEventListeners();
        this.updateUI();
        this.initializeSpeech();
    }

    initializeSpeech() {
        // Wait for voices to load
        if (this.speechSynthesis.onvoiceschanged !== undefined) {
            this.speechSynthesis.onvoiceschanged = () => {
                const voices = this.speechSynthesis.getVoices();
                console.log('Voices loaded:', voices.length);
                this.logAvailableVoices();
            };
        }
        
        // If voices are already loaded
        if (this.speechSynthesis.getVoices().length > 0) {
            this.logAvailableVoices();
        }
    }

    logAvailableVoices() {
        const voices = this.speechSynthesis.getVoices();
        const frenchVoices = voices.filter(v => v.lang.startsWith('fr'));
        const chineseVoices = voices.filter(v => v.lang.startsWith('zh'));
        
        console.log('Available French voices:', frenchVoices.map(v => `${v.name} (${v.lang})`));
        console.log('Available Chinese voices:', chineseVoices.map(v => `${v.name} (${v.lang})`));
    }

    loadCards() {
        this.currentCards = vocabulary[this.currentLanguage][this.currentCategory];
        this.currentCardIndex = 0;
        this.renderCards();
        this.updateProgress();
    }

    renderCards() {
        const cardStack = document.querySelector('.card-stack');
        cardStack.innerHTML = '';

        // Create cards for current, previous, and next
        const indices = [
            this.currentCardIndex - 1,
            this.currentCardIndex,
            this.currentCardIndex + 1
        ].filter(index => index >= 0 && index < this.currentCards.length);

        indices.forEach((index, position) => {
            const card = this.createCard(this.currentCards[index], index, position);
            cardStack.appendChild(card);
        });
    }

    createCard(cardData, index, position) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;

        if (position === 1) {
            card.classList.add('active');
        } else if (position === 0) {
            card.classList.add('prev');
        } else if (position === 2) {
            card.classList.add('next');
        }

        const categoryLabel = this.getCategoryLabel(cardData.category);
        
        // Get sentence based on current difficulty
        const sentenceData = cardData.sentences ? cardData.sentences[this.currentDifficulty] : null;
        
        card.innerHTML = `
            <div class="card-category">${categoryLabel}</div>
            <div class="card-word">${cardData.word}</div>
            <div class="card-translation">${cardData.translation}</div>
            ${cardData.pinyin ? `<div class="card-pinyin">${cardData.pinyin}</div>` : ''}
            ${sentenceData ? `
                <div class="card-sentence">${sentenceData.sentence}</div>
                <div class="card-sentence-translation">${sentenceData.translation}</div>
            ` : ''}
        `;

        return card;
    }

    getCategoryLabel(category) {
        const labels = {
            house: 'House',
            activities: 'Activities',
            verbs: 'Verbs',
            food: 'Food'
        };
        return labels[category] || category;
    }

    setupEventListeners() {
        // Language selector
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentLanguage = e.target.dataset.lang;
                this.loadCards();
                this.updateUI();
            });
        });

        // Difficulty selector
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentDifficulty = e.target.dataset.difficulty;
                this.renderCards();
                this.updateUI();
            });
        });

        // Category selector
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.loadCards();
                this.updateUI();
            });
        });

        // Navigation buttons
        document.getElementById('prevBtn').addEventListener('click', () => this.previousCard());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextCard());
        document.getElementById('soundBtn').addEventListener('click', () => this.playCurrentWord());

        // Touch/swipe events
        const cardStack = document.querySelector('.card-stack');
        
        cardStack.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        cardStack.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        cardStack.addEventListener('touchend', (e) => this.handleTouchEnd(e));

        // Mouse events for desktop
        cardStack.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        cardStack.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        cardStack.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        cardStack.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousCard();
            } else if (e.key === 'ArrowRight') {
                this.nextCard();
            } else if (e.key === ' ' || e.key === 'Space') {
                e.preventDefault();
                this.playCurrentWord();
            }
        });
    }

    handleTouchStart(e) {
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
        this.currentX = this.startX;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        this.currentX = e.touches[0].clientX;
        this.updateCardTransform();
    }

    handleTouchEnd(e) {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.handleSwipeEnd();
    }

    handleMouseDown(e) {
        this.isDragging = true;
        this.startX = e.clientX;
        this.currentX = this.startX;
        e.preventDefault();
    }

    handleMouseMove(e) {
        if (!this.isDragging) return;
        this.currentX = e.clientX;
        this.updateCardTransform();
    }

    handleMouseUp(e) {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.handleSwipeEnd();
    }

    handleMouseLeave(e) {
        if (this.isDragging) {
            this.isDragging = false;
            this.handleSwipeEnd();
        }
    }

    updateCardTransform() {
        const activeCard = document.querySelector('.card.active');
        if (!activeCard) return;

        const deltaX = this.currentX - this.startX;
        const maxDelta = 100;
        const progress = Math.min(Math.abs(deltaX) / maxDelta, 1);
        const rotation = (deltaX / maxDelta) * 20;

        activeCard.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
        activeCard.style.opacity = 1 - progress * 0.3;
    }

    handleSwipeEnd() {
        const activeCard = document.querySelector('.card.active');
        if (!activeCard) return;

        const deltaX = this.currentX - this.startX;
        const threshold = 50;

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                this.previousCard();
            } else {
                this.nextCard();
            }
        } else {
            // Reset card position
            activeCard.style.transform = '';
            activeCard.style.opacity = '';
        }
    }

    previousCard() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.renderCards();
            this.updateProgress();
        }
    }

    nextCard() {
        if (this.currentCardIndex < this.currentCards.length - 1) {
            this.currentCardIndex++;
            this.renderCards();
            this.updateProgress();
        }
    }

    updateProgress() {
        const progress = this.currentCards.length > 0 ? 
            ((this.currentCardIndex + 1) / this.currentCards.length) * 100 : 0;
        
        document.querySelector('.progress-fill').style.width = `${progress}%`;
        document.getElementById('progressPercent').textContent = `${Math.round(progress)}%`;
        document.getElementById('cardCount').textContent = `${this.currentCardIndex + 1}/${this.currentCards.length}`;

        // Update button states
        document.getElementById('prevBtn').disabled = this.currentCardIndex === 0;
        document.getElementById('nextBtn').disabled = this.currentCardIndex === this.currentCards.length - 1;
    }

    playCurrentWord() {
        if (this.isPlaying) {
            this.stopSpeech();
            return;
        }

        const currentCard = this.currentCards[this.currentCardIndex];
        if (!currentCard) return;

        this.isPlaying = true;
        const soundBtn = document.getElementById('soundBtn');
        soundBtn.classList.add('playing');

        // Create speech utterance
        const utterance = new SpeechSynthesisUtterance(currentCard.word);
        
        // Set language and voice based on current selection
        if (this.currentLanguage === 'french') {
            utterance.lang = 'fr-FR';
            const frenchVoice = this.getBestFrenchVoice();
            if (frenchVoice) {
                utterance.voice = frenchVoice;
            } else {
                // Fallback: try to use any available voice with French language
                const voices = this.speechSynthesis.getVoices();
                const anyFrenchVoice = voices.find(v => v.lang.startsWith('fr'));
                if (anyFrenchVoice) {
                    utterance.voice = anyFrenchVoice;
                }
            }
        } else if (this.currentLanguage === 'chinese') {
            utterance.lang = 'zh-CN';
            const chineseVoice = this.getBestChineseVoice();
            if (chineseVoice) {
                utterance.voice = chineseVoice;
            } else {
                // Fallback: try to use any available voice with Chinese language
                const voices = this.speechSynthesis.getVoices();
                const anyChineseVoice = voices.find(v => v.lang.startsWith('zh'));
                if (anyChineseVoice) {
                    utterance.voice = anyChineseVoice;
                }
            }
        }

        utterance.rate = 0.7; // Slower for better pronunciation
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        // Handle speech end
        utterance.onend = () => {
            this.isPlaying = false;
            soundBtn.classList.remove('playing');
        };

        utterance.onerror = (event) => {
            console.log('Speech error:', event.error);
            this.isPlaying = false;
            soundBtn.classList.remove('playing');
            
            // Show user-friendly error message
            this.showVoiceError();
        };

        // Speak the word
        this.speechSynthesis.speak(utterance);
    }

    stopSpeech() {
        this.speechSynthesis.cancel();
        this.isPlaying = false;
        document.getElementById('soundBtn').classList.remove('playing');
    }

    getBestFrenchVoice() {
        const voices = this.speechSynthesis.getVoices();
        
        // Priority order for French voices
        const frenchVoiceNames = [
            'Thomas', 'Amelie', 'Julie', 'Paul', 'Marie', 'Pierre',
            'Google français', 'Microsoft Julie', 'Microsoft Paul'
        ];
        
        // First, try to find a voice with a French name
        for (const name of frenchVoiceNames) {
            const voice = voices.find(v => 
                v.name.includes(name) && v.lang.startsWith('fr')
            );
            if (voice) {
                console.log('Using French voice:', voice.name);
                return voice;
            }
        }
        
        // Then try any French voice with local service
        const localFrenchVoice = voices.find(voice => 
            voice.lang.startsWith('fr') && voice.localService
        );
        if (localFrenchVoice) {
            console.log('Using local French voice:', localFrenchVoice.name);
            return localFrenchVoice;
        }
        
        // Finally, any French voice
        const anyFrenchVoice = voices.find(voice => 
            voice.lang.startsWith('fr')
        );
        if (anyFrenchVoice) {
            console.log('Using available French voice:', anyFrenchVoice.name);
            return anyFrenchVoice;
        }
        
        console.log('No French voice found');
        return null;
    }

    getBestChineseVoice() {
        const voices = this.speechSynthesis.getVoices();
        
        // Priority order for Chinese voices
        const chineseVoiceNames = [
            'Ting-Ting', 'Sin-ji', 'Google 普通话', 'Microsoft Huihui',
            'Microsoft Kangkang', 'Google 國語', 'Microsoft Zhiwei'
        ];
        
        // First, try to find a voice with a Chinese name
        for (const name of chineseVoiceNames) {
            const voice = voices.find(v => 
                v.name.includes(name) && v.lang.startsWith('zh-CN')
            );
            if (voice) {
                console.log('Using Chinese voice:', voice.name);
                return voice;
            }
        }
        
        // Then try any Chinese voice with local service
        const localChineseVoice = voices.find(voice => 
            voice.lang.startsWith('zh-CN') && voice.localService
        );
        if (localChineseVoice) {
            console.log('Using local Chinese voice:', localChineseVoice.name);
            return localChineseVoice;
        }
        
        // Finally, any Chinese voice
        const anyChineseVoice = voices.find(voice => 
            voice.lang.startsWith('zh-CN')
        );
        if (anyChineseVoice) {
            console.log('Using available Chinese voice:', anyChineseVoice.name);
            return anyChineseVoice;
        }
        
        console.log('No Chinese voice found');
        return null;
    }

    showVoiceError() {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff6b6b;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 14px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        notification.textContent = 'Voice not available. Try refreshing the page.';
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }

    refreshVoices() {
        // Force reload of voices
        this.speechSynthesis.cancel();
        this.logAvailableVoices();
    }

    updateUI() {
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLanguage);
        });

        // Update difficulty buttons
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.difficulty === this.currentDifficulty);
        });

        // Update category buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === this.currentCategory);
        });

        this.updateProgress();
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuickCardApp();
}); 