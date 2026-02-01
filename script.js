// --- Game State Variables ---
let currentQuestionIndex = 0;
let score = 0;
let filteredQuestions = []; // The list currently being played
let userHistory = {}; 

// --- Configuration: Map IDs to Topics here ---
// If you add more questions later, just adjust these ranges!
const topicRanges = [
    { name: "BI Maturity & Challenges", start: 1, end: 10 },
    { name: "BI Strategy & Framework", start: 11, end: 18 },
    { name: "Performance Management (BPM)", start: 19, end: 29 },
    { name: "Data Mining Concepts", start: 30, end: 40 },
    { name: "Decision Making & DSS", start: 41, end: 50 },
    { name: "BI Architecture & OLAP", start: 51, end: 60 },
    { name: "Quantitative Analytics", start: 61, end: 70 },
    { name: "Qualitative Analytics", start: 71, end: 80 },
    { name: "Advanced BI & General", start: 81, end: 110 }
];

// --- Mascot Phrases ---
const mascotPhrases = {
    idle: ["Pick the right one!", "I believe in you!", "What's the answer?", "Hmmm...", "Focus!"],
    correct: ["Boom! Nailed it!", "Too easy!", "Genius mode: ON", "Spectacular!", "Correct!"],
    wrong: ["Ouch! Not quite.", "Yikes! Close one.", "Oopsie!", "Don't give up!", "Learning moment!"]
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    injectTopics();   // 1. Tag data with topics
    setupFilterUI();  // 2. Fill the dropdown
    filterQuiz();     // 3. Start the quiz
});

// Helper: Tag the raw data with topics based on ID
function injectTopics() {
    quizData.forEach(q => {
        const foundTopic = topicRanges.find(t => q.id >= t.start && q.id <= t.end);
        q.topic = foundTopic ? foundTopic.name : "General";
    });
}

// Helper: Populate the dropdown menu
function setupFilterUI() {
    const select = document.getElementById('topic-select');
    topicRanges.forEach(t => {
        const option = document.createElement('option');
        option.value = t.name;
        option.innerText = t.name;
        select.appendChild(option);
    });
}

// MAIN FUNCTION: Starts/Restarts based on filter
function filterQuiz() {
    const selectedTopic = document.getElementById('topic-select').value;
    
    // Filter data
    if (selectedTopic === 'all') {
        filteredQuestions = [...quizData];
    } else {
        filteredQuestions = quizData.filter(q => q.topic === selectedTopic);
    }

    // Shuffle
    filteredQuestions.sort(() => Math.random() - 0.5);

    // Reset Game State
    currentQuestionIndex = 0;
    score = 0;
    userHistory = {};
    
    // Update UI
    updateScoreUI();
    document.getElementById('total-q').innerText = filteredQuestions.length;
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
    
    updateMascot('idle');
    loadQuestion();
}

