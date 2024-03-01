export default function TeacherDashboard() {
    return (
        <>
        <h1>Teacher Dashboard</h1>
        <div className='teacherDashboard'>
        <ul className="math">
                    <a href="/classes/math" className="math"><img className="mathImage" src={require('../assets/images/mathImage.png')} alt="math"/></a>
                    <br /><a href="/classes/math" className="math">Math</a>
            </ul>
        <ul className="english">
                    <a href="/classes/english" className="english"><img className="englishImage" src={require('../assets/images/englishImage.png')} alt="english"/></a>
                    <br /><a href="/classes/english" className="english">English</a>            
            </ul>
        <ul className="science">
                    <a href="/classes/science" className="science"><img className="scienceImage" src={require('../assets/images/scienceImage.png')} alt="science"/></a>
                    <br /><a href="/classes/science" className="science">Science</a>            
            </ul>
        </div>
        </>
    )
}