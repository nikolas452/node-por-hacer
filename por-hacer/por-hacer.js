const fs = require('fs');



let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripccion) => {
    cargarDB();
    let porHacer = {
        descripccion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    let list = require('../db/data.json');
    return list;
}
const actualizar = (descripccion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripccion === descripccion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else return false;
}

const borrar = (descripccion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripccion !== descripccion);
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = { crear, getListado, actualizar, borrar }