// import { ProxyState } from "../AppState.js"
// import { answersService } from "../Services/AnswersService.js"

// function _drawAnswers() {
//   console.log('drawing answers')
//   let template = ''
//   ProxyState.answers.forEach(a => template += a.AnswersTemplate)
//   document.getElementById('answers').innerHTML = template
// }
// export class AnswersController {
//   constructor() {
//     console.log('A controller loaded')
//     ProxyState.on('answers', _drawAnswers)
//     this.getAnswers()
//   }
//   async getAnswers() {
//     try {
//       console.log('getting answers')
//       await answersService.getAnswers()
//     } catch (error) {
//       console.log('no answers found')
//       console.error(error)

//     }
//   }
// }