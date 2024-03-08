import '../Students/Student'

export default function EnglishClass() {
    return (
        <>
        <h1>English Class</h1>
        <div className='teacherEnglishDisplay'>
        <ul className="studentDisplay">
                    <a href="/teacherdashboard/student" className="student"><img className="studentImage" src={require('./Studentimage.png')} alt="Student"/></a>
                    <br /><a href="/teacherdashboard/student" className="student">Student</a>
        </ul> 
        </div>
        </>
        
    )
}