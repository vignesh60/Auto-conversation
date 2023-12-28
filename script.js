const characters = document.querySelectorAll('.character');
const startButton = document.getElementById('start-button');

let currentIndex = 0;
let dialogueIndex = 0;

const dialogues = [
    "Hi there!",
    "Hello!",
    "How are you?",
    "I'm good, thanks.",
    "What's new?",
    "Not much, just enjoying the day.",
    "Isn't the weather lovely?",
    "Yes, it's perfect for a walk.",
    "Have you seen any good movies lately?",
    "I watched a great one last night.",
    "What's your favorite book?",
    "I love reading science fiction.",
    "Do you enjoy cooking?",
    "I'm not much of a cook, to be honest.",
    "What's your favorite hobby?",
    "I enjoy hiking and painting.",
    "Where do you like to travel?",
    "I'd love to visit Japan someday.",
    "Do you have any pets?",
    "Yes, I have a cat named Whiskers.",
    'do you enjoy studying grammar rules for hours',
    "yes I do it's the most exciting thing in my life",
    "who is the most popular singer in the world right now",
    "why are you asking me I'm not Google",
    "do you think Google knows everything?","it knows more than you think",
    "have you ever Googled yourself",
    "yes I Google myself from time to time",
    "what is the best way to learn a new language",
    "the best way to learn a new language is by watching Netflix all day",


];

startButton.addEventListener('click', () => {
    startButton.style.display = 'none'; // Hide the "Start" button
    startConversation();
});

function startConversation() {
    setTimeout(() => {
        showNextDialogue();
    }, 2000); // Initial delay before starting the conversation
}

function showNextDialogue() {
    characters[currentIndex].querySelector('.dialogue').style.display = 'block';
    characters[currentIndex].querySelector('.dialogue').textContent = dialogues[dialogueIndex];

    setTimeout(() => {
        characters[currentIndex].querySelector('.dialogue').style.display = 'none';
        dialogueIndex++;
        currentIndex = (currentIndex + 1) % characters.length; // Cycle through characters

        if (dialogueIndex < dialogues.length) {
            setTimeout(() => {
                showNextDialogue(); // Show the next character's dialogue
            }, 2000); // Delay before showing the next character's dialogue
        } else {
            // The conversation is complete
            dialogueIndex = 0;
            currentIndex = 0;
            startButton.style.display = 'block';
        }
    }, 3000); // Display each dialogue for 3 seconds
}
