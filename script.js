// Vocabulary data with difficulty levels and contextual sentences
const vocabulary = {
    french: {
        house: [
            {
              "word": "maison",
              "translation": "house",
              "category": "house",
              "sentences": {
                "basic": {
                  "sentence": "C'est ma maison.",
                  "translation": "This is my house."
                },
                "intermediate": {
                  "sentence": "J'habite dans une grande maison à la campagne.",
                  "translation": "I live in a large house in the countryside."
                },
                "advanced": {
                  "sentence": "Nous avons acheté une maison spacieuse avec un grand jardin pour les enfants.",
                  "translation": "We bought a spacious house with a big garden for the children."
                }
              }
            },
            {
              "word": "appartement",
              "translation": "apartment",
              "category": "house",
              "sentences": {
                "basic": {
                  "sentence": "Il vit dans un appartement.",
                  "translation": "He lives in an apartment."
                },
                "intermediate": {
                  "sentence": "Notre appartement est au troisième étage.",
                  "translation": "Our apartment is on the third floor."
                },
                "advanced": {
                  "sentence": "Cet appartement moderne offre une vue imprenable sur la ville.",
                  "translation": "This modern apartment offers a breathtaking view of the city."
                }
              }
            },
            {
              "word": "chambre",
              "translation": "bedroom",
              "category": "room",
              "sentences": {
                "basic": {
                  "sentence": "C'est ma chambre.",
                  "translation": "This is my bedroom."
                },
                "intermediate": {
                  "sentence": "La chambre est très confortable.",
                  "translation": "The bedroom is very comfortable."
                },
                "advanced": {
                  "sentence": "Chaque chambre dispose d'une salle de bain privative.",
                  "translation": "Each bedroom has a private bathroom."
                }
              }
            },
            {
              "word": "cuisine",
              "translation": "kitchen",
              "category": "room",
              "sentences": {
                "basic": {
                  "sentence": "Je cuisine dans la cuisine.",
                  "translation": "I cook in the kitchen."
                },
                "intermediate": {
                  "sentence": "La cuisine est équipée de tout le nécessaire.",
                  "translation": "The kitchen is equipped with everything necessary."
                },
                "advanced": {
                  "sentence": "Nous avons rénové la cuisine pour la rendre plus moderne et fonctionnelle.",
                  "translation": "We renovated the kitchen to make it more modern and functional."
                }
              }
            },
            {
              "word": "salle de bains",
              "translation": "bathroom",
              "category": "room",
              "sentences": {
                "basic": {
                  "sentence": "La salle de bains est propre.",
                  "translation": "The bathroom is clean."
                },
                "intermediate": {
                  "sentence": "Il y a une grande baignoire dans la salle de bains.",
                  "translation": "There is a large bathtub in the bathroom."
                },
                "advanced": {
                  "sentence": "La salle de bains principale dispose d'une douche à l'italienne et d'une double vasque.",
                  "translation": "The main bathroom features a walk-in shower and a double vanity."
                }
              }
            },
            {
              "word": "salon",
              "translation": "living room",
              "category": "room",
              "sentences": {
                "basic": {
                  "sentence": "Nous regardons la télévision dans le salon.",
                  "translation": "We watch TV in the living room."
                },
                "intermediate": {
                  "sentence": "Le salon est décoré avec goût.",
                  "translation": "The living room is tastefully decorated."
                },
                "advanced": {
                  "sentence": "Le grand salon lumineux est parfait pour recevoir des invités.",
                  "translation": "The large, bright living room is perfect for entertaining guests."
                }
              }
            },
            {
              "word": "salle à manger",
              "translation": "dining room",
              "category": "room",
              "sentences": {
                "basic": {
                  "sentence": "On mange dans la salle à manger.",
                  "translation": "We eat in the dining room."
                },
                "intermediate": {
                  "sentence": "La salle à manger est grande pour les repas de famille.",
                  "translation": "The dining room is large for family meals."
                },
                "advanced": {
                  "sentence": "Une table en bois massif domine la salle à manger, idéale pour les dîners formels.",
                  "translation": "A solid wood table dominates the dining room, ideal for formal dinners."
                }
              }
            },
            {
              "word": "jardin",
              "translation": "garden",
              "category": "exterior",
              "sentences": {
                "basic": {
                  "sentence": "Il y a des fleurs dans le jardin.",
                  "translation": "There are flowers in the garden."
                },
                "intermediate": {
                  "sentence": "Le jardin est très agréable en été.",
                  "translation": "The garden is very pleasant in summer."
                },
                "advanced": {
                  "sentence": "Le jardin paysager offre un havre de paix et de verdure.",
                  "translation": "The landscaped garden offers a haven of peace and greenery."
                }
              }
            },
            {
              "word": "balcon",
              "translation": "balcony",
              "category": "exterior",
              "sentences": {
                "basic": {
                  "sentence": "Le balcon est petit.",
                  "translation": "The balcony is small."
                },
                "intermediate": {
                  "sentence": "On prend le petit-déjeuner sur le balcon.",
                  "translation": "We have breakfast on the balcony."
                },
                "advanced": {
                  "sentence": "Profitez de la vue panoramique depuis le grand balcon ensoleillé.",
                  "translation": "Enjoy the panoramic view from the large, sunny balcony."
                }
              }
            },
            {
              "word": "terrasse",
              "translation": "terrace",
              "category": "exterior",
              "sentences": {
                "basic": {
                  "sentence": "La terrasse est grande.",
                  "translation": "The terrace is big."
                },
                "intermediate": {
                  "sentence": "Nous avons des meubles sur la terrasse.",
                  "translation": "We have furniture on the terrace."
                },
                "advanced": {
                  "sentence": "La vaste terrasse, idéale pour les réceptions en plein air, est accessible depuis le salon.",
                  "translation": "The large terrace, ideal for outdoor entertaining, is accessible from the living room."
                }
              }
            },
            {
              "word": "garage",
              "translation": "garage",
              "category": "exterior",
              "sentences": {
                "basic": {
                  "sentence": "La voiture est dans le garage.",
                  "translation": "The car is in the garage."
                },
                "intermediate": {
                  "sentence": "Le garage est assez grand pour deux voitures.",
                  "translation": "The garage is big enough for two cars."
                },
                "advanced": {
                  "sentence": "Le garage double est équipé d'une porte automatique pour plus de commodité.",
                  "translation": "The double garage is equipped with an automatic door for convenience."
                }
              }
            },
            {
              "word": "sous-sol",
              "translation": "basement",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Le sous-sol est sombre.",
                  "translation": "The basement is dark."
                },
                "intermediate": {
                  "sentence": "Nous avons une cave au sous-sol.",
                  "translation": "We have a cellar in the basement."
                },
                "advanced": {
                  "sentence": "Le sous-sol a été aménagé en salle de jeux et buanderie.",
                  "translation": "The basement has been converted into a game room and laundry room."
                }
              }
            },
            {
              "word": "grenier",
              "translation": "attic",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Le grenier est plein de vieilles choses.",
                  "translation": "The attic is full of old things."
                },
                "intermediate": {
                  "sentence": "Nous pouvons ranger des cartons dans le grenier.",
                  "translation": "We can store boxes in the attic."
                },
                "advanced": {
                  "sentence": "Le grenier offre un potentiel d'aménagement pour une chambre supplémentaire.",
                  "translation": "The attic offers potential for conversion into an additional bedroom."
                }
              }
            },
            {
              "word": "toit",
              "translation": "roof",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Le toit est rouge.",
                  "translation": "The roof is red."
                },
                "intermediate": {
                  "sentence": "Ils réparent le toit de la maison.",
                  "translation": "They are repairing the roof of the house."
                },
                "advanced": {
                  "sentence": "Le toit en tuiles romanes confère un charme traditionnel à la propriété.",
                  "translation": "The Roman tile roof gives a traditional charm to the property."
                }
              }
            },
            {
              "word": "fenêtre",
              "translation": "window",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Ouvre la fenêtre.",
                  "translation": "Open the window."
                },
                "intermediate": {
                  "sentence": "La fenêtre donne sur le jardin.",
                  "translation": "The window overlooks the garden."
                },
                "advanced": {
                  "sentence": "Les grandes fenêtres à double vitrage apportent beaucoup de lumière naturelle.",
                  "translation": "The large double-glazed windows let in a lot of natural light."
                }
              }
            },
            {
              "word": "porte",
              "translation": "door",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Ferme la porte.",
                  "translation": "Close the door."
                },
                "intermediate": {
                  "sentence": "La porte d'entrée est en bois.",
                  "translation": "The front door is made of wood."
                },
                "advanced": {
                  "sentence": "La porte blindée assure une sécurité optimale pour la maison.",
                  "translation": "The reinforced door ensures optimal security for the house."
                }
              }
            },
            {
              "word": "mur",
              "translation": "wall",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Le mur est blanc.",
                  "translation": "The wall is white."
                },
                "intermediate": {
                  "sentence": "Nous allons peindre le mur du salon.",
                  "translation": "We are going to paint the living room wall."
                },
                "advanced": {
                  "sentence": "Les murs porteurs ont été renforcés lors de la rénovation structurelle.",
                  "translation": "The load-bearing walls were reinforced during the structural renovation."
                }
              }
            },
            {
              "word": "sol",
              "translation": "floor (ground)",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Le sol est froid.",
                  "translation": "The floor is cold."
                },
                "intermediate": {
                  "sentence": "Il faut nettoyer le sol régulièrement.",
                  "translation": "You have to clean the floor regularly."
                },
                "advanced": {
                  "sentence": "Le parquet en chêne massif recouvre tout le sol du rez-de-chaussée.",
                  "translation": "The solid oak parquet covers the entire ground floor."
                }
              }
            },
            {
              "word": "plafond",
              "translation": "ceiling",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Le plafond est haut.",
                  "translation": "The ceiling is high."
                },
                "intermediate": {
                  "sentence": "Ils ont installé un nouveau luminaire au plafond.",
                  "translation": "They installed a new light fixture on the ceiling."
                },
                "advanced": {
                  "sentence": "Les moulures au plafond ajoutent une touche d'élégance à la pièce.",
                  "translation": "The ceiling moldings add a touch of elegance to the room."
                }
              }
            },
            {
              "word": "escalier",
              "translation": "stairs",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Monte les escaliers.",
                  "translation": "Go up the stairs."
                },
                "intermediate": {
                  "sentence": "L'escalier en colimaçon est magnifique.",
                  "translation": "The spiral staircase is beautiful."
                },
                "advanced": {
                  "sentence": "Un escalier majestueux en bois sculpté mène aux étages supérieurs.",
                  "translation": "A majestic carved wooden staircase leads to the upper floors."
                }
              }
            },
            {
              "word": "meubles",
              "translation": "furniture",
              "category": "furniture",
              "sentences": {
                "basic": {
                  "sentence": "J'ai acheté de nouveaux meubles.",
                  "translation": "I bought new furniture."
                },
                "intermediate": {
                  "sentence": "Tous les meubles sont inclus dans la location.",
                  "translation": "All the furniture is included in the rental."
                },
                "advanced": {
                  "sentence": "Les meubles anciens ont été restaurés avec soin pour préserver leur authenticité.",
                  "translation": "The antique furniture has been carefully restored to preserve its authenticity."
                }
              }
            },
            {
              "word": "lit",
              "translation": "bed",
              "category": "furniture",
              "sentences": {
                "basic": {
                  "sentence": "Mon lit est confortable.",
                  "translation": "My bed is comfortable."
                },
                "intermediate": {
                  "sentence": "J'ai un grand lit dans ma chambre.",
                  "translation": "I have a large bed in my bedroom."
                },
                "advanced": {
                  "sentence": "Le lit king-size avec matelas à mémoire de forme garantit un sommeil réparateur.",
                  "translation": "The king-size bed with memory foam mattress ensures a restful sleep."
                }
              }
            },
            {
              "word": "canapé",
              "translation": "sofa",
              "category": "furniture",
              "sentences": {
                "basic": {
                  "sentence": "Le canapé est doux.",
                  "translation": "The sofa is soft."
                },
                "intermediate": {
                  "sentence": "On s'assoit sur le canapé pour regarder un film.",
                  "translation": "We sit on the sofa to watch a movie."
                },
                "advanced": {
                  "sentence": "Le grand canapé d'angle modulable s'adapte parfaitement à l'espace du salon.",
                  "translation": "The large modular corner sofa fits perfectly into the living room space."
                }
              }
            },
            {
              "word": "table",
              "translation": "table",
              "category": "furniture",
              "sentences": {
                "basic": {
                  "sentence": "Mets la table.",
                  "translation": "Set the table."
                },
                "intermediate": {
                  "sentence": "La table de la salle à manger est en bois.",
                  "translation": "The dining room table is made of wood."
                },
                "advanced": {
                  "sentence": "Une table basse en verre trempé occupe le centre du salon, offrant un design épuré.",
                  "translation": "A tempered glass coffee table occupies the center of the living room, offering a sleek design."
                }
              }
            },
            {
              "word": "chaise",
              "translation": "chair",
              "category": "furniture",
              "sentences": {
                "basic": {
                  "sentence": "Assieds-toi sur la chaise.",
                  "translation": "Sit on the chair."
                },
                "intermediate": {
                  "sentence": "Il y a six chaises autour de la table.",
                  "translation": "There are six chairs around the table."
                },
                "advanced": {
                  "sentence": "Les chaises ergonomiques du bureau offrent un excellent soutien lombaire.",
                  "translation": "The ergonomic office chairs offer excellent lumbar support."
                }
              }
            },
            {
              "word": "armoire",
              "translation": "wardrobe / cupboard",
              "category": "furniture",
              "sentences": {
                "basic": {
                  "sentence": "Mes vêtements sont dans l'armoire.",
                  "translation": "My clothes are in the wardrobe."
                },
                "intermediate": {
                  "sentence": "L'armoire de la cuisine est pleine.",
                  "translation": "The kitchen cupboard is full."
                },
                "advanced": {
                  "sentence": "L'armoire encastrée maximise l'espace de rangement dans la chambre.",
                  "translation": "The built-in wardrobe maximizes storage space in the bedroom."
                }
              }
            },
            {
              "word": "bibliothèque",
              "translation": "bookshelf / library",
              "category": "furniture",
              "sentences": {
                "basic": {
                  "sentence": "J'ai une bibliothèque pleine de livres.",
                  "translation": "I have a bookshelf full of books."
                },
                "intermediate": {
                  "sentence": "La bibliothèque occupe tout un mur du bureau.",
                  "translation": "The bookshelf takes up an entire wall of the office."
                },
                "advanced": {
                  "sentence": "Une bibliothèque sur mesure a été conçue pour abriter une vaste collection d'ouvrages rares.",
                  "translation": "A custom-made bookshelf was designed to house a vast collection of rare books."
                }
              }
            },
            {
              "word": "miroir",
              "translation": "mirror",
              "category": "decoration",
              "sentences": {
                "basic": {
                  "sentence": "Regarde-toi dans le miroir.",
                  "translation": "Look at yourself in the mirror."
                },
                "intermediate": {
                  "sentence": "Il y a un grand miroir dans l'entrée.",
                  "translation": "There is a large mirror in the entryway."
                },
                "advanced": {
                  "sentence": "Le miroir biseauté encadré de bois doré ajoute une touche de sophistication.",
                  "translation": "The beveled mirror framed in gold wood adds a touch of sophistication."
                }
              }
            },
            {
              "word": "lampe",
              "translation": "lamp",
              "category": "decoration",
              "sentences": {
                "basic": {
                  "sentence": "Allume la lampe.",
                  "translation": "Turn on the lamp."
                },
                "intermediate": {
                  "sentence": "La lampe de chevet est très pratique.",
                  "translation": "The bedside lamp is very practical."
                },
                "advanced": {
                  "sentence": "Cette lampe design projette une lumière douce et tamisée, créant une ambiance chaleureuse.",
                  "translation": "This designer lamp casts a soft, subdued light, creating a warm atmosphere."
                }
              }
            },
            {
              "word": "tapis",
              "translation": "rug / carpet",
              "category": "decoration",
              "sentences": {
                "basic": {
                  "sentence": "Le tapis est doux.",
                  "translation": "The rug is soft."
                },
                "intermediate": {
                  "sentence": "Il y a un grand tapis dans le salon.",
                  "translation": "There is a large rug in the living room."
                },
                "advanced": {
                  "sentence": "Un tapis persan authentique orne le parquet, ajoutant une touche d'exotisme.",
                  "translation": "An authentic Persian rug adorns the parquet floor, adding a touch of exoticism."
                }
              }
            },
            {
              "word": "rideaux",
              "translation": "curtains",
              "category": "decoration",
              "sentences": {
                "basic": {
                  "sentence": "Ferme les rideaux.",
                  "translation": "Close the curtains."
                },
                "intermediate": {
                  "sentence": "Les rideaux sont en velours.",
                  "translation": "The curtains are made of velvet."
                },
                "advanced": {
                  "sentence": "Les rideaux épais bloquent complètement la lumière pour une obscurité totale.",
                  "translation": "The thick curtains completely block out the light for total darkness."
                }
              }
            },
            {
              "word": "tableau",
              "translation": "painting / picture",
              "category": "decoration",
              "sentences": {
                "basic": {
                  "sentence": "Il y a un tableau sur le mur.",
                  "translation": "There is a painting on the wall."
                },
                "intermediate": {
                  "sentence": "Ce tableau est très beau.",
                  "translation": "This painting is very beautiful."
                },
                "advanced": {
                  "sentence": "Un tableau abstrait contemporain domine la cheminée, apportant une touche artistique.",
                  "translation": "A contemporary abstract painting dominates the fireplace, adding an artistic touch."
                }
              }
            },
            {
              "word": "cuisine équipée",
              "translation": "fitted kitchen",
              "category": "kitchen",
              "sentences": {
                "basic": {
                  "sentence": "La cuisine est équipée.",
                  "translation": "The kitchen is fitted."
                },
                "intermediate": {
                  "sentence": "Nous recherchons un appartement avec une cuisine équipée.",
                  "translation": "We are looking for an apartment with a fitted kitchen."
                },
                "advanced": {
                  "sentence": "La cuisine entièrement équipée dispose d'appareils électroménagers haut de gamme.",
                  "translation": "The fully fitted kitchen features high-end appliances."
                }
              }
            },
            {
              "word": "réfrigérateur",
              "translation": "refrigerator / fridge",
              "category": "kitchen appliance",
              "sentences": {
                "basic": {
                  "sentence": "Le réfrigérateur est vide.",
                  "translation": "The refrigerator is empty."
                },
                "intermediate": {
                  "sentence": "Mets le lait dans le réfrigérateur.",
                  "translation": "Put the milk in the refrigerator."
                },
                "advanced": {
                  "sentence": "Ce réfrigérateur américain est doté d'un distributeur de glaçons intégré.",
                  "translation": "This American-style refrigerator has a built-in ice dispenser."
                }
              }
            },
            {
              "word": "four",
              "translation": "oven",
              "category": "kitchen appliance",
              "sentences": {
                "basic": {
                  "sentence": "Le four est chaud.",
                  "translation": "The oven is hot."
                },
                "intermediate": {
                  "sentence": "Je vais faire cuire un gâteau au four.",
                  "translation": "I'm going to bake a cake in the oven."
                },
                "advanced": {
                  "sentence": "Le four à pyrolyse autonettoyant simplifie l'entretien de la cuisine.",
                  "translation": "The self-cleaning pyrolytic oven simplifies kitchen maintenance."
                }
              }
            },
            {
              "word": "lave-vaisselle",
              "translation": "dishwasher",
              "category": "kitchen appliance",
              "sentences": {
                "basic": {
                  "sentence": "Mets la vaisselle dans le lave-vaisselle.",
                  "translation": "Put the dishes in the dishwasher."
                },
                "intermediate": {
                  "sentence": "Le lave-vaisselle est en panne.",
                  "translation": "The dishwasher is broken down."
                },
                "advanced": {
                  "sentence": "Le lave-vaisselle intégré est silencieux et économe en énergie.",
                  "translation": "The integrated dishwasher is quiet and energy-efficient."
                }
              }
            },
            {
              "word": "micro-ondes",
              "translation": "microwave",
              "category": "kitchen appliance",
              "sentences": {
                "basic": {
                  "sentence": "Chauffe ça au micro-ondes.",
                  "translation": "Heat that in the microwave."
                },
                "intermediate": {
                  "sentence": "Le micro-ondes est très utile pour réchauffer les plats.",
                  "translation": "The microwave is very useful for reheating dishes."
                },
                "advanced": {
                  "sentence": "Ce micro-ondes combiné offre des fonctions de cuisson variées, du grill à la vapeur.",
                  "translation": "This combi microwave offers various cooking functions, from grill to steam."
                }
              }
            },
            {
              "word": "douche",
              "translation": "shower",
              "category": "bathroom fixture",
              "sentences": {
                "basic": {
                  "sentence": "Je prends une douche.",
                  "translation": "I'm taking a shower."
                },
                "intermediate": {
                  "sentence": "La douche est spacieuse.",
                  "translation": "The shower is spacious."
                },
                "advanced": {
                  "sentence": "La douche à l'italienne avec pommeau de pluie offre une expérience relaxante.",
                  "translation": "The walk-in shower with rain showerhead offers a relaxing experience."
                }
              }
            },
            {
              "word": "baignoire",
              "translation": "bathtub",
              "category": "bathroom fixture",
              "sentences": {
                "basic": {
                  "sentence": "Il y a une baignoire dans la salle de bains.",
                  "translation": "There is a bathtub in the bathroom."
                },
                "intermediate": {
                  "sentence": "Les enfants aiment jouer dans la baignoire.",
                  "translation": "The children like to play in the bathtub."
                },
                "advanced": {
                  "sentence": "La baignoire balnéo avec jets hydromassants est parfaite pour la détente.",
                  "translation": "The whirlpool bathtub with hydro-massage jets is perfect for relaxation."
                }
              }
            },
            {
              "word": "lavabo",
              "translation": "sink (bathroom)",
              "category": "bathroom fixture",
              "sentences": {
                "basic": {
                  "sentence": "Lave-toi les mains au lavabo.",
                  "translation": "Wash your hands at the sink."
                },
                "intermediate": {
                  "sentence": "Le lavabo est bouché.",
                  "translation": "The sink is clogged."
                },
                "advanced": {
                  "sentence": "Le double lavabo en céramique ajoute une touche de luxe à la salle de bains.",
                  "translation": "The double ceramic sink adds a touch of luxury to the bathroom."
                }
              }
            },
            {
              "word": "toilettes",
              "translation": "toilet",
              "category": "bathroom fixture",
              "sentences": {
                "basic": {
                  "sentence": "Où sont les toilettes ?",
                  "translation": "Where is the toilet?"
                },
                "intermediate": {
                  "sentence": "Les toilettes sont séparées de la salle de bains.",
                  "translation": "The toilet is separate from the bathroom."
                },
                "advanced": {
                  "sentence": "Les toilettes suspendues facilitent le nettoyage du sol.",
                  "translation": "The wall-hung toilet simplifies floor cleaning."
                }
              }
            },
            {
              "word": "cheminée",
              "translation": "fireplace",
              "category": "feature",
              "sentences": {
                "basic": {
                  "sentence": "Il y a une cheminée dans le salon.",
                  "translation": "There is a fireplace in the living room."
                },
                "intermediate": {
                  "sentence": "Nous aimons allumer un feu dans la cheminée en hiver.",
                  "translation": "We like to light a fire in the fireplace in winter."
                },
                "advanced": {
                  "sentence": "La cheminée en marbre d'époque est l'élément central du salon.",
                  "translation": "The period marble fireplace is the focal point of the living room."
                }
              }
            },
            {
              "word": "climatisation",
              "translation": "air conditioning",
              "category": "feature",
              "sentences": {
                "basic": {
                  "sentence": "Nous avons la climatisation.",
                  "translation": "We have air conditioning."
                },
                "intermediate": {
                  "sentence": "La climatisation est essentielle en été.",
                  "translation": "Air conditioning is essential in summer."
                },
                "advanced": {
                  "sentence": "Le système de climatisation réversible assure un confort thermique toute l'année.",
                  "translation": "The reversible air conditioning system ensures thermal comfort all year round."
                }
              }
            },
            {
              "word": "chauffage",
              "translation": "heating",
              "category": "feature",
              "sentences": {
                "basic": {
                  "sentence": "Le chauffage est allumé.",
                  "translation": "The heating is on."
                },
                "intermediate": {
                  "sentence": "Le chauffage central fonctionne bien.",
                  "translation": "The central heating works well."
                },
                "advanced": {
                  "sentence": "Le chauffage au sol offre une chaleur douce et homogène dans toutes les pièces.",
                  "translation": "Underfloor heating provides gentle, even warmth in all rooms."
                }
              }
            },
            {
              "word": "électricité",
              "translation": "electricity",
              "category": "utility",
              "sentences": {
                "basic": {
                  "sentence": "Il y a de l'électricité.",
                  "translation": "There is electricity."
                },
                "intermediate": {
                  "sentence": "Nous avons une coupure d'électricité.",
                  "translation": "We have a power outage."
                },
                "advanced": {
                  "sentence": "L'installation électrique a été entièrement rénovée pour répondre aux normes actuelles.",
                  "translation": "The electrical installation has been completely renovated to meet current standards."
                }
              }
            },
            {
              "word": "eau",
              "translation": "water",
              "category": "utility",
              "sentences": {
                "basic": {
                  "sentence": "L'eau est froide.",
                  "translation": "The water is cold."
                },
                "intermediate": {
                  "sentence": "Il faut économiser l'eau.",
                  "translation": "We must save water."
                },
                "advanced": {
                  "sentence": "Le système de filtration d'eau potable assure une eau de qualité supérieure.",
                  "translation": "The drinking water filtration system ensures superior water quality."
                }
              }
            },
            {
              "word": "gaz",
              "translation": "gas",
              "category": "utility",
              "sentences": {
                "basic": {
                  "sentence": "Le gaz est coupé.",
                  "translation": "The gas is off."
                },
                "intermediate": {
                  "sentence": "La cuisinière fonctionne au gaz.",
                  "translation": "The stove runs on gas."
                },
                "advanced": {
                  "sentence": "L'installation au gaz naturel est conforme aux réglementations de sécurité les plus strictes.",
                  "translation": "The natural gas installation complies with the strictest safety regulations."
                }
              }
            },
            {
              "word": "entrée",
              "translation": "entrance / hallway",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "L'entrée est petite.",
                  "translation": "The entrance is small."
                },
                "intermediate": {
                  "sentence": "Il y a un porte-manteau dans l'entrée.",
                  "translation": "There is a coat rack in the entrance."
                },
                "advanced": {
                  "sentence": "L'entrée principale s'ouvre sur un grand hall avec un escalier monumental.",
                  "translation": "The main entrance opens onto a large hall with a monumental staircase."
                }
              }
            },
            {
              "word": "couloir",
              "translation": "corridor / hallway",
              "category": "part of house",
              "sentences": {
                "basic": {
                  "sentence": "Le couloir est long.",
                  "translation": "The corridor is long."
                },
                "intermediate": {
                  "sentence": "Les chambres sont situées le long du couloir.",
                  "translation": "The bedrooms are located along the corridor."
                },
                "advanced": {
                  "sentence": "Le couloir est orné de plusieurs œuvres d'art, créant une galerie intérieure.",
                  "translation": "The hallway is adorned with several works of art, creating an indoor gallery."
                }
            }
            },
            {
              "word": "bureau",
              "translation": "office / desk",
              "category": "room / furniture",
              "sentences": {
                "basic": {
                  "sentence": "Je travaille dans mon bureau.",
                  "translation": "I work in my office."
                },
                "intermediate": {
                  "sentence": "Le bureau est équipé d'un ordinateur.",
                  "translation": "The office is equipped with a computer."
                },
                "advanced": {
                  "sentence": "Le bureau à domicile est aménagé avec un mobilier ergonomique pour un confort optimal.",
                  "translation": "The home office is furnished with ergonomic furniture for optimal comfort."
                }
              }
            },
            {
              "word": "buanderie",
              "translation": "laundry room",
              "category": "room",
              "sentences": {
                "basic": {
                  "sentence": "La buanderie est au sous-sol.",
                  "translation": "The laundry room is in the basement."
                },
                "intermediate": {
                  "sentence": "La buanderie a une machine à laver.",
                  "translation": "The laundry room has a washing machine."
                },
                "advanced": {
                  "sentence": "La buanderie est équipée d'un lave-linge, d'un sèche-linge et d'un évier pour les tâches ménagères.",
                  "translation": "The laundry room is equipped with a washing machine, a dryer, and a sink for household chores."
                }
              }
            },
            {
              "word": "cellier",
              "translation": "pantry / storeroom",
              "category": "room",
              "sentences": {
                "basic": {
                  "sentence": "Le cellier est à côté de la cuisine.",
                  "translation": "The pantry is next to the kitchen."
                },
                "intermediate": {
                  "sentence": "On range les provisions dans le cellier.",
                  "translation": "We store provisions in the pantry."
                },
                "advanced": {
                  "sentence": "Le cellier spacieux offre un espace de rangement supplémentaire pour les denrées alimentaires et les ustensiles de cuisine.",
                  "translation": "The spacious pantry offers additional storage space for groceries and kitchen utensils."
                }
              }
            },
            {
              "word": "câble",
              "translation": "cable",
              "category": "utility",
              "sentences": {
                "basic": {
                  "sentence": "Le câble est branché.",
                  "translation": "The cable is plugged in."
                },
                "intermediate": {
                  "sentence": "Nous avons une connexion internet par câble.",
                  "translation": "We have cable internet connection."
                },
                "advanced": {
                  "sentence": "Le câblage réseau a été mis à niveau pour supporter la fibre optique.",
                  "translation": "The network cabling has been upgraded to support fiber optics."
                }
              }
            }
          
        ],
        activities: [
            {
              "word": "lire",
              "translation": "to read",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'aime lire des livres.",
                  "translation": "I like to read books."
                },
                "intermediate": {
                  "sentence": "Elle passe des heures à lire des romans d'aventure.",
                  "translation": "She spends hours reading adventure novels."
                },
                "advanced": {
                  "sentence": "Pour se détendre après une longue journée, rien ne vaut l'évasion qu'offre la lecture d'un bon ouvrage.",
                  "translation": "To relax after a long day, nothing beats the escape offered by reading a good book."
                }
              }
            },
            {
              "word": "écrire",
              "translation": "to write",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Il aime écrire des histoires.",
                  "translation": "He likes to write stories."
                },
                "intermediate": {
                  "sentence": "Elle doit écrire un rapport pour son travail.",
                  "translation": "She has to write a report for her job."
                },
                "advanced": {
                  "sentence": "L'auteur s'est retiré à la campagne pour écrire son prochain roman, cherchant l'inspiration dans la nature.",
                  "translation": "The author retired to the countryside to write his next novel, seeking inspiration in nature."
                }
              }
            },
            {
              "word": "courir",
              "translation": "to run",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je cours tous les matins.",
                  "translation": "I run every morning."
                },
                "intermediate": {
                  "sentence": "Elle s'entraîne pour courir un marathon l'année prochaine.",
                  "translation": "She's training to run a marathon next year."
                },
                "advanced": {
                  "sentence": "Malgré les intempéries, il s'astreint à courir plusieurs kilomètres quotidiennement pour maintenir sa condition physique.",
                  "translation": "Despite the bad weather, he forces himself to run several kilometers daily to maintain his physical condition."
                }
              }
            },
            {
              "word": "nager",
              "translation": "to swim",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Nous aimons nager en été.",
                  "translation": "We like to swim in the summer."
                },
                "intermediate": {
                  "sentence": "Elle apprend à nager le crawl à la piscine municipale.",
                  "translation": "She's learning to swim crawl at the municipal pool."
                },
                "advanced": {
                  "sentence": "Pour améliorer sa technique, il s'exerce à nager en apnée sur de longues distances.",
                  "translation": "To improve his technique, he practices free-diving over long distances."
                }
              }
            },
            {
              "word": "voyager",
              "translation": "to travel",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Ils aiment voyager.",
                  "translation": "They like to travel."
                },
                "intermediate": {
                  "sentence": "Nous prévoyons de voyager en Asie l'année prochaine.",
                  "translation": "We plan to travel to Asia next year."
                },
                "advanced": {
                  "sentence": "Le couple a décidé de voyager à travers le monde, explorant des cultures diverses et des paysages époustouflants.",
                  "translation": "The couple decided to travel around the world, exploring diverse cultures and breathtaking landscapes."
                }
              }
            },
            {
              "word": "cuisiner",
              "translation": "to cook",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'adore cuisiner.",
                  "translation": "I love to cook."
                },
                "intermediate": {
                  "sentence": "Il apprend à cuisiner des plats italiens traditionnels.",
                  "translation": "He's learning to cook traditional Italian dishes."
                },
                "advanced": {
                  "sentence": "Sa passion pour la gastronomie l'incite à constamment expérimenter de nouvelles recettes et techniques de cuisine.",
                  "translation": "His passion for gastronomy encourages him to constantly experiment with new recipes and cooking techniques."
                }
              }
            },
            {
              "word": "danser",
              "translation": "to dance",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Elle aime danser.",
                  "translation": "She likes to dance."
                },
                "intermediate": {
                  "sentence": "Ils prennent des cours pour apprendre à danser la salsa.",
                  "translation": "They're taking classes to learn how to dance salsa."
                },
                "advanced": {
                  "sentence": "Le ballet exige des danseurs une discipline rigoureuse et une expression corporelle irréprochable.",
                  "translation": "Ballet demands rigorous discipline and impeccable bodily expression from dancers."
                }
              }
            },
            {
              "word": "chanter",
              "translation": "to sing",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Il aime chanter des chansons.",
                  "translation": "He likes to sing songs."
                },
                "intermediate": {
                  "sentence": "Elle rêve de chanter sur scène devant une foule immense.",
                  "translation": "She dreams of singing on stage in front of a huge crowd."
                },
                "advanced": {
                  "sentence": "Sa voix mélodieuse lui permet de chanter des airs complexes avec une aisance remarquable.",
                  "translation": "Her melodious voice allows her to sing complex tunes with remarkable ease."
                }
              }
            },
            {
              "word": "jouer",
              "translation": "to play",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Les enfants jouent au parc.",
                  "translation": "The children are playing in the park."
                },
                "intermediate": {
                  "sentence": "Il va jouer au football avec ses amis cet après-midi.",
                  "translation": "He's going to play football with his friends this afternoon."
                },
                "advanced": {
                  "sentence": "Malgré son âge avancé, il continue de jouer aux échecs avec une stratégie toujours aussi affûtée.",
                  "translation": "Despite his advanced age, he continues to play chess with an always sharp strategy."
                }
              }
            },
            {
              "word": "étudier",
              "translation": "to study",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'étudie le français.",
                  "translation": "I study French."
                },
                "intermediate": {
                  "sentence": "Elle doit étudier dur pour réussir ses examens.",
                  "translation": "She has to study hard to pass her exams."
                },
                "advanced": {
                  "sentence": "Les chercheurs consacrent des années à étudier les phénomènes complexes du cerveau humain.",
                  "translation": "Researchers dedicate years to studying the complex phenomena of the human brain."
                }
              }
            },
            {
              "word": "travailler",
              "translation": "to work",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je travaille au bureau.",
                  "translation": "I work at the office."
                },
                "intermediate": {
                  "sentence": "Ils doivent travailler ensemble sur ce projet important.",
                  "translation": "They need to work together on this important project."
                },
                "advanced": {
                  "sentence": "Pour atteindre l'excellence, il est impératif de travailler avec persévérance et de faire preuve de rigueur.",
                  "translation": "To achieve excellence, it is imperative to work with perseverance and show rigor."
                }
              }
            },
            {
              "word": "se promener",
              "translation": "to walk / to stroll",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Nous aimons nous promener dans le parc.",
                  "translation": "We like to walk in the park."
                },
                "intermediate": {
                  "sentence": "Elle aime se promener le long de la plage au coucher du soleil.",
                  "translation": "She likes to stroll along the beach at sunset."
                },
                "advanced": {
                  "sentence": "Après une semaine chargée, rien de tel que de se promener en forêt pour se ressourcer et échapper au tumulte urbain.",
                  "translation": "After a busy week, there's nothing like taking a walk in the forest to recharge and escape the urban hustle."
                }
              }
            },
            {
              "word": "faire du sport",
              "translation": "to do sports",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je fais du sport chaque semaine.",
                  "translation": "I do sports every week."
                },
                "intermediate": {
                  "sentence": "Pour rester en forme, il est recommandé de faire du sport régulièrement.",
                  "translation": "To stay in shape, it's recommended to do sports regularly."
                },
                "advanced": {
                  "sentence": "Afin d'optimiser ses performances, l'athlète doit faire du sport avec un programme d'entraînement intensif et personnalisé.",
                  "translation": "To optimize his performance, the athlete must do sports with an intensive and personalized training program."
                }
              }
            },
            {
              "word": "faire du vélo",
              "translation": "to cycle",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Nous aimons faire du vélo.",
                  "translation": "We like to cycle."
                },
                "intermediate": {
                  "sentence": "Ils vont faire du vélo le long du canal ce week-end.",
                  "translation": "They're going cycling along the canal this weekend."
                },
                "advanced": {
                  "sentence": "La pratique du vélo en montagne requiert une excellente condition physique et une maîtrise technique des sentiers escarpés.",
                  "translation": "Mountain biking requires excellent physical condition and technical mastery of steep trails."
                }
              }
            },
            {
              "word": "faire de la randonnée",
              "translation": "to hike",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Elle adore faire de la randonnée.",
                  "translation": "She loves to hike."
                },
                "intermediate": {
                  "sentence": "Nous allons faire de la randonnée dans les montagnes cet été.",
                  "translation": "We're going hiking in the mountains this summer."
                },
                "advanced": {
                  "sentence": "Pour faire de la randonnée en haute altitude, il est primordial de bien s'équiper et de connaître les risques liés aux changements climatiques.",
                  "translation": "To hike at high altitude, it is essential to be well-equipped and to be aware of the risks associated with weather changes."
                }
              }
            },
            {
              "word": "jardiner",
              "translation": "to garden",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Mon père aime jardiner.",
                  "translation": "My father likes to garden."
                },
                "intermediate": {
                  "sentence": "Elle passe ses dimanches à jardiner dans son potager.",
                  "translation": "She spends her Sundays gardening in her vegetable patch."
                },
                "advanced": {
                  "sentence": "Jardiner permet non seulement de cultiver ses propres légumes, mais aussi de se reconnecter à la nature et de réduire le stress.",
                  "translation": "Gardening not only allows you to grow your own vegetables, but also to reconnect with nature and reduce stress."
                }
              }
            },
            {
              "word": "peindre",
              "translation": "to paint",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'apprends à peindre.",
                  "translation": "I'm learning to paint."
                },
                "intermediate": {
                  "sentence": "Elle aime peindre des paysages à l'aquarelle.",
                  "translation": "She likes to paint landscapes with watercolors."
                },
                "advanced": {
                  "sentence": "L'artiste a passé des mois à peindre cette fresque murale complexe, y intégrant des symboles cachés.",
                  "translation": "The artist spent months painting this complex mural, incorporating hidden symbols within it."
                }
              }
            },
            {
              "word": "dessiner",
              "translation": "to draw",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Il aime dessiner.",
                  "translation": "He likes to draw."
                },
                "intermediate": {
                  "sentence": "Elle peut dessiner des portraits très réalistes.",
                  "translation": "She can draw very realistic portraits."
                },
                "advanced": {
                  "sentence": "Avant de commencer un tableau, le peintre prend toujours le temps de dessiner des croquis préparatoires pour affiner sa composition.",
                  "translation": "Before starting a painting, the painter always takes the time to draw preparatory sketches to refine his composition."
                }
              }
            },
            {
              "word": "photographier",
              "translation": "to photograph",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'adore photographier la nature.",
                  "translation": "I love photographing nature."
                },
                "intermediate": {
                  "sentence": "Il voyage pour photographier des animaux sauvages.",
                  "translation": "He travels to photograph wild animals."
                },
                "advanced": {
                  "sentence": "Le défi du photographe animalier est de photographier des espèces rares dans leur habitat naturel sans les perturber.",
                  "translation": "The challenge for the wildlife photographer is to photograph rare species in their natural habitat without disturbing them."
                }
              }
            },
            {
              "word": "faire du shopping",
              "translation": "to shop",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Elle aime faire du shopping.",
                  "translation": "She likes to shop."
                },
                "intermediate": {
                  "sentence": "Nous allons faire du shopping au centre commercial ce week-end.",
                  "translation": "We're going shopping at the mall this weekend."
                },
                "advanced": {
                  "sentence": "Faire du shopping en ligne offre une commodité inégalée, mais il manque souvent l'expérience sensorielle des boutiques physiques.",
                  "translation": "Online shopping offers unparalleled convenience, but it often lacks the sensory experience of physical stores."
                }
              }
            },
            {
              "word": "visiter",
              "translation": "to visit",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Nous allons visiter Paris.",
                  "translation": "We are going to visit Paris."
                },
                "intermediate": {
                  "sentence": "Elle aime visiter les musées et les galeries d'art.",
                  "translation": "She likes to visit museums and art galleries."
                },
                "advanced": {
                  "sentence": "Lors de son voyage, il a eu l'opportunité de visiter des sites archéologiques millénaires, témoins de civilisations disparues.",
                  "translation": "During his trip, he had the opportunity to visit millennia-old archaeological sites, witnesses to lost civilizations."
                }
              }
            },
            {
              "word": "se détendre",
              "translation": "to relax",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je veux juste me détendre.",
                  "translation": "I just want to relax."
                },
                "intermediate": {
                  "sentence": "Après une longue semaine, il aime se détendre en lisant un bon livre.",
                  "translation": "After a long week, he likes to relax by reading a good book."
                },
                "advanced": {
                  "sentence": "Pour se détendre pleinement, elle pratique le yoga et la méditation, se coupant ainsi du tumulte quotidien.",
                  "translation": "To fully relax, she practices yoga and meditation, thus disconnecting from the daily hustle."
                }
              }
            },
            {
              "word": "apprendre",
              "translation": "to learn",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'apprends l'espagnol.",
                  "translation": "I'm learning Spanish."
                },
                "intermediate": {
                  "sentence": "Il est important d'apprendre de nouvelles choses tout au long de sa vie.",
                  "translation": "It's important to learn new things throughout one's life."
                },
                "advanced": {
                  "sentence": "Grâce à son désir insatiable de connaissance, il cherche constamment à apprendre de nouvelles disciplines et à élargir ses horizons.",
                  "translation": "Thanks to his insatiable desire for knowledge, he constantly seeks to learn new disciplines and broaden his horizons."
                }
              }
            },
            {
              "word": "enseigner",
              "translation": "to teach",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Elle enseigne l'anglais.",
                  "translation": "She teaches English."
                },
                "intermediate": {
                  "sentence": "Il aime enseigner l'histoire aux jeunes étudiants.",
                  "translation": "He likes to teach history to young students."
                },
                "advanced": {
                  "sentence": "En plus de la théorie, un bon professeur doit enseigner la pensée critique et l'autonomie à ses élèves.",
                  "translation": "In addition to theory, a good teacher must teach critical thinking and autonomy to their students."
                }
              }
            },
            {
              "word": "aider",
              "translation": "to help",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je peux vous aider ?",
                  "translation": "Can I help you?"
                },
                "intermediate": {
                  "sentence": "Elle aime aider les gens dans le besoin.",
                  "translation": "She likes to help people in need."
                },
                "advanced": {
                  "sentence": "Dans un esprit de solidarité, la communauté s'est mobilisée pour aider les victimes de la catastrophe naturelle.",
                  "translation": "In a spirit of solidarity, the community mobilized to help the victims of the natural disaster."
                }
              }
            },
            {
              "word": "construire",
              "translation": "to build",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Il veut construire une maison.",
                  "translation": "He wants to build a house."
                },
                "intermediate": {
                  "sentence": "Les enfants adorent construire des châteaux de sable sur la plage.",
                  "translation": "Children love to build sandcastles on the beach."
                },
                "advanced": {
                  "sentence": "L'ingénieur a supervisé la construction du pont, veillant à ce qu'il soit conçu pour résister aux forces extrêmes.",
                  "translation": "The engineer supervised the construction of the bridge, ensuring it was designed to withstand extreme forces."
                }
              }
            },
            {
              "word": "rénover",
              "translation": "to renovate",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Nous allons rénover la cuisine.",
                  "translation": "We are going to renovate the kitchen."
                },
                "intermediate": {
                  "sentence": "Ils ont décidé de rénover leur vieille grange en logement moderne.",
                  "translation": "They decided to renovate their old barn into a modern dwelling."
                },
                "advanced": {
                  "sentence": "Rénover un bâtiment historique nécessite une expertise particulière afin de préserver son authenticité architecturale.",
                  "translation": "Renovating a historic building requires particular expertise to preserve its architectural authenticity."
                }
              }
            },
            {
              "word": "organiser",
              "translation": "to organize",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Elle aime organiser des fêtes.",
                  "translation": "She likes to organize parties."
                },
                "intermediate": {
                  "sentence": "Nous devons organiser une réunion pour discuter du projet.",
                  "translation": "We need to organize a meeting to discuss the project."
                },
                "advanced": {
                  "sentence": "Le comité s'efforce d'organiser un événement caritatif d'envergure, visant à sensibiliser le public et à collecter des fonds.",
                  "translation": "The committee strives to organize a large-scale charity event, aiming to raise public awareness and collect funds."
                }
              }
            },
            {
              "word": "discuter",
              "translation": "to discuss",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "On peut en discuter.",
                  "translation": "We can discuss it."
                },
                "intermediate": {
                  "sentence": "Ils aiment discuter de politique et d'actualité.",
                  "translation": "They like to discuss politics and current events."
                },
                "advanced": {
                  "sentence": "Lors du colloque, les experts auront l'opportunité de discuter des dernières avancées scientifiques et de leurs implications éthiques.",
                  "translation": "During the conference, experts will have the opportunity to discuss the latest scientific advances and their ethical implications."
                }
              }
            },
            {
              "word": "rencontrer",
              "translation": "to meet",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je veux rencontrer de nouvelles personnes.",
                  "translation": "I want to meet new people."
                },
                "intermediate": {
                  "sentence": "Ils vont rencontrer le directeur demain matin.",
                  "translation": "They are going to meet the director tomorrow morning."
                },
                "advanced": {
                  "sentence": "L'explorateur a eu la chance de rencontrer des tribus isolées, apprenant ainsi de leurs coutumes ancestrales.",
                  "translation": "The explorer had the chance to meet isolated tribes, thus learning about their ancestral customs."
                }
              }
            },
            {
              "word": "explorer",
              "translation": "to explore",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'aime explorer de nouveaux endroits.",
                  "translation": "I like to explore new places."
                },
                "intermediate": {
                  "sentence": "Les spéléologues partent explorer des grottes souterraines.",
                  "translation": "Spelunkers go to explore underground caves."
                },
                "advanced": {
                  "sentence": "Le vaisseau spatial a été conçu pour explorer les confins de l'univers, à la recherche de planètes habitables.",
                  "translation": "The spaceship was designed to explore the far reaches of the universe, searching for habitable planets."
                }
              }
            },
            {
              "word": "collectionner",
              "translation": "to collect",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Elle aime collectionner les timbres.",
                  "translation": "She likes to collect stamps."
                },
                "intermediate": {
                  "sentence": "Mon grand-père collectionne les pièces de monnaie anciennes.",
                  "translation": "My grandfather collects old coins."
                },
                "advanced": {
                  "sentence": "Certains musées se spécialisent dans l'art de collectionner des œuvres rares, contribuant ainsi à la préservation du patrimoine culturel.",
                  "translation": "Some museums specialize in the art of collecting rare works, thus contributing to the preservation of cultural heritage."
                }
              }
            },
            {
              "word": "bricoler",
              "translation": "to do DIY / to tinker",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Il aime bricoler le week-end.",
                  "translation": "He likes to do DIY on weekends."
                },
                "intermediate": {
                  "sentence": "Nous devons bricoler la vieille étagère pour qu'elle tienne mieux.",
                  "translation": "We need to tinker with the old shelf so it holds better."
                },
                "advanced": {
                  "sentence": "Grâce à son esprit inventif, il parvient toujours à bricoler des solutions ingénieuses pour réparer les objets du quotidien.",
                  "translation": "Thanks to his inventive spirit, he always manages to tinker with ingenious solutions to repair everyday objects."
                }
              }
            },
            {
              "word": "regarder",
              "translation": "to watch / to look at",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je regarde la télévision.",
                  "translation": "I'm watching TV."
                },
                "intermediate": {
                  "sentence": "Ils aiment regarder les étoiles la nuit.",
                  "translation": "They like to watch the stars at night."
                },
                "advanced": {
                  "sentence": "L'astronome passe des heures à regarder à travers son télescope, espérant apercevoir des phénomènes célestes rares.",
                  "translation": "The astronomer spends hours looking through his telescope, hoping to catch sight of rare celestial phenomena."
                }
              }
            },
            {
              "word": "écouter",
              "translation": "to listen",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'écoute de la musique.",
                  "translation": "I'm listening to music."
                },
                "intermediate": {
                  "sentence": "Elle aime écouter des podcasts en faisant le ménage.",
                  "translation": "She likes to listen to podcasts while cleaning."
                },
                "advanced": {
                  "sentence": "Pour comprendre les nuances d'une langue étrangère, il est essentiel d'écouter attentivement les locuteurs natifs.",
                  "translation": "To understand the nuances of a foreign language, it is essential to listen carefully to native speakers."
                }
              }
            },
            {
              "word": "dormir",
              "translation": "to sleep",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je veux dormir.",
                  "translation": "I want to sleep."
                },
                "intermediate": {
                  "sentence": "Il est important de bien dormir pour être en bonne santé.",
                  "translation": "It's important to sleep well to be healthy."
                },
                "advanced": {
                  "sentence": "Le manque chronique de sommeil peut gravement affecter la concentration et la productivité au quotidien.",
                  "translation": "Chronic lack of sleep can severely affect concentration and daily productivity."
                }
              }
            },
            {
              "word": "manger",
              "translation": "to eat",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'aime manger de la pizza.",
                  "translation": "I like to eat pizza."
                },
                "intermediate": {
                  "sentence": "Nous allons manger au restaurant ce soir.",
                  "translation": "We're going to eat at the restaurant tonight."
                },
                "advanced": {
                  "sentence": "Il est conseillé de manger une alimentation équilibrée pour maintenir un mode de vie sain et prévenir les maladies.",
                  "translation": "It is advisable to eat a balanced diet to maintain a healthy lifestyle and prevent diseases."
                }
              }
            },
            {
              "word": "boire",
              "translation": "to drink",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je veux boire de l'eau.",
                  "translation": "I want to drink water."
                },
                "intermediate": {
                  "sentence": "Il est important de boire beaucoup d'eau pendant l'exercice.",
                  "translation": "It's important to drink a lot of water during exercise."
                },
                "advanced": {
                  "sentence": "L'hydratation est essentielle; il est recommandé de boire au moins deux litres d'eau par jour pour le bon fonctionnement de l'organisme.",
                  "translation": "Hydration is essential; it is recommended to drink at least two liters of water per day for the proper functioning of the body."
                }
              }
            },
            {
              "word": "parler",
              "translation": "to speak",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je parle français.",
                  "translation": "I speak French."
                },
                "intermediate": {
                  "sentence": "Elle aime parler avec ses amis au téléphone.",
                  "translation": "She likes to talk with her friends on the phone."
                },
                "advanced": {
                  "sentence": "Pour maîtriser une langue, il est crucial de pratiquer la conversation et d'oser parler avec des natifs, même avec des erreurs.",
                  "translation": "To master a language, it is crucial to practice conversation and dare to speak with native speakers, even with mistakes."
                }
              }
            },
            {
              "word": "organiser",
              "translation": "to plan / to arrange",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'organise un voyage.",
                  "translation": "I'm planning a trip."
                },
                "intermediate": {
                  "sentence": "Elle doit organiser sa semaine pour être plus productive.",
                  "translation": "She needs to organize her week to be more productive."
                },
                "advanced": {
                  "sentence": "Le chef de projet s'emploie à organiser les ressources humaines et matérielles de manière optimale pour assurer le succès du programme.",
                  "translation": "The project manager is working to optimally organize human and material resources to ensure the program's success."
                }
              }
            },
            {
              "word": "préparer",
              "translation": "to prepare",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je prépare le dîner.",
                  "translation": "I'm preparing dinner."
                },
                "intermediate": {
                  "sentence": "Ils doivent préparer une présentation pour la conférence.",
                  "translation": "They need to prepare a presentation for the conference."
                },
                "advanced": {
                  "sentence": "L'athlète s'entraîne intensément pour préparer les Jeux olympiques, affinant chaque geste et chaque stratégie.",
                  "translation": "The athlete trains intensely to prepare for the Olympic Games, refining every movement and strategy."
                }
              }
            },
            {
              "word": "nettoyer",
              "translation": "to clean",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je dois nettoyer ma chambre.",
                  "translation": "I need to clean my room."
                },
                "intermediate": {
                  "sentence": "Elle passe le week-end à nettoyer toute la maison de fond en comble.",
                  "translation": "She spends the weekend cleaning the entire house thoroughly."
                },
                "advanced": {
                  "sentence": "Après les travaux, il a fallu nettoyer méticuleusement chaque recoin de l'appartement pour éliminer la poussière de construction.",
                  "translation": "After the renovation, every corner of the apartment had to be meticulously cleaned to remove construction dust."
                }
              }
            },
            {
              "word": "faire du yoga",
              "translation": "to do yoga",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Elle fait du yoga le matin.",
                  "translation": "She does yoga in the morning."
                },
                "intermediate": {
                  "sentence": "Faire du yoga aide à réduire le stress et à améliorer la flexibilité.",
                  "translation": "Doing yoga helps reduce stress and improve flexibility."
                },
                "advanced": {
                  "sentence": "La pratique régulière du yoga, combinée à la méditation, favorise un équilibre harmonieux entre le corps et l'esprit.",
                  "translation": "Regular yoga practice, combined with meditation, promotes a harmonious balance between body and mind."
                }
              }
            },
            {
              "word": "méditer",
              "translation": "to meditate",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Il aime méditer.",
                  "translation": "He likes to meditate."
                },
                "intermediate": {
                  "sentence": "Méditer quelques minutes par jour peut améliorer la concentration.",
                  "translation": "Meditating a few minutes a day can improve concentration."
                },
                "advanced": {
                  "sentence": "Pour atteindre un état de pleine conscience, il est essentiel d'apprendre à méditer et à gérer les pensées parasites.",
                  "translation": "To achieve a state of mindfulness, it is essential to learn to meditate and manage intrusive thoughts."
                }
              }
            },
            {
              "word": "se promener",
              "translation": "to take a walk",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Nous aimons nous promener.",
                  "translation": "We like to take a walk."
                },
                "intermediate": {
                  "sentence": "Elle aime se promener au bord de la mer quand le soleil se couche.",
                  "translation": "She likes to walk by the sea when the sun sets."
                },
                "advanced": {
                  "sentence": "Lorsqu'il fait beau, se promener dans les rues pavées du vieux quartier offre une immersion charmante dans l'histoire de la ville.",
                  "translation": "When the weather is nice, taking a walk through the cobbled streets of the old quarter offers a charming immersion into the city's history."
                }
              }
            },
            {
              "word": "organiser",
              "translation": "to plan",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Il doit organiser son travail.",
                  "translation": "He needs to plan his work."
                },
                "intermediate": {
                  "sentence": "Organiser un événement de grande envergure demande beaucoup de temps et de préparation.",
                  "translation": "Planning a large-scale event requires a lot of time and preparation."
                },
                "advanced": {
                  "sentence": "L'entreprise a dû organiser une restructuration complexe pour s'adapter aux nouvelles exigences du marché mondial.",
                  "translation": "The company had to organize a complex restructuring to adapt to the new demands of the global market."
                }
              }
            },
            {
              "word": "aider",
              "translation": "to assist",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Je peux vous aider ?",
                  "translation": "Can I assist you?"
                },
                "intermediate": {
                  "sentence": "Elle a proposé d'aider ses voisins à déménager.",
                  "translation": "She offered to assist her neighbors with moving."
                },
                "advanced": {
                  "sentence": "Le gouvernement a mis en place des mesures d'urgence pour aider les régions sinistrées à se reconstruire rapidement.",
                  "translation": "The government has implemented emergency measures to assist disaster-stricken regions in rebuilding quickly."
                }
              }
            },
            {
              "word": "construire",
              "translation": "to build",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Les enfants aiment construire des tours.",
                  "translation": "The children like to build towers."
                },
                "intermediate": {
                  "sentence": "Il faut construire une relation de confiance avec les clients.",
                  "translation": "You need to build a relationship of trust with clients."
                },
                "advanced": {
                  "sentence": "Face aux défis environnementaux, il est impératif de construire un avenir plus durable pour les générations futures.",
                  "translation": "Facing environmental challenges, it is imperative to build a more sustainable future for future generations."
                }
              }
            },
            {
              "word": "rénover",
              "translation": "to refurbish",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Ils veulent rénover leur salle de bain.",
                  "translation": "They want to refurbish their bathroom."
                },
                "intermediate": {
                  "sentence": "Rénover une vieille maison peut être un projet passionnant mais coûteux.",
                  "translation": "Refurbishing an old house can be an exciting but costly project."
                },
                "advanced": {
                  "sentence": "Le projet visait à rénover l'ensemble du complexe sportif, le dotant d'installations de pointe pour les athlètes professionnels.",
                  "translation": "The project aimed to refurbish the entire sports complex, equipping it with state-of-the-art facilities for professional athletes."
                }
              }
            },
            {
              "word": "discuter",
              "translation": "to chat",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "On peut discuter un peu ?",
                  "translation": "Can we chat for a bit?"
                },
                "intermediate": {
                  "sentence": "Ils ont passé la soirée à discuter de leurs projets futurs.",
                  "translation": "They spent the evening chatting about their future plans."
                },
                "advanced": {
                  "sentence": "Lors des séminaires, les participants sont encouragés à discuter ouvertement de leurs idées, favorisant ainsi le partage des connaissances.",
                  "translation": "During seminars, participants are encouraged to openly discuss their ideas, thus promoting knowledge sharing."
                }
              }
            },
            {
              "word": "rencontrer",
              "translation": "to encounter",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "J'ai rencontré un problème.",
                  "translation": "I encountered a problem."
                },
                "intermediate": {
                  "sentence": "Il est rare de rencontrer une telle gentillesse de nos jours.",
                  "translation": "It's rare to encounter such kindness these days."
                },
                "advanced": {
                  "sentence": "Les explorateurs polaires doivent être préparés à rencontrer des conditions climatiques extrêmes et des défis inattendus.",
                  "translation": "Polar explorers must be prepared to encounter extreme weather conditions and unexpected challenges."
                }
              }
            },
            {
              "word": "explorer",
              "translation": "to survey",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "L'équipe va explorer la zone.",
                  "translation": "The team will survey the area."
                },
                "intermediate": {
                  "sentence": "Avant de prendre une décision, il est bon d'explorer toutes les options possibles.",
                  "translation": "Before making a decision, it's good to survey all possible options."
                },
                "advanced": {
                  "sentence": "Le géologue a entrepris une mission pour explorer les strates rocheuses et comprendre l'histoire géologique de la région.",
                  "translation": "The geologist undertook a mission to survey the rock strata and understand the geological history of the region."
                }
              }
            },
            {
              "word": "collectionner",
              "translation": "to gather",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Elle aime collectionner des coquillages.",
                  "translation": "She likes to gather seashells."
                },
                "intermediate": {
                  "sentence": "Nous avons collectionné beaucoup d'informations pour notre projet.",
                  "translation": "We gathered a lot of information for our project."
                },
                "advanced": {
                  "sentence": "Les scientifiques s'efforcent de collectionner des données précises et fiables pour étayer leurs hypothèses.",
                  "translation": "Scientists strive to gather precise and reliable data to support their hypotheses."
                }
              }
            },
            {
              "word": "bricoler",
              "translation": "to fiddle with",
              "category": "activities",
              "sentences": {
                "basic": {
                  "sentence": "Arrête de bricoler avec ça !",
                  "translation": "Stop fiddling with that!"
                },
                "intermediate": {
                  "sentence": "Il a passé l'après-midi à bricoler sa vieille radio pour la faire marcher.",
                  "translation": "He spent the afternoon fiddling with his old radio to make it work."
                },
                "advanced": {
                  "sentence": "Bien qu'il ne soit pas un expert, il aime bricoler les appareils électroniques complexes, essayant de comprendre leur fonctionnement interne.",
                  "translation": "Although not an expert, he likes to fiddle with complex electronic devices, trying to understand their internal workings."
                }
              }
            }
          ],
        verbs: [
            {
              "word": "être",
              "translation": "to be",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je suis fatigué.",
                  "translation": "I am tired."
                },
                "intermediate": {
                  "sentence": "Il est important d'être patient.",
                  "translation": "It is important to be patient."
                },
                "advanced": {
                  "sentence": "Pour être parfaitement à l'aise dans cette nouvelle fonction, il faudra du temps et de la persévérance.",
                  "translation": "To be perfectly comfortable in this new role, it will take time and perseverance."
                }
              }
            },
            {
              "word": "avoir",
              "translation": "to have",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "J'ai un chien.",
                  "translation": "I have a dog."
                },
                "intermediate": {
                  "sentence": "Vous avez l'opportunité de changer les choses.",
                  "translation": "You have the opportunity to change things."
                },
                "advanced": {
                  "sentence": "J'ai l'impression qu'on va avoir du mal à boucler ce projet avant la date limite, à moins d'un coup de pouce extérieur.",
                  "translation": "I have a feeling we're going to struggle to complete this project before the deadline, unless we get some outside help."
                }
              }
            },
            {
              "word": "faire",
              "translation": "to do / to make",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je fais mes devoirs.",
                  "translation": "I do my homework."
                },
                "intermediate": {
                  "sentence": "Elle aime faire de la pâtisserie le week-end.",
                  "translation": "She likes to bake on weekends."
                },
                "advanced": {
                  "sentence": "Pour faire face aux défis économiques actuels, il est essentiel d'innover et de s'adapter constamment au marché.",
                  "translation": "To cope with current economic challenges, it's essential to innovate and constantly adapt to the market."
                }
              }
            },
            {
              "word": "aller",
              "translation": "to go",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je vais au supermarché.",
                  "translation": "I'm going to the supermarket."
                },
                "intermediate": {
                  "sentence": "Nous allons voyager en Espagne l'été prochain.",
                  "translation": "We are going to travel to Spain next summer."
                },
                "advanced": {
                  "sentence": "Si les choses continuent d'aller dans ce sens, on risque de se retrouver dans une impasse inévitable.",
                  "translation": "If things keep going this way, we risk ending up in an unavoidable deadlock."
                }
              }
            },
            {
              "word": "dire",
              "translation": "to say / to tell",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Il dit bonjour.",
                  "translation": "He says hello."
                },
                "intermediate": {
                  "sentence": "Elle doit dire la vérité, même si c'est difficile.",
                  "translation": "She must tell the truth, even if it's difficult."
                },
                "advanced": {
                  "sentence": "Ce n'est pas toujours facile de dire ce qu'on pense vraiment, surtout quand ça va à l'encontre de l'opinion générale.",
                  "translation": "It's not always easy to say what you really think, especially when it goes against general opinion."
                }
              }
            },
            {
              "word": "pouvoir",
              "translation": "to be able to / can",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je peux nager.",
                  "translation": "I can swim."
                },
                "intermediate": {
                  "sentence": "Nous pourrions aller au cinéma ce soir.",
                  "translation": "We could go to the cinema tonight."
                },
                "advanced": {
                  "sentence": "Malgré les contraintes, nous avons pu mettre en œuvre une solution efficace qui a satisfait tout le monde.",
                  "translation": "Despite the constraints, we were able to implement an effective solution that satisfied everyone."
                }
              }
            },
            {
              "word": "vouloir",
              "translation": "to want",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je veux de l'eau.",
                  "translation": "I want water."
                },
                "intermediate": {
                  "sentence": "Il ne veut pas manger de légumes.",
                  "translation": "He doesn't want to eat vegetables."
                },
                "advanced": {
                  "sentence": "Quoi que tu veuilles entreprendre, assure-toi d'y mettre toute ton énergie pour maximiser tes chances de réussite.",
                  "translation": "Whatever you want to undertake, make sure you put all your energy into it to maximize your chances of success."
                }
              }
            },
            {
              "word": "savoir",
              "translation": "to know (facts/how to)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je sais parler français.",
                  "translation": "I know how to speak French."
                },
                "intermediate": {
                  "sentence": "Elle sait que c'est une bonne idée.",
                  "translation": "She knows it's a good idea."
                },
                "advanced": {
                  "sentence": "Il est crucial de savoir gérer les imprévus, car c'est souvent là que l'on se distingue vraiment.",
                  "translation": "It's crucial to know how to handle the unexpected, because that's often where you truly stand out."
                }
              }
            },
            {
              "word": "voir",
              "translation": "to see",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je vois un oiseau.",
                  "translation": "I see a bird."
                },
                "intermediate": {
                  "sentence": "Nous allons voir un film ce soir.",
                  "translation": "We are going to see a movie tonight."
                },
                "advanced": {
                  "sentence": "Avec le recul, je vois bien que nous aurions pu aborder la situation sous un angle totalement différent.",
                  "translation": "Looking back, I can clearly see that we could have approached the situation from a totally different angle."
                }
              }
            },
            {
              "word": "prendre",
              "translation": "to take",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je prends le bus.",
                  "translation": "I take the bus."
                },
                "intermediate": {
                  "sentence": "Elle aime prendre des photos de paysages.",
                  "translation": "She likes to take landscape photos."
                },
                "advanced": {
                  "sentence": "Il faut absolument prendre en compte les retours des utilisateurs pour améliorer le produit avant le lancement officiel.",
                  "translation": "We absolutely must take user feedback into account to improve the product before the official launch."
                }
              }
            },
            {
              "word": "passer",
              "translation": "to pass / to spend (time)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je passe devant la boulangerie.",
                  "translation": "I pass by the bakery."
                },
                "intermediate": {
                  "sentence": "Nous allons passer nos vacances à la mer.",
                  "translation": "We are going to spend our vacation at the sea."
                },
                "advanced": {
                  "sentence": "Malgré les obstacles, nous avons réussi à passer cette étape cruciale du projet sans encombre.",
                  "translation": "Despite the obstacles, we managed to pass this crucial stage of the project without a hitch."
                }
              }
            },
            {
              "word": "comprendre",
              "translation": "to understand",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je comprends le français.",
                  "translation": "I understand French."
                },
                "intermediate": {
                  "sentence": "Il est difficile de comprendre toutes les subtilités de cette culture.",
                  "translation": "It is difficult to understand all the subtleties of this culture."
                },
                "advanced": {
                  "sentence": "Je peine à comprendre comment une décision pareille a pu être prise sans aucune consultation préalable.",
                  "translation": "I'm struggling to understand how such a decision could have been made without any prior consultation."
                }
              }
            },
            {
              "word": "demander",
              "translation": "to ask",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je demande de l'aide.",
                  "translation": "I ask for help."
                },
                "intermediate": {
                  "sentence": "Il a demandé à sa voisine d'arroser les plantes.",
                  "translation": "He asked his neighbor to water the plants."
                },
                "advanced": {
                  "sentence": "On va devoir demander des clarifications supplémentaires avant de pouvoir finaliser le dossier.",
                  "translation": "We're going to have to ask for additional clarifications before we can finalize the file."
                }
              }
            },
            {
              "word": "donner",
              "translation": "to give",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je te donne un cadeau.",
                  "translation": "I give you a gift."
                },
                "intermediate": {
                  "sentence": "Elle aime donner des conseils à ses amis.",
                  "translation": "She likes to give advice to her friends."
                },
                "advanced": {
                  "sentence": "Je crois qu'il est temps de donner une nouvelle impulsion à notre équipe pour atteindre nos objectifs.",
                  "translation": "I think it's time to give our team a new impetus to achieve our goals."
                }
              }
            },
            {
              "word": "trouver",
              "translation": "to find",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je trouve mon livre.",
                  "translation": "I find my book."
                },
                "intermediate": {
                  "sentence": "Il est difficile de trouver un bon emploi en ce moment.",
                  "translation": "It is difficult to find a good job right now."
                },
                "advanced": {
                  "sentence": "On espère bien trouver une solution viable à ce problème avant que la situation ne s'aggrave davantage.",
                  "translation": "We really hope to find a viable solution to this problem before the situation gets any worse."
                }
              }
            },
            {
              "word": "parler",
              "translation": "to speak / to talk",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je parle français.",
                  "translation": "I speak French."
                },
                "intermediate": {
                  "sentence": "Nous devons parler de ce problème sérieusement.",
                  "translation": "We need to talk about this problem seriously."
                },
                "advanced": {
                  "sentence": "Il faut absolument qu'on se voie pour parler de la suite des événements, j'ai des choses importantes à te raconter.",
                  "translation": "We absolutely have to meet up to talk about what happens next; I have important things to tell you."
                }
              }
            },
            {
              "word": "aimer",
              "translation": "to like / to love",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "J'aime la musique.",
                  "translation": "I like music."
                },
                "intermediate": {
                  "sentence": "Elle aime passer du temps avec sa famille.",
                  "translation": "She likes to spend time with her family."
                },
                "advanced": {
                  "sentence": "À force de fréquenter ce quartier, j'en suis venu à vraiment aimer son ambiance si particulière.",
                  "translation": "By spending so much time in this neighborhood, I've really come to love its very particular atmosphere."
                }
              }
            },
            {
              "word": "venir",
              "translation": "to come",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je viens de la maison.",
                  "translation": "I come from home."
                },
                "intermediate": {
                  "sentence": "Ils vont venir nous voir demain.",
                  "translation": "They are going to come see us tomorrow."
                },
                "advanced": {
                  "sentence": "Il est finalement venu à bout de toutes les difficultés et a réussi à terminer son projet à temps.",
                  "translation": "He finally overcame all the difficulties and managed to finish his project on time."
                }
              }
            },
            {
              "word": "mettre",
              "translation": "to put",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je mets la table.",
                  "translation": "I set the table."
                },
                "intermediate": {
                  "sentence": "Elle doit mettre ses chaussures avant de sortir.",
                  "translation": "She needs to put on her shoes before going out."
                },
                "advanced": {
                  "sentence": "Pour mettre en place un tel système, il faudra une coordination impeccable entre toutes les parties prenantes.",
                  "translation": "To implement such a system, impeccable coordination will be needed among all stakeholders."
                }
              }
            },
            {
              "word": "connaître",
              "translation": "to know (people/places)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je connais cette ville.",
                  "translation": "I know this city."
                },
                "intermediate": {
                  "sentence": "Tu connais bien cette personne ?",
                  "translation": "Do you know this person well?"
                },
                "advanced": {
                  "sentence": "Il faut absolument que tu connaisses le fonctionnement interne de cette entreprise avant d'y postuler.",
                  "translation": "You absolutely must know the inner workings of this company before applying there."
                }
              }
            },
            {
              "word": "falloir",
              "translation": "to be necessary / must (impersonal)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Il faut partir.",
                  "translation": "It is necessary to leave."
                },
                "intermediate": {
                  "sentence": "Il faudra beaucoup d'efforts pour y arriver.",
                  "translation": "It will take a lot of effort to get there."
                },
                "advanced": {
                  "sentence": "Il faudrait qu'on se concerte pour trouver une solution pérenne à ce problème récurrent.",
                  "translation": "We'd need to consult each other to find a lasting solution to this recurring problem."
                }
              }
            },
            {
              "word": "laisser",
              "translation": "to leave / to let",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Laisse-moi tranquille.",
                  "translation": "Leave me alone."
                },
                "intermediate": {
                  "sentence": "Il a laissé son téléphone sur la table.",
                  "translation": "He left his phone on the table."
                },
                "advanced": {
                  "sentence": "Il faut parfois laisser les choses se faire naturellement sans vouloir tout contrôler.",
                  "translation": "Sometimes you have to let things happen naturally without wanting to control everything."
                }
              }
            },
            {
              "word": "lire",
              "translation": "to read",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je lis un livre.",
                  "translation": "I am reading a book."
                },
                "intermediate": {
                  "sentence": "Elle aime lire avant de dormir.",
                  "translation": "She likes to read before sleeping."
                },
                "advanced": {
                  "sentence": "Après avoir lu des dizaines de témoignages, j'ai enfin pu me faire une idée précise de la situation.",
                  "translation": "After reading dozens of testimonies, I was finally able to get a precise idea of the situation."
                }
              }
            },
            {
              "word": "croire",
              "translation": "to believe",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je crois en toi.",
                  "translation": "I believe in you."
                },
                "intermediate": {
                  "sentence": "Beaucoup de gens croient aux légendes urbaines.",
                  "translation": "Many people believe in urban legends."
                },
                "advanced": {
                  "sentence": "Il est difficile de croire qu'une telle coïncidence puisse se produire sans aucune explication logique.",
                  "translation": "It's hard to believe that such a coincidence could happen without any logical explanation."
                }
              }
            },
            {
              "word": "tenir",
              "translation": "to hold / to keep",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Tiens ma main.",
                  "translation": "Hold my hand."
                },
                "intermediate": {
                  "sentence": "Ce livre tient une place spéciale dans mon cœur.",
                  "translation": "This book holds a special place in my heart."
                },
                "advanced": {
                  "sentence": "Malgré les pressions, il a tenu bon et n'a jamais cédé sur ses principes fondamentaux.",
                  "translation": "Despite the pressure, he held firm and never compromised on his fundamental principles."
                }
              }
            },
            {
              "word": "arriver",
              "translation": "to arrive / to happen",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Le train arrive.",
                  "translation": "The train is arriving."
                },
                "intermediate": {
                  "sentence": "Qu'est-ce qui va arriver ensuite ?",
                  "translation": "What's going to happen next?"
                },
                "advanced": {
                  "sentence": "Je n'arrive pas à croire que nous ayons pu arriver à ce résultat sans une préparation adéquate.",
                  "translation": "I can't believe we managed to achieve this result without adequate preparation."
                }
              }
            },
            {
              "word": "suivre",
              "translation": "to follow",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Suis-moi !",
                  "translation": "Follow me!"
                },
                "intermediate": {
                  "sentence": "Il est important de suivre les règles.",
                  "translation": "It is important to follow the rules."
                },
                "advanced": {
                  "sentence": "Il a dû se résoudre à suivre les consignes à la lettre pour éviter toute complication juridique.",
                  "translation": "He had to resign himself to following the instructions to the letter to avoid any legal complications."
                }
              }
            },
            {
              "word": "montrer",
              "translation": "to show",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Montre-moi ton dessin.",
                  "translation": "Show me your drawing."
                },
                "intermediate": {
                  "sentence": "Elle aime montrer ses photos de vacances.",
                  "translation": "She likes to show her vacation photos."
                },
                "advanced": {
                  "sentence": "Les dernières études scientifiques commencent à montrer des signes prometteurs dans la recherche de ce traitement.",
                  "translation": "The latest scientific studies are starting to show promising signs in the search for this treatment."
                }
              }
            },
            {
              "word": "partir",
              "translation": "to leave / to depart",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je pars maintenant.",
                  "translation": "I'm leaving now."
                },
                "intermediate": {
                  "sentence": "Ils ont décidé de partir en vacances en France.",
                  "translation": "They decided to go on vacation to France."
                },
                "advanced": {
                  "sentence": "Après mûre réflexion, il a décidé de partir à l'aventure et de tout quitter pour voyager autour du monde.",
                  "translation": "After much thought, he decided to embark on an adventure and leave everything behind to travel around the world."
                }
              }
            },
            {
              "word": "mettre",
              "translation": "to put on (clothing)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Mets ton manteau.",
                  "translation": "Put on your coat."
                },
                "intermediate": {
                  "sentence": "Elle aime mettre ses bijoux les plus chers pour les occasions spéciales.",
                  "translation": "She likes to put on her most expensive jewelry for special occasions."
                },
                "advanced": {
                  "sentence": "Nous devons mettre toutes les chances de notre côté pour que ce projet ambitieux aboutisse favorablement.",
                  "translation": "We must put all the odds on our side for this ambitious project to succeed favorably."
                }
              }
            },
            {
              "word": "rendre",
              "translation": "to give back / to return (something)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Rends-moi mon livre.",
                  "translation": "Give me back my book."
                },
                "intermediate": {
                  "sentence": "Il doit rendre les clés avant midi.",
                  "translation": "He must return the keys before noon."
                },
                "advanced": {
                  "sentence": "Ce genre de comportement peut rendre la situation particulièrement tendue et nuire aux relations.",
                  "translation": "This kind of behavior can make the situation particularly tense and harm relationships."
                }
              }
            },
            {
              "word": "écrire",
              "translation": "to write",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "J'écris une lettre.",
                  "translation": "I am writing a letter."
                },
                "intermediate": {
                  "sentence": "Il est important d'écrire clairement pour être compris.",
                  "translation": "It is important to write clearly to be understood."
                },
                "advanced": {
                  "sentence": "On lui a demandé d'écrire un rapport détaillé sur l'évolution du marché pour le conseil d'administration.",
                  "translation": "He was asked to write a detailed report on market trends for the board of directors."
                }
              }
            },
            {
              "word": "appeler",
              "translation": "to call",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "J'appelle ma mère.",
                  "translation": "I'm calling my mom."
                },
                "intermediate": {
                  "sentence": "Elle va appeler un taxi pour rentrer chez elle.",
                  "translation": "She's going to call a taxi to go home."
                },
                "advanced": {
                  "sentence": "Face à cette situation critique, il est impératif d'appeler à la mobilisation générale pour trouver une solution rapidement.",
                  "translation": "Given this critical situation, it's imperative to call for general mobilization to find a solution quickly."
                }
              }
            },
            {
              "word": "recevoir",
              "translation": "to receive",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je reçois un cadeau.",
                  "translation": "I receive a gift."
                },
                "intermediate": {
                  "sentence": "Nous allons recevoir des invités ce week-end.",
                  "translation": "We are going to receive guests this weekend."
                },
                "advanced": {
                  "sentence": "Elle a eu l'immense honneur de recevoir le prix pour l'ensemble de sa carrière lors de la cérémonie.",
                  "translation": "She had the immense honor of receiving the lifetime achievement award at the ceremony."
                }
              }
            },
            {
              "word": "vivre",
              "translation": "to live",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je vis à Paris.",
                  "translation": "I live in Paris."
                },
                "intermediate": {
                  "sentence": "Elle rêve de vivre une vie simple à la campagne.",
                  "translation": "She dreams of living a simple life in the countryside."
                },
                "advanced": {
                  "sentence": "On essaie de vivre au jour le jour sans trop se soucier de l'avenir incertain.",
                  "translation": "We try to live day by day without worrying too much about the uncertain future."
                }
              }
            },
            {
              "word": "mourir",
              "translation": "to die",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Les fleurs vont mourir.",
                  "translation": "The flowers will die."
                },
                "intermediate": {
                  "sentence": "Il a failli mourir d'un accident de voiture.",
                  "translation": "He almost died in a car accident."
                },
                "advanced": {
                  "sentence": "Laisser une partie de soi mourir pour renaître plus fort est parfois un passage obligé dans la vie.",
                  "translation": "Letting a part of yourself die to be reborn stronger is sometimes a necessary step in life."
                }
              }
            },
            {
              "word": "partir",
              "translation": "to leave (a place)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je pars de la maison.",
                  "translation": "I'm leaving the house."
                },
                "intermediate": {
                  "sentence": "Elle a décidé de partir pour un long voyage autour du monde.",
                  "translation": "She decided to leave for a long trip around the world."
                },
                "advanced": {
                  "sentence": "On a dû partir précipitamment à cause de l'urgence, sans avoir le temps de tout préparer correctement.",
                  "translation": "We had to leave in a hurry due to the emergency, without having time to prepare everything properly."
                }
              }
            },
            {
              "word": "répondre",
              "translation": "to answer / to respond",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je réponds à la question.",
                  "translation": "I answer the question."
                },
                "intermediate": {
                  "sentence": "Il n'a pas voulu répondre à mes messages.",
                  "translation": "He didn't want to answer my messages."
                },
                "advanced": {
                  "sentence": "Il a été difficile de répondre à toutes les attentes, mais nous avons fait de notre mieux pour y parvenir.",
                  "translation": "It was difficult to meet all expectations, but we did our best to achieve it."
                }
              }
            },
            {
              "word": "sentir",
              "translation": "to feel / to smell",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je me sens bien.",
                  "translation": "I feel good."
                },
                "intermediate": {
                  "sentence": "Le gâteau sent très bon.",
                  "translation": "The cake smells very good."
                },
                "advanced": {
                  "sentence": "Dès mon arrivée, j'ai pu sentir une ambiance très particulière qui se dégageait de cet endroit mystérieux.",
                  "translation": "As soon as I arrived, I could feel a very particular atmosphere emanating from this mysterious place."
                }
              }
            },
            {
              "word": "regarder",
              "translation": "to watch / to look at",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je regarde la télévision.",
                  "translation": "I watch television."
                },
                "intermediate": {
                  "sentence": "Elle aime regarder les étoiles la nuit.",
                  "translation": "She likes to watch the stars at night."
                },
                "advanced": {
                  "sentence": "Après avoir bien regardé la situation sous tous les angles, on s'est rendu compte qu'il n'y avait pas de solution facile.",
                  "translation": "After thoroughly looking at the situation from all angles, we realized there was no easy solution."
                }
              }
            },
            {
              "word": "attendre",
              "translation": "to wait for",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "J'attends le bus.",
                  "translation": "I am waiting for the bus."
                },
                "intermediate": {
                  "sentence": "Elle ne peut pas attendre Noël avec impatience.",
                  "translation": "She can't wait for Christmas with impatience."
                },
                "advanced": {
                  "sentence": "On ne peut pas toujours attendre que les choses se fassent d'elles-mêmes; parfois, il faut prendre les devants.",
                  "translation": "You can't always wait for things to happen on their own; sometimes you have to take the initiative."
                }
              }
            },
            {
              "word": "penser",
              "translation": "to think",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je pense à toi.",
                  "translation": "I'm thinking of you."
                },
                "intermediate": {
                  "sentence": "Que penses-tu de cette idée ?",
                  "translation": "What do you think of this idea?"
                },
                "advanced": {
                  "sentence": "J'ai passé la nuit à penser aux différentes stratégies possibles pour résoudre ce dilemme épineux.",
                  "translation": "I spent the night thinking about the different possible strategies to resolve this thorny dilemma."
                }
              }
            },
            {
              "word": "perdre",
              "translation": "to lose",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "J'ai perdu mes clés.",
                  "translation": "I lost my keys."
                },
                "intermediate": {
                  "sentence": "Il ne faut pas perdre espoir, même dans les moments difficiles.",
                  "translation": "You must not lose hope, even in difficult times."
                },
                "advanced": {
                  "sentence": "Si on ne réagit pas vite, on risque de perdre un avantage compétitif crucial sur le marché actuel.",
                  "translation": "If we don't react quickly, we risk losing a crucial competitive advantage in the current market."
                }
              }
            },
            {
              "word": "trouver",
              "translation": "to find (discover)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "J'ai trouvé la solution.",
                  "translation": "I found the solution."
                },
                "intermediate": {
                  "sentence": "Il est difficile de trouver des informations fiables sur ce sujet.",
                  "translation": "It is difficult to find reliable information on this topic."
                },
                "advanced": {
                  "sentence": "Après des heures de recherche, j'ai enfin réussi à trouver le document que je cherchais désespérément.",
                  "translation": "After hours of searching, I finally managed to find the document I was desperately looking for."
                }
              }
            },
            {
              "word": "utiliser",
              "translation": "to use",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "J'utilise un ordinateur.",
                  "translation": "I use a computer."
                },
                "intermediate": {
                  "sentence": "Il faut utiliser cet outil avec précaution.",
                  "translation": "You must use this tool with caution."
                },
                "advanced": {
                  "sentence": "Pour optimiser nos résultats, il serait judicieux d'utiliser des méthodes plus innovantes et moins conventionnelles.",
                  "translation": "To optimize our results, it would be wise to use more innovative and less conventional methods."
                }
              }
            },
            {
              "word": "travailler",
              "translation": "to work",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je travaille à l'hôpital.",
                  "translation": "I work at the hospital."
                },
                "intermediate": {
                  "sentence": "Ils doivent travailler ensemble pour finir le projet à temps.",
                  "translation": "They must work together to finish the project on time."
                },
                "advanced": {
                  "sentence": "Malgré la fatigue, il a continué à travailler d'arrache-pied pour s'assurer que tout serait prêt pour la présentation.",
                  "translation": "Despite the fatigue, he continued to work tirelessly to ensure everything would be ready for the presentation."
                }
              }
            },
            {
              "word": "donner",
              "translation": "to give (provide)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Le professeur donne des devoirs.",
                  "translation": "The teacher gives homework."
                },
                "intermediate": {
                  "sentence": "Ce livre peut donner des informations utiles.",
                  "translation": "This book can provide useful information."
                },
                "advanced": {
                  "sentence": "Les nouvelles mesures devraient donner un coup de fouet à l'économie locale et créer de nouveaux emplois.",
                  "translation": "The new measures should give a boost to the local economy and create new jobs."
                }
              }
            },
            {
              "word": "suivre",
              "translation": "to take (a course/advice)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je suis un cours de cuisine.",
                  "translation": "I'm taking a cooking class."
                },
                "intermediate": {
                  "sentence": "Il a décidé de suivre les conseils de son avocat.",
                  "translation": "He decided to take his lawyer's advice."
                },
                "advanced": {
                  "sentence": "Il est primordial de suivre de près l'évolution de la situation pour adapter notre stratégie en temps réel.",
                  "translation": "It's essential to closely follow the evolution of the situation to adapt our strategy in real time."
                }
              }
            },
            {
              "word": "chercher",
              "translation": "to look for / to search",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je cherche mes lunettes.",
                  "translation": "I'm looking for my glasses."
                },
                "intermediate": {
                  "sentence": "Ils sont partis chercher des champignons dans la forêt.",
                  "translation": "They went to look for mushrooms in the forest."
                },
                "advanced": {
                  "sentence": "Face à ce mystère, les enquêteurs ont dû chercher des indices dans les moindres recoins, sans rien laisser au hasard.",
                  "translation": "Faced with this mystery, the investigators had to search for clues in every corner, leaving nothing to chance."
                }
              }
            },
            {
              "word": "porter",
              "translation": "to carry / to wear",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je porte un sac.",
                  "translation": "I'm carrying a bag."
                },
                "intermediate": {
                  "sentence": "Elle aime porter des vêtements colorés.",
                  "translation": "She likes to wear colorful clothes."
                },
                "advanced": {
                  "sentence": "Il n'est pas facile de porter le poids des responsabilités quand les enjeux sont aussi importants.",
                  "translation": "It's not easy to bear the weight of responsibility when the stakes are so high."
                }
              }
            },
            {
              "word": "apprendre",
              "translation": "to learn",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "J'apprends le piano.",
                  "translation": "I'm learning the piano."
                },
                "intermediate": {
                  "sentence": "Il est fascinant d'apprendre sur d'autres cultures.",
                  "translation": "It is fascinating to learn about other cultures."
                },
                "advanced": {
                  "sentence": "À force de persévérance, on finit toujours par apprendre les leçons essentielles de la vie, même les plus dures.",
                  "translation": "With enough perseverance, you always end up learning life's essential lessons, even the toughest ones."
                }
              }
            },
            {
              "word": "comprendre",
              "translation": "to understand (grasp)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je comprends la leçon.",
                  "translation": "I understand the lesson."
                },
                "intermediate": {
                  "sentence": "Il a du mal à comprendre les maths.",
                  "translation": "He has trouble understanding math."
                },
                "advanced": {
                  "sentence": "Il m'a fallu du temps pour comprendre toute l'ampleur des répercussions de cette décision à long terme.",
                  "translation": "It took me time to understand the full extent of the long-term repercussions of this decision."
                }
              }
            },
            {
              "word": "dire",
              "translation": "to tell (instruct)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Il me dit quoi faire.",
                  "translation": "He tells me what to do."
                },
                "intermediate": {
                  "sentence": "Le médecin lui a dit de se reposer.",
                  "translation": "The doctor told him to rest."
                },
                "advanced": {
                  "sentence": "On ne peut pas toujours se fier à ce qu'on nous dit, il faut parfois creuser un peu plus pour connaître la vérité.",
                  "translation": "You can't always rely on what you're told; sometimes you have to dig a little deeper to find out the truth."
                }
              }
            },
            {
              "word": "mettre",
              "translation": "to put (place)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Mets le livre sur la table.",
                  "translation": "Put the book on the table."
                },
                "intermediate": {
                  "sentence": "Elle a mis tous ses efforts dans ce projet.",
                  "translation": "She put all her efforts into this project."
                },
                "advanced": {
                  "sentence": "Pour éviter les quiproquos, il est préférable de mettre les choses au clair dès le début.",
                  "translation": "To avoid misunderstandings, it's best to make things clear from the start."
                }
              }
            },
            {
              "word": "venir",
              "translation": "to come (attend)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Tu vas venir à la fête ?",
                  "translation": "Are you coming to the party?"
                },
                "intermediate": {
                  "sentence": "De nombreux étudiants vont venir assister à la conférence.",
                  "translation": "Many students will come to attend the conference."
                },
                "advanced": {
                  "sentence": "Tout semble indiquer que les négociations vont venir à une issue favorable dans les prochains jours.",
                  "translation": "Everything indicates that the negotiations will come to a favorable outcome in the coming days."
                }
              }
            },
            {
              "word": "voir",
              "translation": "to see (understand)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je vois ce que tu veux dire.",
                  "translation": "I see what you mean."
                },
                "intermediate": {
                  "sentence": "Nous ne voyons pas les choses de la même manière.",
                  "translation": "We don't see things the same way."
                },
                "advanced": {
                  "sentence": "Avec le temps, on finit par voir la vie sous un autre angle et apprécier les petites choses.",
                  "translation": "With time, you end up seeing life from another perspective and appreciating the little things."
                }
              }
            },
            {
              "word": "vouloir",
              "translation": "to want (desire)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Elle veut une glace.",
                  "translation": "She wants an ice cream."
                },
                "intermediate": {
                  "sentence": "Ils veulent déménager dans une plus grande maison.",
                  "translation": "They want to move to a bigger house."
                },
                "advanced": {
                  "sentence": "Si tu veux vraiment que ça marche, tu vas devoir y mettre du tien et faire des compromis.",
                  "translation": "If you really want it to work, you're going to have to do your part and make compromises."
                }
              }
            },
            {
              "word": "pouvoir",
              "translation": "to be able to (skill)",
              "category": "Verbs",
              "sentences": {
                "basic": {
                  "sentence": "Je peux chanter.",
                  "translation": "I can sing."
                },
                "intermediate": {
                  "sentence": "Tu ne peux pas faire ça tout seul.",
                  "translation": "You can't do that by yourself."
                },
                "advanced": {
                  "sentence": "Après une longue négociation, nous avons pu finalement obtenir un accord qui convient à toutes les parties.",
                  "translation": "After a long negotiation, we were finally able to reach an agreement that suits all parties."
                }
              }
            }
          ],
        food: [
            { 
                word: "pain", 
                translation: "bread", 
                category: "food",
                sentences: {
                    basic: { sentence: "Je mange du pain.", translation: "I eat bread." },
                    intermediate: { sentence: "J'aime le pain frais.", translation: "I like fresh bread." },
                    advanced: { sentence: "J'achète du pain frais à la boulangerie tous les jours.", translation: "I buy fresh bread from the bakery every day." }
                }
            },
            { 
                word: "fromage", 
                translation: "cheese", 
                category: "food",
                sentences: {
                    basic: { sentence: "Le fromage est délicieux.", translation: "Cheese is delicious." },
                    intermediate: { sentence: "J'aime manger du fromage avec du vin rouge.", translation: "I like eating cheese with red wine." },
                    advanced: { sentence: "J'ai goûté divers fromages du monde entier.", translation: "I have tasted various cheeses from around the world." }
                }
            },
            { 
                word: "pomme", 
                translation: "apple", 
                category: "food",
                sentences: {
                    basic: { sentence: "Je mange une pomme.", translation: "I eat an apple." },
                    intermediate: { sentence: "J'aime les pommes rouges.", translation: "I like red apples." },
                    advanced: { sentence: "Je mange une pomme par jour pour rester en bonne santé.", translation: "I eat an apple daily to stay healthy." }
                }
            },
            { 
                word: "banane", 
                translation: "banana", 
                category: "food",
                sentences: {
                    basic: { sentence: "La banane est douce.", translation: "The banana is sweet." },
                    intermediate: { sentence: "Je mange des bananes au petit-déjeuner.", translation: "I eat bananas for breakfast." },
                    advanced: { sentence: "Je fais des smoothies sains avec des bananes.", translation: "I make healthy smoothies with bananas." }
                }
            },
            { 
                word: "lait", 
                translation: "milk", 
                category: "food",
                sentences: {
                    basic: { sentence: "Je bois du lait.", translation: "I drink milk." },
                    intermediate: { sentence: "Je bois du lait tous les jours.", translation: "I drink milk every day." },
                    advanced: { sentence: "Je bois du lait bio pour une meilleure nutrition.", translation: "I drink organic milk for better nutrition." }
                }
            },
            { 
                word: "eau", 
                translation: "water", 
                category: "food",
                sentences: {
                    basic: { sentence: "Je bois de l'eau.", translation: "I drink water." },
                    intermediate: { sentence: "Je bois huit verres d'eau par jour.", translation: "I drink eight glasses of water daily." },
                    advanced: { sentence: "Je bois de l'eau filtrée pour assurer la sécurité de l'eau.", translation: "I drink filtered water to ensure water safety." }
                }
            },
            { 
                word: "café", 
                translation: "coffee", 
                category: "food",
                sentences: {
                    basic: { sentence: "Je bois du café.", translation: "I drink coffee." },
                    intermediate: { sentence: "Je bois du café le matin.", translation: "I drink coffee in the morning." },
                    advanced: { sentence: "J'aime goûter les saveurs uniques de différents grains de café.", translation: "I like tasting the unique flavors of different coffee beans." }
                }
            },
            { 
                word: "thé", 
                translation: "tea", 
                category: "food",
                sentences: {
                    basic: { sentence: "Je bois du thé.", translation: "I drink tea." },
                    intermediate: { sentence: "J'aime le thé vert.", translation: "I like green tea." },
                    advanced: { sentence: "Je collectionne divers thés, y compris le thé noir, vert et aux fleurs.", translation: "I collect various teas, including black tea, green tea, and flower tea." }
                }
            },
            { 
                word: "viande", 
                translation: "meat", 
                category: "food",
                sentences: {
                    basic: { sentence: "Je mange de la viande.", translation: "I eat meat." },
                    intermediate: { sentence: "J'aime manger du bœuf.", translation: "I like eating beef." },
                    advanced: { sentence: "Je choisis de la viande bio pour soutenir l'agriculture durable.", translation: "I choose organic meat to support sustainable agriculture." }
                }
            },
            { 
                word: "poisson", 
                translation: "fish", 
                category: "food",
                sentences: {
                    basic: { sentence: "Je mange du poisson.", translation: "I eat fish." },
                    intermediate: { sentence: "J'aime manger du saumon.", translation: "I like eating salmon." },
                    advanced: { sentence: "Je mange du poisson deux fois par semaine pour obtenir des acides gras omega-3.", translation: "I eat fish twice a week to get omega-3 fatty acids." }
                }
            }
        ]
    },
    chinese: {
        house: [
            {
                "word": "厨房",
                "translation": "kitchen",
                "pinyin": "chúfáng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "妈妈在厨房里。", "pinyin": "Māmā zài chúfáng lǐ.", "translation": "Mom is in the kitchen." },
                    "intermediate": { "sentence": "我们厨房的冰箱是新的。", "pinyin": "Wǒmen chúfáng de bīngxiāng shì xīn de.", "translation": "The refrigerator in our kitchen is new." },
                    "advanced": { "sentence": "她把厨房重新装修成了一个现代化的烹饪空间。", "pinyin": "Tā bǎ chúfáng chóngxīn zhuāngxiū chéngle yīgè xiàndàihuà de pēngrèn kōngjiān.", "translation": "She renovated the kitchen into a modern cooking space." }
                }
            },
            {
                "word": "客厅",
                "translation": "living room",
                "pinyin": "kètīng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我们在客厅看电视。", "pinyin": "Wǒmen zài kètīng kàn diànshì.", "translation": "We watch TV in the living room." },
                    "intermediate": { "sentence": "客厅的沙发很舒服，可以坐五个人。", "pinyin": "Kètīng de shāfā hěn shūfú, kěyǐ zuò wǔ gèrén.", "translation": "The sofa in the living room is very comfortable and can seat five people." },
                    "advanced": { "sentence": "整个家庭喜欢在周末晚上聚集在客厅里玩棋盘游戏。", "pinyin": "Zhěnggè jiātíng xǐhuān zài zhōumò wǎnshàng jùjí zài kètīng lǐ wán qípán yóuxì.", "translation": "The whole family likes to gather in the living room on weekend evenings to play board games." }
                }
            },
            {
                "word": "卧室",
                "translation": "bedroom",
                "pinyin": "wòshì",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "这是我的卧室。", "pinyin": "Zhè shì wǒ de wòshì.", "translation": "This is my bedroom." },
                    "intermediate": { "sentence": "我的卧室里有一张大床和一个衣柜。", "pinyin": "Wǒ de wòshì lǐ yǒuyī zhāng dà chuáng hé yīgè yīguì.", "translation": "There is a big bed and a wardrobe in my bedroom." },
                    "advanced": { "sentence": "为了获得更好的睡眠质量，他确保卧室完全黑暗和安静。", "pinyin": "Wèile huòdé gèng hǎo de shuìmián zhìliàng, tā quèbǎo wòshì wánquán hēi'àn hé ānjìng.", "translation": "To get better sleep quality, he ensures the bedroom is completely dark and quiet." }
                }
            },
            {
                "word": "浴室",
                "translation": "bathroom",
                "pinyin": "yùshì",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我需要用一下浴室。", "pinyin": "Wǒ xūyào yòng yīxià yùshì.", "translation": "I need to use the bathroom." },
                    "intermediate": { "sentence": "这个酒店的每个房间都有独立的浴室。", "pinyin": "Zhège jiǔdiàn de měi gè fángjiān dōu yǒu dúlì de yùshì.", "translation": "Every room in this hotel has a private bathroom." },
                    "advanced": { "sentence": "他们决定在主浴室安装一个带有按摩功能的大浴缸。", "pinyin": "Tāmen juédìng zài zhǔ yùshì ānzhuāng yīgè dài yǒu ànmó gōngnéng de dà yùgāng.", "translation": "They decided to install a large bathtub with massage features in the master bathroom." }
                }
            },
            {
                "word": "餐厅",
                "translation": "dining room",
                "pinyin": "cāntīng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我们在餐厅吃饭。", "pinyin": "Wǒmen zài cāntīng chīfàn.", "translation": "We eat in the dining room." },
                    "intermediate": { "sentence": "餐厅的桌子足够大，可以容纳八个人。", "pinyin": "Cāntīng de zhuōzi zúgòu dà, kěyǐ róngnà bā gèrén.", "translation": "The dining room table is big enough to accommodate eight people." },
                    "advanced": { "sentence": "为了庆祝节日，她在餐厅挂上了彩灯和装饰品。", "pinyin": "Wèile qìngzhù jiérì, tā zài cāntīng guà shàngle cǎidēng hé zhuāngshì pǐn.", "translation": "To celebrate the festival, she hung colorful lights and decorations in the dining room." }
                }
            },
            {
                "word": "书房",
                "translation": "study / office",
                "pinyin": "shūfáng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "爸爸在书房工作。", "pinyin": "Bàba zài shūfáng gōngzuò.", "translation": "Dad is working in the study." },
                    "intermediate": { "sentence": "我的书房里有很多书。", "pinyin": "Wǒ de shūfáng lǐ yǒu hěnduō shū.", "translation": "There are many books in my study." },
                    "advanced": { "sentence": "他把备用卧室改造成了一个安静明亮的书房。", "pinyin": "Tā bǎ bèiyòng wòshì gǎizào chéngle yīgè ānjìng míngliàng de shūfáng.", "translation": "He converted the spare bedroom into a quiet and bright study." }
                }
            },
            {
                "word": "车库",
                "translation": "garage",
                "pinyin": "chēkù",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "车在车库里。", "pinyin": "Chē zài chēkù lǐ.", "translation": "The car is in the garage." },
                    "intermediate": { "sentence": "我们的车库可以停放两辆车。", "pinyin": "Wǒmen de chēkù kěyǐ tíngfàng liǎng liàng chē.", "translation": "Our garage can park two cars." },
                    "advanced": { "sentence": "除了停车，他还把车库用作存放工具和杂物的储藏室。", "pinyin": "Chúle tíngchē, tā hái bǎ chēkù yòng zuò cúnfàng gōngjù hé záwù de chúcáng shì.", "translation": "Besides parking, he also uses the garage as a storage room for tools and miscellaneous items." }
                }
            },
            {
                "word": "花园",
                "translation": "garden",
                "pinyin": "huāyuán",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "花园里有很多花。", "pinyin": "Huāyuán lǐ yǒu hěnduō huā.", "translation": "There are many flowers in the garden." },
                    "intermediate": { "sentence": "我喜欢在花园里喝茶。", "pinyin": "Wǒ xǐhuān zài huāyuán lǐ hē chá.", "translation": "I like to drink tea in the garden." },
                    "advanced": { "sentence": "她花了整个春天的时间来打理她的菜园，现在可以收获新鲜的蔬菜了。", "pinyin": "Tā huāle zhěnggè chūntiān de shíjiān lái dǎlǐ tā de càiyuán, xiànzài kěyǐ shōuhuò xīnxiān de shūcàile.", "translation": "She spent the whole spring tending to her vegetable garden and can now harvest fresh vegetables." }
                }
            },
            {
                "word": "门",
                "translation": "door",
                "pinyin": "mén",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "请关门。", "pinyin": "Qǐng guānmén.", "translation": "Please close the door." },
                    "intermediate": { "sentence": "出门时别忘了锁门。", "pinyin": "Chūmén shí bié wàngle suǒmén.", "translation": "Don't forget to lock the door when you go out." },
                    "advanced": { "sentence": "这扇旧木门被漆成了鲜艳的红色，成为了房子的一个亮点。", "pinyin": "Zhè shàn jiù mù mén bèi qī chéngle xiānyàn de hóngsè, chéngwéile fángzi de yīgè liàngdiǎn.", "translation": "This old wooden door was painted bright red, becoming a highlight of the house." }
                }
            },
            {
                "word": "窗户",
                "translation": "window",
                "pinyin": "chuānghu",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "请打开窗户。", "pinyin": "Qǐng dǎkāi chuānghu.", "translation": "Please open the window." },
                    "intermediate": { "sentence": "阳光从窗户照进来。", "pinyin": "Yángguāng cóng chuānghu zhào jìnlái.", "translation": "Sunlight shines in through the window." },
                    "advanced": { "sentence": "为了隔音，他们安装了双层玻璃窗户。", "pinyin": "Wèile géyīn, tāmen ānzhuāngle shuāng céng bōlí chuānghu.", "translation": "For soundproofing, they installed double-glazed windows." }
                }
            },
            {
                "word": "地板",
                "translation": "floor",
                "pinyin": "dìbǎn",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "地板很干净。", "pinyin": "Dìbǎn hěn gānjìng.", "translation": "The floor is very clean." },
                    "intermediate": { "sentence": "小心，地板很滑。", "pinyin": "Xiǎoxīn, dìbǎn hěn huá.", "translation": "Be careful, the floor is very slippery." },
                    "advanced": { "sentence": "整个一楼都铺设了有地暖功能的高档硬木地板。", "pinyin": "Zhěnggè yī lóu dōu pūshèle yǒu dì nuǎn gōngnéng de gāodàng yìng mù dìbǎn.", "translation": "The entire ground floor is laid with high-end hardwood flooring with underfloor heating." }
                }
            },
            {
                "word": "屋顶",
                "translation": "roof",
                "pinyin": "wūdǐng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "屋顶是红色的。", "pinyin": "Wūdǐng shì hóngsè de.", "translation": "The roof is red." },
                    "intermediate": { "sentence": "一只猫在屋顶上。", "pinyin": "Yī zhǐ māo zài wūdǐng shàng.", "translation": "A cat is on the roof." },
                    "advanced": { "sentence": "暴风雨过后，我们需要检查屋顶是否漏水。", "pinyin": "Bàofēngyǔ guòhòu, wǒmen xūyào jiǎnchá wūdǐng shìfǒu lòushuǐ.", "translation": "After the storm, we need to check if the roof is leaking." }
                }
            },
            {
                "word": "墙",
                "translation": "wall",
                "pinyin": "qiáng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "墙上有一幅画。", "pinyin": "Qiáng shàng yǒuyī fú huà.", "translation": "There is a painting on the wall." },
                    "intermediate": { "sentence": "我想把这面墙漆成蓝色。", "pinyin": "Wǒ xiǎng bǎ zhè miàn qiáng qī chéng lán sè.", "translation": "I want to paint this wall blue." },
                    "advanced": { "sentence": "建筑师决定拆掉这面非承重墙，以创造一个开放式的起居空间。", "pinyin": "Jiànzhú shī juédìng chāi diào zhè miàn fēi chéngzhòng qiáng, yǐ chuàngzào yīgè kāifàng shì de qǐjū kōngjiān.", "translation": "The architect decided to remove this non-load-bearing wall to create an open-plan living space." }
                }
            },
            {
                "word": "楼梯",
                "translation": "stairs",
                "pinyin": "lóutī",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "请走楼梯。", "pinyin": "Qǐng zǒu lóutī.", "translation": "Please take the stairs." },
                    "intermediate": { "sentence": "上下楼梯时要小心。", "pinyin": "Shàng xià lóutī shí yào xiǎoxīn.", "translation": "Be careful when going up and down the stairs." },
                    "advanced": { "sentence": "这座老房子的旋转楼梯虽然漂亮，但对老年人来说有点陡峭。", "pinyin": "Zhè zuò lǎo fángzi de xuánzhuǎn lóutī suīrán piàoliang, dàn duì lǎonián rén lái shuō yǒudiǎn dǒuqiào.", "translation": "The spiral staircase in this old house is beautiful, but a bit steep for the elderly." }
                }
            },
            {
                "word": "钥匙",
                "translation": "key",
                "pinyin": "yàoshi",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "这是我的钥匙。", "pinyin": "Zhè shì wǒ de yàoshi.", "translation": "This is my key." },
                    "intermediate": { "sentence": "我找不到我的钥匙了。", "pinyin": "Wǒ zhǎo bùdào wǒ de yàoshi le.", "translation": "I can't find my key." },
                    "advanced": { "sentence": "现代智能锁可以用指纹或手机应用开锁，不再需要传统钥匙。", "pinyin": "Xiàndài zhìnéng suǒ kěyǐ yòng zhǐwén huò shǒujī yìngyòng kāisuǒ, bù zài xūyào chuántǒng yàoshi.", "translation": "Modern smart locks can be opened with a fingerprint or a mobile app, no longer requiring a traditional key." }
                }
            },
            {
                "word": "床",
                "translation": "bed",
                "pinyin": "chuáng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我想去睡觉了。", "pinyin": "Wǒ xiǎng qù shuìjiào le.", "translation": "I want to go to bed." },
                    "intermediate": { "sentence": "我的卧室里有一张很舒服的床。", "pinyin": "Wǒ de wòshì lǐ yǒu yī zhāng hěn shūfú de chuáng.", "translation": "There is a very comfortable bed in my bedroom." },
                    "advanced": { "sentence": "他选择了一张带有储物功能的床，以最大限度地利用小卧室的空间。", "pinyin": "Tā xuǎnzéle yī zhāng dài yǒu chú wù gōngnéng de chuáng, yǐ zuìdà xiàndù de lìyòng xiǎo wòshì de kōngjiān.", "translation": "He chose a bed with storage function to maximize the space in the small bedroom." }
                }
            },
            {
                "word": "桌子",
                "translation": "table",
                "pinyin": "zhuōzi",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "书在桌子上。", "pinyin": "Shū zài zhuōzi shàng.", "translation": "The book is on the table." },
                    "intermediate": { "sentence": "我们围着桌子坐下来吃饭。", "pinyin": "Wǒmen wéizhe zhuōzi zuò xiàlái chīfàn.", "translation": "We sat down around the table to eat." },
                    "advanced": { "sentence": "这张可伸缩的餐桌平时足够四个人用，聚会时可以拉开坐下十个人。", "pinyin": "Zhè zhāng kě shēnsuō de cānzhuō píngshí zúgòu sì gèrén yòng, jùhuì shí kěyǐ lā kāi zuò xià shí gèrén.", "translation": "This extendable dining table is usually enough for four people, and can be pulled out to seat ten during gatherings." }
                }
            },
            {
                "word": "椅子",
                "translation": "chair",
                "pinyin": "yǐzi",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "请坐在这把椅子上。", "pinyin": "Qǐng zuò zài zhè bǎ yǐzi shàng.", "translation": "Please sit on this chair." },
                    "intermediate": { "sentence": "这张桌子配有六把椅子。", "pinyin": "Zhè zhāng zhuōzi pèi yǒu liù bǎ yǐzi.", "translation": "This table comes with six chairs." },
                    "advanced": { "sentence": "为了保护他的背部，他投资了一把符合人体工程学的办公椅。", "pinyin": "Wèile bǎohù tā de bèibù, tā tóuzīle yī bǎ fúhé réntǐ gōngchéng xué de bàngōng yǐ.", "translation": "To protect his back, he invested in an ergonomic office chair." }
                }
            },
            {
                "word": "沙发",
                "translation": "sofa",
                "pinyin": "shāfā",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "猫在沙发上睡觉。", "pinyin": "Māo zài shāfā shàng shuìjiào.", "translation": "The cat is sleeping on the sofa." },
                    "intermediate": { "sentence": "这个新沙发非常舒服。", "pinyin": "Zhège xīn shāfā fēicháng shūfú.", "translation": "This new sofa is very comfortable." },
                    "advanced": { "sentence": "他们选择了一个L形的组合沙发，以更好地适应他们客厅的布局。", "pinyin": "Tāmen xuǎnzéle yīgè L xíng de zǔhé shāfā, yǐ gèng hǎo de shìyìng tāmen kètīng de bùjú.", "translation": "They chose an L-shaped sectional sofa to better fit the layout of their living room." }
                }
            },
            {
                "word": "灯",
                "translation": "lamp / light",
                "pinyin": "dēng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "请开灯。", "pinyin": "Qǐng kāidēng.", "translation": "Please turn on the light." },
                    "intermediate": { "sentence": "天黑了，我们把灯打开吧。", "pinyin": "Tiān hēile, wǒmen bǎ dēng dǎkāi ba.", "translation": "It's dark, let's turn on the lights." },
                    "advanced": { "sentence": "他安装了一个智能灯光系统，可以通过手机控制家里所有灯的亮度和颜色。", "pinyin": "Tā ānzhuāngle yīgè zhìnéng dēngguāng xìtǒng, kěyǐ tōngguò shǒujī kòngzhì jiālǐ suǒyǒu dēng de liàngdù hé yánsè.", "translation": "He installed a smart lighting system that can control the brightness and color of all the lights in the house via a mobile phone." }
                }
            },
            {
                "word": "电视",
                "translation": "television",
                "pinyin": "diànshì",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我喜欢看电视。", "pinyin": "Wǒ xǐhuān kàn diànshì.", "translation": "I like to watch television." },
                    "intermediate": { "sentence": "这部电视是去年买的。", "pinyin": "Zhè bù diànshì shì qùnián mǎi de.", "translation": "This television was bought last year." },
                    "advanced": { "sentence": "新的超高清智能电视可以直接连接互联网，观看流媒体服务。", "pinyin": "Xīn de chāo gāoqīng zhìnéng diànshì kěyǐ zhíjiē liánjiē hùliánwǎng, guānkàn liú méitǐ fúwù.", "translation": "The new ultra-high-definition smart TV can connect directly to the internet to watch streaming services." }
                }
            },
            {
                "word": "冰箱",
                "translation": "refrigerator",
                "pinyin": "bīngxiāng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "把牛奶放进冰箱。", "pinyin": "Bǎ niúnǎi fàng jìn bīngxiāng.", "translation": "Put the milk in the refrigerator." },
                    "intermediate": { "sentence": "冰箱里没有什么吃的了。", "pinyin": "Bīngxiāng lǐ méishénme chī de le.", "translation": "There is nothing to eat in the refrigerator." },
                    "advanced": { "sentence": "这款智能冰箱的门上有一个触摸屏，可以用来管理购物清单和查看食谱。", "pinyin": "Zhè kuǎn zhìnéng bīngxiāng de mén shàng yǒu yīgè chùmōpíng, kěyǐ yòng lái guǎnlǐ gòuwù qīngdān hé chákàn shípǔ.", "translation": "This smart refrigerator has a touchscreen on the door that can be used to manage shopping lists and view recipes." }
                }
            },
            {
                "word": "烤箱",
                "translation": "oven",
                "pinyin": "kǎoxiāng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我用烤箱烤面包。", "pinyin": "Wǒ yòng kǎoxiāng kǎo miànbāo.", "translation": "I use the oven to bake bread." },
                    "intermediate": { "sentence": "请把烤箱预热到180度。", "pinyin": "Qǐng bǎ kǎoxiāng yùrè dào yībǎi bāshí dù.", "translation": "Please preheat the oven to 180 degrees." },
                    "advanced": { "sentence": "这个多功能烤箱不仅能烘焙，还带有蒸汽和空气炸的功能。", "pinyin": "Zhège duō gōngnéng kǎoxiāng bùjǐn néng hōngbèi, hái dài yǒu zhēngqì hé kōngqì zhà de gōngnéng.", "translation": "This multifunctional oven can not only bake, but also has steam and air frying functions." }
                }
            },
            {
                "word": "微波炉",
                "translation": "microwave oven",
                "pinyin": "wéibōlú",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我用微波炉热饭。", "pinyin": "Wǒ yòng wéibōlú rè fàn.", "translation": "I use the microwave to heat up food." },
                    "intermediate": { "sentence": "把这个放在微波炉里加热两分钟。", "pinyin": "Bǎ zhège fàng zài wéibōlú lǐ jiārè liǎng fēnzhōng.", "translation": "Put this in the microwave and heat it for two minutes." },
                    "advanced": { "sentence": "使用微波炉时，确保不要放入任何金属容器或带有金属边的餐具。", "pinyin": "Shǐyòng wéibōlú shí, quèbǎo bùyào fàng rù rènhé jīnshǔ róngqì huò dài yǒu jīnshǔ biān de cānjù.", "translation": "When using a microwave oven, make sure not to put in any metal containers or utensils with metal trim." }
                }
            },
            {
                "word": "洗衣机",
                "translation": "washing machine",
                "pinyin": "xǐyījī",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "衣服在洗衣机里。", "pinyin": "Yīfú zài xǐyījī lǐ.", "translation": "The clothes are in the washing machine." },
                    "intermediate": { "sentence": "我需要洗衣服，洗衣机坏了。", "pinyin": "Wǒ xūyào xǐ yīfú, xǐyījī huàile.", "translation": "I need to do laundry, the washing machine is broken." },
                    "advanced": { "sentence": "这台新的洗衣机非常节能，而且运行时噪音很小。", "pinyin": "Zhè tái xīn de xǐyījī fēicháng jiénéng, érqiě yùnxíng shí zàoyīn hěn xiǎo.", "translation": "This new washing machine is very energy-efficient and has low noise during operation." }
                }
            },
            {
                "word": "阳台",
                "translation": "balcony",
                "pinyin": "yángtái",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我在阳台上。", "pinyin": "Wǒ zài yángtái shàng.", "translation": "I am on the balcony." },
                    "intermediate": { "sentence": "她在阳台上种了一些花。", "pinyin": "Tā zài yángtái shàng zhòngle yīxiē huā.", "translation": "She planted some flowers on the balcony." },
                    "advanced": { "sentence": "从这个朝南的阳台上，我们可以欣赏到壮丽的城市天际线景色。", "pinyin": "Cóng zhège cháo nán de yángtái shàng, wǒmen kěyǐ xīnshǎng dào zhuànglì de chéngshì tiānjì xiàn jǐngsè.", "translation": "From this south-facing balcony, we can enjoy a magnificent view of the city skyline." }
                }
            },
            {
                "word": "院子",
                "translation": "yard / courtyard",
                "pinyin": "yuànzi",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "孩子们在院子里玩。", "pinyin": "Háizimen zài yuànzi lǐ wán.", "translation": "The children are playing in the yard." },
                    "intermediate": { "sentence": "我们家有一个种着果树的大院子。", "pinyin": "Wǒmen jiā yǒu yīgè zhòngzhe guǒshù de dà yuànzi.", "translation": "Our house has a big yard with fruit trees." },
                    "advanced": { "sentence": "夏天晚上，邻居们都喜欢在院子里乘凉、聊天。", "pinyin": "Xiàtiān wǎnshàng, línjūmen dōu xǐhuān zài yuànzi lǐ chéngliáng, liáotiān.", "translation": "On summer evenings, the neighbors all like to cool off and chat in their yards." }
                }
            },
            {
                "word": "篱笆",
                "translation": "fence",
                "pinyin": "líbā",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "院子周围有篱笆。", "pinyin": "Yuànzi zhōuwéi yǒu líbā.", "translation": "There is a fence around the yard." },
                    "intermediate": { "sentence": "他正在粉刷白色的篱笆。", "pinyin": "Tā zhèngzài fěnshuā báisè de líbā.", "translation": "He is painting the fence white." },
                    "advanced": { "sentence": "为了保护隐私，他们在院子周围建起了一道高高的木篱笆。", "pinyin": "Wèile bǎohù yǐnsī, tāmen zài yuànzi zhōuwéi jiàn qǐle yīdào gāo gāo de mù líbā.", "translation": "To protect their privacy, they built a tall wooden fence around the yard." }
                }
            },
            {
                "word": "大门",
                "translation": "gate",
                "pinyin": "dàmén",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "请打开大门。", "pinyin": "Qǐng dǎkāi dàmén.", "translation": "Please open the gate." },
                    "intermediate": { "sentence": "访客请按大门旁的门铃。", "pinyin": "Fǎngkè qǐng àn dàmén páng de ménlíng.", "translation": "Visitors please press the doorbell next to the gate." },
                    "advanced": { "sentence": "这栋豪宅的锻铁大门可以自动开关，并连接到安全系统。", "pinyin": "Zhè dòng háozhái de duàn tiě dàmén kěyǐ zìdòng kāiguān, bìng liánjiē dào ānquán xìtǒng.", "translation": "The wrought iron gate of this mansion can be opened and closed automatically and is connected to the security system." }
                }
            },
            {
                "word": "天花板",
                "translation": "ceiling",
                "pinyin": "tiānhuābǎn",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "灯在天花板上。", "pinyin": "Dēng zài tiānhuābǎn shàng.", "translation": "The lamp is on the ceiling." },
                    "intermediate": { "sentence": "这个房间的天花板很高。", "pinyin": "Zhège fángjiān de tiānhuābǎn hěn gāo.", "translation": "The ceiling of this room is very high." },
                    "advanced": { "sentence": "楼上漏水，在天花板上留下了一大块难看的水渍。", "pinyin": "Lóu shàng lòushuǐ, zài tiānhuābǎn shàng liú xiàle yī dà kuài nánkàn de shuǐ zì.", "translation": "The water leak upstairs left a large, ugly water stain on the ceiling." }
                }
            },
            {
                "word": "地下室",
                "translation": "basement",
                "pinyin": "dìxiàshì",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "洗衣机在地下室。", "pinyin": "Xǐyījī zài dìxiàshì.", "translation": "The washing machine is in the basement." },
                    "intermediate": { "sentence": "我们的地下室有点潮湿。", "pinyin": "Wǒmen de dìxiàshì yǒudiǎn cháoshī.", "translation": "Our basement is a bit damp." },
                    "advanced": { "sentence": "他们把地下室改造成了一个家庭影院和游戏室。", "pinyin": "Tāmen bǎ dìxiàshì gǎizào chéngle yīgè jiātíng yǐngyuàn hé yóuxì shì.", "translation": "They converted the basement into a home theater and game room." }
                }
            },
            {
                "word": "阁楼",
                "translation": "attic",
                "pinyin": "gélóu",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "旧东西都放在阁楼上。", "pinyin": "Jiù dōngxī dōu fàng zài gélóu shàng.", "translation": "The old things are all in the attic." },
                    "intermediate": { "sentence": "他爬上梯子进入了黑暗的阁楼。", "pinyin": "Tā pá shàng tīzi jìnrùle hēi'àn de gélóu.", "translation": "He climbed the ladder into the dark attic." },
                    "advanced": { "sentence": "通过增加天窗和良好的隔热，他们成功地将尘土飞扬的阁楼改造成了一间舒适的客房。", "pinyin": "Tōngguò zēngjiā tiānchuāng hé liánghǎo de gérè, tāmen chénggōng de jiāng chéntǔ fēiyáng de gélóu gǎizào chéngle yī jiàn shūshì de kèfáng.", "translation": "By adding a skylight and good insulation, they successfully transformed the dusty attic into a cozy guest room." }
                }
            },
            {
                "word": "镜子",
                "translation": "mirror",
                "pinyin": "jìngzi",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我在照镜子。", "pinyin": "Wǒ zài zhào jìngzi.", "translation": "I am looking in the mirror." },
                    "intermediate": { "sentence": "浴室的墙上挂着一面大镜子。", "pinyin": "Yùshì de qiáng shàng guàzhe yīmiàn dà jìngzi.", "translation": "A large mirror hangs on the bathroom wall." },
                    "advanced": { "sentence": "在走廊尽头挂一面镜子可以在视觉上延伸空间，让它看起来更宽敞。", "pinyin": "Zài zǒuláng jìntóu guà yīmiàn jìngzi kěyǐ zài shìjué shàng yánshēn kōngjiān, ràng tā kàn qǐlái gèng kuānchǎng.", "translation": "Hanging a mirror at the end of the hallway can visually extend the space and make it look more spacious." }
                }
            },
            {
                "word": "地毯",
                "translation": "carpet / rug",
                "pinyin": "dìtǎn",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "客厅里有一块地毯。", "pinyin": "Kètīng lǐ yǒu yīkuài dìtǎn.", "translation": "There is a rug in the living room." },
                    "intermediate": { "sentence": "我需要用吸尘器清洁地毯。", "pinyin": "Wǒ xūyào yòng xīchénqì qīngjié dìtǎn.", "translation": "I need to clean the carpet with a vacuum cleaner." },
                    "advanced": { "sentence": "这张手工编织的波斯地毯图案复杂，颜色丰富，是整个房间的焦点。", "pinyin": "Zhè zhāng shǒugōng biānzhī de bōsī dìtǎn tú'àn fùzá, yánsè fēngfù, shì zhěnggè fángjiān de jiāodiǎn.", "translation": "This hand-woven Persian rug, with its intricate patterns and rich colors, is the focal point of the entire room." }
                }
            },
            {
                "word": "衣柜",
                "translation": "closet / wardrobe",
                "pinyin": "yīguì",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "把衣服放进衣柜。", "pinyin": "Bǎ yīfú fàng jìn yīguì.", "translation": "Put the clothes in the wardrobe." },
                    "intermediate": { "sentence": "我的衣柜里挂满了衣服。", "pinyin": "Wǒ de yīguì lǐ guà mǎnle yīfú.", "translation": "My closet is full of clothes." },
                    "advanced": { "sentence": "她整理了她的嵌入式衣柜，并安装了新的架子和抽屉，以便更好地收纳衣物。", "pinyin": "Tā zhěnglǐle tā de qiànrù shì yīguì, bìng ānzhuāngle xīn de jiàzi hé chōutì, yǐbiàn gèng hǎo de shōunà yīwù.", "translation": "She organized her walk-in closet and installed new shelves and drawers for better storage of clothes." }
                }
            },
            {
                "word": "书架",
                "translation": "bookshelf",
                "pinyin": "shūjià",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "书在书架上。", "pinyin": "Shū zài shūjià shàng.", "translation": "The books are on the bookshelf." },
                    "intermediate": { "sentence": "这个书架快要倒了。", "pinyin": "Zhège shūjià kuàiyào dǎole.", "translation": "This bookshelf is about to collapse." },
                    "advanced": { "sentence": "他按照作者姓氏的字母顺序排列书架上的所有书籍。", "pinyin": "Tā ànzhào zuòzhě xìngshì de zìmǔ shùnxù páiliè shūjià shàng de suǒyǒu shūjí.", "translation": "He arranged all the books on the bookshelf in alphabetical order of the authors' last names." }
                }
            },
            {
                "word": "书桌",
                "translation": "desk",
                "pinyin": "shūzhuō",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "我坐在书桌前。", "pinyin": "Wǒ zuò zài shūzhuō qián.", "translation": "I am sitting at the desk." },
                    "intermediate": { "sentence": "我的电脑在书桌上。", "pinyin": "Wǒ de diànnǎo zài shūzhuō shàng.", "translation": "My computer is on the desk." },
                    "advanced": { "sentence": "为了保持专注，他努力让自己的书桌保持整洁，只放必要的物品。", "pinyin": "Wèile bǎochí zhuānzhù, tā nǔlì ràng zìjǐ de shūzhuō bǎochí zhěngjié, zhǐ fàng bìyào de wùpǐn.", "translation": "To stay focused, he tries to keep his desk tidy, with only essential items on it." }
                }
            },
            {
                "word": "水龙头",
                "translation": "faucet / tap",
                "pinyin": "shuǐlóngtóu",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "关掉水龙头。", "pinyin": "Guān diào shuǐlóngtóu.", "translation": "Turn off the faucet." },
                    "intermediate": { "sentence": "厨房的水龙头在滴水。", "pinyin": "Chúfáng de shuǐlóngtóu zài dīshuǐ.", "translation": "The kitchen faucet is dripping." },
                    "advanced": { "sentence": "他换上了一个带有过滤器的节水水龙头，既环保又健康。", "pinyin": "Tā huàn shàngle yīgè dài yǒu guòlǜ qì de jiéshuǐ shuǐlóngtóu, jì huánbǎo yòu jiànkāng.", "translation": "He replaced it with a water-saving faucet with a filter, which is both environmentally friendly and healthy." }
                }
            },
            {
                "word": "水槽",
                "translation": "sink",
                "pinyin": "shuǐcáo",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "盘子在水槽里。", "pinyin": "Pánzi zài shuǐcáo lǐ.", "translation": "The dishes are in the sink." },
                    "intermediate": { "sentence": "请清洗一下厨房的水槽。", "pinyin": "Qǐng qīngxǐ yīxià chúfáng de shuǐcáo.", "translation": "Please clean the kitchen sink." },
                    "advanced": { "sentence": "这个现代化的厨房配备了一个由花岗岩制成的双槽水槽，非常耐用且易于清洁。", "pinyin": "Zhège xiàndàihuà de chúfáng pèibèile yīgè yóu huāgāngyán zhì chéng de shuāng cáo shuǐcáo, fēicháng nàiyòng qiě yìyú qīngjié.", "translation": "This modern kitchen is equipped with a double-bowl sink made of granite, which is very durable and easy to clean." }
                }
            },
            {
                "word": "烟囱",
                "translation": "chimney",
                "pinyin": "yāncōng",
                "category": "house",
                "sentences": {
                    "basic": { "sentence": "烟从烟囱里冒出来。", "pinyin": "Yān cóng yāncōng lǐ mào chūlái.", "translation": "Smoke is coming out of the chimney." },
                    "intermediate": { "sentence": "圣诞老人从烟囱下来。", "pinyin": "Shèngdàn lǎorén cóng yāncōng xiàlái.", "translation": "Santa Claus comes down the chimney." },
                    "advanced": { "sentence": "每年冬天使用壁炉前，都应该请专业人士清理烟囱以防火灾。", "pinyin": "Měinián dōngtiān shǐyòng bìlú qián, dōu yīnggāi qǐng zhuānyè rénshì qīnglǐ yāncōng yǐ fáng huǒzāi.", "translation": "Before using the fireplace each winter, a professional should be hired to clean the chimney to prevent fires." }
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
                word: "说",
                pinyin: "shuō",
                translation: "to say/speak",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我说你好。", pinyin: "Wǒ shuō nǐ hǎo.", translation: "I say hello." },
                    intermediate: { sentence: "请再说一遍。", pinyin: "Qǐng zài shuō yī biàn.", translation: "Please say it again." },
                    advanced: { sentence: "他喜欢说笑话。", pinyin: "Tā xǐhuan shuō xiàohuà.", translation: "He likes to tell jokes." }
                }
            },
            {
                word: "看",
                pinyin: "kàn",
                translation: "to see/watch",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我看见了你。", pinyin: "Wǒ kànjiàn le nǐ.", translation: "I saw you." },
                    intermediate: { sentence: "我在看电视。", pinyin: "Wǒ zài kàn diànshì.", translation: "I am watching TV." },
                    advanced: { sentence: "他喜欢看风景。", pinyin: "Tā xǐhuan kàn fēngjǐng.", translation: "He likes to look at the scenery." }
                }
            },
            {
                word: "听",
                pinyin: "tīng",
                translation: "to listen",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我听音乐。", pinyin: "Wǒ tīng yīnyuè.", translation: "I listen to music." },
                    intermediate: { sentence: "请你听我说。", pinyin: "Qǐng nǐ tīng wǒ shuō.", translation: "Please listen to me." },
                    advanced: { sentence: "他喜欢听古典音乐。", pinyin: "Tā xǐhuan tīng gǔdiǎn yīnyuè.", translation: "He likes to listen to classical music." }
                }
            },
            {
                word: "吃",
                pinyin: "chī",
                translation: "to eat",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我吃饭了。", pinyin: "Wǒ chī fàn le.", translation: "I ate." },
                    intermediate: { sentence: "你喜欢吃什么？", pinyin: "Nǐ xǐhuan chī shénme?", translation: "What do you like to eat?" },
                    advanced: { sentence: "他喜欢吃辣的食物。", pinyin: "Tā xǐhuan chī là de shíwù.", translation: "He likes to eat spicy food." }
                }
            },
            {
                word: "喝",
                pinyin: "hē",
                translation: "to drink",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我喝水。", pinyin: "Wǒ hē shuǐ.", translation: "I drink water." },
                    intermediate: { sentence: "你喜欢喝什么？", pinyin: "Nǐ xǐhuan hē shénme?", translation: "What do you like to drink?" },
                    advanced: { sentence: "他喜欢喝茶。", pinyin: "Tā xǐhuan hē chá.", translation: "He likes to drink tea." }
                }
            },
            {
                word: "走",
                pinyin: "zǒu",
                translation: "to walk/go",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我走路去。", pinyin: "Wǒ zǒulù qù.", translation: "I walk to go." },
                    intermediate: { sentence: "我们一起走吧。", pinyin: "Wǒmen yīqǐ zǒu ba.", translation: "Let's walk together." },
                    advanced: { sentence: "他每天早上散步。", pinyin: "Tā měitiān zǎoshang sànbù.", translation: "He walks every morning." }
                }
            },
            {
                word: "跑",
                pinyin: "pǎo",
                translation: "to run",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我跑步。", pinyin: "Wǒ páobù.", translation: "I run." },
                    intermediate: { sentence: "他跑得很快。", pinyin: "Tā páode hěn kuài.", translation: "He runs very fast." },
                    advanced: { sentence: "他们参加了马拉松比赛。", pinyin: "Tāmen cānjiā le mǎlāsōng bǐsài.", translation: "They participated in a marathon race." }
                }
            },
            {
                word: "写",
                pinyin: "xiě",
                translation: "to write",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我写字。", pinyin: "Wǒ xiězì.", translation: "I write characters." },
                    intermediate: { sentence: "请你写信。", pinyin: "Qǐng nǐ xiě xìn.", translation: "Please write a letter." },
                    advanced: { sentence: "他喜欢写作。", pinyin: "Tā xǐhuan xiězài.", translation: "He likes to write." }
                }
            },
            {
                word: "读",
                pinyin: "dú",
                translation: "to read",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我读书。", pinyin: "Wǒ dúshū.", translation: "I read a book." },
                    intermediate: { sentence: "请你读一遍。", pinyin: "Qǐng nǐ dú yī biàn.", translation: "Please read it once." },
                    advanced: { sentence: "他喜欢阅读历史书籍。", pinyin: "Tā xǐhuan yuèdú lìshǐ shūjí.", translation: "He likes to read history books." }
                }
            },
            {
                word: "做",
                pinyin: "zuò",
                translation: "to do/make",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我在做什么？", pinyin: "Wǒ zài zuò shénme?", translation: "What am I doing?" },
                    intermediate: { sentence: "你做什么工作？", pinyin: "Nǐ zuò shénme gōngzuò?", translation: "What work do you do?" },
                    advanced: { sentence: "他喜欢做手工。", pinyin: "Tā xǐhuan zuò shǒugōng.", translation: "He likes to make handicrafts." }
                }
            },
            {
                word: "爱",
                pinyin: "ài",
                translation: "to love",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我爱你。", pinyin: "Wǒ ài nǐ.", translation: "I love you." },
                    intermediate: { sentence: "我爱我的家人。", pinyin: "Wǒ ài wǒ de jiārén.", translation: "I love my family." },
                    advanced: { sentence: "他热爱他的工作。", pinyin: "Tā rè'ài tā de gōngzuò.", translation: "He loves his job." }
                }
            },
            {
                word: "想",
                pinyin: "xiǎng",
                translation: "to want/miss",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我想你。", pinyin: "Wǒ xiǎng nǐ.", translation: "I miss you." },
                    intermediate: { sentence: "我想要一个苹果。", pinyin: "Wǒ xiǎng yào yīgè píngguǒ.", translation: "I want an apple." },
                    advanced: { sentence: "他常常想念家乡。", pinyin: "Tā chángcháng xiǎngniàn jiāxiāng.", translation: "He often misses his hometown." }
                }
            },
            {
                word: "给",
                pinyin: "gěi",
                translation: "to give",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我给你。", pinyin: "Wǒ gěi nǐ.", translation: "I give you." },
                    intermediate: { sentence: "请给我一个帮助。", pinyin: "Qǐng gěi wǒ yīgè bāngzhù.", translation: "Please give me some help." },
                    advanced: { sentence: "他把礼物送给了她。", pinyin: "Tā bǎ lǐwù sòng gěile tā.", translation: "He gave the gift to her." }
                }
            },
            {
                word: "拿",
                pinyin: "ná",
                translation: "to take/get",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我拿书。", pinyin: "Wǒ ná shū.", translation: "I take a book." },
                    intermediate: { sentence: "请你拿过来。", pinyin: "Qǐng nǐ ná guòlái.", translation: "Please bring it over." },
                    advanced: { sentence: "他拿走了文件。", pinyin: "Tā ná zǒu le wénjiàn.", translation: "He took the documents away." }
                }
            },
            {
                word: "等",
                pinyin: "děng",
                translation: "to wait",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我等你。", pinyin: "Wǒ děng nǐ.", translation: "I'll wait for you." },
                    intermediate: { sentence: "请你等一下。", pinyin: "Qǐng nǐ děng yīxià.", translation: "Please wait a moment." },
                    advanced: { sentence: "他正在等待机会。", pinyin: "Tā zhèngzài děngdài jīhuì.", translation: "He is waiting for an opportunity." }
                }
            },
            {
                word: "找",
                pinyin: "zhǎo",
                translation: "to look for/find",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我找你。", pinyin: "Wǒ zhǎo nǐ.", translation: "I'm looking for you." },
                    intermediate: { sentence: "你在找什么？", pinyin: "Nǐ zài zhǎo shénme?", translation: "What are you looking for?" },
                    advanced: { sentence: "他正在寻找工作。", pinyin: "Tā zhèngzài xúnzhǎo gōngzuò.", translation: "He is looking for a job." }
                }
            },
            {
                word: "买",
                pinyin: "mǎi",
                translation: "to buy",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我买东西。", pinyin: "Wǒ mǎi dōngxi.", translation: "I buy things." },
                    intermediate: { sentence: "你买什么？", pinyin: "Nǐ mǎi shénme?", translation: "What are you buying?" },
                    advanced: { sentence: "他喜欢购买古董。", pinyin: "Tā xǐhuan gòumǎi gǔdǒng.", translation: "He likes to buy antiques." }
                }
            },
            {
                word: "卖",
                pinyin: "mài",
                translation: "to sell",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我卖东西。", pinyin: "Wǒ mài dōngxi.", translation: "I sell things." },
                    intermediate: { sentence: "你在卖什么？", pinyin: "Nǐ zài mài shénme?", translation: "What are you selling?" },
                    advanced: { sentence: "他正在出售他的房子。", pinyin: "Tā zhèngzài chūshòu tā de fángzi.", translation: "He is selling his house." }
                }
            },
            {
                word: "用",
                pinyin: "yòng",
                translation: "to use",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我用笔。", pinyin: "Wǒ yòng bǐ.", translation: "I use a pen." },
                    intermediate: { sentence: "请你用这个。", pinyin: "Qǐng nǐ yòng zhège.", translation: "Please use this." },
                    advanced: { sentence: "他善于利用资源。", pinyin: "Tā shànyú lìyòng zīyuán.", translation: "He is good at utilizing resources." }
                }
            },
            {
                word: "开",
                pinyin: "kāi",
                translation: "to open/drive",
                category: "verbs",
                sentences: {
                    basic: { sentence: "我开车。", pinyin: "Wǒ kāichē.", translation: "I drive a car." },
                    intermediate: { sentence: "请你开门。", pinyin: "Qǐng nǐ kāimén.", translation: "Please open the door." },
                    advanced: { sentence: "他开始了他的事业。", pinyin: "Tā kāishǐ le tā de shìyè.", translation: "He started his career." }
                }
            }
        ]
        ,
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
        ],
        animal: [
            {
                "word": "猫",
                "translation": "cat",
                "pinyin": "māo",
                "category": "animal",
                "sentences": {
                  "basic": {
                    "sentence": "那是一只猫。",
                    "pinyin": "Nà shì yī zhī māo.",
                    "translation": "That is a cat."
                  },
                  "intermediate": {
                    "sentence": "我喜欢和我的猫玩。",
                    "pinyin": "Wǒ xǐhuān hé wǒ de māo wán.",
                    "translation": "I like to play with my cat."
                  },
                  "advanced": {
                    "sentence": "这只猫喜欢在阳光下打盹。",
                    "pinyin": "Zhè zhī māo xǐhuān zài yángguāng xià dǎdǔn.",
                    "translation": "This cat likes to nap in the sun."
                  }
                }
              },
              {
                "word": "狗",
                "translation": "dog",
                "pinyin": "gǒu",
                "category": "animal",
                "sentences": {
                  "basic": {
                    "sentence": "这是一只狗。",
                    "pinyin": "Zhè shì yī zhī gǒu.",
                    "translation": "This is a dog."
                  },
                  "intermediate": {
                    "sentence": "我的狗很友好。",
                    "pinyin": "Wǒ de gǒu hěn yǒuhǎo.",
                    "translation": "My dog is very friendly."
                  },
                  "advanced": {
                    "sentence": "那只狗看到邮递员时叫了起来。",
                    "pinyin": "Nà zhī gǒu kàn dào yóudìyuán shí jiào le qǐlái.",
                    "translation": "The dog barked when it saw the postman."
                  }
                }
              }
        ],
        plant: [
            {
                "word": "树",
                "translation": "tree",
                "pinyin": "shù",
                "category": "plant",
                "sentences": {
                  "basic": {
                    "sentence": "这是一棵树。",
                    "pinyin": "Zhè shì yī kē shù.",
                    "translation": "This is a tree."
                  },
                  "intermediate": {
                    "sentence": "公园里有很多树。",
                    "pinyin": "Gōngyuán lǐ yǒu hěn duō shù.",
                    "translation": "There are many trees in the park."
                  },
                  "advanced": {
                    "sentence": "秋天的时候，树叶会变成红色和黄色。",
                    "pinyin": "Qiūtiān de shíhou, shùyè huì biànchéng hóngsè hé huángsè.",
                    "translation": "In autumn, the leaves on the trees turn red and yellow."
                  }
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
        this.currentMode = 'learn';
        this.currentCardIndex = 0;
        this.currentCards = [];
        this.isDragging = false;
        this.startX = 0;
        this.currentX = 0;
        this.speechSynthesis = window.speechSynthesis;
        this.isPlaying = false;
        this.isCardFlipped = false;
        
        this.init();
    }

    init() {
        this.showLanguageModal();
        this.setupEventListeners();
        this.initializeSpeech();
    }

    showLanguageModal() {
        document.getElementById('languageModal').style.display = 'flex';
        
        // Add event listeners for language selection
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.dataset.lang;
                this.selectLanguage(selectedLang);
            });
        });

        // Mode selection inside modal
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.currentMode = e.currentTarget.dataset.mode;
                this.renderCards();
                this.updateUI();
            });
        });
    }

    selectLanguage(language) {
        this.currentLanguage = language;
        
        // Hide modal
        document.getElementById('languageModal').style.display = 'none';
        
        // Initialize the app
        this.loadCards();
        this.updateUI();
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
        if (!this.currentLanguage) return;
        
        this.currentCards = vocabulary[this.currentLanguage][this.currentCategory];
        this.currentCardIndex = 0;
        this.isCardFlipped = false; // Reset flip state
        this.renderCards();
        this.updateProgress();
    }

    renderCards() {
        const cardStack = document.querySelector('.card-stack');
        cardStack.innerHTML = '';
        
        // Only render the active/current card to avoid layout shifts from prev/next visuals
        if (this.currentCards.length === 0) return;
        const index = this.currentCardIndex;
        const card = this.createCard(this.currentCards[index], index, 1);
        cardStack.appendChild(card);
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
        
        // Create front side
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        if (this.currentMode === 'test') {
            // Test mode: show only English (translation) on front
            cardFront.innerHTML = `
                <div class="card-category">${categoryLabel}</div>
                <div class="card-word">${cardData.translation}</div>
            `;
        } else {
            // Learn mode: show word, translation, pinyin
            cardFront.innerHTML = `
                <div class="card-category">${categoryLabel}</div>
                <div class="card-word">${cardData.word}</div>
                <div class="card-translation">${cardData.translation}</div>
                ${cardData.pinyin ? `<div class="card-pinyin">${cardData.pinyin}</div>` : ''}
            `;
        }

        // Create back side
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        if (this.currentMode === 'test') {
            // Test mode: show only the foreign word (no sentences, no pinyin)
            cardBack.innerHTML = `
                <div class="card-category">${categoryLabel}</div>
                <div class="card-word">${cardData.word}</div>
            `;
        } else {
            // Learn mode: show word details and sentence
            cardBack.innerHTML = `
                <div class="card-category">${categoryLabel}</div>
                <div class="card-word">${cardData.word}</div>
                <div class="card-translation">${cardData.translation}</div>
                ${cardData.pinyin ? `<div class="card-pinyin">${cardData.pinyin}</div>` : ''}
                ${sentenceData ? `
                    <div class="card-sentence">${sentenceData.sentence}</div>
                    ${this.currentLanguage === 'chinese' && sentenceData.pinyin ? `<div class="card-sentence-pinyin">${sentenceData.pinyin}</div>` : ''}
                    <div class="card-sentence-translation">${sentenceData.translation}</div>
                ` : ''}
            `;
        }

        card.appendChild(cardFront);
        card.appendChild(cardBack);

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
        document.getElementById('soundBtn').addEventListener('click', () => this.playCurrentAudio());
        document.getElementById('flipBtn').addEventListener('click', () => this.flipCard());

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

        // Tap events for easier navigation
        cardStack.addEventListener('click', (e) => this.handleCardTap(e));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousCard();
            } else if (e.key === 'ArrowRight') {
                this.nextCard();
            } else if (e.key === ' ' || e.key === 'Space') {
                e.preventDefault();
                this.playCurrentAudio();
            } else if (e.key === 'f' || e.key === 'F') {
                e.preventDefault();
                this.flipCard();
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
        // Removed card animation during swiping
    }

    handleSwipeEnd() {
        const deltaX = this.currentX - this.startX;
        const threshold = 30; // Reduced threshold for easier navigation

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                this.previousCard();
            } else {
                this.nextCard();
            }
        }
    }

    previousCard() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.isCardFlipped = false; // Reset flip state
            this.renderCards();
            this.updateProgress();
        }
    }

    nextCard() {
        if (this.currentCardIndex < this.currentCards.length - 1) {
            this.currentCardIndex++;
            this.isCardFlipped = false; // Reset flip state
            this.renderCards();
            this.updateProgress();
        }
    }

    updateProgress() {
        const progress = this.currentCards.length > 0 ? 
            ((this.currentCardIndex + 1) / this.currentCards.length) * 100 : 0;
        
        document.querySelector('.progress-fill').style.width = `${progress}%`;
       
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

    flipCard() {
        const activeCard = document.querySelector('.card.active');
        if (!activeCard) return;

        this.isCardFlipped = !this.isCardFlipped;
        
        if (this.isCardFlipped) {
            activeCard.classList.add('flipped');
            // In Test mode, play the word audio upon reveal
            if (this.currentMode === 'test') {
                this.playCurrentAudio();
            }
        } else {
            activeCard.classList.remove('flipped');
        }
    }

    playCurrentAudio() {
        if (this.isPlaying) {
            this.stopSpeech();
            return;
        }

        const currentCard = this.currentCards[this.currentCardIndex];
        if (!currentCard) return;

        this.isPlaying = true;
        const soundBtn = document.getElementById('soundBtn');
        soundBtn.classList.add('playing');

        let textToSpeak = currentCard.word;
        let utterance;

        // Mode-specific audio text
        if (this.currentMode === 'test') {
            // In Test mode, always play the foreign word
            textToSpeak = currentCard.word;
        } else {
            // Learn mode: If flipped, play sentence; otherwise play word
            if (this.isCardFlipped && currentCard.sentences) {
                const sentenceData = currentCard.sentences[this.currentDifficulty];
                if (sentenceData) {
                    textToSpeak = sentenceData.sentence;
                }
            }
        }

        utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        // Set language and voice based on current selection
        if (this.currentLanguage === 'french') {
            utterance.lang = 'fr-FR';
            const frenchVoice = this.getBestFrenchVoice();
            if (frenchVoice) {
                utterance.voice = frenchVoice;
            } else {
                // Fallback: try to use any available voice with French language
                const voices = this.speechSynthesis.getVoices();
                const anyFrenchVoice = voices.find(v => v.lang.startsWith('fr-FR'));
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
                const anyChineseVoice = voices.find(v => v.lang.startsWith('zh-CN'));
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

        // Speak the text
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
                v.name.includes(name) && v.lang.startsWith('fr-FR')
            );
            if (voice) {
                console.log('Using French voice:', voice.name);
                return voice;
            }
        }
        
        // Then try any French voice with local service
        const localFrenchVoice = voices.find(voice => 
            voice.lang.startsWith('fr-FR') && voice.localService
        );
        if (localFrenchVoice) {
            console.log('Using local French voice:', localFrenchVoice.name);
            return localFrenchVoice;
        }
        
        // Finally, any French voice
        const anyFrenchVoice = voices.find(voice => 
            voice.lang.startsWith('fr-FR') && voice.name.includes('Henri')
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

    handleCardTap(e) {
        // Only handle tap if not dragging
        if (this.isDragging) return;
        
        const cardStack = document.querySelector('.card-stack');
        const rect = cardStack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const cardWidth = rect.width;
        
        // Determine tap position relative to card
        if (clickX < cardWidth * 0.4) {
            // Left side - previous card
            this.previousCard();
        } else if (clickX > cardWidth * 0.6) {
            // Right side - next card
            this.nextCard();
        }
        // Middle area (40%-60%) - no action (prevents accidental navigation)
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

        // Update mode buttons (in modal)
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === this.currentMode);
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