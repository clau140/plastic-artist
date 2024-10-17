const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('jobs', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    images: {  
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM('Cuadros', 'Retratos', 'Carteles personalizados', 'Murales', 'Esculturas', 'Otros'),
      allowNull: false,
    },
  }, {
    timestamps: false
  });
};

