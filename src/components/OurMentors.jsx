import { OurMentor } from "./OurMentor";
import { MentorsData } from "./MentorsData";

export const Mentors = () => {
    return (
        <>
        {MentorsData.map((item, i) => (
            <OurMentor key={i} img={item.img} name={item.name} prof={item.prof}/>
        ))}
        </>
    )
}