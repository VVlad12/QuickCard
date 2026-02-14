// Vocabulary data is loaded from test.json at runtime
let vocabulary = null;




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
      console.log(this.currentCategory)
        if (!this.currentLanguage) return;
         
        if (this.currentCategory == 'mix') {
          console.log("here");
          this.currentCards = Object.values(vocabulary[this.currentLanguage]).flat();
          console.log(this.currentCards);
        }
        else if (!vocabulary || !vocabulary[this.currentLanguage] || !vocabulary[this.currentLanguage][this.currentCategory]) {
          console.log("void")
            this.currentCards = [];
        }
        else {
            console.log("else")
            this.currentCards = vocabulary[this.currentLanguage][this.currentCategory];
        }
        this.currentCardIndex = 0;
        this.isCardFlipped = false; // Reset flip state
        this.renderCards();
        this.updateProgress();
    }

    renderCards() {
        const cardStack = document.querySelector('.card-stack-sub');
        cardStack.innerHTML = '';
        
        // Only render the active/current card to avoid layout shifts from prev/next visuals
        if (this.currentCards.length === 0) return;
        const index = this.currentCardIndex;
        const card = this.createCard(this.currentCards[index], index, 1);
        cardStack.appendChild(card);
    }

    createCard(cardData, index, position) {
        const card = document.createElement('div');

        // const listenbtn = document.getElementById('soundBtn');
        // listenbtn.id = 'soundBtn';
        

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

        // cardFront.appendChild(listenbtn);

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
            food: 'Food',
            mix: 'Mix'
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

        document.getElementById('refreshButton').addEventListener('click', () =>{
            this.currentCards = this.currentCards.sort(() => Math.random() - 0.5);
            this.currentCards = this.currentCards.slice(0, 20);
            this.currentCardIndex = 0;
            this.isCardFlipped = false; // Reset flip state
            this.renderCards();
            this.updateProgress();
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

fetch('test.json') // Replace 'path/to/your/json/file.json' with the actual path to your JSON file
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error('Error fetching data:', error));


// Initialize the app after loading test.json
document.addEventListener('DOMContentLoaded', async () => {
    try {
        if (window.location.protocol === 'file:') {
            throw new Error('Serve over HTTP (file:// cannot fetch local files)');
        }
        const base = document.baseURI || window.location.href;
        const url = new URL('test.json', base);
        url.searchParams.set('ts', Date.now());
        const res = await fetch(url.toString(), { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!data || typeof data !== 'object') throw new Error('Invalid JSON structure');
        vocabulary = data;
        new QuickCardApp();
    } catch (err) {
        console.error('Failed to load test.json:', err);
        const host = document.querySelector('.container') || document.body;
        const note = document.createElement('div');
        note.style.cssText = 'margin:16px;padding:12px;border-radius:8px;background:#ffeaea;color:#b00020;font-weight:600;';
        note.textContent = 'Failed to load vocabulary (test.json). Serve the folder over HTTP, ensure the file exists next to index.html, and that it is valid JSON.';
        host.prepend(note);
    }
});

document.getElementById('homeButton').addEventListener('click', function () {
  // location.reload(); 
  document.getElementById('languageModal').style.display = 'flex';
});


