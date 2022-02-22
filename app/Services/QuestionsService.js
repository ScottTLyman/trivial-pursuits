import { ProxyState } from "../AppState.js";
import { Answer } from "../Models/Answer.js";
import { Question } from "../Models/Question.js";

class QuestionsService {
  async getQuestions() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=1&category=14&difficulty=hard&type=multiple')
    console.log('response data', response.data);
    let questions = response.data.results.map(q => new Question(q))
    ProxyState.questions = questions
    let answers = response.data.results.map(a => new Answer(a))
    ProxyState.answers = answers

  }

}
export const questionsService = new QuestionsService()