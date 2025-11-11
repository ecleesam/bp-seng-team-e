// Basic logic tests
function testGameData() {
  console.assert(gameData.start.choices.length > 0, "Start should have choices");
  console.assert(typeof gameData.victory.text === "string", "Victory should exist");
  console.assert("ignoreGame" in gameData, "ignoreGame path should exist");
  console.log("✅ Jumanji basic tests passed!");
}

testGameData();
