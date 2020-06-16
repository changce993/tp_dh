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
            },
            length: {
                type: DataType.INTEGER
            },
            release_date: {
                type: DataType.DATE
            }
        },
        {
            tableName: 'movies',
            timestamps: false
        }
    )
    return movie
}
