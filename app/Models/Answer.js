export class Answer {
  constructor(data) {
    this.allAns = [data.correct_answer, ...data.incorrect_answers]
    this.answer = data.correct_answer
    this.wrong = data.incorrect_answers
  }

}