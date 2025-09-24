import quizcss from './Quiz.module.css'
import { QuizCom } from '../components/Quiz'
import { Quizs } from '../components/Quizs'

export const Quiz = () => {
    return (
        <div className={quizcss.quiz}>
            <div className={quizcss.quizDiv}>
                <h2>Quizes and practice</h2>
            </div>
            <div className={quizcss.quizs}>
                < Quizs />
            </div>
        </div>
    )
}