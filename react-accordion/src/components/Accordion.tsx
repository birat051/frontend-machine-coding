import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { EAnswer_State, IQuestion } from "../types";

interface AccordionProps {
  onSelectQuestion: Dispatch<SetStateAction<string>>;
  question: IQuestion;
  selectedQuestion: string;
}

function Accordion(props: AccordionProps) {
  const { question, selectedQuestion, onSelectQuestion } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<EAnswer_State>(
    EAnswer_State.NO_ANSWER
  );
  useEffect(() => {
    if (!selectedOption) return;
    setIsAnswerCorrect(
      selectedOption && selectedOption === question.correctAnswer
        ? EAnswer_State.CORRECT
        : EAnswer_State.WRONG
    );
  }, [selectedOption, question]);
  useEffect(() => {
    if (selectedQuestion !== question.question) {
      setIsAnswerCorrect(EAnswer_State.NO_ANSWER);
      setSelectedOption("");
    }
  }, [selectedQuestion, question]);
  return (
    <div className="accordion">
      <div className="accordion-heading">
        <h3>{question.question}</h3>
        {selectedQuestion !== question.question && (
          <button onClick={() => onSelectQuestion(question.question)}>
            Expand
          </button>
        )}
      </div>
      {question.question === selectedQuestion && (
        <div className="accordion-options">
          {question.options.map((value, index) => (
            <h5 key={value} onClick={() => setSelectedOption(value)}>
              {index + 1}. {value}
            </h5>
          ))}
        </div>
      )}
      {isAnswerCorrect !== EAnswer_State.NO_ANSWER && (
        <h4
          style={{
            color: isAnswerCorrect === EAnswer_State.CORRECT ? "green" : "red",
          }}
        >{`${
          isAnswerCorrect === EAnswer_State.CORRECT
            ? "You have got the right answer"
            : `Oh no! the right answer is ${question.correctAnswer}`
        }`}</h4>
      )}
    </div>
  );
}

export default Accordion;
