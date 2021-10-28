/**
 * This file intializes the application
 * The app variable is imported from the custom-express.js file
 * The aplication routes are imported here
 */

// Application import
const app = require('./config/custom-express');

const clientsRoutes = require('./app/routes/clients.routes');
const productsRoutes = require('./app/routes/products.routes');
const salesRoutes = require('./app/routes/sales.routes');
const suppliersRoutes = require('./app/routes/suppliers.routes');
const sessionsRoutes = require('./app/routes/sessions.routes');

clientsRoutes(app);
productsRoutes(app);
salesRoutes(app);
suppliersRoutes(app);
sessionsRoutes(app);

// Other variables
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
