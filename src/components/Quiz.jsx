import quiz from './Quiz.module.css'
import iconTimer from '../assets/timer.svg'
import { Quiz } from '../pages/QuizPage'
import { Link } from "react-router-dom";

export const QuizCom = ({title, img, level, id}) => {
    return (
        <div className={quiz.div}>
            <div>
                <h3>{title}</h3>
            </div>
            <div className={quiz.img}>
                <img src={img} alt="Java Script basics" />
            </div>
            <div className={quiz.level}>
                <span>complexity:</span><br />
                <span className={quiz.span}>{level}</span>
            </div>
            <div className={quiz.time}>
                <img src={iconTimer} alt="icon Timer" />
                <span>3 min</span>
            </div>
            <div className={quiz.button}>
                <Link to={`/quiz/${id}`}>START</Link>
            </div>
        </div>
    )
}