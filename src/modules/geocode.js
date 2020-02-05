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
        return this.workbook.xlsx.readFile(this.file).then(data => {
            let x = data.getWorksheet(sheet);
            x.eachRow((data, pos) => {
                listAddress.push({
                    'address': data.values[2],
                    'postalCode': data.values[3],
                    'city': data.values[5]
                })
                
                if(pos !== 2) {
                    return;
                }

                if(pos !== 1) {
                    console.log('geocode.js: ','passou')
                    // .then(data => {
                    //     console.log('geocode.js: ',data)
                    //     let obj = {'address': address, 'postalcode': postalCode, 'city': city, 'coordinates': data};
                    //     listAddress.push(obj);
                    //     return listAddress
                    // })
                } 
            });
            listAddress.map(item => {

            });
            return this.api.getCoordinates(listAddress)
        }).then(data => {
            console.log('geocod: ',data);
            return data;
        });
    }
}

module.exports = Geocode