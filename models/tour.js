module.exports = (sequelize, DataTypes) => {
  const Tour = sequelize.define(
    "tour",
    {
      name: DataTypes.STRING,
    },
    { timestamps: true }
  );
  Tour.associate = (models) => {
    Tour.hasMany(models.tourItem, {
      foreignKey: "tourId",
    });
  };
  return Tour;
};
