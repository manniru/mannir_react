const app = require('express')();
const routes = require('./routes');

app.use('/', routes);

app.listen(3001, () => {
  console.log('App listening on port 3001');
});