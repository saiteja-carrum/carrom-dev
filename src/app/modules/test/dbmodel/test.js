module.exports = (sequelize, DataTypes) => {
    // DUMMY TABLE FOR TESTING
    const test = sequelize.define('test',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            currentVersion: {
                type: DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        },
    );

    return test
}
