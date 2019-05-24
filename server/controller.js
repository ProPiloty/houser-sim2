module.exports = {
    getAllHouses : (req, res) => {
        const database = req.app.get('db');
        database.get_all_houses()
            .then((houses) => {res.status(200).send(houses)})
            .catch((err) => {console.log(err)});
    },
    addHouse : (req, res) => {
        const database = req.app.get('db');
        const {name, address, city, state, zip} = req.body;
        database.add_house({name, address, city, state, zip})
            .then(() => res.sendStatus(200))
            .catch((err) => {console.log(err)});
    },
    deleteHouse: (req, res) => {
        const database = req.app.get('db');
        const {id} = req.params;
        database.delete_house_by_id({id})
            .then(() => {res.sendStatus(200)})
            .catch((err) => {console.log(err)});
    }
}