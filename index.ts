$(() => {

  $('#screen').width($('#screen').height()! * 4)
  $('#container').width($('#screen').width()! + 46)

  interface Question {
    type: string,
    content: string,
    answer: number | undefined
  }
  let question: Question = {
    type: '',
    content: '',
    answer: undefined
  }
  let feedBackTimeout

  function correct() {
    clearTimeout(feedBackTimeout)
    play()
    $('#screen').css('border', '3px solid lime')
    feedBackTimeout = setTimeout(() => {
      $('#screen').css('border', '3px solid rgb(43, 43, 43')
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


  $('#input').on('keypress', event => {
    //console.log(event.key, Number(event.key), Number.isNaN(Number(event.key)), ['Enter', '-'].includes(event.key))
    if(Number.isNaN(Number(event.key)) && !['Enter', '-'].includes(event.key)) return false
    //if (event.key == 'Enter') {
      setTimeout(() => {
        if ($('#input').val() == question.answer && $('#input').val() != '') {
          correct()
          $('#input').val('')
        }// else incorrect()
        
      }, 1);
    //}
  })

  function play() {
    if (question.type == 'Multiplication1') {
      let val1 = Math.floor(Math.random() * 11)
      let val2 = Math.floor(Math.random() * 11)
      question.content = `${val1} x ${val2}`
      $('#question').html(question.content)
      question.answer = val1 * val2

    } else if (question.type == 'Multiplication2') {
      let val1 = Math.floor(Math.random() * 10) + 11
      let val2 = Math.floor(Math.random() * 10) + 11
      question.content = `${val1} x ${val2}`
      $('#question').html(question.content)
      question.answer = val1 * val2

    } else if (question.type == 'Multiplication3') {
      let val1 = Math.floor(Math.random() * 80) + 20
      let val2 = Math.floor(Math.random() * 80) + 20
      question.content = `${val1} x ${val2}`
      $('#question').html(question.content)
      question.answer = val1 * val2

    } else if (question.type == 'Squares1') {
      let val = Math.floor(Math.random() * 11)
      question.content = `${val}\u00B2`
      $('#question').html(question.content)
      question.answer = val ** 2

    } else if (question.type == 'Squares2') {
      let val = Math.floor(Math.random() * 10) + 11
      question.content = `${val}\u00B2`
      $('#question').html(question.content)
      question.answer = val ** 2

    } else if (question.type == 'Squares3') {
      let val = Math.floor(Math.random() * 80) + 20
      question.content = `${val}\u00B2`
      $('#question').html(question.content)
      question.answer = val ** 2

    } else if (question.type == 'Arithmetic1') {
      let sign = (Math.floor(Math.random() * 2) == 0) ? '+' : '-'
      let val1 = Math.floor(Math.random() * 11)
      let val2 = Math.floor(Math.random() * 11)
      question.content = `${val1} ${sign} ${val2}`
      $('#question').html(question.content)
      question.answer = eval(question.content)

    } else if (question.type == 'Arithmetic2') {
      let sign = (Math.floor(Math.random() * 2) == 0) ? '+' : '-'
      let val1 = Math.floor(Math.random() * 10) + 11
      let val2 = Math.floor(Math.random() * 10) + 11
      question.content = `${val1} ${sign} ${val2}`
      $('#question').html(question.content)
      question.answer = eval(question.content)

    } else if (question.type == 'Arithmetic3') {
      let sign = (Math.floor(Math.random() * 2) == 0) ? '+' : '-'
      let val1 = Math.floor(Math.random() * 80) + 20
      let val2 = Math.floor(Math.random() * 80) + 20
      question.content = `${val1} ${sign} ${val2}`
      $('#question').html(question.content)
      question.answer = eval(question.content)
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

  play()

  $('#screen').on('click', event => {
    $('#input').trigger("focus")
  })

  $('.key').on('click', event => {
    //if(!event.target.parentElement) return
    switch(event.target.parentElement?.id) {
      case 'key1':
        question.type = 'Multiplication1'
      break;
      case 'key2':
        question.type = 'Multiplication2'
      break;
      case 'key3':
        question.type = 'Multiplication3'
      break;
      case 'key4':
        question.type = 'Squares1'
      break;
      case 'key5':
        question.type = 'Squares2'
      break;
      case 'key6':
        question.type = 'Squares3'
      break;
      case 'key7':
        question.type = 'Arithmetic1'
      break;
      case 'key8':
        question.type = 'Arithmetic2'
      break;
      case 'key9':
        question.type = 'Arithmetic3'
      break;
    }
    play()

    console.log(event.target.parentElement?.id, question)

  })
})