module.exports = (sequelize, DataTypes) => {
  const AfterParty = sequelize.define(
    "afterParty",
    {
      location: DataTypes.STRING,
      city: DataTypes.STRING,
      date: DataTypes.STRING,
      ticketPrice: DataTypes.FLOAT,
    },
    { timestamps: true }
  );
  return AfterParty;
};
