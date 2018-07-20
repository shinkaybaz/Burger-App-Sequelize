module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define('Burger', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        burger_name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        date: {
            type:DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false,
    });

    return Burger;
}
 