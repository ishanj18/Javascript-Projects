const questions = [
    {
        category: "Science",
        question: "What planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus"],
        answer: "Mars"
    },
    {
        category: "Math",
        question: "What is 5 + 7?",
        choices: ["10", "12", "14"],
        answer: "12"
    },
    {
        category: "Geography",
        question: "What is the capital of France?",
        choices: ["Berlin", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        category: "History",
        question: "Who was the first president of the United States?",
        choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
        answer: "George Washington"
    },
    {
        category: "Technology",
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language"
        ],
        answer: "Hyper Text Markup Language"
    }
];

function getRandomQuestion(questionArray) {
    const randomIndex = Math.floor(Math.random() * questionArray.length);
    return questionArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return (
            "The computer's choice is wrong. The correct answer is: " +
            questionObj.answer
        );
    }
}