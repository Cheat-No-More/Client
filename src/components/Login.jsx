import React, {useState} from "react";

//  Comments: 

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(username);

    // }

    // Upon get request, the users credentials will be checked against the database.
    // If the user is found, the user will be redirected to the dashboard. 
    return (
        <div className="auth-form-container">
            <h2>Login</h2>

            <form className= "login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="username" id="username" name="username"/>          
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            
            {/* Please consider a route address for this button upon submission */}
            <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

// The route component will be used to create a route to the dashboard upon successful login.

