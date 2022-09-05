$(function () {
    $('#screen').width($('#screen').height() * 4);
    $('#container').width($('#screen').width() + 46);
    var question = {
        type: '',
        content: '',
        answer: undefined
    };
    var feedBackTimeout;
    function correct() {
        clearTimeout(feedBackTimeout);
        play();
        $('#screen').css('border', '3px solid lime');
        feedBackTimeout = setTimeout(function () {
            $('#screen').css('border', '3px solid rgb(43, 43, 43');
        }, 1000);
    }
    /*   function incorrect() {
        clearTimeout(feedBackTimeout)
        $('#screen').css('border', '3px solid red')
        $('#correction').html(question.answer)
        play()
        feedBackTimeout = setTimeout(() => {
          $('#screen').css('border', '3px solid rgb(43, 43, 43')
          $('#correction').html('&#8203')
        }, 1000);
      } */
    $('#input').on('keypress', function (event) {
        //console.log(event.key, Number(event.key), Number.isNaN(Number(event.key)), ['Enter', '-'].includes(event.key))
        if (Number.isNaN(Number(event.key)) && !['Enter', '-'].includes(event.key))
            return false;
        //if (event.key == 'Enter') {
        setTimeout(function () {
            if ($('#input').val() == question.answer && $('#input').val() != '') {
                correct();
                $('#input').val('');
            } // else incorrect()
        }, 1);
        //}
    });
    function play() {
        if (question.type == 'Multiplication1') {
            var val1 = Math.floor(Math.random() * 11);
            var val2 = Math.floor(Math.random() * 11);
            question.content = val1 + " x " + val2;
            $('#question').html(question.content);
            question.answer = val1 * val2;
        }
        else if (question.type == 'Multiplication2') {
            var val1 = Math.floor(Math.random() * 10) + 11;
            var val2 = Math.floor(Math.random() * 10) + 11;
            question.content = val1 + " x " + val2;
            $('#question').html(question.content);
            question.answer = val1 * val2;
        }
        else if (question.type == 'Multiplication3') {
            var val1 = Math.floor(Math.random() * 80) + 20;
            var val2 = Math.floor(Math.random() * 80) + 20;
            question.content = val1 + " x " + val2;
            $('#question').html(question.content);
            question.answer = val1 * val2;
        }
        else if (question.type == 'Squares1') {
            var val = Math.floor(Math.random() * 11);
            question.content = val + "\u00B2";
            $('#question').html(question.content);
            question.answer = Math.pow(val, 2);
        }
        else if (question.type == 'Squares2') {
            var val = Math.floor(Math.random() * 10) + 11;
            question.content = val + "\u00B2";
            $('#question').html(question.content);
            question.answer = Math.pow(val, 2);
        }
        else if (question.type == 'Squares3') {
            var val = Math.floor(Math.random() * 80) + 20;
            question.content = val + "\u00B2";
            $('#question').html(question.content);
            question.answer = Math.pow(val, 2);
        }
        else if (question.type == 'Arithmetic1') {
            var sign = (Math.floor(Math.random() * 2) == 0) ? '+' : '-';
            var val1 = Math.floor(Math.random() * 11);
            var val2 = Math.floor(Math.random() * 11);
            question.content = val1 + " " + sign + " " + val2;
            $('#question').html(question.content);
            question.answer = eval(question.content);
        }
        else if (question.type == 'Arithmetic2') {
            var sign = (Math.floor(Math.random() * 2) == 0) ? '+' : '-';
            var val1 = Math.floor(Math.random() * 10) + 11;
            var val2 = Math.floor(Math.random() * 10) + 11;
            question.content = val1 + " " + sign + " " + val2;
            $('#question').html(question.content);
            question.answer = eval(question.content);
        }
        else if (question.type == 'Arithmetic3') {
            var sign = (Math.floor(Math.random() * 2) == 0) ? '+' : '-';
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
    $('.key').on('click', function (event) {
        var _a, _b;
        //if(!event.target.parentElement) return
        switch ((_a = event.target.parentElement) === null || _a === void 0 ? void 0 : _a.id) {
            case 'key1':
                question.type = 'Multiplication1';
                break;
            case 'key2':
                question.type = 'Multiplication2';
                break;
            case 'key3':
                question.type = 'Multiplication3';
                break;
            case 'key4':
                question.type = 'Squares1';
                break;
            case 'key5':
                question.type = 'Squares2';
                break;
            case 'key6':
                question.type = 'Squares3';
                break;
            case 'key7':
                question.type = 'Arithmetic1';
                break;
            case 'key8':
                question.type = 'Arithmetic2';
                break;
            case 'key9':
                question.type = 'Arithmetic3';
                break;
        }
        play();
        console.log((_b = event.target.parentElement) === null || _b === void 0 ? void 0 : _b.id, question);
    });
});
