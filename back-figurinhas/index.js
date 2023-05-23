const express  = require('express');
const cors = require('cors');
const app = express();

/* rotas */
const cardRoutes = require('./routes/cardRoutes');
const cardtypeRoutes = require('./routes/cardtypeRoutes');
const countryRoutes = require('./routes/countryRoutes');
const positionRoutes = require('./routes/positionRoutes');
const sponsorRoutes = require('./routes/sponsorRoutes');
 
/* endereço do servidor */
const host = '127.0.0.1';
const port = 3001;

/* middleware */
app.use(cors(`http://${host}:${port}/cards`));
app.use(express.json());
app.use('/cards', cardRoutes);
app.use('/cardtypes', cardtypeRoutes);
app.use('/countries', countryRoutes);
app.use('/positions', positionRoutes);
app.use('/sponsors', sponsorRoutes);

app.listen(port, host,()=>{
    console.log(`Server running at http://${host}:${port}`)
})