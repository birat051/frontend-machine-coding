import { useState } from "react";
import "./App.css";
import { quizQuestions } from "./constants";
import Accordion from "./components/Accordion";

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  return (
    <>
      {quizQuestions.map((value) => (
        <Accordion
          question={value}
          onSelectQuestion={setSelectedQuestion}
          selectedQuestion={selectedQuestion}
          key={value.question}
        />
      ))}
    </>
  );
}

export default App;
