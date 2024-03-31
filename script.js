//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: " الوسم <.....> يستخدم لتمييز النص بلون مميز",
    options: ["br", "em", "h3", "mark"],
    correct: "mark",
  },
  {
    id: "1",
    question: "ما هو التنسيق المستخدم للتعبير عن ارتفاع الصورة وعرضه",
                                                          
    options: ["Dots per inch", "inches", "Pixels ", "Centimeters "],
    correct: "Pixels",
  },
  {
    id: "2",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
  
  {
    "id": "3",
    "question": "What does CSS stand for?",
    "options": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    "correct": "Cascading Style Sheets",
  },
  
  {
    "id": "4",
    "question": "What does HTML stand for?",
    "options": ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
    "correct": "Hyper Text Markup Language",
  },
  
  {
    "id": "6",
    "question": "Which built-in method adds one or more elements to the end of an array and returns the new length of the array in JavaScript?",
    "options": ["last()", "push()", "append()", "addToEnd()"],
    "correct": "push()"
  },
  {
    "id": "7",
    "question": "What is the purpose of the CSS property 'font-size'?",
    "options": [
      "To set the background color of an element",
      "To define the size of the font",
      "To set the width of an element",
      "To change the text color"
    ],
    "correct": "To define the size of the font"
  },
  {
    "id": "8",
    "question": "Which JavaScript method is used to add new items to the end of an array?",
    "options": [
      "pop()",
      "push()",
      "shift()",
      "unshift()"
    ],
    "correct": "push()"
  },

  {
    "id": "9",
    "question": "What does the 'display: none;' property do in CSS?",
    "options": [
      "It sets the text color to transparent",
      "It hides the element",
      "It changes the font size to zero",
      "It makes the element unclickable"
    ],
    "correct": "It hides the element"
  },
  
  {
    "id": "10",
    "question": "What is the purpose of the JavaScript 'getElementById' method?",
    "options": [
      "To get the value of an input field",
      "To retrieve an element by its class name",
      "To fetch data from a server",
      "To retrieve an element by its ID"
    ],
    "correct": "To retrieve an element by its ID"
  },
  
  {
    "id": "11",
    "question": "What is the purpose of the 'box-sizing: border-box;' property in CSS?",
    "options": [
      "To add a border around an element",
      "To include padding and border in the element's total width and height",
      "To set the width of the content area",
      "To change the color of the border"
    ],
    "correct": "To include padding and border in the element's total width and height"
  },
  
  {
    "id": "12",
    "question": "What is the correct way to comment out a line of code in JavaScript?",
    "options": [
      "// This is a comment",
      "<!-- This is a comment -->",
      "' This is a comment",
      "/* This is a comment */"
    ],
    "correct": "// This is a comment"
  },
  {
    "id": "13",
    "question": "What is the purpose of the HTML <header> element?",
    "options": [
      "To define a footer for a document or section",
      "To define introductory content at the beginning of a document or section",
      "To define navigation links",
      "To define a header for a document or section"
    ],
    "correct": "To define a header for a document or section"
  },
  {
    "id": "14",
    "question": "Which of the following is not a valid value for the 'position' property in CSS?",
    "options": [
      "static",
      "fixed",
      "absolute",
      "relative"
    ],
    "correct": "static"
  },

  {
    "id": "15",
    "question": "What does the CSS property 'text-align' do?",
    "options": [
      "It sets the alignment of the text within an element",
      "It sets the font style of the text",
      "It sets the spacing between lines of text",
      "It sets the spacing between letters of text"
    ],
    "correct": "It sets the alignment of the text within an element"
  },
  








  
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 30;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 3000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
       
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
