import '../Students/Student'

const data = [
    { name: "Anon", attention: "85%"},
    { name: "John", attention: "70%"},
    { name: "Doe", attention: "30%"},
]

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
        <table>
                <tr>
                    <th>Name</th>
                    <th>Attention</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.attention}</td>
                        </tr>
                    )
                })}
            </table>
        </>
        
    )
}