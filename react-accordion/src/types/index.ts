export type IQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export enum EAnswer_State {
  NO_ANSWER = "not answered",
  CORRECT = "correct",
  WRONG = "wrong",
}
