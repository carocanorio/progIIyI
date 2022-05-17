module.exports = function (sequelize, dataTypes) {

    const alias = 'Movie';

    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        }
    };

    const config = {
        tableName: 'movies',
        timestamps: true,
        underscored: true
    }

    const Movie = sequelize.define(alias, cols, config);

    return Movie

};