module.exports = (sequelize, DataType) => {
    const movie = sequelize.define(
        'peliculas',
        {
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataType.STRING
            },
            rating: {
                type: DataType.INTEGER
            },
            awards: {
                type: DataType.INTEGER
            }
        },
        {
            tableName: 'movies',
            timestamps: false
        }
    )
    return movie
}