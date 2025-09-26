import OurStyle from './OurPageStyle.module.css'
import { Mentors } from '../components/OurMentors'

export const OurMentors = () => {
    return (
        <div className={OurStyle.ourMentors}>
            <div className={OurStyle.ourMentorsDiv}>
                <div className={OurStyle.contentText}>
                    <h2>Jura academy mentors</h2>
                </div>
                <div className={OurStyle.hr}>
                    <hr />
                </div>
                <div className={OurStyle.div}>
                    < Mentors/>
                </div>
            </div>
        </div>
    )
}