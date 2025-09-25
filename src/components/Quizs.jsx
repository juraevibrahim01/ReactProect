
import { QuizCom } from "./Quiz";
import { quizData } from "./QuizData";


export const Quizs = () => {
     return (
        <>
            {quizData.map((item) => (
                <QuizCom
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                level={item.level}
                />
            ))}
        </>
    )
}   