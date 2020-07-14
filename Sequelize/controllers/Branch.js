const db = require('../models')

const getAllBranches = async (req, res) => {
    const allBranches = await db.Branch.findAll(
        {
            include: db.Manager
        }
    );
    res.status(200).send(allBranches)
}

const createNewBranchAndManager = async (req, res) => {
    const { managerName, managerExperience } = req.body;
    const { brachName, branchSize } = req.body;

    const newManager = await db.Manager.create({
        name: managerName,
        experience: managerExperience
    })
    const newBranch = await db.Branch.create({
        name: brachName,
        size: branchSize,
        manager_id: newManager.id
    })

    res.status(201).send(newBranch)
}

module.exports = {
    getAllBranches,
    createNewBranchAndManager
};