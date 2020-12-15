module.exports = function(sequelize, DataTypes) {
    const ReleaseDates = sequelize.define('ReleaseDates', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: { // title of game to allow joining between ReleaseDates and games
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        ReleaseDates: { // will return numbers. Must add  url before the returned numbers
            type: DataTypes.INTEGER,
        },
    });
    return ReleaseDates;
};
