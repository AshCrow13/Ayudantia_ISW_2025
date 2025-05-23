//const express = require('express');
import express, { json } from 'express'; // Module syntax
import { pokemones } from './utils/pokemones.js'; // Importamos el array de pokemones
/*
    *C -> Create -> POST
    *R -> Read -> GET
    *U -> Update -> PUT
    *D -> Delete -> DELETE
*/
const app = express(); //Instantiate express

const port = 3000;// Define the port

app.use(json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('<h1>Pagina Principal</h1>');
});

app.post('/pokemon/create', (req, res) => {
    try{
        const pokemon = req.body;

        if (!pokemon) {
            res.status(400).json({
                message: "No se ha enviado ningun pokemon",
                data: null
            });
        }
        
        pokemones.push(pokemon);

        res.status(201).json({
            message: "Pokemon creado",
            data: pokemon
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al crear el pokemon",
            data: null
        });
    }            
});

app.get('/pokemon/all', (req, res) => {
    try {
        res.status(200).json({
            message: "Lista de pokemones",
            data: pokemones
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener la lista de pokemones",
            data: null
        });
    }

});

app.listen(port, () => {
    console.log(`Server en: http://localhost:${port}`);
});