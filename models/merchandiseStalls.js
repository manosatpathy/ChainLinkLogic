module.exports = (sequelize, DataTypes) => {
  const MerchandiseStall = sequelize.define(
    "merchandiseStall",
    {
      stallName: DataTypes.STRING,
      itemAvailable: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    { timestamps: true }
  );
  return MerchandiseStall;
};
