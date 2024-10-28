module.exports = (sequelize, DataTypes) => {
  const Concert = sequelize.define(
    "concert",
    {
      artist: DataTypes.STRING,
      venue: DataTypes.STRING,
      city: DataTypes.STRING,
      date: DataTypes.STRING,
      ticketPrice: DataTypes.FLOAT,
      seatCategory: DataTypes.STRING,
    },
    { timestamps: true }
  );
  return Concert;
};
