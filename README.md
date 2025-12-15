# ➕ Addition Game App

## 📌 Overview

The **Addition Game App** is a simple interactive web game built using **HTML, CSS, and JavaScript**. The app generates two random numbers and asks the user to enter their sum. Based on the answer, it displays a success or retry message.

This project is ideal for beginners to practice **DOM manipulation**, **random number generation**, and **conditional logic** in JavaScript.

---

## 🧩 Features

* Generates two random numbers (1–100)
* User inputs the sum of the numbers
* Displays success or failure message
* Restart functionality to play again

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

---

## ⚙️ How It Works

* When the page loads, the `restart()` function is called automatically.
* Two random numbers are generated and displayed.
* The user enters the sum in the input field.
* On clicking **Check**:

  * If the answer is correct, a success message is shown
  * If incorrect, a retry message is displayed
* Clicking **Restart** resets the game with new numbers.

---

## 📂 Project Structure

```
addition-game-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function check() {
  let number1 = parseInt(firstNumberElement.textContent);
  let number2 = parseInt(secondNumberElement.textContent);
  let result = parseInt(userInput.value);
  let sum = number1 + number2;

  if (sum === result) {
    messageElement.textContent = "Congratulations! You got it right.";
  } else {
    messageElement.textContent = "Please Try Again!";
  }
}
```

---

## 📚 Concepts Covered

* Random number generation using `Math.random()`
* DOM element selection and updates
* Input handling and validation
* Conditional statements

---

## 🚀 Future Improvements

* Add score tracking
* Add timer for answering
* Support subtraction and multiplication modes

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript fundamentals** and **problem-solving skills**.

---

⭐ If you find this project useful, feel free to star the repository!
