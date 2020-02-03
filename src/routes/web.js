const Geocode = require('../modules/Geocode');

module.exports = (app) => {
    app.get('/geocode', (req, res) => {
        let geocode = new Geocode();
        res.json(geocode.run());
    })
}