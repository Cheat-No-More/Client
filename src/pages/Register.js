import React, {useState} from "react";

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className= "register-form"onSubmit={handleSubmit}>
            <label>Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="username" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
export default Register