import React from 'react';
import { Box, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import EndpointsDisplay from '../components/EndpointsDisplay'; // Hook de busca de dados

const EstacaoAeroporto = () => {
  // Obtém os parâmetros da URL: category e type
  const { category, type } = useParams();

  // Hook personalizado para buscar os dados com base na categoria e no tipo
  const { data, loading, error } = EndpointsDisplay(`${category}_${type}`);

  // Tela de carregamento
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  // Tratamento de erro
  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Alert severity="error">Erro ao carregar os dados: {error.message}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      {/* Título da página */}
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
        {category.replace(/_/g, ' ')} - {type.replace(/_/g, ' ')}
      </Typography>

      {/* Grid para exibir os cards */}
      <Grid container spacing={3}>
        {data.map((item) => (
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
    </Box>
  );
};

export default EstacaoAeroporto;
