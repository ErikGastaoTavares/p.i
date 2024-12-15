import React, { useState, useEffect } from 'react';

const EndpointsDisplay = () => {
  const [temperatureAtual, setTemperatureAtual] = useState(null);
  const [temperatureAvgDaily, setTemperatureAvgDaily] = useState(null);
  const [temperatureAvgMouth, setTemperatureAvgMouth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Temperatura atual
    fetch('http://localhost:3000/estacaoAeroporto_temperature_atual')
      .then((response) => {
        if (!response.ok) throw new Error('Erro ao buscar temperatura atual');
        return response.json();
      })
      .then((data) => {
        console.log('Temperatura Atual:', data);
        // Acessa o primeiro item do array
        setTemperatureAtual(data[0]?.emw_temperature);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });

    // Média diária de temperatura
    fetch('http://localhost:3000/estacaoAeroporto_temperature_avg_daily')
      .then((response) => {
        if (!response.ok) throw new Error('Erro ao buscar média diária');
        return response.json();
      })
      .then((data) => {
        console.log('Média Diária:', data);
        // Acessa o primeiro item do array
        setTemperatureAvgDaily(data[0]?.daily_average);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });

    // Média mensal de temperatura
    fetch('http://localhost:3000/estacaoAeroporto_temperature_avg_mouth')
      .then((response) => {
        if (!response.ok) throw new Error('Erro ao buscar média mensal');
        return response.json();
      })
      .then((data) => {
        console.log('Média Mensal:', data);
        // Calcula a média dos valores do array
        const monthlyAvg =
          data.reduce((acc, item) => acc + item.daily_average, 0) / data.length;
        setTemperatureAvgMouth(monthlyAvg.toFixed(2)); // Arredonda para 2 casas decimais
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div><p>Erro: {error}</p></div>;
  }

  return (
    <div>
      <h2>Temperaturas da Estação Aeroporto</h2>
      <ul>
        <li>Temperatura Atual: {temperatureAtual ? `${temperatureAtual}°C` : 'Carregando...'}</li>
        <li>Média Diária: {temperatureAvgDaily ? `${temperatureAvgDaily}°C` : 'Carregando...'}</li>
        <li>Média Mensal: {temperatureAvgMouth ? `${temperatureAvgMouth}°C` : 'Carregando...'}</li>
      </ul>
    </div>
  );
};

export default EndpointsDisplay;
