// Canvas setup
const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

function drawSceneImage(imagePath) {
  const img = new Image();
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = imagePath;
}


// Simple Jumanji branching adventure
const gameData = {
  start: {
    text: "You found the Jumanji board in your attic. Do you play the game or leave it?",
    image: "../img/attic.jpg",
    choices: [
      { text: "Play the game", next: "startGame", score: 5 },
      { text: "Leave it alone", next: "ignoreGame", score: -5 }
    ]
  },

  ignoreGame: {
    text: "You walk away, but you keep hearing drum sounds. Curiosity grows. Do you go back?",
    image: "../img/walk_away.jpg",
    choices: [
      { text: "Go back and open it", next: "startGame", score: 5 },
      { text: "Call your friend for help", next: "callFriend", score: 0 }
    ]
  },

  startGame: {
    text: "You roll the dice... the jungle comes alive! A lion appears! What do you do?",
    image: "../img/lion_surprised.jpg",
    choices: [
      { text: "Run away", next: "run", score: -5 },
      { text: "Grab a chair to defend", next: "fight", score: 5 }
    ]
  },

  callFriend: {
    text: "Your friend laughs at you. Suddenly, vines grow around your house! You both get trapped. Game Over.",
    image: "../img/vine_trapped.jpg",
    choices: []
  },

  run: {
    text: "You run to another room, but the floor turns into quicksand!",
    image: "../img/quicksand.jpg",
    choices: [
      { text: "Stay still", next: "sink", score: -5 },
      { text: "Grab the rope nearby", next: "escapeQuicksand", score: 5 }
    ]
  },

  fight: {
    text: "You scare the lion away! The game glows again. A riddle appears: 'Find the emerald or remain forever'.",
    image: "../img/lion_scared.jpg",
    choices: [
      { text: "Search the jungle", next: "searchJungle", score: 5 },
      { text: "Wait for help", next: "waitHelp", score: -5 }
    ]
  },

  sink: {
    text: "You sink completely. The jungle takes you... Game Over.",
    image: "../img/quicksand_over.jpg",
    choices: []
  },

  escapeQuicksand: {
    text: "You escape! You find a path leading to a glowing emerald temple.",
    image: "../img/temple_found.jpg",
    choices: [
      { text: "Enter the temple", next: "temple", score: 5 },
      { text: "Walk away", next: "lost", score: -5 }
    ]
  },

  searchJungle: {
    text: "You find a river full of crocodiles blocking your path.",
    image: "../img/croc.jpg",
    choices: [
      { text: "Swim across", next: "crocAttack", score: -5 },
      { text: "Build a raft", next: "buildRaft", score: 5 }
    ]
  },

  waitHelp: {
    text: "No one comes. You turn into a Jumanji statue. Game Over.",
    image: "../img/statue.jpg",
    choices: []
  },

  crocAttack: {
    text: "You were eaten by crocodiles. Game Over.",
    image: "../img/croc_end.jpg",
    choices: []
  },

  buildRaft: {
    text: "You cross safely and reach the temple. The emerald shines on a pedestal.",
    image: "../img/emerald_found.jpg",
    choices: [
      { text: "Take the emerald", next: "victory", score: 10 },
      { text: "Leave it alone", next: "curse", score: -5 }
    ]
  },

  temple: {
    text: "Inside, you see the emerald glowing. You also see strange footprints.",
    image: "../img/emerald_footprint.jpg",
    choices: [
      { text: "Take the emerald", next: "victory", score: 10 },
      { text: "Follow the footprints", next: "trap", score: -5 }
    ]
  },

  lost: {
    text: "You get lost in the jungle forever. Game Over.",
    image: "../img/lost_jungle.jpg",
    choices: []
  },

  trap: {
    text: "You fall into a trap! The board resets itself. Game Over.",
    image: "../img/trap.jpg",
    choices: []
  },

  curse: {
    text: "The temple collapses! You barely survive but the game is never finished.",
    image: "../img/collapsed_temple.jpg",
    choices: []
  },

  victory: {
    text: "You place the emerald into the board. Everything returns to normal. You win Jumanji!",
    image: "../img/game_win.jpg",
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

  // draw scene image if available
  if (scene.image) {
    drawSceneImage(scene.image);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }


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

