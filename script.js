window.onload= function(){
  show(0)
}
let questions =[
{
  id: 1,
  question: "Commonly used datatypes do not includes_______",
  answer: "Alert",
  options:[,
    "String",
    "Boolean",
    "Alert",
    "Number",
  ]
},
{
  id: 2,
  question: "The condition in IF/ELSE is enclosed within______",
  answer: "Parenthesis",
  options:[,
    "Quotes",
    "Curly Brackets",
    "Parenthesis",
    "Square Brackets",
  ]
},
{
  id: 3,
  question: "Arrays in Javascript can be used to store______",
  answer: "All of these above",
  options:[,
    "Number and Strings",
    "Other arrays",
    "Booleans",
    "All of these above",
  ]
},
{
  id: 4,
  question: "String values must be enclosed within_______ when being assigned to variables",
  answer: "Quotes",
  options:[,
    "Commas",
    "Curly Brackets",
    "Quotes",
    "Parenthesis",
  ]
},
{
  id:5,
  question: "A very useful tool during development and debugging for printing content to be debugger is_______",
  answer: "Javascript",
  options:[
    "Javascript",
    "Terminal",
    "For loops",
    "Console log",
  ]
}
]

let question_count=0;

function next() {
  question_count++;
  show(question_count);
}
function show(count) {
  let question = document.getElementById("questions");

  question.innerHTML= `<h2>${questions[count].question}</h2>`;
  <ul class="option-group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
  </ul>

}

document.getElementById('btn-next').addEventListener("Next", next);





function submitForm (e) {
  e.preventDefault();
  let name= document.forms["Welcome Form"]["name"].value;
  sessionStorage.setItem("name", name);
  console.log("form submitted");
}
  location.href="quiz.html"
