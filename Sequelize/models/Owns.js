module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Owns", {
        day: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'owns',
        timestamps: false
    });

    return model;
}