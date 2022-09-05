"use strict";

$(function () {
  $('#screen').width($('#screen').height() * 4);
  $('#container').width($('#screen').width() + 106);
  var question = {
    type: 'Multiplication1',
    content: undefined,
    answer: null
  };
  var extractors = [['', '']];
  var questions = [['1²', "" + Math.pow(1, 2)], ['2²', "" + Math.pow(2, 2)], ['3²', "" + Math.pow(3, 2)], ['4²', "" + Math.pow(4, 2)], ['5²', "" + Math.pow(5, 2)], ['6²', "" + Math.pow(6, 2)], ['7²', "" + Math.pow(7, 2)], ['8²', "" + Math.pow(8, 2)], ['9²', "" + Math.pow(9, 2)], ['10²', "" + Math.pow(10, 2)], ['11²', "" + Math.pow(11, 2)], ['12²', "" + Math.pow(12, 2)], ['13²', "" + Math.pow(13, 2)], ['14²', "" + Math.pow(14, 2)], ['15²', "" + Math.pow(15, 2)], ['16²', "" + Math.pow(16, 2)], ['17²', "" + Math.pow(17, 2)], ['18²', "" + Math.pow(18, 2)], ['19²', "" + Math.pow(19, 2)], ['20²', "" + Math.pow(20, 2)]];
  console.log(questions);

  function correct() {
    play();
    $('#screen').css('border', '3px solid lime');
    setTimeout(function () {
      $('#screen').css('border', '3px solid rgb(43, 43, 43');
    }, 1000);
  }

  function incorrect() {
    $('#screen').css('border', '3px solid red');
    $('#correction').html(question.answer);
    play();
    setTimeout(function () {
      $('#screen').css('border', '3px solid rgb(43, 43, 43');
      $('#correction').html('&#8203');
    }, 1000);
  }

  $('#input').on('keydown', function (event) {
    if (event.key == 'Enter') {
      if ($('#input').val() === question.answer) {
        correct();
      } else incorrect();

      $('#input').val('');
    }
  });

  function play() {
    if (question.type == 'Multiplication1') {
      var val1 = Math.floor(Math.random() * 11);
      var val2 = Math.floor(Math.random() * 11);
      question.content = val1 + " x " + val2;
      $('#question').html(question.content);
      question.answer = val1 * val2;
    } else if (question.type == 'Multiplication2') {
      var val1 = Math.floor(Math.random() * 10) + 10;
      var val2 = Math.floor(Math.random() * 10) + 10;
      question.content = val1 + " x " + val2;
      $('#question').html(question.content);
      question.answer = val1 * val2;
    } else if (question.type == 'Multiplication3') {
      var val1 = Math.floor(Math.random() * 80) + 20;
      var val2 = Math.floor(Math.random() * 80) + 20;
      question.content = val1 + " x " + val2;
      $('#question').html(question.content);
      question.answer = val1 * val2;
    } else if (question.type == 'Squares1') {
      var val = Math.floor(Math.random() * 11);
      question.content = val + "\xB2";
      $('#question').html(question.content);
      question.answer = Math.pow(val, 2);
    } else if (question.type == 'Squares2') {
      var val = Math.floor(Math.random() * 10) + 10;
      question.content = val + "\xB2";
      $('#question').html(question.content);
      question.answer = Math.pow(val, 2);
    } else if (question.type == 'Squares3') {
      var val = Math.floor(Math.random() * 80) + 20;
      question.content = val + "\xB2";
      $('#question').html(question.content);
      question.answer = Math.pow(val, 2);
    } else if (question.type == 'Arithmetic1') {
      var sign = Math.floor(Math.random() * 2) == 0 ? '+' : '-';
      var val1 = Math.floor(Math.random() * 11);
      var val2 = Math.floor(Math.random() * 11);
      question.content = val1 + " " + sign + " " + val2;
      $('#question').html(question.content);
      question.answer = eval(question.content);
    } else if (question.type == 'Arithmetic2') {
      var sign = Math.floor(Math.random() * 2) == 0 ? '+' : '-';
      var val1 = Math.floor(Math.random() * 10) + 10;
      var val2 = Math.floor(Math.random() * 10) + 10;
      question.content = val1 + " " + sign + " " + val2;
      $('#question').html(question.content);
      question.answer = eval(question.content);
    } else if (question.type == 'Arithmetic3') {
      var sign = Math.floor(Math.random() * 2) == 0 ? '+' : '-';
      var val1 = Math.floor(Math.random() * 80) + 20;
      var val2 = Math.floor(Math.random() * 80) + 20;
      question.content = val1 + " " + sign + " " + val2;
      $('#question').html(question.content);
      question.answer = eval(question.content);
    }
  }
  /*   function getQuestion() {
      questionNumber = Math.floor(Math.random() * (questions.length))
      question(questionNumber)
    }
       function question(qn) {
      console.log('huh?')
      $('#question').html(questions[qn][0])
      answer = questions[qn][1]
    }
       function specificQuestion(question) {
      $('#question').html(question)
    } */


  play();
  $('#screen').on('click', function (event) {
    $('#input').trigger("focus");
  });
});