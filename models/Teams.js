module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define('Teams', {
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teamLogo: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  });

  return Teams;
};
