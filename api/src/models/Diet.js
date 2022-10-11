const { DataTypes } = require('sequelize')

module.exports = (sequalize) => {
    sequalize.define('diet',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false
    }
    )
}