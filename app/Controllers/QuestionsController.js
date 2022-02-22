import { ProxyState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"

function _drawQuestions() {
  console.log('drawing questions')
  let template = ''
  let aTemplate = ''
  ProxyState.questions.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template
  // ProxyState.answers.forEach(a => aTemplate += )
  // document.getElementById('answers').innerHTML = template
}

export class QuestionsController {
  constructor() {
    console.log('Q controller loaded')
    ProxyState.on('questions', _drawQuestions)
    this.getQuestions()
  }
  async getQuestions() {
    try {
      console.log('getting questions')
      await questionsService.getQuestions()
      console.log('questions delivered')
    } catch (error) {
      console.log('no questions found')
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}