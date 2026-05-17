const quizContainer = document.getElementById('quiz-container');

// Event listener for the start button
document.getElementById('start-btn')?.addEventListener('click', startQuiz);

function startQuiz() {
    askQuestion(
        "Question 1: Do you prefer studying the Earth or space?",
        "Earth",
        "Space",
        (choice) => {
            if (choice === 'A') {
                handleEarthPath();
            } else {
                handleSpacePath();
            }
        }
    );
}

function handleEarthPath() {
    askQuestion(
        "Question 2: Are you more interested in earthquakes or oceans?",
        "Earthquakes and seismology",
        "Oceans and marine life",
        (choice) => {
            if (choice === 'A') {
                displayResult("Result: You should look into Geophysics or Seismology!");
            } else {
                displayResult("Result: Oceanography sounds like a great fit for you.");
            }
        }
    );
}

function handleSpacePath() {
    askQuestion(
        "Question 2: Do you prefer studying planets or stars?",
        "Planets and solar systems",
        "Stars, galaxies, and deep space",
        (choice) => {
            if (choice === 'A') {
                displayResult("Result: Planetary Geology or Astronomy might be your calling.");
            } else {
                displayResult("Result: Astrophysics seems perfect for you!");
            }
        }
    );
}

// Helper function to render a question and two option buttons
function askQuestion(questionText, optionA, optionB, callback) {
    quizContainer.innerHTML = `
        <p><strong>${questionText}</strong></p>
        <button id="btn-a" class="quiz-btn">A) ${optionA}</button>
        <button id="btn-b" class="quiz-btn">B) ${optionB}</button>
    `;

    document.getElementById('btn-a').addEventListener('click', () => callback('A'));
    document.getElementById('btn-b').addEventListener('click', () => callback('B'));
}

// Helper function to display the final outcome
function displayResult(resultText) {
    quizContainer.innerHTML = `
        <h3>${resultText}</h3>
        <button id="start-btn" class="quiz-btn" onclick="startQuiz()">Take Quiz Again</button>
    `;
}