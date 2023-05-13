import { SlCalender } from "react-icons/sl"
import './Experience.css'

const Experience = () => {

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {[1,2,3].map((dummyValue)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 10/05/2013 - 10/05/2014
                        </p>
                        <h3 className="card-text2">Intermediate</h3>
                        <p className="card-text3">Description Of Your Course</p>
                        <p className="card-text4">
                        Institution Name
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>
                    {/* card3 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
