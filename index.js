$(() => {

  let questionNumber, answer
  let quotes = [
    '"You\'ll speak nothin\' of Elizabeth... Do you look for a whippin\'?"',
    '"I will cut off my hand before i reach for you again"',
    '"we never touched"',
    '"I will fall like an ocean on that court! Fear nothing Elizabeth"',
    '"She thinks to dance with me on my wife\'s gravel"'
  ]
  let questions = [
    ['', '']
  ]
  console.log(questions)

  function correct() {
    play()
    $('body').css('background-color', 'lime')
    setTimeout(() => {
      $('body').css('background-color', 'rgb(75, 75, 75)')
    }, 1000);
  }

  function incorrect() {
    $('body').css('background-color', 'red')
    setTimeout(() => {
      $('body').css('background-color', 'rgb(75, 75, 75)')
    }, 1000);
  }

  function extractText(topic) {
    questionNumber = Math.floor(Math.random() * (topic.length))
    let args = topic[questionNumber].split(' ')
    let random = Math.floor(Math.random() * args.length)
    answer = args[random].replace('"', '')
    console.log(random)
    console.log(args[random])
    for (let i = 0; i < args[random].length; i++) {
      if(args[random][i] == '"') continue
      console.log(args[random])
      args[random] = args[random].replace(args[random][i], '_')
      console.log(args[random])
    }
    specificQuestion(args.join(' '))
  }

  $('#input').on('keydown', event => {
    if (event.keyCode == '13') {
      if ($('#input').val() == answer) {
        correct()
      } else incorrect()
      $('#input').val('')
    }
  })

  function play() {
    //extractText()
    getQuestion()
  }

  function getQuestion() {
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
  }

  play()

})