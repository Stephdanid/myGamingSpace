
module.exports = function(sequelize, DataTypes) {
  const Wlist = sequelize.define("Wlist", {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    // useremail: { //Find way to input email into here
    //     type: DataTypes.STRING(50),
    //     allowNull: false
    // },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    summary: {
        type: DataTypes.STRING,
    }
    // url: {
    //     type: DataTypes.STRING,
    // },
    // rating: {
    //     type: DataTypes.INTEGER,
    // },
    // firstrelease: {
    //     type: DataTypes.INTEGER,
    // },
  });
  Wlist.associate = function(models) {
    // We're saying that a Wlist should belong to an User
    // A Wlist can't be created without an User due to the foreign key constraint
    Wlist.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Wlist;
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
}
