const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${dir}&appid=5d66443672766dfb5a991074bb6fe90f`,
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' }
    });


    try {
        const resp = await instance.get();
        //console.log('holaaa', resp);
        const data = resp.data;
        const direccion = data.name;
        const lat = data.coord.lat;
        const lng = data.coord.lon;

        return {
            direccion,
            lat,
            lng
        }

    } catch (error) {
        // console.log(`No hay resultados para ${ dir }`);
        throw new Error(`No hay resultados para ${ dir }`);
    }


    // if (resp.data.Results.length === 0) {
    //     throw new Error(`No hay resultados para ${ dir }`);
    // }





}


module.exports = {
    getLugarLatLng
}