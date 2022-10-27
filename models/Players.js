module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players', {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatarUrl: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  });

  return Players;
};
