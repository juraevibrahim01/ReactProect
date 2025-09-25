// QuizPage.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { quizData } from "./QuizData";
import testStyle from './Test.module.css'
import iconComplete from '../assets/completeOrange.jpg'
import { Link } from "react-router-dom";
import UndoSvg from '../assets/undo.svg'
import ResetSvg from '../assets/replay.svg'

export const TestPage = () => {
  const { id } = useParams();
  const quiz = quizData.find((q) => q.id === id);

    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null); // выбранный вариант

    const ball = (score / quiz.questions.length) * 100;

  if (!quiz) return <h2>Тест не найден</h2>;

  const handleAnswer = () => {
    if (selectedOption === null) return; // ничего не делать, если вариант не выбран

    // Проверка правильного ответа
    if (selectedOption === quiz.questions[currentQ].answer) {
      setScore(score + 1);
    }

    // Переход к следующему вопросу или завершение
    if (currentQ + 1 < quiz.questions.length) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null); // сброс выбранного варианта
    } else {
      setFinished(true);
    }
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
                    <span>Question: {currentQ + 1} | {quiz.questions.length}</span>
                </div>
            </div>
          <h3>{quiz.questions[currentQ].question}</h3>

          {quiz.questions[currentQ].options.map((option, i) => (
            <label key={i} style={{ display: "block", cursor: "pointer", margin: "8px 0" }}>
              <input
                type="radio"
                name={`question-${currentQ}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)} // сохраняем выбранный вариант
              />
              <span style={{ marginLeft: "8px" }}>{option}</span>
            </label>
          ))}

          <button
            onClick={handleAnswer}
            className={testStyle.buttonSubmit}
          >
            Отправить
          </button>
        </div>
      ) : (
        <>
            <div className={testStyle.nameTest}>
                <div>
                    <img src={iconComplete} alt="Icon Complete" width={150} height={150} />
                    <img src={quiz.img} alt="Test Image" />
                    <span>{quiz.title}</span>
                    <span className={testStyle.spanSecond}>{quiz.level}</span>
                </div>
            </div>
            <h2 className={testStyle.result}>
            Вы набрали {ball}% из {"100%"} баллов
            </h2>
            
            <div className={testStyle.buttonRef}>
                <button
                className={testStyle.buttonRefresh}
                onClick={() => {
                setCurrentQ(0);
                setScore(0);
                setFinished(false);
                setSelectedOption(null);
                }}  >
                <img src={ResetSvg} alt="Reset Image" />
                Пройти тест снова
                </button>

                {/* Кнопка для перехода на /quiz */}
                <Link to="/quiz" className={testStyle.linkButton}>
                    <button className={testStyle.buttonRefresh}>
                    <img src={UndoSvg} alt="Undo Image" />
                    Назад к списку тестов
                    </button>
                </Link>
            </div>
        </>
      )}
    </div>
  );
};
