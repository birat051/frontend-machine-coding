import { IQuestion } from "./types";

export const quizQuestions: IQuestion[] = [
  {
    question: "What does 'let' do in JavaScript?",
    options: [
      "Defines a constant",
      "Declares a block-scoped variable",
      "Declares a global variable",
      "Creates a private method",
    ],
    correctAnswer: "Declares a block-scoped variable",
  },
  {
    question:
      "Which method is used to parse a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()",
      "JSON.decode()",
    ],
    correctAnswer: "JSON.parse()",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Number", "Character", "Boolean"],
    correctAnswer: "Character",
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
      "Both A and B",
    ],
    correctAnswer: "Both A and B",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    correctAnswer: "Netscape",
  },
  {
    question: "What is the output of 'typeof null' in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'boolean'"],
    correctAnswer: "'object'",
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["const", "let", "var", "static"],
    correctAnswer: "const",
  },
  {
    question: "What will `2 + '2'` return in JavaScript?",
    options: ["'22'", "4", "'4'", "NaN"],
    correctAnswer: "'22'",
  },
  {
    question:
      "Which built-in method can be used to find the length of a string?",
    options: ["size()", "length()", "getLength()", "length"],
    correctAnswer: "length",
  },
  {
    question:
      "Which of the following is used to handle asynchronous operations in JavaScript?",
    options: ["setInterval", "Promise", "Loop", "Callback"],
    correctAnswer: "Promise",
  },
];
