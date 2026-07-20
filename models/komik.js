module.exports = (sequelize, Datatypes) => {
    const Komik = sequelize.define("Komik",{
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Datatypes.STRING,
        },
        description: {
            type: Datatypes.STRING,
        },
        author: {
            type: Datatypes.STRING,
        }
    });
    return Komik;
};
