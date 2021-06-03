"use strict";

//$(() => {
var doGeneral = false,
    doQuotes = true;
var questionNumber, answer;
var quotes = ['"You\'ll speak nothin\' of Elizabeth... Do you look for a whippin\'?"', '"I will cut off my hand before I reach for you again"', '"we never touched"', '"I will fall like an ocean on that court! Fear nothing Elizabeth"', '"She thinks to dance with me on my wife\'s grave!"']; //if anyone is stalking my github just ignore this i need it for me english exam in 2 days :)

var extractors = [];
var questions = [['1²', "" + Math.pow(1, 2)], ['2²', "" + Math.pow(2, 2)], ['3²', "" + Math.pow(3, 2)], ['4²', "" + Math.pow(4, 2)], ['5²', "" + Math.pow(5, 2)], ['6²', "" + Math.pow(6, 2)], ['7²', "" + Math.pow(7, 2)], ['8²', "" + Math.pow(8, 2)], ['9²', "" + Math.pow(9, 2)], ['10²', "" + Math.pow(10, 2)], ['11²', "" + Math.pow(11, 2)], ['12²', "" + Math.pow(12, 2)], ['13²', "" + Math.pow(13, 2)], ['14²', "" + Math.pow(14, 2)], ['15²', "" + Math.pow(15, 2)], ['16²', "" + Math.pow(16, 2)], ['17²', "" + Math.pow(17, 2)], ['18²', "" + Math.pow(18, 2)], ['19²', "" + Math.pow(19, 2)], ['20²', "" + Math.pow(20, 2)]];
console.log(questions);

function correct() {
  play();
  $('body').css('background-color', 'lime');
  setTimeout(function () {
    $('body').css('background-color', 'rgb(75, 75, 75)');
  }, 1000);
}

function incorrect() {
  $('body').css('background-color', 'red');
  $('#correction').html(answer);
  play();
  setTimeout(function () {
    $('body').css('background-color', 'rgb(75, 75, 75)');
    $('#correction').html('&#8203');
  }, 1000);
}

function gamerSort(val) {
  var sorted = [];

  while (sorted.length < val.length) {
    var lowest = 1e9;

    for (var i = 0; i < val.length; i++) {
      if (!sorted.includes(val[i]) && val[i] < lowest) lowest = val[i];
    }

    sorted.push(lowest);
  }

  return sorted;
}

function extractText(topic, count) {
  console.log(count);
  questionNumber = Math.floor(Math.random() * topic.length);
  var args = topic[questionNumber].split(' ');
  var random = Math.floor(Math.random() * args.length);
  var vals = [0];
  var parts = [args[random]];
  console.log(args, random);
  if (args.length - 1 > random) vals.push(1);else vals.push(-2, -1);
  if (args.length > random + 1) vals.push(2);else vals.push(-1);
  vals = vals.sort();
  console.log(vals, "awooga");
  answer = [];

  for (var i = 0; i < count; i++) {
    console.log(answer);
    answer.push(args[random + vals[i]].replace('"', ''));
  }

  console.log(args, answer.join(' '));
  /* for(let i = 0; i < count; i++) {
    for(let i = 0)
  } */

  /* for (let i = 0; i < args[vals[i]].length; i++) {
    if (args[random][i] == '"') continue
    console.log(args[random])
    args[random] = args[random].replace(args[random][i], '_')
    console.log(args[random])
  }
  specificQuestion(args.join(' ')) */
}

$('#input').on('keydown', function (event) {
  console.log('waa');
  console.log(event.code);

  if (event.code == '13') {
    if ($('#input').val() == answer) {
      correct();
    } else incorrect();

    $('#input').val('');
  }
});

function play() {
  if (doGeneral) getQuestion();else if (doQuotes) extractText(quotes, Math.floor(Math.random() * 3) + 1);
}

function getQuestion() {
  questionNumber = Math.floor(Math.random() * questions.length);
  question(questionNumber);
}

function question(qn) {
  console.log('huh?');
  $('#question').html(questions[qn][0]);
  answer = questions[qn][1];
}

function specificQuestion(question) {
  $('#question').html(question);
}

play();
$('body').on('click', function (event) {
  $('#input').trigger("focus");
}); //})