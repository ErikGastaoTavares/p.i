// src/components/EstacaoCruzeiro.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import CardComponent from './CardComponent'; // Component para exibir os dados
import EndpointsDisplay from './components/EndpointsDisplay'; // Hook para buscar os dados

const EstacaoCruzeiro = () => {
  const { category } = useParams(); // Obtém a categoria da URL
  const { data, loading, error } = EndpointsDisplay(category); // Chama o hook para buscar dados com a categoria

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <Box sx={{ flexGrow: 2, padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={2}>
            {data.map(item => (
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
      </Grid>
    </Box>
  );
};

export default EstacaoCruzeiro;
