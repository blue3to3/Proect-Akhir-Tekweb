import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/data/users.json');
            const data = await response.json();

            const user = data.users.find(
                (u) => u.email === email && u.password === password
            );

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                navigate('/');
            } else {
                setError('Email atau password salah.');
            }
        } catch (err) {
            console.error('Error fetching users:', err);
            setError('Terjadi kesalahan. Silahkan coba lagi.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <label className="block mb-2">Email:</label>
                <input
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="border rounded w-full p-2 mb-4"
                />
                <label className="block mb-2">Password:</label>
                <input
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="border rounded w-full p-2 mb-4"
                />
                <button type="submit" clasName="bg-blue-500 text-white px-4 py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;