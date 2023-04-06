
var questions = [
  "What is the capital of France?",
  "Which animal is considered to be the most dangerous?",
  "What is the currency of Japan?",
  "What is the film where Keira Knightley DIDN'T perform",
  "What is the name of the person who created this page"
];

var answers = [
  "Paris",
  "Mosquito",
  "Yen",
  "Dead Poets Society",
  "Sukhrab"
];

var choice_options = [
  ["Paris", "London", "New York", "Berlin"],
  ["Mosquito", "Snake", "Crocodile", "Bedbug"],
  ["Yuan", "Dollar", "Euro", "Yen"],
  ["Pirates of the Caribbean", "Dead Poets Society", "Anna Karenina", "Begin Again"],
  ["Alikhan", "Zhibek", "Sukhrab", "Akbota"]
];

$(document).ready(function() {
  var quiz = $("#quiz");

for (var i = 0; i < questions.length; i++) {
    var question = $("<div>").addClass("question").text(questions[i]);
    var choices = $("<ul>").addClass("choices");

    for (var j = 0; j < choice_options[i].length; j++) {
      var choice = $("<li>").addClass("choice").text(choice_options[i][j]);
      choices.append(choice);
    }

    quiz.append(question);
    quiz.append(choices);
  }

  $("#check").click(function() {
    var score = 0;

    for (var i = 0; i < answers.length; i++) {
      var choice = $(".choices").eq(i).find(".choice.active");

      if (choice.text() === answers[i]) {
        score++;
        choice.addClass("correct");
      } else {
        choice.addClass("incorrect");
      }
    }

    $("#score").text("Score: " + score + " out of " + answers.length);
  });

  $(".choice").click(function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
});
