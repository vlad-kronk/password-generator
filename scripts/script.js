var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var playGame = function () {
  ///////////////////////////////////////////////////////////////////////
  // 1. Show prompt asking for R,P,S (UI)
  var userChoice = window.prompt("Enter R, P, or S:");

  ///////////////////////////////////////////////////////////////////////
  // 2. User submits selection (Event)
  // 3. Store value in userChoice (Update state)
  // HANDLE EVENT

  ///////////////////////////////////////////////////////////////////////
  // 4. Validate input
  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  ///////////////////////////////////////////////////////////////////////
  // 5. Generate a random computer selection (Update state)
  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  ///////////////////////////////////////////////////////////////////////
  // 6. Alert with computer choice (UI)
  window.alert("The computer chose " + computerChoice);

  ///////////////////////////////////////////////////////////////////////
  // 6. Compare (Update State)
  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    // update state and alert user
    ties++;
    window.alert("It's a tie!");

    // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    // update state and alert user
    wins++;
    window.alert("You win!");

    // If above conditions failed, assume player lost
  } else {
    // update state and alert user
    losses++;
    window.alert("You lost!");
  }

  ///////////////////////////////////////////////////////////////////////
  // 7. Alert user of scoreboard (UI)
  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  ///////////////////////////////////////////////////////////////////////
  // 8. Confirm play again (Event)
  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();
