  const quizData = [
    {
        question: "What does 'HTML' stands for?",
        options: [
            "HyperText Module Language",
            "HyperText Markup Language",
            "HyperTool Markup Language",
            "HyperText Machine Language",
        ],
        correct: "HyperText Markup Language",
    },
    {
        question: "Which programming language is popularly known for frontend development?",
        options: [
            "PHP",
            "React Native",
            "Python",
            "Javascript",
        ],
        correct: "Javascript",
    },
    {
        question: "Which is a framework/library of Javascript?",
        options: [
            "React",
            "Jango",
            "Laravel",
            "Express",
        ],
        correct: "React",
    },
    {
        question: "What does 'WWW' stands for?",
        options: [
            "Web World Wide",
            "Wide Web World",
            "World Wide Web",
            "Web Wide Word",
        ],
        correct: "World Wide Web",
    },
    {
        question: "Which company developed the Windows operating system?",
        options: [
            "Apple",
            "Microsoft",
            "Google",
            "IBM",
        ],
        correct: "Microsoft",
    },
    {
        question: "Which device is used to input text into a computer?",
        options: [
            "Monitor",
            "Mouse",
            "Keyboard",
            "Speaker",
        ],
        correct: "Keyboard",
    },
    {
        question: "Which one is a search engine?",
        options: [
            "Instagram",
            "Google",
            "Facebook",
            "Twitter",
        ],
        correct: "Google",
    },
    {
        question: "Which brand makes iPhones?",
        options: [
            "Samsung",
            "Tecno",
            "Apple",
            "Nokia",
        ],
        correct: "Apple",
    },
    {
        question: "What is the name of Android's robot mascot?",
        options: [
            "Andy",
            "Android",
            "Mark",
            "Droidy",
        ],
        correct: "Andy",
    },
    {
        question: "Which mobile operating system is owned by Google?",
        options: [
            "Android",
            "IOS",
            "Windows Phone",
            "HarmonyOS",
        ],
        correct: "Android",
    },
    {
        question: "Which of these is a web browser?",
        options: [
            "Twitter",
            "Firefox",
            "WhatsApp",
            "Facebook",
        ],
        correct: "Firefox",
    },
    {
        question: "Which app is mainly used for chatting?",
        options: [
            "Chrome",
            "VLC media player",
            "YouTube",
            "WhatsApp",
        ],
        correct: "WhatsApp",
    },
];

        // SETTING THE VARIBALES
        const quizContainer = document.getElementById("quiz");
        const questionElement = document.getElementById("question");
        const answersList = document.getElementById("answers-list");
        const nextBtn = document.getElementById("next-btn");
        const resultContainer = document.getElementById("result-container");
        const scoreElement = document.getElementById("score");
        const restartBtn = document.getElementById("restart-btn");

        // SETTING VALUES
        let currentQuestionIndex = 0;
        let score = 0;
        let answerSelected = false;


            // LOAD QUESTION
            function loadQuestion() {
            answerSelected = false;
            const currentQuestion = quizData[currentQuestionIndex];
            const questionNumber = currentQuestionIndex + 1;
            questionElement.textContent = questionNumber + ". " + currentQuestion.question;


            //create the answer list
            answersList.innerHTML = ""; // Clear previous options
            currentQuestion.options.forEach((option) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click", () => selectAnswer(option, li));
            answersList.appendChild(li);
            });
        }


    // SELECT ANSWER
    function selectAnswer(option, li) {
    const currentQuestion = quizData[currentQuestionIndex];
    // display nextBtn
    nextBtn.style.display = "block"

     answerSelected = true;

    if (option === currentQuestion.correct) {
        score++;
        li.style.background = "green";
    } else {
        li.style.background = "red";
    }

    // loop through all the buttons
    Array.from(answersList.children).forEach((child) => {
        // dissable the buttons after selecting an answer
        child.style.pointerEvents = "none"
        // check the correct answer
        if (child.textContent === currentQuestion.correct) {
            child.style.background = "green"
        }
    })
};


        // SHOW RESULT
        function showResult() {
            quizContainer.classList.add("hidden");
            resultContainer.classList.remove("hidden");
            scoreElement.textContent = ` ${score} / ${quizData.length}`;
        }

        // RESTART QUIZ
        function restartQuiz() {
            score = 0;
            currentQuestionIndex = 0;
            resultContainer.classList.add("hidden");
            quizContainer.classList.remove("hidden");
            loadQuestion();
        }

        // NEXT BTN
        nextBtn.addEventListener("click", () => {
    // checks if answer has been selected or not
        if (answerSelected === false) {
        alert("please, choose an answer")
        return
    }
    // increases the index and checks if it has gotten to the last one
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showResult();
            }
        });

        // RESTART BUTTON
        restartBtn.addEventListener("click", restartQuiz);

        // INITIALIZE QUIZ
        loadQuestion();
