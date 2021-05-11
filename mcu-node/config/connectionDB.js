//Requiero express
const express = require('express');
const config = require('./db');
let mysql = require ('mysql')

const connection = mysql.createConnection(config.db)
connection.connect((err, connection)=>{
    if(err){
        throw err;
    }
    console.log('conexion correcta al mcu')
});

module.exports = connection;