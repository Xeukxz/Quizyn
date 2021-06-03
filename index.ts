$(() => {

  let doGeneral = false,
    doQuotes = true

  let questionNumber, answer
  let quotes = [
    '"You\'ll speak nothin\' of Elizabeth... Do you look for a whippin\'?"',
    '"I will cut off my hand before I reach for you again"',
    '"we never touched"',
    '"I will fall like an ocean on that court! Fear nothing Elizabeth"',
    '"She thinks to dance with me on my wife\'s grave!"'
  ] //if anyone is stalking my github just ignore this i need it for me english exam in 2 days :)


  let extractors = [

  ]
  let questions = [
    ['1²', `${1**2}`],
    ['2²', `${2**2}`],
    ['3²', `${3**2}`],
    ['4²', `${4**2}`],
    ['5²', `${5**2}`],
    ['6²', `${6**2}`],
    ['7²', `${7**2}`],
    ['8²', `${8**2}`],
    ['9²', `${9**2}`],
    ['10²', `${10**2}`],
    ['11²', `${11**2}`],
    ['12²', `${12**2}`],
    ['13²', `${13**2}`],
    ['14²', `${14**2}`],
    ['15²', `${15**2}`],
    ['16²', `${16**2}`],
    ['17²', `${17**2}`],
    ['18²', `${18**2}`],
    ['19²', `${19**2}`],
    ['20²', `${20**2}`],
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
    $('#correction').html(answer)
    play()
    setTimeout(() => {
      $('body').css('background-color', 'rgb(75, 75, 75)')
      $('#correction').html('&#8203')
    }, 1000);
  }

  function gamerSort(val) {
    let sorted = []
    while (sorted.length < val.length) {
      let lowest = 1e9
      for (let i = 0; i < val.length; i++)
        if (!sorted.includes(val[i]) && val[i] < lowest) lowest = val[i]
      sorted.push(lowest)
    }
    return sorted
  }

  function extractText(topic, count) {
    console.log(count)
    questionNumber = Math.floor(Math.random() * (topic.length))
    let args = topic[questionNumber].split(' ')
    let random = Math.floor(Math.random() * args.length)
    let vals = [random]
    let parts = [args[random]]
    console.log(args, random)
    if (args.length - 1 > random) vals.push(random + 1)
    else vals.push(random - 2, random - 1)
    if (vals.length < 3) {
      if (args.length - 1 > random + 1) vals.push(random + 2)
      else vals.push(random - 1)
    }

    console.log(vals, 'wee')
    vals = gamerSort(vals)
    console.log(vals, "awooga")
    answer = []
    for (let i = 0; i < count; i++) {
      console.log(answer)
      answer.push(args[vals[i]].replace('"', ''))
    }
    console.log(args, answer.join(' '))

    for (let i = 0; i < count; i++) {
      console.log(args[vals[i]], args[vals[i]].length)
      for (let ii = 0; ii < args[vals[i]].length; ii++) {
        console.log(args[vals[i]], args[vals[i]][ii])
        if (args[vals[i]][ii] == '"') continue
        console.log(args[vals[i]])
        args[vals[i]] = args[vals[i]].replace(args[vals[i]][ii], '_')
        console.log(args[vals[i]])
      }
    }

    /* for (let i = 0; i < args[vals[i]].length; i++) {
      if (args[random][i] == '"') continue
      console.log(args[random])
      args[random] = args[random].replace(args[random][i], '_')
      console.log(args[random])
    }*/
    specificQuestion(args.join(' '))
  }

  $('#input').on('keydown', event => {
    if (event.key == 'Enter') {
      if ($('#input').val() == answer) {
        correct()
      } else incorrect()
      $('#input').val('')
    }
  })

  function play() {
    if (doGeneral) getQuestion()
    else if (doQuotes) extractText(quotes, Math.floor(Math.random() * 3) + 1)

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

  $('body').on('click', event => {
    $('#input').trigger("focus")
  })

})