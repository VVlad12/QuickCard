# QuickCard - Language Learning Webapp

A modern, interactive web application for learning French and Chinese vocabulary through swipeable flashcards.

## Features

- **Swipeable Cards**: Navigate through vocabulary cards with touch gestures or mouse drag
- **Multiple Languages**: Switch between French and Chinese
- **Vocabulary Categories**: House, Activities, Verbs, and Food
- **Difficulty Levels**: Basic, Intermediate, and Advanced with contextual sentences
- **Chinese Pinyin**: Chinese words include pinyin pronunciation
- **Audio Pronunciation**: Click the sound button or press spacebar to hear word pronunciation
- **Progress Tracking**: Visual progress bar and card counter
- **Responsive Design**: Works on desktop and mobile devices
- **Keyboard Navigation**: Use arrow keys to navigate, spacebar for audio
- **Modern UI**: Beautiful gradient design with smooth animations

## How to Use

1. **Open the Webapp**: Open `index.html` in your web browser
2. **Select Language**: Choose between French and Chinese using the language buttons
3. **Choose Difficulty**: Select Basic, Intermediate, or Advanced level
4. **Choose Category**: Select a vocabulary category (House, Activities, Verbs, Food)
5. **Navigate Cards**: 
   - Swipe left/right on mobile devices
   - Drag with mouse on desktop
   - Use the arrow buttons
   - Use keyboard arrow keys
6. **Learn in Context**: Each card shows the word in a sentence appropriate to the difficulty level
7. **Listen to Pronunciation**: 
   - Click the sound button (speaker icon)
   - Press spacebar for quick audio
   - Visual feedback shows when audio is playing
8. **Track Progress**: Monitor your progress with the progress bar and card counter

## Vocabulary Categories

### House
- Common household items and rooms
- French: maison, chambre, cuisine, etc.
- Chinese: 房子, 卧室, 厨房, etc. (with pinyin)

### Activities
- Common daily activities and hobbies
- French: lire, écrire, danser, etc.
- Chinese: 读, 写, 跳舞, etc. (with pinyin)

### Verbs
- Essential verbs for communication
- French: être, avoir, faire, etc.
- Chinese: 是, 有, 做, etc. (with pinyin)

### Food
- Common food and drink items
- French: pain, fromage, pomme, etc.
- Chinese: 面包, 奶酪, 苹果, etc. (with pinyin)

## Technical Details

- **HTML5**: Semantic markup with modern structure
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript ES6+**: Class-based architecture with touch/swipe handling
- **No Dependencies**: Pure vanilla JavaScript, no external libraries required

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
Quickcard/
├── index.html      # Main HTML file
├── styles.css      # CSS styles and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

1. Download or clone the files to your local machine
2. Open `index.html` in your web browser
3. Start learning vocabulary!

## Customization

You can easily add more vocabulary by editing the `vocabulary` object in `script.js`. The structure is:

```javascript
vocabulary: {
    language: {
        category: [
            { word: "word", translation: "translation", pinyin: "pinyin", category: "category" }
        ]
    }
}
```

For Chinese words, include the `pinyin` field. For other languages, omit the `pinyin` field.

Enjoy learning languages with QuickCard! 🚀 