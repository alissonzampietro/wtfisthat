const Geocode = require('../modules/Geocode');

module.exports = (app) => {
    app.get('/geocode/addCoordinates', (req, res) => {
        let geocode = new Geocode();
        geocode.addCoordinates().then(data => {
            res.json(data);
        });
    })
}