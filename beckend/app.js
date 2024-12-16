const express = require('express');
const { Pool } = require('pg');
const app = express();
const cors = require('cors');

// Configuração da conexão com PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
});

const corsOptions = {
  origin: '*', // Permite qualquer origem
};
app.use(cors(corsOptions));

app.use(express.json());


//-------ESTAÇÃO AEROPORTO

app.get('/estacaoAeroporto_temperature_atual', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT emw_temperature
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoAeroporto_temperature_avg_daily', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(emw_temperature) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoAeroporto_temperature_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_temperature) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Humidity Routes for Estação Aeroporto
app.get('/estacaoAeroporto_humidity_atual', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT emw_humidity
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoAeroporto_humidity_avg_daily', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(emw_humidity) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoAeroporto_humidity_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_humidity) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Luminosity Routes for Estação Aeroporto
app.get('/estacaoAeroporto_luminosity_atual', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT emw_luminosity
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoAeroporto_luminosity_avg_daily', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(emw_luminosity) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoAeroporto_luminosity_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_luminosity) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Rain Level Routes for Estação Aeroporto
app.get('/estacaoAeroporto_rain_atual', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT emw_rain_lvl
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoAeroporto_rain_avg_daily', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(emw_rain_lvl) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoAeroporto_rain_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_rain_lvl) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Wind Speed Routes for Estação Aeroporto
app.get('/estacaoAeroporto_wind_speed_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_avg_wind_speed) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Wind Direction Routes for Estação Aeroporto
app.get('/estacaoAeroporto_wind_direction_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_wind_direction) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Solar Radiation Routes for Estação Aeroporto
app.get('/estacaoAeroporto_solar_radiation_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_solar_radiation) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Aeroporto'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

//--------Estação Cruzeiro

app.get('/estacaoCruzeiro_temperature_atual', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT emw_temperature
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoCruzeiro_temperature_avg_daily', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(emw_temperature) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoCruzeiro_temperature_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_temperature) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Humidity Routes for Estação Cruzeiro
app.get('/estacaoCruzeiro_humidity_atual', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT emw_humidity
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoCruzeiro_humidity_avg_daily', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(emw_humidity) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoCruzeiro_humidity_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_humidity) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Luminosity Routes for Estação Cruzeiro
app.get('/estacaoCruzeiro_luminosity_atual', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT emw_luminosity
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoCruzeiro_luminosity_avg_daily', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(emw_luminosity) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoCruzeiro_luminosity_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_luminosity) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Rain Level Routes for Estação Cruzeiro
app.get('/estacaoCruzeiro_rain_atual', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT emw_rain_lvl
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoCruzeiro_rain_avg_daily', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(emw_rain_lvl) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

app.get('/estacaoCruzeiro_rain_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_rain_lvl) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Wind Speed Routes for Estação Cruzeiro
app.get('/estacaoCruzeiro_wind_speed_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_avg_wind_speed) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Wind Direction Routes for Estação Cruzeiro
app.get('/estacaoCruzeiro_wind_direction_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_wind_direction) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Solar Radiation Routes for Estação Cruzeiro
app.get('/estacaoCruzeiro_solar_radiation_avg_month', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT DATE(time) AS date, 
      AVG(emw_solar_radiation) AS daily_average
      FROM nit2xli
      WHERE "deviceName" = 'Estação Cruzeiro'
      AND time >= CURRENT_DATE - INTERVAL '1 month'
      GROUP BY DATE(time)
      ORDER BY date DESC;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

//======rotula tafarel

app.get('/rotulaTaffarel_atual_noise', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT noise
      FROM k72623_lo
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_daily_avg_noise', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(noise) AS daily_average
      FROM k72623_lo
      WHERE DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_month_avg_noise', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
        DATE(time) AS date,
        AVG(noise) AS daily_average
      FROM k72623_lo
      WHERE DATE(time) BETWEEN CURRENT_DATE - INTERVAL '30 days' AND CURRENT_DATE
      GROUP BY DATE(time)
      ORDER BY DATE(time);
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_atual_temperature', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT temperature
      FROM k72623_lo
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_daily_avg_temperature', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(temperature) AS daily_average
      FROM k72623_lo
      WHERE DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_month_avg_temperature', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
        DATE(time) AS date,
        AVG(temperature) AS daily_average
      FROM k72623_lo
      WHERE DATE(time) BETWEEN CURRENT_DATE - INTERVAL '30 days' AND CURRENT_DATE
      GROUP BY DATE(time)
      ORDER BY DATE(time);
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_atual_humidity', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT humidity
      FROM k72623_lo
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_daily_avg_humidity', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(humidity) AS daily_average
      FROM k72623_lo
      WHERE DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_month_avg_humidity', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
        DATE(time) AS date,
        AVG(humidity) AS daily_average
      FROM k72623_lo
      WHERE DATE(time) BETWEEN CURRENT_DATE - INTERVAL '30 days' AND CURRENT_DATE
      GROUP BY DATE(time)
      ORDER BY DATE(time);
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_atual_poluicao', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT pm2_5
      FROM k72623_lo
      ORDER BY time DESC
      LIMIT 1;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_daily_avg_poluicao', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
      AVG(pm2_5) AS daily_average
      FROM k72623_lo
      WHERE DATE(time) = CURRENT_DATE;
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

app.get('/rotulaTaffarel_month_avg_poluicao', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
        DATE(time) AS date,
        AVG(pm2_5) AS daily_average
      FROM k72623_lo
      WHERE DATE(time) BETWEEN CURRENT_DATE - INTERVAL '30 days' AND CURRENT_DATE
      GROUP BY DATE(time)
      ORDER BY DATE(time);
    `);
    console.log('Resultado da consulta:', resultado.rows);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela k72623_lo' });
  }
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Para encerrar: CTRL+C.`);
});