function loadQuestion() {
    // Check if empty (e.g., if ranges are wrong)
    if (filteredQuestions.length === 0) {
        document.getElementById('question-text').innerText = "No questions found for this topic!";
        return;
    }

    // End of Quiz
    if (currentQuestionIndex >= filteredQuestions.length) {
        showEndScreen();
        return;
    }

    const currentQ = filteredQuestions[currentQuestionIndex];
    
    // Update Counters
    document.getElementById('current-q').innerText = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex) / filteredQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    // Animation: Fade text
    const qText = document.getElementById('question-text');
    qText.innerText = currentQ.question;
    qText.classList.remove('animate__fadeIn');
    void qText.offsetWidth; 
    qText.classList.add('animate__fadeIn');
    
    // Clear Area
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const explanationBox = document.getElementById('explanation-box');
    explanationBox.classList.remove('explanation-visible');
    explanationBox.classList.add('explanation-hidden');
    
    // Buttons state
    document.getElementById('next-btn').classList.add('d-none');
    const prevBtn = document.getElementById('prev-btn');
    if (currentQuestionIndex > 0) prevBtn.classList.remove('d-none');
    else prevBtn.classList.add('d-none');

    updateMascot('idle');

    // Create Buttons
    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn option-btn';
        btn.innerText = opt;
        
        // Restore History?
        if (userHistory[currentQuestionIndex] !== undefined) {
             const savedIndex = userHistory[currentQuestionIndex];
             btn.classList.add('disabled-option');
             if (index === savedIndex) {
                 btn.classList.add(savedIndex === currentQ.correctIndex ? 'correct' : 'wrong');
             }
             if (index === currentQ.correctIndex && savedIndex !== currentQ.correctIndex) {
                 btn.classList.add('correct');
             }
             // Use timeout to ensure DOM is ready before showing explanation
             setTimeout(() => revealExplanation(savedIndex === currentQ.correctIndex, currentQ), 50);
        } else {
            btn.onclick = () => handleAnswer(index, currentQ.correctIndex, currentQ, btn);
        }
        
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, correctIndex, currentQ, btn) {
    userHistory[currentQuestionIndex] = selectedIndex;

    const optionsContainer = document.getElementById('options-container');
    const allBtns = optionsContainer.querySelectorAll('button');

    allBtns.forEach(b => b.classList.add('disabled-option'));

    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
        updateScoreUI();
        triggerConfetti();
        updateMascot('correct');
    } else {
        btn.classList.add('wrong');
        allBtns[correctIndex].classList.add('correct');
        const card = document.getElementById('quiz-card');
        card.classList.add('animate__headShake');
        setTimeout(() => card.classList.remove('animate__headShake'), 500);
        updateMascot('wrong');
    }

    revealExplanation(isCorrect, currentQ);
}

function revealExplanation(isCorrect, currentQ) {
    const box = document.getElementById('explanation-box');
    const header = document.getElementById('result-header');
    const text = document.getElementById('explanation-text');
    const icon = document.getElementById('result-icon');

    box.classList.remove('explanation-hidden');
    box.classList.add('explanation-visible', 'animate__fadeInUp');

    if (isCorrect) {
        header.innerText = "Correct!";
        header.className = "text-success fw-bold";
        icon.innerText = "✅";
    } else {
        header.innerText = "Incorrect";
        header.className = "text-danger fw-bold";
        icon.innerText = "❌";
    }
    
    text.innerText = currentQ.explanation;
    document.getElementById('next-btn').classList.remove('d-none');
}

function updateMascot(mood) {
    const mascot = document.getElementById('mascot');
    const bubble = document.getElementById('mascot-bubble');
    
    let emoji = "🤖";
    let text = "";

    const getPhrase = (key) => mascotPhrases[key][Math.floor(Math.random() * mascotPhrases[key].length)];

    if (mood === 'idle') {
        emoji = "🤔";
        text = getPhrase('idle');
        mascot.classList.remove('animate__bounce', 'animate__wobble');
    } else if (mood === 'correct') {
        emoji = "😎";
        text = getPhrase('correct');
        mascot.classList.add('animate__bounce');
    } else if (mood === 'wrong') {
        emoji = "😵";
        text = getPhrase('wrong');
        mascot.classList.add('animate__wobble');
    }

    mascot.innerText = emoji;
    bubble.innerText = text;
    
    bubble.classList.remove('animate__fadeIn');
    void bubble.offsetWidth;
    bubble.classList.add('animate__fadeIn');
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function updateScoreUI() {
    const scoreEl = document.getElementById('score-val');
    scoreEl.innerText = score;
    scoreEl.classList.add('animate__heartBeat');
    setTimeout(() => scoreEl.classList.remove('animate__heartBeat'), 500);
}

function triggerConfetti() {
    if (typeof confetti === "function") {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

function showEndScreen() {
    document.getElementById('quiz-card').innerHTML = `
        <div class="text-center p-5">
            <div class="display-1 mb-3">🏆</div>
            <h2 class="mb-3">Lesson Complete!</h2>
            <p class="fs-4">You scored <strong>${score}</strong> out of <strong>${filteredQuestions.length}</strong></p>
            <div class="mt-4">
                <button class="btn btn-action btn-lg" onclick="location.reload()">Back to Menu</button>
            </div>
        </div>
    `;
    updateMascot('correct');
    document.getElementById('mascot-bubble').innerText = "You crushed it!";
    triggerConfetti();
}