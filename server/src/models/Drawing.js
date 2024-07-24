

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('drawing', {

    title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM('Cuadros', 'Retratos', 'Carteles personalizados', 'Murales', 'Ilustraciones digitales', 'Otros'),
        allowNull: false,
      },


  },
  {
    timestamps: false
  });
};

