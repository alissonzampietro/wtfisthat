const axios = require('axios')

class MapRequest {

    constructor() {
        this.url = 'http://open.mapquestapi.com/geocoding/v1/address?key='+process.env.MAP_KEY;
    }

    async getCoordinates(street, city, postalCode) {
        let params = '&street='+street+'&city='+city+'&postalCode='+postalCode;
        let response;
        await axios.get(this.url+params).then(response => {
            response = response.data.results[0].locations[0].latLng
        })

        return response;
    }
}

module.exports = MapRequest;