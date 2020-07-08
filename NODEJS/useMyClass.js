const mc = require('./myClass')
const mu = require('./myUtil')

const customer = new mc.Human('Andy', mu.getRandom(20, 50));
customer.info();

const employee = new mc.Human('Bobby', 25);
employee.info();