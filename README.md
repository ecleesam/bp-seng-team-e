# bp-seng-team-e

**bp SENG Programme Team E**  

---

# Jumanji Adventure

**Jumanji Adventure** is a short story game made with **HTML**, **CSS**, and **JavaScript**.  
The player makes choices that change how the story goes. Each choice affects the score and can lead to winning or losing the game.

---

## How It Works

### index.html
- Main web page for the game.  
- Displays:
  - Game title  
  - Story text  
  - Choice buttons  
  - Score counter  
  - Restart button  
- Includes a canvas for background images.  
- Connects to `style.css` and `script.js`.

### style.css
- Adds jungle-style background and text colors.  
- Styles the container box, buttons, and story area.  
- Centers the game on the screen.  
- Buttons are green and change color when hovered.

### script.js
- Controls the game logic.  
- Stores all story scenes, images, and choices.  
- Updates the story, image, and score when a choice is clicked.  
- Shows the **Restart** button after reaching the end.  
- Uses the **Canvas API** to display each scene's background image.

### test.js
- Checks if the story data works correctly.  
- Tests if key scenes exist.  
- Shows `Jumanji basic tests passed!` in the console if everything is fine.

---

## How to Play

1. Download all the files.  
2. Make sure the `img` folder contains all the pictures.  
3. Open **index.html** in your browser.  
4. Read the story and click your choices to continue.  
5. Try to win and escape Jumanji.  
6. Click **Restart** to play again.

---

## Goal

- Make the right choices to survive and finish the adventure.  
- Different choices lead to different endings — try them all.
