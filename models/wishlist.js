// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
// });

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines

// Creating our User model

module.exports = function(sequelize, DataTypes) {
  const Wlist = sequelize.define("Wlist", {
    // The email cannot be null, and must be a proper email before creation
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
    title: {
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













// wishlist.js is run once a 'add to wishlist' button is pressed.
// It grabs the current game on display and inputs it's data into the db.

// class Wishlist extends Model {}
// Wishlist.init({
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     get() {
//       const title = this.getDataValue('title');
//       // 'this' allows you to access attributes of the instance
//       return this.getDataValue('name') + ' (' + title + ')';
//     },
//   },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     set(val) {
//       this.setDataValue('title', val.toUpperCase());
//     }
//   }
// }, { sequelize, modelName: 'wishlist' });


// const Sequelize = requires("sequelize");
// module.exports = sequelize.define("wGame",  {
//     //grab user email to direct where the game is being added to
//     // probably will use data.email
//     id: {
//         type: Sequelize.INTEGER(11),
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     useremail: { //Find way to input email into here
//         type: Sequelize.STRING(50),
//         allowNull: false
//     },
//     title: {
//         type: Sequelize.STRING(50),
//         allowNull: false
//     },
//     summary: {
//         type: Sequelize.STRING,
//     },
//     rating: {
//         type: Sequelize.INTEGER,
//     },
//     firstrelease: {
//         type: Sequelize.STRING,
//     },
//     platforms: {
//         type: Sequelize.INTEGER,
//     },
//     releasedates: {
//         type: Sequelize.INTEGER,
//     },
//     artwork: {
//         type: Sequelize.INTEGER,
//     }
// }


// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');


// const Test = sequelize.define('Test', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
// });

// // `sequelize.define` also returns the model
// console.log(Test === sequelize.models.Test); // true