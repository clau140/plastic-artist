
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('professor', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      profilePictureUrl: {
        type: DataTypes.STRING,
      },


  },
  {
    timestamps: false
  });
};
