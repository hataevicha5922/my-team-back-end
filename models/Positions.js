module.exports = (sequelize, DataTypes) => {
  const Positions = sequelize.define('Positions', {
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Positions;
};
