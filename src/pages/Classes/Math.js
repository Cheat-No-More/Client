import '../Students/Student'

export default function MathClass() {
    return (
        <>
        <h1>Math Class</h1>
        <div className='teacherMathDisplay'>
        <ul className="studentDisplay">
                    <a href="/teacherdashboard/student" className="student"><img className="studentImage" src={require('./Studentimage.png')} alt="Student"/></a>
                    <br /><a href="/teacherdashboard/student" className="student">Student</a>
        </ul>
        </div>
        </>
        
    )
}