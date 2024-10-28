module.exports = (sequelize, DataTypes) => {
  const TourItem = sequelize.define(
    "tourItem",
    {
      tourId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "tours", key: "id" },
      },
      itemId: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  TourItem.associate = (models) => {
    TourItem.belongsTo(models.tour, { foreignKey: "tourId" });
  };

  return TourItem;
};
