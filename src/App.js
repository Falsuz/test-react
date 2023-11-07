// import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
// import Header from './components/header';
// import { Alumnos } from './components/alumnos';
// import Login from './components/login';

// const amigos = ['Usuario 1, Usuario 2, Usuario 3'];

// function App() {
//   const [sesion, setSesion] = useState(false);  // Cambiado a falso para que la sesión no se inicie automáticamente

//   const validacion = () => {
//     setSesion(true);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header title="1er proyecto React" color='white' />
//         <img src={logo} className="App-logo" alt="logo" />

//         {sesion === true ?
//           <>
//             <Header title='Bienvenido' color='white'></Header>
//             <Alumnos amigos={amigos}></Alumnos>
//           </>
//           :
//           <>
//             <Login onLogin={validacion}></Login>
//           </>
//         }
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';

class App extends Component {
  state = {
    cantidad: null,
    monedaOrigen: 'MXN',
    monedaDestino: 'USD',
    resultado: null,
    tasasDeCambio: {
      MXN: 18.30,
      USD: 1.0,
      EUR: 0.94,
      BTC: 0.000030,
      ETH: 0.00056,
      DOGE: 15.12,
    },
  };

  CambiarValor = (event) => {
    // manejar cambios en los campos de entrada y seleccion
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.convertirMoneda);
  };

  convertirMoneda = () => {
    const { cantidad, monedaOrigen, monedaDestino, tasasDeCambio } = this.state;
    const resultado = (cantidad / tasasDeCambio[monedaOrigen]) * tasasDeCambio[monedaDestino];
    this.setState({ resultado });
  };

  render() {
    const { cantidad, monedaOrigen, monedaDestino, resultado, tasasDeCambio } = this.state;

    return (
      <div className="App">
        <h2>Calculadora de Divisas</h2>
        <div>
          <input type="number" name="cantidad" value={cantidad} onChange={this.CambiarValor} />
          <select name="monedaOrigen" value={monedaOrigen} onChange={this.CambiarValor}>
            {Object.keys(tasasDeCambio).map((moneda) => (
              <option key={moneda} value={moneda}>
                {moneda}
              </option>
            ))}
          </select>
          <select name="monedaDestino" value={monedaDestino} onChange={this.CambiarValor}>
            {Object.keys(tasasDeCambio).map((moneda) => (
              <option key={moneda} value={moneda}>
                {moneda}
              </option>
            ))}
          </select>
        </div>
        {resultado && (
          // si resultado tiene un valor sí se muestra
          <p>
            {cantidad} {monedaOrigen} = {resultado} {monedaDestino}
          </p>
        )}
      </div>
    );
  }
}

export default App;
