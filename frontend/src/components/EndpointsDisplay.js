import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CircularProgress,
} from '@mui/material';
import {
  Thermostat,
  Opacity,
  Cloud,
  NoiseAware,
  Dashboard,
  WbIncandescent,
  WaterDrop,
  SmokingRooms,
} from '@mui/icons-material';

// Logo import
const logoUrl = `${process.env.PUBLIC_URL}/logo.png`;

// Card Component
const CardComponent = ({ title, value, unit, color, icon: Icon }) => (
  <Card sx={{ minWidth: 250, textAlign: 'center', margin: '10px', boxShadow: 3 }}>
    <CardContent>
      <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
        <Icon sx={{ color: color, fontSize: 40, mr: 1 }} />
        <Typography variant="h4" sx={{ color }}>
          {value !== null && !isNaN(Number(value)) ? `${Number(value).toFixed(1)} ${unit}` : 'N/A'}
        </Typography>
      </Box>
      <Typography variant="subtitle1" color="textSecondary">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const EndpointsDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data
  const fetchData = async () => {
    try {
      const endpoints = [
        //----------------------ENDPOINTS DA ESTAÇÃO AEROPORTO
        { id: 'aero_temp', url: 'estacaoAeroporto_temperature_atual', title: 'Temp. Atual Aeroporto', unit: '°C', color: '#f44336', icon: Thermostat, Category: 'Estação Aeroporto' },
        { id: 'aero_temp_avg', url: 'estacaoAeroporto_temperature_avg_daily', title: 'Temp. Média Diária Aeroporto', unit: '°C', color: '#f44336', icon: Thermostat, Category: 'Estação Aeroporto' },
        { id: 'aero_temp_avg_month', url: 'estacaoAeroporto_temperature_avg_month', title: 'Temp. Média Diária Mensal Aeroporto', unit: '°C', color: '#f44336', icon: Thermostat, Category: 'Estação Aeroporto' },

        { id: 'aero_hum', url: 'estacaoAeroporto_humidity_atual', title: 'Umidade Atual Aeroporto', unit: '%', color: '#4caf50', icon: Opacity, Category: 'Estação Aeroporto' },
        { id: 'aero_hum_avg', url: 'estacaoAeroporto_humidity_avg_daily', title: 'Umi. Média Diária Aeroporto', unit: '%', color: '#4caf50', icon: Opacity, Category: 'Estação Aeroporto' },
        { id: 'aero_hum_avg_month', url: 'estacaoAeroporto_humidity_avg_month', title: 'Umi. Média Mensal Diária Aeroporto', unit: '%', color: '#4caf50', icon: Opacity, Category: 'Estação Aeroporto' },

        { id: 'aero_lum', url: 'estacaoAeroporto_luminosity_atual', title: 'Luminosidade Atual Aeroporto', unit: 'Lux', color: '#e8e472', icon: WbIncandescent, Category: 'Estação Aeroporto' },
        { id: 'aero_lum_avg', url: 'estacaoAeroporto_luminosity_avg_daily', title: 'Lum. Média Diária Aeroporto', unit: 'Lux', color: '#e8e472', icon: WbIncandescent, Category: 'Estação Aeroporto' },
        { id: 'aero_lum_avg_month', url: 'estacaoAeroporto_luminosity_avg_month', title: 'Lum. Média Mensal Diária Aeroporto', unit: 'Lux', color: '#e8e472', icon: WbIncandescent, Category: 'Estação Aeroporto' },

        { id: 'aero_rain', url: 'estacaoAeroporto_rain_atual', title: 'Precipitação Atual Aeroporto', unit: '???', color: '#3F4ABF', icon: WaterDrop, Category: 'Estação Aeroporto' },
        { id: 'aero_rain_avg', url: 'estacaoAeroporto_rain_avg_daily', title: 'Prec. Média Diária Aeroporto', unit: '???', color: '#3F4ABF', icon: WaterDrop, Category: 'Estação Aeroporto' },
        { id: 'aero_rain_avg_month', url: 'estacaoAeroporto_rain_avg_month', title: 'Prec. Média Diária Mensal Aeroporto', unit: '???', color: '#3F4ABF', icon: WaterDrop, Category: 'Estação Aeroporto' },

        //-------------------ENDPOINTS DA ESTAÇÃO CRUZEIRO
        { id: 'cruz_temp', url: 'estacaoCruzeiro_temperature_atual', title: 'Temp. Atual Cruzeiro', unit: '°C', color: '#f44336', icon: Thermostat, Category: 'Estação Cruzeiro' },
        { id: 'cruz_temp_avg', url: 'estacaoCruzeiro_temperature_avg_daily', title: 'Temp. Média Diária Cruzeiro', unit: '°C', color: '#f44336', icon: Thermostat, Category: 'Estação Cruzeiro' },
        { id: 'cruz_temp_avg_month', url: 'estacaoCruzeiro_temperature_avg_month', title: 'Temp. Média Diária Mensal Cruzeiro', unit: '°C', color: '#f44336', icon: Thermostat, Category: 'Estação Cruzeiro' },

        { id: 'cruz_hum', url: 'estacaoCruzeiro_humidity_atual', title: 'Umidade Atual Cruzeiro', unit: '%', color: '#4caf50', icon: Opacity, Category: 'Estação Cruzeiro' },
        { id: 'cruz_hum_avg', url: 'estacaoCruzeiro_humidity_avg_daily', title: 'Umi. Média Diária Cruzeiro', unit: '%', color: '#4caf50', icon: Opacity, Category: 'Estação Cruzeiro' },
        { id: 'cruz_hum_avg_month', url: 'estacaoCruzeiro_humidity_avg_month', title: 'Umi. Média Mensal Diária Cruzeiro', unit: '%', color: '#4caf50', icon: Opacity, Category: 'Estação Cruzeiro' },

        { id: 'cruz_lum', url: 'estacaoCruzeiro_luminosity_atual', title: 'Luminosidade Atual Cruzeiro', unit: 'Lux', color: '#e8e472', icon: WbIncandescent, Category: 'Estação Cruzeiro' },
        { id: 'cruz_lum_avg', url: 'estacaoCruzeiro_luminosity_avg_daily', title: 'Lum. Média Diária Cruzeiro', unit: 'Lux', color: '#e8e472', icon: WbIncandescent, Category: 'Estação Cruzeiro' },
        { id: 'cruz_lum_avg_month', url: 'estacaoCruzeiro_luminosity_avg_month', title: 'Lum. Média Mensal Diária Cruzeiro', unit: 'Lux', color: '#e8e472', icon: WbIncandescent, Category: 'Estação Cruzeiro' },

        { id: 'cruz_rain', url: 'estacaoCruzeiro_rain_atual', title: 'Precipitação Atual Cruzeiro', unit: '???', color: '#3F4ABF', icon: WaterDrop, Category: 'Estação Cruzeiro' },
        { id: 'cruz_rain_avg', url: 'estacaoCruzeiro_rain_avg_daily', title: 'Prec. Média Diária Cruzeiro', unit: '???', color: '#3F4ABF', icon: WaterDrop, Category: 'Estação Cruzeiro' },
        { id: 'cruz_rain_avg_month', url: 'estacaoCruzeiro_rain_avg_month', title: 'Prec. Média Diária Mensal Cruzeiro', unit: '???', color: '#3F4ABF', icon: WaterDrop, Category: 'Estação Cruzeiro' },

        { id: 'noise', url: 'rotulaTaffarel_atual_noise', title: 'Ruído Atual Rotula do Taffarel', unit: 'dB', color: '#38250a', icon: NoiseAware, Category: 'Rotula Taffarel' },
        { id: 'noise_avg', url: 'rotulaTaffarel_daily_avg_noise', title: 'Ruído Médio Diário Rótula do Taffarel', unit: 'dB', color: '#38250a', icon: NoiseAware, Category: 'Rotula Taffarel' },
        { id: 'noise_avg_month', url: 'rotulaTaffarel_month_avg_noise', title: 'Ruído Médio Mensal Diário Rótula do Taffarel', unit: 'dB', color: '#38250a', icon: NoiseAware, Category: 'Rotula Taffarel' },
      
        { id: 'temp', url: 'rotulaTaffarel_atual_temperature', title: 'Ruído Atual Rotula do Taffarel', unit: 'dB', color: '#f44336', icon: Thermostat, Category: 'Rotula Taffarel' },
        { id: 'temp_avg', url: 'rotulaTaffarel_daily_avg_temperature', title: 'Ruído Médio Diário Rótula do Taffarel', unit: 'dB', color: '#f44336', icon: Thermostat, Category: 'Rotula Taffarel' },
        { id: 'temp_avg_month', url: 'rotulaTaffarel_month_avg_temperature', title: 'Ruído Médio Mensal Diário Rótula do Taffarel', unit: 'dB', color: '#f44336', icon: Thermostat, Category: 'Rotula Taffarel' },
      
        { id: 'humidity', url: 'rotulaTaffarel_atual_humidity', title: 'Umidade Atual Rotula do Taffarel', unit: 'dB', color: '#4caf50', icon: Opacity, Category: 'Rotula Taffarel' },
        { id: 'humidity_avg', url: 'rotulaTaffarel_daily_avg_humidity', title: 'Umidade Média Diária Rótula do Taffarel', unit: 'dB', color: '#4caf50', icon: Opacity, Category: 'Rotula Taffarel' },
        { id: 'humidity_avg_month', url: 'rotulaTaffarel_month_avg_humidity', title: 'Umidade Média Mensal Diária Rótula do Taffarel', unit: 'dB', color: '#4caf50', icon: Opacity, Category: 'Rotula Taffarel' },
      
        { id: 'poluicao', url: 'rotulaTaffarel_atual_poluicao', title: 'Poluição do Ar Atual Rotula do Taffarel', unit: 'dB', color: '#60605f', icon: SmokingRooms, Category: 'Rotula Taffarel' },
        { id: 'poluicao_avg', url: 'rotulaTaffarel_daily_avg_poluicao', title: 'Pol. Ar Média Diária Rótula do Taffarel', unit: 'dB', color: '#60605f', icon: SmokingRooms, Category: 'Rotula Taffarel' },
        { id: 'poluicao_avg_month', url: 'rotulaTaffarel_month_avg_poluicao', title: 'Pol. Ar Média Mensal Diária Rótula do Taffarel', unit: 'dB', color: '#60605f', icon: SmokingRooms, Category: 'Rotula Taffarel' },

      ];

      const responses = await Promise.all(endpoints.map(endpoint =>
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${endpoint.url}`).then(res => res.json())
          .then(data => ({ id: endpoint.id, value: data.value, ...endpoint }))));
      
      setData(responses);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Organize data by categories
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.Category]) {
      acc[item.Category] = [];
    }
    acc[item.Category].push(item);
    return acc;
  }, {});

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Drawer variant="permanent" sx={{ '& .MuiDrawer-paper': { width: 220, backgroundColor: '#1976d2', color: '#fff' } }}>
        <Toolbar>
          <img src={logoUrl} alt="Logo" style={{ width: 120, marginRight: 15 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
            FØLER
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Dashboard sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Visão Geral" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Cloud sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Clima" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, padding: '280px' }}>
        <Grid container spacing={2}>
          {Object.keys(groupedData).map(category => (
            <Grid item xs={12} key={category}>
              <Typography variant="h5" gutterBottom>
                {category}
              </Typography>
              <Grid container spacing={2}>
                {groupedData[category].map(item => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <CardComponent
                      title={item.title}
                      value={item.value}
                      unit={item.unit}
                      color={item.color}
                      icon={item.icon}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default EndpointsDisplay;
