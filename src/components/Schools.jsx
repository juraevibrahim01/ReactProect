import { School } from "./School"
import { SchoolData } from "./SchoolData"

export const Schools = () => {
    return (
        <>
        {SchoolData.map((item,i) => (
            <School
            key={item.title}
            title={item.title}
            mentor={item.mentor}
            day={item.day}
            img={item.img}
            learn={item.learn}
            />
        ))}
        </>
    )
}