console.log("Hello from app.js");

setProperty("projects", "backgroundColor", "yellow");

setProperty("giBtn", "border", "3px solid red");
setProperty("sudokuS", "border", "3px solid red");

function justLog() {
  console.log("Button clicked!");
  setText("thankYou", "Thank you for showing interest in my capstone project!");
}

function submit() {
  "submitBtn", "click", justLog;
}
