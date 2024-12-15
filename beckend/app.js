const express = require('express');
const { Pool } = require('pg');
const app = express();

// Configuração da conexão com PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
});

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

//-------ESTAÇÃO CRUZEIRO

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
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
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
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
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
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
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
    res.status(500).json({ mensagem: 'Erro ao buscar dados da tabela nit2xli' });
  }
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Para encerrar: CTRL+C.`);
});
