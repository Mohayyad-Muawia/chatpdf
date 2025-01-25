import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            navigate('/chat');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            fetch('https://chatpdf-9g4j.onrender.com/api/v1/signup', {
                method: "POST",
                body: JSON.stringify({ username, email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => {
                console.log(res)
                if (res.ok) {
                    console.log('Registration successful');
                    navigate('/chat')
                    res.json().then((data) => {
                        window.localStorage.setItem('token', data.token)
                    })
                } else {
                    console.error('Registration failed');
                }
            });
        } else {
            // Handle login logic here
            console.log('Login:', { emailOrUsername: email || username, password });
        }
    };

    return (
        <div className='min-w-[280px] max-w-[500px] mx-auto rounded bg-green-950 p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                {isRegister && (
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={!isRegister}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {isRegister && (
                    <div>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default Login;