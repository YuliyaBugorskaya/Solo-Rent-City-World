const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Apartmen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
     });
      // define association here
    }
  }
  Apartmen.init({
    ap_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    rooms: DataTypes.INTEGER,
    link: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Apartmen',
  });
  return Apartmen;
};
