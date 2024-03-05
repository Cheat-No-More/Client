import React, {useState} from "react";

// Comments:

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);

    }

    // Create Global Environment variables to store the user's name, username, and password.
    // These variables will be used to composite database keys to create a more secure database query. 
    // Upon successful registration, the user will be redirected to the login page. Where they may be 
    // issued a composite key to access the database.


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