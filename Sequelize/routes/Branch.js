const express = require('express');
const router = express.Router();
const branchController = require('../controllers/Branch')

router.get('/', branchController.getAllBranches)
router.post('/', branchController.createNewBranchAndManager)

module.exports = router;