export default function Home() {
    return (
        <>
        <h1>Homepage</h1>
        <div className='home'>
        <ul className="studentDashboard">
                    <a href="/studentdashboard" className="student"><img className="studentImage" src={require('../assets/images/Studentimage.png')} alt="Student"/></a>
                    <br /><a href="/studentdashboard" className="student">Student</a>
            </ul>
        <ul className="teachersDashboard">
                    <a href="/teacherdashboard" className="teacher"><img className="teacherImage" src={require('../assets/images/Teacherimage.png')} alt="Teacher"/></a>
                    <br /><a href="/teacherdashboard" className="teacher">Teacher</a>            
            </ul>
        </div>
        </>
    )
}