// category/estacaoAeroporto - Temperatura
fetch('http://localhost:3000/estacaoAeroporto_temperature_atual')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Temperatura Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoAeroporto_temperature_avg_daily')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Média Diária de Temperatura:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoAeroporto_temperature_avg_month')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Média Mensal de Temperatura:', data))
  .catch(error => console.error('Erro:', error));

// category/estacaoAeroporto - Umidade
fetch('http://localhost:3000/estacaoAeroporto_humidity_atual')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Umidade Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoAeroporto_humidity_avg_daily')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Média Diária de Umidade:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoAeroporto_humidity_avg_month')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Média Mensal de Umidade:', data))
  .catch(error => console.error('Erro:', error));

// category/estacaoAeroporto - Luminosidade
fetch('http://localhost:3000/estacaoAeroporto_luminosity_atual')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Luminosidade Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoAeroporto_luminosity_avg_daily')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Média Diária de Luminosidade:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoAeroporto_luminosity_avg_month')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Média Mensal de Luminosidade:', data))
  .catch(error => console.error('Erro:', error));

// category/estacaoAeroporto - Chuva
fetch('http://localhost:3000/estacaoAeroporto_rain_atual')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Chuva Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoAeroporto_rain_avg_daily')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Média Diária de Chuva:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoAeroporto_rain_avg_month')
  .then(response => response.json())
  .then(data => console.log('category/estacaoAeroporto - Média Mensal de Chuva:', data))
  .catch(error => console.error('Erro:', error));
// Estação Cruzeiro - Temperatura
fetch('http://localhost:3000/estacaoCruzeiro_temperature_atual')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Temperatura Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoCruzeiro_temperature_avg_daily')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Média Diária de Temperatura:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoCruzeiro_temperature_avg_month')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Média Mensal de Temperatura:', data))
  .catch(error => console.error('Erro:', error));

// Estação Cruzeiro - Umidade
fetch('http://localhost:3000/estacaoCruzeiro_humidity_atual')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Umidade Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoCruzeiro_humidity_avg_daily')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Média Diária de Umidade:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoCruzeiro_humidity_avg_month')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Média Mensal de Umidade:', data))
  .catch(error => console.error('Erro:', error));

// Estação Cruzeiro - Luminosidade
fetch('http://localhost:3000/estacaoCruzeiro_luminosity_atual')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Luminosidade Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoCruzeiro_luminosity_avg_daily')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Média Diária de Luminosidade:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoCruzeiro_luminosity_avg_month')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Média Mensal de Luminosidade:', data))
  .catch(error => console.error('Erro:', error));

// Estação Cruzeiro - Chuva
fetch('http://localhost:3000/estacaoCruzeiro_rain_atual')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Chuva Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoCruzeiro_rain_avg_daily')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Média Diária de Chuva:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/estacaoCruzeiro_rain_avg_month')
  .then(response => response.json())
  .then(data => console.log('Estação Cruzeiro - Média Mensal de Chuva:', data))
  .catch(error => console.error('Erro:', error));

// Rotula Taffarel - Poluição
fetch('http://localhost:3000/rotulaTaffarel_atual_poluicao')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Poluição Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/rotulaTaffarel_daily_avg_poluicao')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Média Diária de Poluição:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/rotulaTaffarel_month_avg_poluicao')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Média Mensal de Poluição:', data))
  .catch(error => console.error('Erro:', error));

// Rotula Taffarel - Temperatura
fetch('http://localhost:3000/rotulaTaffarel_atual_temperature')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Temperatura Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/rotulaTaffarel_daily_avg_temperature')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Média Diária de Temperatura:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/rotulaTaffarel_month_avg_temperature')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Média Mensal de Temperatura:', data))
  .catch(error => console.error('Erro:', error));

// Rotula Taffarel - Umidade
fetch('http://localhost:3000/rotulaTaffarel_atual_humidity')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Umidade Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/rotulaTaffarel_daily_avg_humidity')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Média Diária de Umidade:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/rotulaTaffarel_month_avg_humidity')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Média Mensal de Umidade:', data))
  .catch(error => console.error('Erro:', error));

// Rotula Taffarel - Ruído
fetch('http://localhost:3000/rotulaTaffarel_atual_noise')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Ruído Atual:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/rotulaTaffarel_daily_avg_noise')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Média Diária de Ruído:', data))
  .catch(error => console.error('Erro:', error));

fetch('http://localhost:3000/rotulaTaffarel_month_avg_noise')
  .then(response => response.json())
  .then(data => console.log('Rotula Taffarel - Média Mensal de Ruído:', data))
  .catch(error => console.error('Erro:', error));
