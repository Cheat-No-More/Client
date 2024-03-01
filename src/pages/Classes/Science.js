import '../Students/Student1'
import '../Students/Student2'
import '../Students/Student3'
import '../Students/Student4'
import '../Students/Student5'

export default function ScienceClass() {
    return (
        <>
        <h1>Science Class</h1>
        <div className='teacherScienceDisplay'>
        <ul className="student1Display">
                    <a href="/teacherdashboard/student1" className="student1"><img className="studentImage" src={require('./Studentimage.png')} alt="Student1"/></a>
                    <br /><a href="/teacherdashboard/student1" className="student1">Student1</a>
        </ul>
        <ul className="student2Display">
                    <a href="/teacherdashboard/student2" className="student2"><img className="studentImage" src={require('./Studentimage.png')} alt="Student2"/></a>
                    <br /><a href="/teacherdashboard/student2" className="student2">Student2</a> 
                    </ul>     
        <ul className="student3Display">      
                    <a href="/teacherdashboard/student3" className="student3"><img className="studentImage" src={require('./Studentimage.png')} alt="Student3"/></a>
                    <br /><a href="/teacherdashboard/student3" className="student3">Student3</a>  
        </ul>
        <ul className="student4Display"> 
                    <a href="/teacherdashboard/student4" className="student4"><img className="studentImage" src={require('./Studentimage.png')} alt="Student4"/></a>
                    <br /><a href="/teacherdashboard/student4" className="student4">Student4</a>   
        </ul>
        <ul className="student5Display"> 
                    <a href="/teacherdashboard/student5" className="student5"><img className="studentImage" src={require('./Studentimage.png')} alt="Student5"/></a>
                    <br /><a href="/teacherdashboard/student5" className="student5text">Student5</a>
        </ul>
        </div>
        </>
        
    )
}