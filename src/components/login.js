import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const usuarioReal = 'aaa';
    const passReal = '123';

    const onChange = (e) => {
        if (e.target.name === 'user') {
            setUser(e.target.value);
        } else if (e.target.name === 'pass') {
            setPassword(e.target.value);
        }
    }

    const validacion = () => {
        if (user === usuarioReal && password === passReal) {
            onLogin();
        } else {
            setError('Usuario incorrecto');
        }
    }

    return (
        <>
            <div>
                Login
            </div>
            <form action=''>
                <p>User: {user}</p>
                <p>Password: {password}</p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <label htmlFor='user'>Usuario</label>
                    <input
                        type='text'
                        name='user'
                        id='user'
                        value={user}
                        onChange={(e) => { onChange(e) }}
                    />
                </div>
                <div>
                    <label htmlFor='pass'>Password</label>
                    <input
                        type='password'  // Cambiado a tipo 'password' para ocultar la contraseña
                        name='pass'
                        id='pass'
                        value={password}
                        onChange={(e) => { onChange(e) }}
                    />
                </div>
                <button type='button' onClick={validacion}>Iniciar sesión</button>
            </form>
        </>
    );
}
