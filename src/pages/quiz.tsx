/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { questions, QuestionType } from "./questions";

function getRandomElement<T>(array: Array<T>): [number, T] | [null, null] {
  if (array.length === 0) {
    return [null, null];
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return [randomIndex, array[randomIndex]];
}

function shuffleArray<T>(array: Array<T>): Array<T> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Quiz() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [timerTick, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [questionsToAsk, setQuestions] = useState<QuestionType[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionType | null>(
    null
  );

  useEffect(() => {
    if (questionsToAsk.length <= 0) {
      setQuestions(shuffleArray(questions));
    }
  }, [start]);

  useEffect(() => {
    if (questionsToAsk.length > 0) {
      selectQuestion();
    }
  }, [questionsToAsk]);

  function reset() {
    setQuestions(shuffleArray(questions));
    setCorrect(0);
    setIncorrect(0);
    setTimer(60);
    setStart(false);
    setStop(false);
  }

  useEffect(() => {
    let timer: any | null = null;
    if (start) {
      if (!stop) {
        timer = setInterval(() => {
          console.log("TICK");
          if (!stop && timerTick > 0) {
            setTimer((prev) => {
              if (prev > 0) {
                return prev - 1;
              } else {
                setStop(true);
                return prev;
              }
            });
          } else {
            setStop(true);
          }
        }, 1000);
      }
    } else if (!start) {
      reset();
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [start, stop]);

  function selectQuestion() {
    if (questionsToAsk.length > 0) {
      const [index, ques] = getRandomElement(questionsToAsk);

      if (index && ques) {
        setSelectedQuestion({ ...ques, options: shuffleArray(ques.options) });
        const tempt = questionsToAsk;
        tempt.splice(index, 1);
        setQuestions(tempt);
      }
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <h1>Quiz</h1>
      <>
        {stop ? (
          <OverLay reset={reset} correct={correct} incorrect={incorrect} />
        ) : (
          <>
            {start && selectedQuestion ? (
              <>
                <h2>{`Time Remaining: ${timerTick}`}</h2>
                <h2>
                  {`Your Score - `}
                  <span style={{ color: "green" }}>{correct}</span>/
                  <span style={{ color: "red" }}>{incorrect}</span>
                </h2>
                <div>
                  <h2>{selectedQuestion.question}</h2>
                  {selectedQuestion.options.map((ele, index) => {
                    const letter =
                      index === 0
                        ? "A"
                        : index === 1
                        ? "B"
                        : index === 2
                        ? "C"
                        : "D";

                    return (
                      <React.Fragment key={index}>
                        <button
                          style={{ width: 350, margin: 10 }}
                          onClick={() => {
                            if (ele.answer) {
                              setCorrect(correct + 1);
                            } else {
                              setIncorrect(incorrect + 1);
                            }
                            selectQuestion();
                          }}
                        >
                          {letter}
                          {": "}
                          {ele.value}
                        </button>
                        <br />
                      </React.Fragment>
                    );
                  })}
                  <button
                    style={{ backgroundColor: "darkred", marginTop: 20 }}
                    onClick={() => {
                      setSelectedQuestion(null);
                      setQuestions([]);
                      setStart(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  style={{ backgroundColor: "darkgreen" }}
                  onClick={() => {
                    setStart(true);
                  }}
                >
                  Start
                </button>
              </>
            )}
          </>
        )}
      </>
    </div>
  );
}

function OverLay({
  reset,
  correct,
  incorrect,
}: {
  reset: () => void;
  correct: number;
  incorrect: number;
}) {
  const [name, setName] = useState("");

  const inputStyle: React.CSSProperties = {
    width: 310,
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
    borderRadius: 8,
    border: "none",
  };

  async function uploadData() {
    try {
      //
      reset();
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <div>
      <h1>
        {`Your Score - `}
        <span style={{ color: "green" }}>{correct}</span>/
        <span style={{ color: "red" }}>{incorrect}</span>
      </h1>
      <input
        style={inputStyle}
        placeholder={"Your Name"}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />

      <button
        style={{ width: 150, margin: 5, backgroundColor: "darkgreen" }}
        onClick={uploadData}
      >
        Submit
      </button>
      <button style={{ width: 150, margin: 5 }} onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}
