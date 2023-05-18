import React, { useState } from 'react';
import './App.css';

function CalculadoraConsumoCombustivel() {
  const [distancia, setDistancia] = useState('');
  const [litros, setLitros] = useState('');
  const [consumoMedio, setConsumoMedio] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    calcularConsumo();
  };

  const calcularConsumo = () => {
    const distanciaFloat = parseFloat(distancia);
    const litrosFloat = parseFloat(litros);

    if (isNaN(distanciaFloat) || isNaN(litrosFloat)) {
      // Verifica se os valores inseridos são números válidos
      return;
    }

    const consumoMedioResultado = distanciaFloat / litrosFloat;
    setConsumoMedio(consumoMedioResultado.toFixed(2));
  };

  return (
    <div className="container">
      <h2 className="titulo">Calculadora de Consumo de Combustível</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="distancia">Distância percorrida (em km):</label>
          <input
            type="number"
            className="form-control"
            id="distancia"
            value={distancia}
            onChange={(event) => setDistancia(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="litros">Quantidade de litros consumidos:</label>
          <input
            type="number"
            className="form-control"
            id="litros"
            value={litros}
            onChange={(event) => setLitros(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Calcular</button>
      </form>
      <br />
      {consumoMedio && (
        <div id="resultado">
          <h4>Resultado:</h4>
          <p>O consumo médio do seu carro é de <span id="consumo">{consumoMedio}</span> km/l.</p>
        </div>
      )}
    </div>
  );
}

export default CalculadoraConsumoCombustivel;
