/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { questions, QuestionType } from "./questions";
import { SERVER_URL } from "../exports";

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
          <OverLay
            reset={reset}
            correct={correct}
            incorrect={incorrect}
            admin={false}
          />
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
                <h3
                  style={{
                    width: 200,
                    margin: 20,
                    marginBottom: 0,
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  Try your luck and see how much of a nerd you are!
                </h3>
                <p
                  style={{
                    width: 200,
                    // margin: 20,
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  You have 60 seconds to answer as many questions as you can, be
                  careful we do keep track of how many you got wrong! 😅
                </p>
                <button
                  style={{ backgroundColor: "darkgreen", width: 150 }}
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

export function OverLay({
  reset,
  correct,
  incorrect,
  admin = false,
}: {
  reset: () => void;
  correct?: number;
  incorrect?: number;
  admin: boolean;
}) {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [corr, setCorr] = useState<number | null>(null);
  const [incorr, setInCorr] = useState<number | null>(null);

  const inputStyle: React.CSSProperties = {
    width: 310,
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
    borderRadius: 8,
    border: "none",
    margin: 5,
    padding: 10,
  };

  const uploadData = async () => {
    setErr("");
    try {
      const url = `${SERVER_URL}/add`;
      console.log(1000, { url });

      const body = JSON.stringify({
        name,
        correct: admin ? corr : correct,
        incorrect: admin ? incorr : incorrect,
      });

      console.log(body);
      const resRaw = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      const res: { valid: boolean; error: { message: string } } =
        await resRaw.json();

      if (res.valid) {
        return reset();
      }

      setErr(res.error.message);
    } catch (error: unknown) {
      console.log({ error });
    }
  };
  return (
    <div>
      {admin ? (
        <h3>Manual Add</h3>
      ) : (
        <h1>
          {`Your Score - `}
          <span style={{ color: "green" }}>{correct}</span>/
          <span style={{ color: "red" }}>{incorrect}</span>
        </h1>
      )}

      <p>{err}</p>
      <input
        style={inputStyle}
        placeholder={admin ? "Person Name" : "Your Name"}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {admin ? (
        <>
          <br />
          <input
            style={{ ...inputStyle, width: 100 }}
            placeholder={"✅"}
            type={"number"}
            onChange={(e) => setCorr(parseInt(e.target.value))}
            value={corr || undefined}
          />
          <input
            style={{ ...inputStyle, width: 100 }}
            placeholder={"❌"}
            type={"number"}
            onChange={(e) => setInCorr(parseInt(e.target.value))}
            value={incorr || undefined}
          />
        </>
      ) : null}
      <br />

      <button
        style={{ width: 150, margin: 5, backgroundColor: "darkgreen" }}
        onClick={uploadData}
      >
        {admin ? "Add Record" : "Submit"}
      </button>
      <button
        style={{ width: 150, margin: 5 }}
        onClick={() => {
          setCorr(null);
          setInCorr(null);
          reset();
        }}
      >
        {admin ? "Reload" : "Reset"}
      </button>
    </div>
  );
}
