module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('todoList',
        {
            task: {
                type: DataTypes.STRING(255)
            }
        }
        , {
            tableName: 'todolists',
            timestamps: false,
        }
    );

    return model
}