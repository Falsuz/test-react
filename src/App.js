import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Alumnos } from './components/alumnos';
import Login from './components/login';
import UserList from './users';
// import './users.css'

// const amigos = ['Usuario 1, Usuario 2, Usuario 3'];

function App() {
  const [sesion, setSesion] = useState(false);  // Cambiado a falso para que la sesión no se inicie automáticamente

  const validacion = () => {
    setSesion(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header title="1er proyecto React" color='white' />
        <img src={logo} className="App-logo" alt="logo" />

        {sesion === true ?
          <>
            <Header title='Bienvenido' color='white'></Header>
            {/* <Alumnos amigos={amigos}></Alumnos> */}
            <UserList></UserList>
          </>
          :
          <>
            <Login onLogin={validacion}></Login>
          </>
        }
      </header>
    </div>
  );
}

export default App;

