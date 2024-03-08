import '../Students/Student'

export default function ScienceClass() {
    return (
        <>
        <h1>Science Class</h1>
        <div className='teacherScienceDisplay'>
        <ul className="studentDisplay">
                    <a href="/teacherdashboard/student" className="student"><img className="studentImage" src={require('./Studentimage.png')} alt="Student"/></a>
                    <br /><a href="/teacherdashboard/student" className="student">Student</a>
        </ul>
        </div>
        </>
        
    )
}