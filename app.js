const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getLugarLatLng } = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(-12.04, -77.03)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima ${ coords.direccion } es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);