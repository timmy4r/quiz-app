let quiz_data = [
    {
        question: "Q1. Who is a frontend developer? ",
        A: "A person who manages servers ",
        B: "A person who designs and codes the visual parts of websites",
        C: " A person who only repairs computers ",
        D: "A person who develops operating systems",
        correct: "B"
    },
    {
        question: "Q2. Which of these is a primary responsibility of a frontend developer?",
        A: " Managing databases",
        B: "creating user interfaces and styling",
        C: "Configuring servers",
        D: "Writing machine code",
        correct: "B"
    },
    {
        question: "Q3. Why is collaboration with backend developers important?",
        A: "To design graphics",
        B: "To ensure frontend and backend work together",
        C: "To avoid using databases",
        D: "To reduce workload",
        correct: "B"
    },
    {
        question: "Q4. The client-side of a web app is also known as: ",
        A: "Backend",
        B: "Frontend",
        C: "Server",
        D: "Database",
        correct: "B"
    },
    {
        question: "Q5. which of these run in the browser",
        A: "SQL",
        B: "HTML, CSS and Javascript",
        C: "PHP",
        D: "Python",
        correct: "B"
    },
    {
        question: "Q6.  The server- side handles:",
        A: "User interface",
        B: "Database and business logic",
        C: "Styling and layout",
        D: "Animations only",
        correct: "B"
    },
    {
        question: "Q7. Which technology defines webpage structure?",
        A: "CSS",
        B: "HTML",
        C: "JavaScript",
        D: "SQL",
        correct: "B"
    },
    {
        question: "Q8. Which technology styles web pages? ",
        A: "JavaScript",
        B: "HTML",
        C: "CSS",
        D: "JSON",
        correct: "B"
    },
    {
        question: "Q9. Which technology makes web pages interactive?",
        A: "CSS",
        B: "SQL",
        C: "JavaScript",
        D: "HTML",
        correct: "B"
    },
    {
        question: "Q10.  What is responsive design? ",
        A: "Making sites load faster",
        B: "Making websites adapt to all screen sizes",
        C: "Using more animations",
        D: "Writing server code",
        correct: "B"
    },
    {
        question: "Q11. Why is performance important in frontend development? ",
        A: "It increases website speed and user experience",
        B: "It helps only backend developers",
        C: "It reduces code",
        D: "It improves electricity usage",
        correct: "A"
    },
    {
        question: "Q12.  Which of these is a performance metric in frontend development?",
        A: "Page load time",
        B: "Server RAM",
        C: "Office cleanliness",
        D: "Number of developers",
        correct: "A"
    },
    {
        question: "Q13.The role of the browser in web development is to:",
        A: "Render and display web pages",
        B: "Create server scripts",
        C: "Store databases permanently",
        D: "Manage cloud hosting",
        correct: "A"
    },
    {
        question: "Q14.Which of the following is NOT a frontend technology?",
        A: "React",
        B: "Angular",
        C: "Python",
        D: "Vue.js",
        correct: "C"
    },
    {
        question: "Q15.Why is frontend development important?",
        A: "It builds user- friendly websites",
        B: "It maintains servers",
        C: "It writes operating systems",
        D: "It only handles hardware",
        correct: "A"
    },
    {
        question: "Q16.Which declaration starts every HTML5 document?",
        A: "< !DOCTYPE html >",
        B: "<html>",
        C: "<doctype>",
        D: "<head>",
        correct: "A"
    },
    {
        question: "Q17.Which tag defines a paragraph in HTML?",
        A: "< p >",
        B: "<h1>",
        C: "<div>",
        D: "<br>",
        correct: "A"
    },
    {
        question: "Q18.Which HTML element is used for the largest heading?",
        A: "< h6 >",
        B: "<h1>",
        C: "<head>",
        D: "<header>",
        correct: "B"
    },
    {
        question: "Q19. Which attribute adds alternative text to an image?",
        A: "src",
        B: "alt",
        C: "title",
        D: "href",
        correct: "B"
    },
    {
        question: "Q20. Which tag creates a hyperlink?",
        A: "< link >",
        B: "<a>",
        C: "<h>",
        D: "<url>",
        correct: "A"
    },
    {
        question: "Q21. Which HTML element is used for an unordered list?",
        A: "< ul >",
        B: "<ol>",
        C: "<li>",
        D: "<list>",
        correct: "A"
    },
    {
        question: "Q22. Which tag is used for table rows?",
        A: "< td >",
        B: "<tr>",
        C: "<table>",
        D: "<th>",
        correct: "B"
    },
    {
        question: "Q23. Which tag is used to create a form in HTML?",
        A: "< form >",
        B: "<input>",
        C: "<fieldset>",
        D: "<label>",
        correct: "A"
    },
    {
        question: "Q24. Semantic HTML elements help with:",
        A: "SEO and accessibility",
        B: "Random styling",
        C: "Faster servers",
        D: "Network speed",
        correct: "A"
    },
    {
        question: "Q25. Which semantic tag defines navigation links? ",
        A: "< nav >",
        B: "<menu>",
        C: "<links>",
        D: "<ul>",
        correct: "A"
    },
    {
        question: "Q26. Which element is best for marking main content ?",
        A: "<section>",
        B: "<main>",
        C: "<body>",
        D: "<article>",
        correct: "B"
    },
    {
        question: "Q27. Which attribute is used to make forms accessible with labels?",
        A: "for",
        B: "id",
        C: "name",
        D: "type",
        correct: "A"
    },
    {
        question: "Q28. Which of these tags is deprecated?",
        A: "<font>",
        B: "<p>",
        C: "<h1>",
        D: "< table >",
        correct: "A"
    },
    {
        question: "Q29 .Best practice for HTML code includes:",
        A: "Proper indentation and comments",
        B: "Using deprecated tags",
        C: "Skipping closing tags",
        D: "Avoiding semantic",
        correct: "A"
    },
    {
        question: "Q30. What does CSS stand for?",
        A: "Creative Style Sheets",
        B: "Cascading Style Sheets",
        C: "Computer Styling System",
        D: "Colorful Style Syntax",
        correct: "B"
    },
    {
        question: "Q31. Which property sets the background color in CSS ?",
        A: "color",
        B: "bgcolor",
        C: "background - color",
        D: "bg",
        correct: "C"
    },
    {
        question: "Q32. Which selector styles all < p > elements ?",
        A: "#p",
        B: ".p",
        C: "p",
        D: "* p *",
        correct: "C"
    },
    {
        question: "Q33. How do you select an element with the ID header ?",
        A: ".header",
        B: "header",
        C: "#header",
        D: "* header *",
        correct: "C"
    },
    {
        question: "Q34. Which CSS property changes text size ?",
        A: "font - size",
        B: "text - style",
        C: "font - weight",
        D: "text - size",
        correct: "A"
    },
    {
        question: "Q35.Which CSS layout system is best for one - dimensional layouts ?",
        A: "Flexbox",
        B: "Grid",
        C: "Float",
        D: "Inline - block",
        correct: "A"
    },
    {
        question: "Q36.Which CSS layout is best for two - dimensional layouts?",
        A: "Float",
        B: "Flexbox",
        C: "Grid",
        D: "Inline",
        correct: "C"
    },
    {
        question: "Q37.Which property controls the spacing inside an element’s border?",
        A: "margin",
        B: "padding",
        C: "border",
        D: "width",
        correct: "B"
    },
    {
        question: "Q38.Which CSS property sets space outside an element’s border?",
        A: "margin",
        B: "padding",
        C: "border",
        D: "outline",
        correct: "A"
    },
    {
        question: "Q39.Which of the following best describes the CSS box model?",
        A: "margin → border → padding → content",
        B: "content → border → padding → margin",
        C: "padding → margin → border → content",
        D: "border → content → padding → margin",
        correct: "A"
    },
    {
        question: "Q40.Which CSS property is used for absolute positioning ?",
        A: "position: absolute",
        B: "float: left",
        C: "display: flex",
        D: "z - index",
        correct: "A"
    },
    {
        question: "Q41.Which command initializes a new Git repository ?",
        A: "git start",
        B: "git new",
        C: "git init",
        D: "git create",
        correct: "C"
    },
    {
        question: "Q42.Which command clones a repository ?",
        A: "git copy",
        B: "git clone",
        C: "git pull",
        D: "git fetch",
        correct: "B"
    },
    {
        question: "Q43.Which command stages changes ?",
        A: "git add",
        B: "git stage",
        C: "git commit",
        D: "git push",
        correct: "A"
    },
    {
        question: "Q44.Which command commits changes ?",
        A: "git save",
        B: "git commit",
        C: "git log",
        D: "git update",
        correct: "B"
    },
    {
        question: "Q45.Which flag adds a message to commits ?",
        A: "-m",
        B: "-c",
        C: "-msg",
        D: "-note",
        correct: "A"
    },
    {
        question: "Q46.Which command shows repo status ?",
        A: "git show",
        B: "git status",
        C: "git check",
        D: "git log",
        correct: "B"
    },
    {
        question: "Q47.Which command creates a branch ?",
        A: "git branch",
        B: "git create - branch",
        C: "git new",
        D: "git checkout",
        correct: "A"
    },
    {
        question: "Q48.Which command switches branches ?",
        A: "git swap",
        B: "git checkout",
        C: "git branch - m",
        D: "git move",
        correct: "B"
    },
    {
        question: "Q49.Which command merges branches ?",
        A: "git combine",
        B: "git merge",
        C: "git connect",
        D: "git pull",
        correct: "B"
    },
    {
        question: "Q50.A merge conflict occurs when:",
        A: "Two commits modify same code",
        B: "Repo has no commits",
        C: "Network is slow",
        D: "Branch is empty",
        correct: "A"
    }
]                                                                                                                           
let quiz = document.getElementById('quiz')
let  answerEls = document.querySelectorAll('.answer')
let questionEl = document.getElementById('question')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let submitBtn = document.getElementById('submit')
let current_quiz = 0
let score = 0 

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    let current_quiz_data = quiz_data[current_quiz]

    questionEl.innerText = current_quiz_data.question
    a_text.innerText =  current_quiz_data.A
    b_text.innerText = current_quiz_data.B
    c_text.innerText = current_quiz_data.C
    d_text.innerText = current_quiz_data.D
}
function deselectAnswers(){
    answerEls.forEach( answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}
submitBtn.addEventListener('click', () => {
    let answer = getSelected()

    if(answer) {
        //convert answer to uppercase to match quizdata.correct
        if(answer.toUpperCase() === quiz_data[current_quiz].correct){
            score++ ;
        }
        current_quiz++ ;
        if(current_quiz < quiz_data.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quiz_data.length} questions correctly</h2>

            <button onclick = "location.reload()" > Reload</button>
            `
        }
    }
})


































































