const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function startQuiz() {
    console.log("Welcome to the Interactive Quiz!\n");
    
    // Question 1: The initial fork in the road
    console.log("Question 1: Do you prefer studying the Earth or space?");
    console.log("A) Earth");
    console.log("B) Space");
    let answer1 = await askQuestion("Your answer (A or B): ");
    answer1 = answer1.trim().toUpperCase();
    console.log("-".repeat(30));

    // Branching Logic based on Answer 1
    if (answer1 === "A") {
        // Path A: Earth sciences
        console.log("You chose Earth! Let's narrow it down.");
        console.log("Question 2: Are you more interested in earthquakes or oceans?");
        console.log("A) Earthquakes and seismology");
        console.log("B) Oceans and marine life");
        let answer2 = await askQuestion("Your answer (A or B): ");
        answer2 = answer2.trim().toUpperCase();
        
        console.log("-".repeat(30));
        if (answer2 === "A") {
            console.log("Result: You should look into Geophysics or Seismology!");
        } else if (answer2 === "B") {
            console.log("Result: Oceanography sounds like a great fit for you.");
        } else {
            console.log("Invalid choice. Ending Earth path.");
        }

    } else if (answer1 === "B") {
        // Path B: Space sciences
        console.log("You chose Space! Let's look closer.");
        console.log("Question 2: Do you prefer studying planets or stars?");
        console.log("A) Planets and solar systems");
        console.log("B) Stars, galaxies, and deep space");
        let answer2 = await askQuestion("Your answer (A or B): ");
        answer2 = answer2.trim().toUpperCase();
        
        console.log("-".repeat(30));
        if (answer2 === "A") {
            console.log("Result: Planetary Geology or Astronomy might be your calling.");
        } else if (answer2 === "B") {
            console.log("Result: Astrophysics seems perfect for you!");
        } else {
            console.log("Invalid choice. Ending Space path.");
        }

    } else {
        console.log("Invalid input. Please restart the quiz and choose A or B.");
    }

    rl.close();
}

// Execute the function
startQuiz();