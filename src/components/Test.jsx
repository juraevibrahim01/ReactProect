import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { quizData } from "./QuizData";
import testStyle from './Test.module.css';
import iconComplete from '../assets/completeOrange.jpg';
import { Link } from "react-router-dom";
import UndoSvg from '../assets/undo.svg';
import ResetSvg from '../assets/replay.svg';
import timerBig from '../assets/timerBig.svg';
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { splitQuestion } from "../utils/splitQuestion";


export const TestPage = () => {
  const { id } = useParams();
  const quiz = quizData.find((q) => q.id === id);

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionText, questionCode] = splitQuestion(quiz.questions[currentQ].question);

  // ⏳ состояние таймера (в секундах) — например, 3 минуты
  const [timeLeft, setTimeLeft] = useState(3 * 60);

  const ball = (score / quiz.questions.length) * 100;

  if (!quiz) return <h2>Test not found</h2>;

  // 🕒 таймер
  useEffect(() => {
    if (finished) return; // если тест завершён — таймер останавливаем

    if (timeLeft <= 0) {
      setFinished(true); // время вышло — показываем результат
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, finished]);

  const handleAnswer = () => {
    if (selectedOption === null) return;

    if (selectedOption === quiz.questions[currentQ].answer) {
      setScore(score + 1);
    }

    if (currentQ + 1 < quiz.questions.length) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  };

  // ⏰ переводим секунды в mm:ss
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className={testStyle.test}>
      {!finished ? (
        <div>
          <div className={testStyle.nameTest}>
            <div>
              <img src={quiz.img} alt="Test Image" />
              <span>{quiz.title}</span>
              <span className={testStyle.spanSecond}>{quiz.level}</span>
            </div>
          </div>

          <div className={testStyle.aboutTest}>
            <div className={testStyle.qustion}>
              <span>
                Question: {currentQ + 1} | {quiz.questions.length}
              </span>
            </div>
          </div>

          {/* таймер */}
          <div className={testStyle.timerBig}>
            <div>
              <img src={timerBig} alt="timer" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {!questionText && !questionCode ? <h3>{quiz.questions[currentQ].question}</h3> : <>
            <h3>{questionText}</h3>
            <div>
              <SyntaxHighlighter language="javascript" style={dark}>
                {questionCode}
              </SyntaxHighlighter>
            </div>
          </>}

          {quiz.questions[currentQ].options.map((option, i) => (
            <label
              key={i}
              style={{ display: "block", cursor: "pointer", margin: "8px 0" }}
            >
              <input
                type="radio"
                name={`question-${currentQ}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              <span style={{ marginLeft: "8px" }}>{option}</span>
            </label>
          ))}

          <button onClick={handleAnswer} className={testStyle.buttonSubmit}>
            SEND
          </button>
        </div>
      ) : (
        <>
          <div className={testStyle.nameTest}>
            <div>
              <img
                src={iconComplete}
                alt="Icon Complete"
                width={150}
                height={150}
              />
              <img src={quiz.img} alt="Test Image" />
              <span>{quiz.title}</span>
              <span className={testStyle.spanSecond}>{quiz.level}</span>
            </div>
          </div>
          <h2 className={testStyle.result}>
            You scored {ball}% of {"100%"} points
          </h2>

          <div className={testStyle.buttonRef}>
            <button
              className={testStyle.buttonRefresh}
              onClick={() => {
                setCurrentQ(0);
                setScore(0);
                setFinished(false);
                setSelectedOption(null);
                setTimeLeft(3 * 60); // ⏱ сбрасываем таймер
              }}
            >
              <img src={ResetSvg} alt="Reset Image" />
              Take the test again
            </button>

            <Link to="/quiz" className={testStyle.linkButton}>
              <button className={testStyle.buttonRefresh}>
                <img src={UndoSvg} alt="Undo Image" />
                Back to the list of tests
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
