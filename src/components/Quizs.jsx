
import { QuizCom } from "./Quiz";
import { quizData } from "./QuizData";


export const Quizs = () => {
     return (
        <>
            {quizData.map((item, i) => (
                <QuizCom 
                    key={i} 
                    title={item.title} 
                    img={item.img} 
                    level={item.level} 
                />
            ))}
        </>
    )
}