
//TODOS OS DADOS DA
  fetch('http://localhost:3000/dados/k72623_lo')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

  //TODOS OS DADOS
  fetch('http://localhost:3000/dados/nit2xli')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

  //ULTIMAS 12 H
  fetch('http://localhost:3000/dados/k72623_lo/ultimas_12h')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

  //ULTIMAS 12 H
  fetch('http://localhost:3000/dados/nit2xli/ultimas_12h')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));


  //ULTIMOS 10 REG
  fetch('http://localhost:3000/dados/k72623_lo/ultimos_10reg')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

  //ULTIMOS 10 REG
  fetch('http://localhost:3000/dados/nit2xli/ultimos_10reg')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

     //ULTIMOS 7 DIAS
     fetch('http://localhost:3000/dados/k72623_lo/ultimos_7d')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error('Erro:', error));

   //ULTIMOS 7 DIAS
   fetch('http://localhost:3000/dados/nit2xli/ultimos_7d')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Erro:', error));

   //ultimos 30 dias

   fetch('http://localhost:3000/dados/k72623_lo/ultimos_30d')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Erro:', error));

   //ultimos 30 dias

   fetch('http://localhost:3000/dados/nit2xli/ultimos_30d')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Erro:', error));

   fetch('http://localhost:3000/dados/k72623_lo/sensores')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Erro:', error));

   fetch('http://localhost:3000/dados/nit2xli/sensores')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Erro:', error));