

export class Question {
  constructor(data) {
    this.question = data.question
    this.difficulty = data.difficulty
    this.category = data.category
    this.type = data.type
    this.allAns = [data.correct_answer, ...data.incorrect_answers]
    this.wrong = data.incorrect_answers
    this.correct = data.correct_answer
  }
  get Template() {
    return `<li>${this.question}</li>
    <ul>
    <li>${this.allAns[0]}</li>
    <li>${this.allAns[1]}</li>
    <li>${this.allAns[2]}</li>
    <li>${this.allAns[3]}</li>
    </ul>`
  }
  // get AnswersTemplate() {
  //   return `<li>'${this.allAns}'</li>`
}

