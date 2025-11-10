// Simple Jumanji branching adventure
const gameData = {
  start: {
    text: "You found the Jumanji board in your attic. Do you play the game or leave it?",
    choices: [
      { text: "Play the game", next: "startGame", score: 5 },
      { text: "Leave it alone", next: "ignoreGame", score: -5 }
    ]
  },

  ignoreGame: {
    text: "You walk away, but you keep hearing drum sounds. Curiosity grows. Do you go back?",
    choices: [
      { text: "Go back and open it", next: "startGame", score: 5 },
      { text: "Call your friend for help", next: "callFriend", score: 0 }
    ]
  },

  startGame: {
    text: "You roll the dice... the jungle comes alive! A lion appears! What do you do?",
    choices: [
      { text: "Run away", next: "run", score: -5 },
      { text: "Grab a chair to defend", next: "fight", score: 5 }
    ]
  },

  callFriend: {
    text: "Your friend laughs at you. Suddenly, vines grow around your house! You both get trapped. Game Over.",
    choices: []
  },

  run: {
    text: "You run to another room, but the floor turns into quicksand!",
    choices: [
      { text: "Stay still", next: "sink", score: -5 },
      { text: "Grab the rope nearby", next: "escapeQuicksand", score: 5 }
    ]
  },

  fight: {
    text: "You scare the lion away! The game glows again. A riddle appears: 'Find the emerald or remain forever'.",
    choices: [
      { text: "Search the jungle", next: "searchJungle", score: 5 },
      { text: "Wait for help", next: "waitHelp", score: -5 }
    ]
  },

  sink: {
    text: "You sink completely. The jungle takes you... Game Over.",
    choices: []
  },

  escapeQuicksand: {
    text: "You escape! You find a path leading to a glowing emerald temple.",
    choices: [
      { text: "Enter the temple", next: "temple", score: 5 },
      { text: "Walk away", next: "lost", score: -5 }
    ]
  },

  searchJungle: {
    text: "You find a river full of crocodiles blocking your path.",
    choices: [
      { text: "Swim across", next: "crocAttack", score: -5 },
      { text: "Build a raft", next: "buildRaft", score: 5 }
    ]
  },

  waitHelp: {
    text: "No one comes. You turn into a Jumanji statue. Game Over.",
    choices: []
  },

  crocAttack: {
    text: "You were eaten by crocodiles. Game Over.",
    choices: []
  },

  buildRaft: {
    text: "You cross safely and reach the temple. The emerald shines on a pedestal.",
    choices: [
      { text: "Take the emerald", next: "victory", score: 10 },
      { text: "Leave it alone", next: "curse", score: -5 }
    ]
  },

  temple: {
    text: "Inside, you see the emerald glowing. You also see strange footprints.",
    choices: [
      { text: "Take the emerald", next: "victory", score: 10 },
      { text: "Follow the footprints", next: "trap", score: -5 }
    ]
  },

  lost: {
    text: "You get lost in the jungle forever. Game Over.",
    choices: []
  },

  trap: {
    text: "You fall into a trap! The board resets itself. Game Over.",
    choices: []
  },

  curse: {
    text: "The temple collapses! You barely survive but the game is never finished.",
    choices: []
  },

  victory: {
    text: "You place the emerald into the board. Everything returns to normal. You win Jumanji!",
    choices: []
  }
};

// Game variables
let current = "start";
let score = 0;

// DOM elements
const story = document.getElementById("story");
const choices = document.getElementById("choices");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

// Function to show the current part
function showScene() {
  const scene = gameData[current];
  story.textContent = scene.text;
  choices.innerHTML = "";
  scoreEl.textContent = "Score: " + score;

  // loop through choices
  for (let i = 0; i < scene.choices.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = scene.choices[i].text;
    btn.onclick = () => {
      score += scene.choices[i].score;
      current = scene.choices[i].next;
      showScene();
    };
    choices.appendChild(btn);
  }

  // If no choices left, show restart
  if (scene.choices.length === 0) {
    restartBtn.style.display = "block";
  }
}

// Restart function
restartBtn.addEventListener("click", () => {
  current = "start";
  score = 0;
  restartBtn.style.display = "none";
  showScene();
});

showScene();
