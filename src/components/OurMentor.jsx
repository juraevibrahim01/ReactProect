import mentorStyle from './OurMentor.module.css'
import  blue from '../assets/blue.png'

export const OurMentor = ({img, name, prof}) => {
    return (
        <>
            <div className={mentorStyle.mentor}>
                <div className={mentorStyle.img}>
                    <img src={img} alt="Mentor" />
                </div>
                <div className={mentorStyle.content}>
                    <span className={mentorStyle.nameMentor}>{name}</span>
                    <span className={mentorStyle.prof}>{prof}</span>
                </div>
            </div>
        </>
    )
}