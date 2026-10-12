// Save user preferences from form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const favoriteGame = document.getElementById("favoriteGame").value;
      localStorage.setItem("userName", name);
      localStorage.setItem("favoriteGame", favoriteGame);
      alert("Preferences saved!");
    });
  }

  // Profile page info
  const profileInfo = document.getElementById("profileInfo");
  if (profileInfo) {
    const name = localStorage.getItem("userName") || "Guest";
    const favoriteGame = localStorage.getItem("favoriteGame") || "None";
    profileInfo.textContent = `Name: ${name}, Favorite Game: ${favoriteGame}`;
  }

  // Click Counter Game
    const clickButton = document.getElementById("clickButton");
    if (clickButton) {
    let count = 0;
    const clickSound = document.getElementById("clickSound");
    clickButton.addEventListener("click", () => {
        count++;
        document.getElementById("clickCount").textContent = "Clicks: " + count;
        localStorage.setItem("scoreClick", count);
        if (clickSound) {
        clickSound.currentTime = 0; // restart sound
        clickSound.play();
        }
    });
    }


  // Guess the Number Game
    window.playGuess = function () {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const guess = parseInt(document.getElementById("guessInput").value);
    const result = document.getElementById("guessResult");
    const resetBtn = document.getElementById("resetGuess");

    if (guess === randomNumber) {
        result.textContent = "Correct! 🎉";
        localStorage.setItem("scoreGuess", 1);
        resetBtn.style.display = "none";
    } else {
        result.textContent = `Wrong! The number was ${randomNumber}`;
        localStorage.setItem("scoreGuess", 0);
        resetBtn.style.display = "inline-block";
    }
    };

    const resetGuess = document.getElementById("resetGuess");
    if (resetGuess) {
    resetGuess.addEventListener("click", () => {
        document.getElementById("guessResult").textContent = "";
        document.getElementById("guessInput").value = "";
        resetGuess.style.display = "none";
    });
    }


  // Trivia Quiz Game
  window.checkAnswer = function (answer) {
    const result = document.getElementById("quizResult");
    if (answer === "Paris") {
      result.textContent = "Correct! 🎉";
      localStorage.setItem("scoreQuiz", 1);
    } else {
      result.textContent = "Wrong! Try again.";
      localStorage.setItem("scoreQuiz", 0);
    }
  };

  // Load scores on Profile page
  const scoreGuess = document.getElementById("scoreGuess");
  const scoreClick = document.getElementById("scoreClick");
  const scoreQuiz = document.getElementById("scoreQuiz");
  if (scoreGuess && scoreClick && scoreQuiz) {
    scoreGuess.textContent = localStorage.getItem("scoreGuess") || 0;
    scoreClick.textContent = localStorage.getItem("scoreClick") || 0;
    scoreQuiz.textContent = localStorage.getItem("scoreQuiz") || 0;
  }
});

    // Reset Profile
    const resetProfile = document.getElementById("resetProfile");
    if (resetProfile) {
    resetProfile.addEventListener("click", () => {
        localStorage.clear();
        alert("Profile reset! Reload the page to see changes.");
        location.reload();
    });
    }
