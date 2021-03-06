module.exports = function(sequelize, DataTypes) {
    const GameArt = sequelize.define('GameArt', {
        // The email cannot be null, and must be a proper email before creation
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: { // title of game to allow joining between gameart and games
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        artwork: { // will return numbers. Must add  url before the returned numbers
            type: DataTypes.INTEGER,
        },
    });
    return GameArt;
};
