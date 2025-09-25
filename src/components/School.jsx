import SchoolStyle from './School.module.css'
import { Link } from "react-router-dom";

export const School = ({title, mentor, day, img, learn}) => { 
    return (
        <>
                <div className={SchoolStyle.curse}>
                    <div className={SchoolStyle.info}>
                        <div className={SchoolStyle.nameMentor}>    
                            <span className={SchoolStyle.name}>{title}</span>
                            <span className={SchoolStyle.mentor}>{mentor}</span>
                        </div>
                        <span>You will learn ↓</span>
                        <div className={SchoolStyle.learn}>
                            {learn.map((icon, i) => (
                                <div>
                                    <img src={icon} alt={`Learn - ${i}`} />
                                </div>
                            ))}
                        </div>
                        <div className={SchoolStyle.start}>
                            <span>Srart {day} may</span>
                        </div>
                    </div>
                    <div className={SchoolStyle.img}>
                        <div className={SchoolStyle.imgDiv}>
                            <img src={img} alt="" />
                        </div>
                        <div className={SchoolStyle.button}>
                                <Link to="/signup" state={{ course: title }}>
                                SIGN UP
                                </Link>
                        </div>
                    </div>
                </div>
        </>
)}