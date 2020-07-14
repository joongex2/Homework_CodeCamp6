const db = require('./models');
const express = require('express');
const app = express();
const cors = require('cors');
const ManagerRoutes = require('./routes/Manager');
const BranchRoutes = require('./routes/Branch');
const AccountRoute = require('./routes/Account');
const CustomerRoutes = require('./routes/Customer');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//
app.use('/managers', ManagerRoutes);
app.use('/branches', BranchRoutes);
app.use('/accounts', AccountRoute);
app.use('/customers', CustomerRoutes);

db.sequelize.sync({force: false}).then(() => {
  app.listen(8000, () => {
    console.log("Server is running at port 8000")
  })
  console.log("Database is sync");
})