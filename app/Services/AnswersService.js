// import { ProxyState } from "../AppState.js";
// import { Answer } from "../Models/Answer.js";

// class AnswersService {
//   async getAnswers() {
//     // @ts-ignore
//     const response = await axios.get('https://opentdb.com/api.php?amount=1&category=15&difficulty=hard&type=multiple')
//     console.log("A response data", response.data);
//     let answers = response.data.results.map(a => new Answer(a))
//     ProxyState.answers = answers
//   }

// }
// export const answersService = new AnswersService()