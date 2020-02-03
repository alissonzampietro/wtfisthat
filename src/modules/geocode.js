const map = require('./MapApi/MapQuest');
const Excel = require('exceljs');

class Geocode {
    constructor() {
        this.workbook = new Excel.Workbook();
        this.file = './src/modules/storage/geocode.xlsx';
        this.api = new map();
    }

    async addCoordinates() {
        let sheet = 'Página1';
        let listAddress = [];
        await this.workbook.xlsx.readFile(this.file).then(data => {
            let x = data.getWorksheet(sheet);
            x.eachRow((data, pos) => {
                let address = data.values[2];
                let postalCode = data.values[3];
                let city = data.values[5];
        
                if(pos !== 1 && address) {
                    this.api.getCoordinates(address, city, postalCode).then(data => {
                        let obj = {'address': address, 'postalcode': postalCode, 'city': city, 'coordinates': data};
                        listAddress.push(obj);
                    })
                    
                } 
            });
        })
        return listAddress
    }
}

module.exports = Geocode